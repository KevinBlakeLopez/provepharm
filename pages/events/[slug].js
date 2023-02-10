import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Header, Footer, NavigationMenu } from "../../components";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import SinglePostTemplate from "../../components/SinglePostTemplate";

Event.query = gql`
  ${NavigationMenu.fragments.entry}
  query EventQuery($id: ID!, $headerLocation: MenuLocationEnum) {
    event(id: $id, idType: SLUG) {
      id
      date
      dateGmt
      title
      content
      metaFields {
        eventDate
      }
      featuredImage {
        node {
          uri
          mediaItemUrl
          mediaDetails {
            width
            height
          }
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

Event.variables = () => {
  return {
    first: appConfig.postsPerPage,
    after: "",
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export default function Event() {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);

  const { data, loading } = useQuery(Event.query, {
    variables: { id: slug },
  });

  if (loading) {
    return <></>;
  }
  console.log(55, data);
  const { event } = data;
  console.log(event);

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      {/* <Banner>Press Releases</Banner> */}
      <Container size="xxs">
        <SinglePostTemplate data={event} />
      </Container>

      <Footer />
    </>
  );
}

export async function getServerProps(context) {
  return getWordPressProps(context, {
    Event,
    revalidate: 1,
  });
}
