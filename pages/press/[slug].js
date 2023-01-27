import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Header, Footer, NavigationMenu } from "../../components";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import SinglePostTemplate from "../../components/SinglePostTemplate";

PressRelease.query = gql`
  ${NavigationMenu.fragments.entry}
  query PressReleaseQuery($id: ID!, $headerLocation: MenuLocationEnum) {
    pressRelease(id: $id, idType: SLUG) {
      id
      date
      dateGmt
      title
      content
      featuredImage {
        node {
          uri
          mediaItemUrl
        }
      }
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

PressRelease.variables = () => {
  return {
    first: appConfig.postsPerPage,
    after: "",
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export default function PressRelease() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading } = useQuery(PressRelease.query, {
    variables: { id: slug },
  });

  if (loading) {
    return <></>;
  }
  console.log(55, data);
  const { pressRelease } = data;
  console.log(pressRelease);

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>Press Releases</Banner>
      <Container size="sm">
        <SinglePostTemplate pressRelease={pressRelease} />
      </Container>

      <Footer />
    </>
  );
}

export async function getServerProps(context) {
  return getWordPressProps(context, {
    PressRelease,
    revalidate: 1,
  });
}
