import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";

import SEO from "../../components/SEO";
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
      <SEO title={data.page.seo.title} description={data.page.seo.metaDesc} />
      <Header />
      <Banner>Press Releases</Banner>
      <Container size="sm">
        <AllPostsTemplate data={data.pressReleases} route="press-releases" />
      </Container>
      <Footer />
    </>
  );
}

PressReleases.query = gql`
  query AllPressReleases {
    page(id: "/press-releases/", idType: URI) {
      seo {
        title
        metaDesc
      }
    }
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
            altText
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
    revalidate: 10,
  });
}
