import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

export default function Product() {
  const { data } = useQuery(Product.query);
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
                        {product.productVariationTitle ? (
                          <>
                            <li className="font-medium text-lg">
                              Product Variation Title
                            </li>
                            <li className="mb-4">
                              {product.productVariationTitle}
                            </li>
                          </>
                        ) : null}
                        <li className="font-medium text-lg">
                          Reference Listed Drug
                        </li>

                        <li className="font-medium text-lg">NDC</li>

                        <li className="font-medium text-lg">Strength</li>

                        <li className="font-medium text-lg">GTIN</li>
                        <li className="mb-4">{product.gtin}</li>
                        <li className="font-medium text-lg">Form</li>
                        <li className="mb-4">{product.form}</li>
                        <li className="font-medium text-lg">Pack Size</li>
                        <li className="mb-4">{product.packSize}</li>
                        <li className="font-medium text-lg">
                          Therapeutic Class
                        </li>
                        <li className="mb-4">{product.therapeuticClass}</li>
                        <li className="font-medium text-lg">
                          Therapeutic Equivalence Rating
                        </li>
                        <li className="mb-4">
                          {product.therapeuticEquivalenceRating}
                        </li>
                        <li className="font-medium text-lg">
                          Not made with natural rubber latex
                        </li>
                        <li className="mb-4">{product.latex}</li>
                        <li className="font-medium text-lg">
                          Preservative Free
                        </li>
                        <li className="mb-4">{product.preservativeFree}</li>
                        <li className="font-medium text-lg">Gluten Free</li>
                        <li className="mb-4">{product.glutenFree}</li>
                        <li className="font-medium text-lg">
                          Safety Data Sheet
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
                        <li className="mt-12">ITEM CODES</li>
                        <li className="font-medium text-lg">
                          Amerisource Bergen
                        </li>
                        <li className="mb-4">{product.amerisourceBergen}</li>
                        <li className="font-medium text-lg">Cardinal</li>
                        <li className="mb-4">{product.cardinal}</li>
                        <li className="font-medium text-lg">McKessen</li>
                        <li className="mb-4">{product.mcKessen}</li>
                      </ul>
                      <ul className="mr-8">
                        <li className="mb-4">{product.referenceListedDrug}</li>
                        <li className="mb-4">{product.ndc}</li>
                        <li className="mb-4">{product.strength}</li>
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

Product.query = gql`
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
        genericName
        productVariationTitle
        gtin
        therapeuticClass
        therapeuticEquivalenceRating
        latex
        preservativeFree
        glutenFree
        amerisourceBergen
        cardinal
        mcKessen
      }
    }
  }
`;

export async function getServerProps(context) {
  return getWordPressProps(context, {
    Product,
    revalidate: 1,
  });
}
