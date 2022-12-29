import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/router";

Product.query = gql`
  query NewQuery($slug: String!) {
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
      slug
    }
  }
`;

export default function Product() {
  const { data, loading } = useQuery(Product.query, {
    variables: { slug: slug },
  });
  const router = useRouter();
  const { slug } = router.query;

  if (loading) {
    return <></>;
  }

  const { productBy } = data;
  const product = productBy;

  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
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
                    <li className="font-medium text-lg mb-4">
                      Product Variation Title
                    </li>
                  ) : null}
                  <li className="font-medium text-lg mb-4">
                    Reference Listed Drug
                  </li>
                  <li className="font-medium text-lg mb-4">NDC</li>
                  <li className="font-medium text-lg mb-4">Strength</li>
                  <li className="font-medium text-lg mb-4">GTIN</li>
                  <li className="font-medium text-lg mb-4">Form</li>
                  <li className="font-medium text-lg mb-4">Pack Size</li>
                  <li className="font-medium text-lg mb-4">
                    Therapeutic Class
                  </li>
                  <li className="font-medium text-lg mb-4">
                    Therapeutic Equivalence Rating
                  </li>
                  <li className="font-medium text-lg mb-4">
                    Not made with natural rubber latex
                  </li>
                  <li className="font-medium text-lg mb-4">
                    Preservative Free
                  </li>
                  <li className="font-medium text-lg mb-4">Gluten Free</li>
                  <li className="font-medium text-lg mb-8">
                    Safety Data Sheet
                  </li>
                  <li className="mb-4">ITEM CODES</li>
                  <li className="font-medium text-lg mb-4">
                    Amerisource Bergen
                  </li>
                  <li className="font-medium text-lg mb-4">Cardinal</li>
                  <li className="font-medium text-lg mb-4">McKessen</li>
                </ul>
                <ul className="mr-8">
                  {product.productVariationTitle ? (
                    <li className="mb-4">{product.productVariationTitle}</li>
                  ) : null}
                  <li className="mb-4">{product.referenceListedDrug}</li>
                  <li className="mb-4">{product.ndc}</li>
                  <li className="mb-4">{product.strength}</li>
                  <li className="mb-4">{product.gtin}</li>
                  <li className="mb-4">{product.form}</li>
                  <li className="mb-4">{product.packSize}</li>
                  <li className="mb-4">{product.therapeuticClass}</li>
                  <li className="mb-4">
                    {product.therapeuticEquivalenceRating}
                  </li>
                  <li className="mb-4">{product.latex}</li>
                  <li className="mb-4">{product.preservativeFree}</li>
                  <li className="mb-4">{product.glutenFree}</li>
                  <li className="mb-12 underline underline-offset-2 text-blue-500">
                    {product.dataSheet ? (
                      <a href={product.dataSheet.mediaItemUrl}>
                        Click Here PDF
                      </a>
                    ) : (
                      <h3>Please add PDF here</h3>
                    )}
                  </li>
                  <li className="mb-4">{product.amerisourceBergen}</li>
                  <li className="mb-4">{product.cardinal}</li>
                  <li className="mb-4">{product.mcKessen}</li>
                </ul>
              </div>
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
