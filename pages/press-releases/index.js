import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import { Header, NavigationMenu } from "../../components";
import * as MENUS from "../../constants/menus";
import Image from "next/image";
// import Link from "next/link";

export default function PressReleases() {
  const { loading, error, data } = useQuery(PressReleases.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>Press Releases</Banner>
      <Container size="sm">
        {data.pressReleases.nodes.map(
          ({ id, title, excerpt, date, featuredImage }) => (
            <div className="md:flex md:items-center mb-10" key={id}>
              {featuredImage ? (
                <div className="max-w-[400px]">
                  <Image
                    width="600"
                    height="600"
                    src={featuredImage.node.mediaItemUrl}
                  />
                </div>
              ) : null}
              <section>
                <p className="mb-2 text-sm">
                  {new Date(date).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h2 className="text-xl mb-3 font-semibold">{title}</h2>
                <div
                  className="mb-2"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
                <p className="mb-10 text-blue-500 underline cursor-pointer">
                  Read more
                </p>
                <div class="w-full h-[1px] bg-[#ebebeb]"></div>
              </section>
            </div>
          )
        )}
      </Container>
    </>
  );
}

PressReleases.query = gql`
  ${NavigationMenu.fragments.entry}
  query AllPressReleases($headerLocation: MenuLocationEnum) {
    pressReleases(first: 200) {
      nodes {
        slug
        id
        title
        excerpt
        date
        dateGmt
        featuredImage {
          node {
            mediaItemUrl
          }
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

PressReleases.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: PressReleases,
    revalidate: 1,
  });
}
