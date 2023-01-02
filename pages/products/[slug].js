import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

Product.query = gql`
  query ProductQuery($id: ID!) {
    product2(id: $id, idType: SLUG) {
      metaFields {
        amerisourcebergen2
        cardinal
        form
        genericname
        glutenFree
        gtin
        mckessen
        ndc
        packsize
        preservativeFree
        productimage {
          mediaItemUrl
        }
        productvariationtitle
        referencelisteddrug
        rubberFree
        safetysheet {
          mediaItemUrl
        }
        strength
        therapeuticclass
        therapeuticequivalencerating
      }
    }
  }
`;

export default function Product() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading } = useQuery(Product.query, {
    variables: { id: slug },
  });

  console.log(45, data);

  if (loading) {
    return <></>;
  }

  const { metaFields } = data.product2;
  const product = metaFields;

  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <div className="my-20 w-[1000px]">
            <Link legacyBehavior href="/products">
              <a className="text-[1.3rem] underline underline-offset-2 text-blue-500">
                {" "}
                All Products
              </a>
            </Link>
            <h2 className="text-[1.7rem] tracking-wide mb-8">
              {product.genericname ? product.genericname : null}
              {product.productvariationtitle
                ? " ( " + product.productvariationtitle + " ) "
                : null}
            </h2>
            <div className="flex justify-between">
              <section>
                <div className="flex justify-between">
                  <section className="border border-solid p-8 px-32">
                    {product.productimage ? (
                      <Image
                        src={product.productimage.mediaItemUrl}
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
                  {product.productvariationtitle ? (
                    <>
                      <p className="font-medium text-lg mb-4 mr-20">
                        Product Variation Title
                      </p>
                      <p className="mb-4">{product.productvariationtitle}</p>
                    </>
                  ) : null}
                </li>
                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">
                    Reference Listed Drug
                  </p>
                  <p className="mb-4">{product.referencelisteddrug}</p>
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">NDC</p>
                  <p className="mb-4">{product.ndc}</p>
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">Safety Data Sheet </p>
                  <p className="underline underline-offset-2 text-blue-500">
                    {product.safetysheet ? (
                      <a href={product.safetysheet.mediaItemUrl}>
                        Click Here PDF
                      </a>
                    ) : (
                      <h3>Please add PDF here</h3>
                    )}
                  </p>
                </li>

                <br />
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
                <br />
                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">Pack Size</p>
                  <p className="mb-4">{product.packsize}</p>
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">
                    Therapeutic Class
                  </p>
                  <p className="mb-4">{product.therapeuticclass}</p>
                </li>

                {product.therapeuticequivalencerating ? (
                  <li className="flex justify-between">
                    <p className="font-medium text-lg mb-4 mr-20">
                      Therapeutic Equivalence Rating
                    </p>
                    <p> {product.therapeuticequivalencerating}</p>
                  </li>
                ) : null}
                <br />
                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">
                    Not made with natural rubber latex
                  </p>
                  <p className="">{product.latex ? "yes" : "no"}</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">Preservative Free</p>
                  <p className="">{product.preservativeFree ? "yes" : "no"}</p>
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">Gluten Free </p>
                  <p className="">{product.glutenFree ? "yes" : "no"}</p>
                </li>
                <br />
                <li className="flex justify-between">
                  <p className="mb-4">ITEM CODES</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">Amerisource Bergen</p>
                  <p className="mb-4">{product.amerisourcebergen2}</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">Cardinal</p>
                  <p className="mb-4">{product.cardinal}</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">McKessen</p>
                  <p className="mb-4">{product.mckessen}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerProps(context) {
  return getNextStaticProps(context, {
    Product,
    revalidate: 1,
  });
}
