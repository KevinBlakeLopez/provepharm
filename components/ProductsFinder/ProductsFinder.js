import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const searchProducts = gql`
  query POSTS_SEARCH_QUERY($searchTerm: String!) {
    products(where: { search: $searchTerm }) {
      nodes {
        databaseId
        title
        excerpt
      }
    }
  }
`;

export default function ProductsFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, error, data } = useQuery(searchProducts, {
    variables: { searchTerm },
  });
  const products = data?.products.nodes;
  const haveProducts = Boolean(products?.length);

  function handleSearch(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.target));
    setSearchTerm(values["search-term"]);
  }

  return (
    <div className="products-search">
      <form method="post" className="" onSubmit={handleSearch}>
        <input
          type="text"
          name="search-term"
          className="w-full border-2 border-slate-900 p-2 font-medium"
          placeholder="Search for products..."
        />
        {/* <button type="submit">Search</button> */}
      </form>
      <div className="products-list">
        {loading ? (
          <p></p>
        ) : error ? (
          <p></p>
        ) : !haveProducts ? (
          <p>No products found.</p>
        ) : (
          products.map((post) => (
            <div key={post.databaseId} className="products-list-item">
              <h2>{post.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
