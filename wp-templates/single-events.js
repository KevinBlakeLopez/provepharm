import { gql } from "@apollo/client";

import SEO from "../components/SEO";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SinglePostTemplate from "../components/SinglePostTemplate";

export default function Event(props) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const { event } = props.data;

  if (!event.seo.metaDesc) {
    return (
      <>
        <Header />
        <Container size="xxs">
          <SinglePostTemplate data={event} />
        </Container>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <SEO title={event.seo.title} description={event.seo.metaDesc} />
        <Header />
        <Container size="xxs">
          <SinglePostTemplate data={event} />
        </Container>
        <Footer />
      </>
    );
  }
}

Event.query = gql`
  query EventQuery($databaseId: ID!, $asPreview: Boolean = false) {
    event(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      seo {
        metaDesc
        title
      }
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

Event.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};
