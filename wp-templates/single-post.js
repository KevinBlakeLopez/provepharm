import { gql } from "@apollo/client";

import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import SinglePostTemplate from "../components/SinglePostTemplate";

export default function Post(props) {
  if (props.loading) {
    return <>Loading...</>;
  }
  console.log(props);
  const { post, seo } = props.data;

  return (
    <>
      <SEO title={seo.title} description={seo.metaDesc} />
      <Header />
      <Container size="xxs">
        <SinglePostTemplate data={post} />
      </Container>
      <Footer />
    </>
  );
}

Post.query = gql`
  query PostQuery($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
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

Post.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};
