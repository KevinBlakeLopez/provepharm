import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { getNextStaticProps, getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";

import Container from "../../components/Container";
import Banner from "../../components/Banner";
import ComingSoon from "../../components/ComingSoon";
import ISI from "../../components/ISI";

Product.variables = () => {
  id: "dihydroergotamine-mesylate-injection-usp-4";
};

Product.query = gql`
  query ProductQuery {
    $id: ID!
    product(id: $id, idType: SLUG) {
      title
      metaFields {
        amerisourcebergen2
        brandProduct
        cardinal
        closuresize
        containersize
        form
        genericname
        glutenFree
        gtin
        importantsafetyinformation
        mckesson
        morrisDickson
        ndc
        noNaturalRubber
        packsize
        prescribinginformation {
          url
        }
        preservativeFree
        productimage {
          mediaItemUrl
        }
        productvariationtitle
        safetysheet {
          mediaItemUrl
        }
        video
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

  const { data, loading, error } = useQuery(Product.query, {
    variables: { id: slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const { metaFields } = data.product;
  const product = metaFields;

  return (
    <>
      <Header />
      <Banner>Our Products</Banner>
      <Container size="lg">
        <div className="md:flex md:flex-col md:items-center mx-4 lg:mx-0 mt-14 pb-6">
          <div className="mb-20 mt-2">
            <h2 className="text-[1.7em] tracking-wide mb-8">
              <Link legacyBehavior href="/products">
                <a className=" text-blue-500">Products</a>
              </Link>
              {" > "}
              {product.brandProduct
                ? `${product.productvariationtitle} `
                : ""}{" "}
              {product.genericname}
            </h2>
            <div className="md:flex md:justify-between">
              <section>
                <div className="flex justify-between">
                  <section className="border border-solid p-8 px-32">
                    {product.productimage ? (
                      <Image
                        src={product.productimage.mediaItemUrl}
                        width="130"
                        height="250"
                      />
                    ) : (
                      <ComingSoon />
                    )}
                  </section>
                </div>
                <section className="mt-12">
                  Prescribing Information:{" "}
                  {product.prescribinginformation ? (
                    <Modal
                      text="Click here"
                      externalLink={product.prescribinginformation.url}
                      classes="text-prescribingAnchor underline"
                    />
                  ) : (
                    <p>Please add Link</p>
                  )}
                </section>

                {product.video ? (
                  <section>
                    <iframe
                      className="mt-16"
                      width="420"
                      height="315"
                      layout="responsive"
                      src={product.video}
                    ></iframe>
                  </section>
                ) : (
                  <div></div>
                )}
              </section>
              <ul className="lg:mx-8">
                <li className="flex justify-between">
                  {product.brandProduct ? (
                    <>
                      <p className="font-medium text-lg mb-4 mr-20">
                        Brand Name
                      </p>
                      <p className="mb-4 text-right">
                        {product.productvariationtitle}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-medium text-lg mb-4 mr-20">
                        Generic Name
                      </p>
                      <p className="mb-4 text-right">{product.genericname}</p>
                    </>
                  )}
                </li>
                <li className="flex justify-between">
                  {product.brandProduct ? (
                    <>
                      <p className="font-medium text-lg mb-4 mr-20">
                        Generic Name
                      </p>
                      <p className="mb-4 text-right">{product.genericname}</p>
                    </>
                  ) : (
                    <>
                      <p className="font-medium text-lg mb-4 mr-20">
                        Brand Name
                      </p>
                      <p className="mb-4 text-right">
                        {product.productvariationtitle}
                      </p>
                    </>
                  )}
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
                  <p className="font-medium text-lg mb-4 mr-20">Pack Size</p>
                  <p className="mb-4">{product.packsize}</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">Strength</p>
                  <p className="mb-4">{product.strength}</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">Form</p>
                  <p className="mb-4">{product.form}</p>
                </li>

                <br />

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4 mr-20">GTIN</p>
                  <p className="mb-4">{product.gtin}</p>
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
                    {product.noNaturalRubber
                      ? "Container Closure is made with natural rubber latex"
                      : "Container Closure is not made with natural rubber latex"}
                  </p>
                  {/* <p className="">{product.noNaturalRubber ? "no" : "yes"}</p> */}
                </li>
                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">Preservative Free</p>
                  <p className="">{product.preservativeFree ? "yes" : "no"}</p>
                </li>

                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">Gluten Free </p>
                  <p className="">{product.glutenFree ? "yes" : "no"}</p>
                </li>
                {product.closuresize ? (
                  <li className="flex justify-between">
                    <p className="font-medium text-lg mb-4">Closure Size </p>
                    <p className="">{product.closuresize}</p>
                  </li>
                ) : (
                  ""
                )}
                {product.containersize ? (
                  <li className="flex justify-between">
                    <p className="font-medium text-lg mb-4">Container Size </p>
                    <p className="">{product.containersize}</p>
                  </li>
                ) : (
                  ""
                )}
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
                  <p className="font-medium text-lg mb-4">McKesson</p>
                  <p className="mb-4">{product.mckesson}</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-medium text-lg mb-4">Morris & Dickson</p>
                  <p className="mb-4">{product.morrisDickson}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <ISI importantsafetyinformation={product.importantsafetyinformation} />
      <Footer disclaimer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "dihydroergotamine-mesylate-injection-usp-4" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Product,
    revalidate: 1,
  });
}
