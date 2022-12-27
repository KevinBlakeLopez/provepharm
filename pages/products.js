import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

export default function Products() {
  const { data } = useQuery(Products.query);
  console.log(data);
  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          {data ? (
            data.products.nodes.map((product) => {
              return (
                <div className="my-8">
                  <h2 className="text-4xl tracking-widest mb-8">
                    {product.title}
                  </h2>
                  <div className="flex justify-between max-w-lg">
                    <Image
                      src={product.featuredImage.node.sourceUrl}
                      width="100"
                      height="300"
                    />
                    <div className="flex">
                      <ul className="mr-8">
                        <li className="font-bold">Reference Listed Drug:</li>
                        <li className="mb-4">{product.referenceListedDrug}</li>
                        <li className="font-bold">Form:</li>
                        <li className="mb-4">{product.form}</li>
                        <li className="font-bold">Strength:</li>
                        <li className="mb-4">{product.strength}</li>
                      </ul>
                      <ul>
                        <li className="font-bold">Pack Size:</li>
                        <li className="mb-4">{product.packSize}</li>
                        <li className="font-bold">NDC:</li>
                        <li className="mb-4">{product.ndc}</li>
                        <li className="font-bold">Safety Data Sheet:</li>
                        <li className="mb-4 underline underline-offset-2 text-blue-500">
                          <a href={product.dataSheet.mediaItemUrl}>
                            Click Here PDF
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

Products.query = gql`
  query NewQuery {
    products {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        referenceListedDrug
        form
        strength
        packSize
        ndc
        dataSheet {
          mediaItemUrl
        }
      }
    }
  }
`;

export async function getServerProps(context) {
  return getWordPressProps(context, {
    Products,
    revalidate: 5,
  });
}
