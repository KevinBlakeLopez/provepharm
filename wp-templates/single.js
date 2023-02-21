import { gql } from "@apollo/client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import SinglePostTemplate from "../components/SinglePostTemplate";

export default function Post(props) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const { post } = props.data;

  return (
    <>
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
    }
  }
`;

Post.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};
