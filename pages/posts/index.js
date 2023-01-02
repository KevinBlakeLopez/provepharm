import { getWordPressProps } from "@faustwp/core";
import {gql} from '@apollo/client';
import Products from "../products";


export default function posts() {
  return (
    <>
      <div className="flex justify-center mt-16 ">
        <div className="w-[800px]">
          <h1 className="text-2xl">All Posts</h1>
          <div>
            <h2></h2>
            <h3></h3>
          </div>
        </div>
      </div>
    </>
  );
}

Products.query = gql`
query AllPosts() {
    
}
`
