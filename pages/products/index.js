import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import ProductsFinder from "../../components/ProductsFinder/ProductsFinder";
import Banner from "../../components/Banner";
import { Header, Footer, NavigationMenu } from "../../components";
import * as MENUS from "../../constants/menus";

export default function Products() {
  const { data, loading } = useQuery(Products.query);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>Our Products</Banner>
      <div className="mt-10 mx-4 md:mx-0">
        <div className="md:flex md:flex-col md:items-center">
          <div className="lg:w-[35%]">
            <ProductsFinder />
            {data ? (
              data.products.nodes.map((product) => {
                return (
                  <div className="my-[80px]">
                    <h2 className="text-[1.7rem] tracking-wide mb-8">
                      {product.metaFields.genericname}
                    </h2>
                    <div className="md:flex md:justify-between">
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
                        <ul className="mr-8 w-[210px]">
                          <li className="font-medium text-lg text-sky-500 ">
                            {product.metaFields.brandProduct
                              ? "Brand Name:"
                              : "Reference Listed Drug:"}
                          </li>
                          <li className="mb-4">
                            {product.metaFields.productvariationtitle}
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
      <Footer />
    </>
  );
}

Products.query = gql`
  ${NavigationMenu.fragments.entry}
  query Products($headerLocation: MenuLocationEnum) {
    products(first: 30) {
      nodes {
        title
        metaFields {
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
          brandProduct
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
    revalidate: 1,
  });
}
