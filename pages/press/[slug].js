import { getWordPressProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Modal from "../../components/Modal";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Header, Footer, NavigationMenu } from "../../components";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import ISI from "../../components/ISI";

PressRelease.query = gql`
  ${NavigationMenu.fragments.entry}
  query PressReleaseQuery($id: ID!, $headerLocation: MenuLocationEnum) {
    pressRelease(id: $id, idType: SLUG) {
      id
      date
      dateGmt
      title
      content
      featuredImage {
        node {
          uri
          mediaItemUrl
        }
      }
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

PressRelease.variables = () => {
  return {
    first: appConfig.postsPerPage,
    after: "",
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export default function PressRelease() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading } = useQuery(PressRelease.query, {
    variables: { id: slug },
  });

  if (loading) {
    return <></>;
  }
  console.log(55, data);
  const { pressRelease } = data;
  console.log(pressRelease);

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>Press Releases</Banner>
      <Container size="sm">
        <h2 className="text-3xl md:text-5xl mb-16">{pressRelease.title}</h2>
        <figure className="mb-16">
          <Image
            src={pressRelease.featuredImage.node.mediaItemUrl}
            width="1000"
            height="900"
          />
        </figure>
        <section className="text-xl">
          <h5 className="mb-8">
            {new Date(pressRelease.date).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </h5>
          <div
            className={"post-content"}
            dangerouslySetInnerHTML={{ __html: pressRelease.content }}
          ></div>
        </section>
      </Container>

      <Footer />
    </>
  );
}

export async function getServerProps(context) {
  return getWordPressProps(context, {
    PressRelease,
    revalidate: 1,
  });
}
