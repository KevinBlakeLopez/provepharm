import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import AllPostsTemplate from "../../components/AllPostsTemplate";

export default function PressReleases() {
  const { loading, error, data } = useQuery(PressReleases.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Header />
      <Banner>Press Releases</Banner>
      <Container size="sm">
        <AllPostsTemplate data={data.pressReleases} route="press" />
      </Container>
      <Footer />
    </>
  );
}

PressReleases.query = gql`
  query AllPressReleases {
    pressReleases(first: 200) {
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
  }
`;

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: PressReleases,
    revalidate: 1,
  });
}
