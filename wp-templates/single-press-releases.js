import { gql } from "@apollo/client";

import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import SinglePostTemplate from "../components/SinglePostTemplate";

export default function PressRelease(props) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const { pressRelease } = props.data;
  if (!pressRelease.seo.metaDesc) {
    return (
      <>
        <Header />
        <Container size="xxs">
          <SinglePostTemplate data={pressRelease} />
        </Container>
        <Footer />
      </>
    );
  }
  return (
    <>
      <SEO
        title={pressRelease.seo.title}
        description={pressRelease.seo.metaDesc}
      />
      <Header />
      <Container size="xxs">
        <SinglePostTemplate data={pressRelease} />
      </Container>
      <Footer />
    </>
  );
}

PressRelease.query = gql`
  query PressReleaseQuery($databaseId: ID!, $asPreview: Boolean = false) {
    pressRelease(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      id
      date
      dateGmt
      title
      content
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
      seo {
        metaDesc
        title
      }
    }
  }
`;

PressRelease.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};
