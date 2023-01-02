import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Products from "../products";

export default function Posts() {
  const { data } = useQuery(Posts.query);
  console.log(data.posts.nodes);
  return (
    <>
      <div className="flex justify-center mt-16 ">
        <div className="w-[800px]">
          <h1 className="text-2xl">All Posts</h1>
          {data.posts
            ? data.posts.nodes.map((post) => {
                console.log(post);
                return (
                  <>
                    <h2 className="text-2xl">{post.title}</h2>
                    <p>{post.excerpt}</p>
                  </>
                );
              })
            : null}
          <div>
            <h2></h2>
            <h3></h3>
          </div>
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
        excerpt(format: RENDERED)
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
