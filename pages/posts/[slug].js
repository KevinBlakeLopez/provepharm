import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Header, Footer, NavigationMenu } from "../../components";
import Container from "../../components/Container";
import SinglePostTemplate from "../../components/SinglePostTemplate";

Post.query = gql`
  ${NavigationMenu.fragments.entry}
  query PostQuery($id: ID!, $headerLocation: MenuLocationEnum) {
    post(id: $id, idType: SLUG) {
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

Post.variables = () => {
  return {
    first: appConfig.postsPerPage,
    after: "",
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading } = useQuery(Post.query, {
    variables: { id: slug },
  });

  if (loading) {
    return <></>;
  }

  const { post } = data;

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      {/* <Banner>Press Releases</Banner> */}
      <Container size="xs">
        <SinglePostTemplate data={post} />
      </Container>

      <Footer />
    </>
  );
}

export async function getServerProps(context) {
  return getWordPressProps(context, {
    Post,
    revalidate: 1,
  });
}
