import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/router";

Product.query = gql`
  query ProductQuery($slug: String) {
    productBy(slug: $slug) {
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
      name
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
      slug
    }
  }
`;

export default function Product() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading } = useQuery(Product.query, {
    variables: { slug: slug },
  });

  console.log(data);

  if (loading) {
    return <></>;
  }

  const { productBy } = data;
  const product = productBy;

  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <div className="my-20 w-[1000px]">
            <h2 className="text-[1.75rem] tracking-widest mb-8">
              {product.title ? product.title : null} (
              {product.productVariationTitle
                ? product.productVariationTitle
                : null}
              )
            </h2>
            <div className="flex justify-between">
              <section>
                <div className="flex justify-between">
                  <section className="border border-solid p-8 px-32">
                    {product.featuredImage ? (
                      <Image
                        src={product.featuredImage.node.sourceUrl}
                        width="80"
                        height="250"
                      />
                    ) : (
                      <div className="h-[300px] w-[100px] bg-slate-700"></div>
                    )}
                  </section>
                </div>
              </section>
              <ul className="w-[450px] mx-8">
                <li className="flex justify-between">
                  {product.productVariationTitle ? (
                    <>
                      <p className="font-medium text-lg mb-4 mr-20">
                        Product Variation Title
                      </p>
                      <p className="mb-4">{product.productVariationTitle}</p>
                    </>
                  ) : null}
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">
                    Reference Listed Drug
                  </p>
                  <p className="mb-4">{product.referenceListedDrug}</p>
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">NDC</p>
                  <p className="mb-4">{product.ndc}</p>
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">Strength</p>
                  <p className="mb-4">{product.strength}</p>
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">GTIN</p>
                  <p className="mb-4">{product.gtin}</p>
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">Form</p>
                  <p className="mb-4">{product.form}</p>
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">Pack Size</p>
                  <p className="mb-4">{product.packSize}</p>
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">
                    Therapeutic className
                  </p>
                  <p className="mb-4">{product.therapeuticClass}</p>
                </li>

                {product.therapeuticEquivalenceRating ? (
                  <li className="flex justify-between">
                    <p className="font-medium text-lg mb-4 mr-20">
                      Therapeutic Equivalence Rating
                    </p>
                    <p> {product.therapeuticEquivalenceRating}</p>
                  </li>
                ) : null}

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">Pack Size</p>
                  <p className="mb-4">{product.packSize}</p>
                </li>

                {/* <li>
                  <p className="font-medium text-lg mb-4 mr-20">
                    Therapeutic className
                  </p>
                  <p className="mb-4">{product.therapeuticClass}</p>
                </li>

                <li className="font-medium text-lg mb-4">GTIN</li>
                <li className="font-medium text-lg mb-4">Form</li>
                <li className="font-medium text-lg mb-4">Pack Size</li>
                <li className="font-medium text-lg mb-4">Therapeutic className</li>
                {product.therapeuticEquivalenceRating ? (
                  <li className="font-medium text-lg mb-4">
                    Therapeutic Equivalence Rating
                  </li>
                ) : null}
                <li className="font-medium text-lg mb-4">
                  Not made with natural rubber latex
                </li> */}
                {/* <li className="font-medium text-lg mb-4">Preservative Free</li>
                <li className="font-medium text-lg mb-4">Gluten Free</li>
                <li className="font-medium text-lg mb-8">Safety Data Sheet</li>
                <li className="mb-4">ITEM CODES</li>
                <li className="font-medium text-lg mb-4">Amerisource Bergen</li>
                <li className="font-medium text-lg mb-4">Cardinal</li>
                <li className="font-medium text-lg mb-4">McKessen</li>
              </ul>
              <ul className="mr-8 mt-1">
                {product.productVariationTitle ? (
                  <li className="">{product.productVariationTitle}</li>
                ) : null}
                <li className="mb-4">{product.referenceListedDrug}</li>
                <li className="mb-4 mt-5">{product.ndc}</li>
                <li className="mb-4 mt-5">{product.strength}</li>
                <li className="mb-4 mt-5">{product.gtin}</li>
                <li className="mb-4 mt-5">{product.form}</li>
                <li className="mb-4 mt-5">{product.packSize}</li>
                <li className="mb-4 mt-5">{product.therapeuticClass}</li> */}
                {/* {product.therapeuticEquivalenceRating ? (
                  <li className="mb-4 mt-1">
                    {product.therapeuticEquivalenceRating}
                  </li>
                ) : null}
                <li className="mt-5">{product.latex ? "yes" : "no"}</li>
                <li className="mt-4">
                  {product.preservativeFree ? "yes" : "no"}
                </li>
                <li className="mt-6">{product.glutenFree ? "yes" : "no"}</li>
                <li className="mt-5 underline underline-offset-2 text-blue-500">
                  {product.dataSheet ? (
                    <a href={product.dataSheet.mediaItemUrl}>Click Here PDF</a>
                  ) : (
                    <h3>Please add PDF here</h3>
                  )}
                </li> */}
                {/* <li className="mb-4">{product.amerisourceBergen}</li>
                <li className="mb-4">{product.cardinal}</li>
                <li className="mb-4">{product.mcKessen}</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerProps(context) {
  return getWordPressProps(context, {
    Product,
    revalidate: 1,
  });
}
