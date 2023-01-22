import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Modal from "../../components/Modal";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

Product.query = gql`
  query ProductQuery($id: ID!) {
    product(id: $id, idType: SLUG) {
      title
      metaFields {
        amerisourcebergen2
        cardinal
        form
        genericname
        glutenFree
        gtin
        importantsafetyinformation
        mckessen
        ndc
        packsize
        prescribinginformation {
          url
        }
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

  const { data, loading } = useQuery(Product.query, {
    variables: { id: slug },
  });

  console.log(45, data);

  if (loading) {
    return <></>;
  }

  const { metaFields } = data.product;
  const product = metaFields;
  const product2 = data.product;

  return (
    <div>x
      <Link legacyBehavior href="/products">
        <a className=" text-blue-500">Products</a>
      </Link>
      {" > "}
      {product2.title}
    </div>
  );
}

export async function getServerProps(context) {
  return getWordPressProps(context, {
    Product,
    revalidate: 1,
  });
}
