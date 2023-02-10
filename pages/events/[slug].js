import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SinglePostTemplate from "../../components/SinglePostTemplate";

export default function Event() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading } = useQuery(Event.query, {
    variables: { id: slug },
  });

  if (loading) {
    return <></>;
  }

  console.log(22, data);
  const { event } = data;

  return (
    <>
      <Header />
      <Container size="xxs">
        <SinglePostTemplate data={event} />
      </Container>
      <Footer />
    </>
  );
}

Event.query = gql`
  query EventQuery($id: ID!) {
    event(id: $id, idType: SLUG) {
      id
      date
      dateGmt
      title
      content
      events {
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
  }
`;

Event.variables = () => {
  return {
    first: appConfig.postsPerPage,
    after: "",
  };
};

export async function getServerProps(context) {
  return getWordPressProps(context, {
    Event,
    revalidate: 1,
  });
}
