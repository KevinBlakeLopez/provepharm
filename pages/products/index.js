import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import * as MENUS from "../../constants/menus";

import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import ComingSoon from "../../components/ComingSoon";
import { NavigationMenu } from "../../components";

export default function Products() {
  const { data, loading } = useQuery(Products.query);

  if (loading) {
    return <></>;
  }

  const categories = new Set();
  const groupedProducts = {};

  data.products.nodes.forEach((product) => {
    const category = product.categories.nodes[0]
      ? product.categories.nodes[0].name
      : "";
    if (!categories.has(category)) {
      categories.add(category);
      groupedProducts[category] = [];
    }

    groupedProducts[category].push(product);
  });

  return (
    <>
      <SEO title={data.page.seo.title} description={data.page.seo.metaDesc} />
      <Header menuItems={data.headerMenuItems} />
      <Banner>Our Products</Banner>
      <div className="mt-10 mx-4 md:mx-0">
        <div className="md:flex md:flex-col md:items-center">
          <div className="lg:w-[675px]">
            {/* upgrades - either make the ProductsFinder component work and/or add filter/sort functionality */}
            {/* <ProductsFinder /> */}
            {data ? (
              Object.keys(groupedProducts).map((category) => {
                return (
                  <div className="my-[80px]">
                    <h2 className="text-[1.7rem] tracking-wide mb-8">
                      {category}
                    </h2>
                    {groupedProducts[category].map((product) => (
                      <div className="md:flex md:justify-between mb-16">
                        <div className="text-center mb-12 md:mb-0">
                          {product.metaFields.productimage ? (
                            <Image
                              src={product.metaFields.productimage.mediaItemUrl}
                              width="130"
                              height="250"
                            />
                          ) : (
                            <ComingSoon />
                          )}
                        </div>
                        <div className="flex justify-evenly">
                          <ul className="mr-8 w-[210px]">
                            <li className="font-medium text-lg text-[#1e387d] ">
                              {product.metaFields.brandProduct
                                ? "Brand Name:"
                                : "Reference Listed Drug:"}
                            </li>
                            <li className="mb-4">
                              {product.metaFields.productvariationtitle}
                            </li>
                            <li className="font-medium text-lg text-[#1e387d]">
                              Form:
                            </li>
                            <li className="mb-4">{product.metaFields.form}</li>
                            <li className="font-medium text-lg text-[#1e387d]">
                              Strength:
                            </li>
                            <li className="mb-10 md:mb-4">
                              {product.metaFields.strength}
                            </li>
                            <li className="mt-5 bg-[#00a6e7] w-10/12 text-white">
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
                            <li className="font-medium text-lg text-[#1e387d]">
                              Pack Size:
                            </li>
                            <li className="mb-4">
                              {product.metaFields.packsize}
                            </li>
                            <li className="font-medium text-lg text-[#1e387d]">
                              NDC:
                            </li>
                            <li className="mb-4">{product.metaFields.ndc}</li>
                            <li className="font-medium text-lg text-[#1e387d]">
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
                    ))}
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

Products.query = gql`
  ${NavigationMenu.fragments.entry}
  query Products($headerLocation: MenuLocationEnum) {
    page(id: "/products/", idType: URI) {
      seo {
        title
        metaDesc
      }
    }
    products(first: 30) {
      nodes {
        title
        categories {
          nodes {
            name
          }
        }
        metaFields {
          brandProduct
          productvariationtitle
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
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Products.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Products,
    revalidate: 5,
  });
}
