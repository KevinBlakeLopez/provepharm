import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import SinglePostTemplate from "../../components/SinglePostTemplate";

export default function PressRelease() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading } = useQuery(PressRelease.query, {
    variables: { id: slug },
  });

  if (loading) {
    return <></>;
  }

  const { pressRelease } = data;

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

PressRelease.query = gql`
  query PressReleaseQuery($id: ID!) {
    pressRelease(id: $id, idType: SLUG) {
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

PressRelease.variables = () => {
  return {
    first: appConfig.postsPerPage,
    after: "",
  };
};

export async function getServerProps(context) {
  return getWordPressProps(context, {
    PressRelease,
    revalidate: 1,
  });
}
