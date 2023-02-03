import { getNextStaticProps } from "@faustwp/core";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import { gql, useQuery } from "@apollo/client";
import Banner from "../../components/Banner";
import AllPostsTemplate from "../../components/AllPostsTemplate";
import { Header, Footer, NavigationMenu } from "../../components";
import * as MENUS from "../../constants/menus";

export default function Posts() {
  const { data, loading, error } = useQuery(Posts.query);

  if (loading) {
    return <></>;
  }

  if (error) return <p>Error</p>;

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>News</Banner>
      <Container size="sm">
        <AllPostsTemplate data={data.posts} route="news" />
      </Container>
      <Footer />
    </>
  );
}

Posts.query = gql`
  ${NavigationMenu.fragments.entry}
  query Posts($headerLocation: MenuLocationEnum) {
    posts(first: 10) {
      nodes {
        date
        title
        excerpt
        slug
        featuredImage {
          node {
            id
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

Posts.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Posts,
    revalidate: 1,
  });
}
