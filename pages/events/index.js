import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import { Header, Footer, NavigationMenu } from "../../components";
import * as MENUS from "../../constants/menus";
import Image from "next/image";
import Link from "next/link";

export default function Events() {
  const { loading, error, data } = useQuery(Events.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data);

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>Events</Banner>
      <Container size="sm">
        {data.events.nodes.map(
          ({ id, title, excerpt, date, featuredImage, slug }) => (
            <div className="md:flex md:items-center mb-10" key={id}>
              {featuredImage ? (
                <div className="max-w-[386px] mr-48">
                  <Image
                    width="2800"
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
                  <Link href={`/events/${encodeURIComponent(slug)}`}>
                    Read more
                  </Link>
                </p>
                <div class="w-full h-[1px] bg-[#ebebeb]"></div>
              </section>
            </div>
          )
        )}
      </Container>
      <Footer />
    </>
  );
}

Events.query = gql`
  ${NavigationMenu.fragments.entry}
  query Events($headerLocation: MenuLocationEnum) {
    events(first: 200) {
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

Events.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Events,
    revalidate: 1,
  });
}
