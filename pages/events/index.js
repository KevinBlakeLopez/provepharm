import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import AllPostsTemplate from "../../components/AllPostsTemplate";
import { Header, Footer, NavigationMenu } from "../../components";
import * as MENUS from "../../constants/menus";
import Image from "next/image";
import Link from "next/link";

export default function Events() {
  const { loading, error, data } = useQuery(Events.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data);

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>Events</Banner>
      <Container size="sm">
        <AllPostsTemplate data={data.events} route="events" />
      </Container>
      <Footer />
    </>
  );
}

Events.query = gql`
  ${NavigationMenu.fragments.entry}
  query Events($headerLocation: MenuLocationEnum) {
    events(first: 200) {
      nodes {
        slug
        id
        title
        excerpt
        date
        dateGmt
        featuredImage {
          node {
            mediaItemUrl
            mediaDetails {
            width
            height
          }
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

Events.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Events,
    revalidate: 1,
  });
}
