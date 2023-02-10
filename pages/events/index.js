import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";

import Container from "../../components/Container";
import Banner from "../../components/Banner";
import AllPostsTemplate from "../../components/AllPostsTemplate";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Events() {
  const { loading, error, data } = useQuery(Events.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Header />
      <Banner>Events</Banner>
      <Container size="sm">
        <AllPostsTemplate data={data.events} route="events" />
      </Container>
      <Footer />
    </>
  );
}

Events.query = gql`
  query Events {
    events(first: 200) {
      nodes {
        slug
        id
        title
        excerpt
        date
        dateGmt
        events {
          eventDate
        }
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
  }
`;

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Events,
    revalidate: 1,
  });
}
