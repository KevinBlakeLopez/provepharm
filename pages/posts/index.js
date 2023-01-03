import { getNextStaticProps } from "@faustwp/core";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";

export default function Posts() {
  const { data } = useQuery(Posts.query);

  return (
    <>
      <div className="flex justify-center mt-16 ">
        <div className="w-[800px]">
          <h2 className="text-3xl font-medium">Provepharm News</h2>
          {data.posts
            ? data.posts.nodes.map((post) => {
                console.log(post);
                return (
                  <div className="my-10">
                    <div className="flex items-center mb-10">
                      {post.featuredImage ? (
                        <div className="w-[400px]">
                          <Image
                            width="800"
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
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

Posts.query = gql`
  query Posts {
    posts(first: 10) {
      nodes {
        date
        title
        excerpt
        featuredImage {
          node {
            id
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Posts,
    revalidate: 1,
  });
}
