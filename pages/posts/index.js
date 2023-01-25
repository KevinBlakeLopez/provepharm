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
        {data.posts.nodes.map(({ id, title, excerpt, date, featuredImage }) => (
          <div className="md:flex md:items-center mb-10" key={id}>
            {featuredImage ? (
              <div className="max-w-[278px] max-h-[278px] mr-16">
                <Image
                  width="600"
                  height="600"
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
                Read more
              </p>
              <div class="w-full h-[1px] bg-[#ebebeb]"></div>
            </section>
          </div>
        ))}
        <div className="h-36" />
      </Container>
      {/* <div className="flex justify-center mt-16 ">
        <div className="w-[1000px]">
          {data.posts
            ? data.posts.nodes.map((post) => {
                console.log(post);
                return (
                  <Link href={`/${encodeURIComponent(post.slug)}`}>
                    <div className="my-10 cursor-pointer">
                      <div className="flex items-center mb-10">
                        {post.featuredImage ? (
                          <div className="max-w-[400px]">
                            <Image
                              width="1200"
                              height="600"
                              src={post.featuredImage.node.mediaItemUrl}
                            />
                          </div>
                        ) : null}
                        <div className="my-8 ml-6">
                          <h2 className="text-2xl mb-4 font-medium">
                            {post.title}
                          </h2>
                          <div
                            className="mb-4 text-lg"
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                          />
                          <p className="mb-8">
                            {new Date(post.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-[1px] bg-gray-300"></div>
                    </div>
                  </Link>
                );
              })
            : null}
        </div>
      </div> */}
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
