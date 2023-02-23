import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";

import SEO from "../../components/SEO";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import AllPostsTemplate from "../../components/AllPostsTemplate";

export default function Posts() {
  const { data, loading, error } = useQuery(Posts.query);

  if (loading) {
    return <></>;
  }

  if (error) return <p>Error</p>;

  return (
    <>
      <SEO title={data.page.seo.title} description={data.page.seo.metaDesc} />
      <Header />
      <Banner>News</Banner>
      <Container size="sm">
        <h1 className="text-6xl">TEST for Vercel Backup</h1>
        <AllPostsTemplate data={data.posts} route="news" />
      </Container>
      <Footer />
    </>
  );
}

Posts.query = gql`
  query Posts {
    page(id: "/news/", idType: URI) {
      seo {
        title
        metaDesc
      }
    }
    posts(first: 10) {
      nodes {
        date
        title
        excerpt
        slug
        featuredImage {
          node {
            id
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
    Page: Posts,
    revalidate: 10,
  });
}
