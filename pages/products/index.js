import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import ProductsFinder from "../../components/ProductsFinder/ProductsFinder";

export default function Products() {
  const { data } = useQuery(Products.query);
  console.log(31, data);
  console.log(data ? data.products.nodes[0].metaFields.form : null);
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-col items-center">
          <div className="w-2/5">
            <ProductsFinder />
            {data ? (
              data.products.nodes.map((product) => {
                return (
                  <div className="my-[80px]">
                    <h2 className="text-[1.7rem] tracking-wide mb-8">
                      {product.metaFields.genericname}
                    </h2>
                    <div className="flex justify-between">
                      {product.metaFields.productimage ? (
                        <Image
                          src={product.metaFields.productimage.mediaItemUrl}
                          width="130"
                          height="250"
                        />
                      ) : (
                        <div className="h-[300px] w-[100px] bg-slate-700"></div>
                      )}
                      <div className="flex">
                        <ul className="mr-8">
                          <li className="font-medium text-lg text-sky-500 ">
                            Reference Listed Drug:
                          </li>
                          <li className="mb-4">
                            {product.metaFields.referencelisteddrug
                              ? "yes"
                              : "no"}
                          </li>
                          <li className="font-medium text-lg text-sky-500">
                            Form:
                          </li>
                          <li className="mb-4">{product.metaFields.form}</li>
                          <li className="font-medium text-lg text-sky-500">
                            Strength:
                          </li>
                          <li className="mb-4">
                            {product.metaFields.strength}
                          </li>
                          <li className="mt-5 bg-sky-700 w-10/12 text-white">
                            <div className="py-2 px-2 text-center">
                              <Link
                                href={`/products/${encodeURIComponent(
                                  product.slug
                                )}`}
                              >
                                View Product
                              </Link>
                            </div>
                          </li>
                        </ul>
                        <ul>
                          <li className="font-medium text-lg text-sky-500">
                            Pack Size:
                          </li>
                          <li className="mb-4">
                            {product.metaFields.packsize}
                          </li>
                          <li className="font-medium text-lg text-sky-500">
                            NDC:
                          </li>
                          <li className="mb-4">{product.metaFields.ndc}</li>
                          <li className="font-medium text-lg text-sky-500">
                            Safety Data Sheet:
                          </li>
                          <li className="mb-4 underline underline-offset-2 text-blue-500">
                            {product.metaFields.safetysheet ? (
                              <a
                                href={
                                  product.metaFields.safetysheet.mediaItemUrl
                                }
                              >
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
    </>
  );
}

Products.query = gql`
  query Products {
    products {
      nodes {
        title
        metaFields {
          referencelisteddrug
          genericname
          form
          strength
          packsize
          ndc
          safetysheet {
            mediaItemUrl
          }
          productimage {
            mediaItemUrl
          }
        }
        slug
      }
    }
  }
`;

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Products,
    revalidate: 1,
  });
}
