import { getNextStaticProps } from "@faustwp/core";
import Image from "next/image";
import Link from "next/link";
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
      <div className="flex justify-center mt-16 ">
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
      </div>
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
