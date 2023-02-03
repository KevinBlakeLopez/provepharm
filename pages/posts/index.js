import { getNextStaticProps } from "@faustwp/core";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import { gql, useQuery } from "@apollo/client";
import Banner from "../../components/Banner";
import { Header, Footer, NavigationMenu } from "../../components";
import * as MENUS from "../../constants/menus";
export default function Posts() {
  const { data, loading } = useQuery(Posts.query);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>News</Banner>
      <Container size="sm">
        {data.posts.nodes.map(({ id, title, excerpt, date, featuredImage, slug }) => (
          <div className="md:flex md:items-center mb-10" key={id}>
            {featuredImage ? (
              <div className="max-w-[278px] max-h-[278px] mr-16">
                <Image
                  width={featuredImage.node.mediaDetails.width}
                  height={featuredImage.node.mediaDetails.height}
                  src={featuredImage.node.mediaItemUrl}
                />
              </div>
            ) : null}
            <section>
              <p className="mb-2 text-sm">
                {new Date(date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="text-xl mb-3 font-semibold">{title}</h2>
              <div
                className="mb-2"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              />
              <p className="mb-10 text-blue-500 underline cursor-pointer">
                <Link href={`/posts/${encodeURIComponent(slug)}`}>
                  Read more
                </Link>
              </p>
              <div class="w-full h-[1px] bg-[#ebebeb]"></div>
            </section>
          </div>
        ))}
        <div className="h-36" />
      </Container>
      <Footer />
    </>
  );
}

Posts.query = gql`
  ${NavigationMenu.fragments.entry}
  query Posts($headerLocation: MenuLocationEnum) {
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
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Posts.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Posts,
    revalidate: 1,
  });
}
