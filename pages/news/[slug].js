import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import SinglePostTemplate from "../../components/SinglePostTemplate";

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
      <Header />
      <Container size="xxs">
        <SinglePostTemplate data={post} />
      </Container>
      <Footer />
    </>
  );
}

Post.query = gql`
  query PostQuery($id: ID!) {
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
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;

Post.variables = () => {
  return {
    first: appConfig.postsPerPage,
    after: "",
  };
};

export async function getServerProps(context) {
  return getWordPressProps(context, {
    Post,
    revalidate: 1,
  });
}
