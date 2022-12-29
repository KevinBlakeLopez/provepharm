import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

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
                <div className="my-20 w-[600px]">
                  <h2 className="text-[1.75rem] tracking-widest mb-8">
                    {product.title ? product.title : null}
                  </h2>
                  <div className="flex justify-between">
                    {product.featuredImage ? (
                      <Image
                        src={product.featuredImage.node.sourceUrl}
                        width="80"
                        height="250"
                      />
                    ) : (
                      <div className="h-[300px] w-[100px] bg-slate-700"></div>
                    )}
                    <div className="flex">
                      <ul className="mr-8">
                        <li className="font-medium text-lg">
                          Reference Listed Drug:
                        </li>
                        <li className="mb-4">{product.referenceListedDrug}</li>
                        <li className="font-medium text-lg">Form:</li>
                        <li className="mb-4">{product.form}</li>
                        <li className="font-medium text-lg">Strength:</li>
                        <li className="mb-4">{product.strength}</li>
                        <li className="mt-2 bg-blue-500 w-full py-2 px-12 text-white">
                          <Link
                            href={`/product/${encodeURIComponent(
                              product.slug
                            )}`}
                          >
                            View Product
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li className="font-medium text-lg">Pack Size:</li>
                        <li className="mb-4">{product.packSize}</li>
                        <li className="font-medium text-lg">NDC:</li>
                        <li className="mb-4">{product.ndc}</li>
                        <li className="font-medium text-lg">
                          Safety Data Sheet:
                        </li>
                        <li className="mb-4 underline underline-offset-2 text-blue-500">
                          {product.dataSheet ? (
                            <a href={product.dataSheet.mediaItemUrl}>
                              Click Here PDF
                            </a>
                          ) : (
                            <h3>Please add PDF here</h3>
                          )}
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
        slug
      }
    }
  }
`;

export async function getServerProps(context) {
  return getWordPressProps(context, {
    Products,
    revalidate: 1,
  });
}
