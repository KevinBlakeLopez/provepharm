import Image from "next/image";
import Link from "next/link";

export default function AllPostsTemplate({ data, route }) {
  if (!data.nodes[0]) {
    return <p className="text-3xl p-10">Coming Soon!</p>;
  } else if (data.nodes[0].events) {
    return (
      <>
        <div className="h-12 bg-inherit" />
        {data.nodes.map(
          ({ id, title, excerpt, featuredImage, slug, events }) => (
            <div
              className="pt-1 pb-9 md:flex md:items-center mb-10 border-b-2 border-gray-300"
              key={id}
            >
              {featuredImage ? (
                <div className="relative w-full lg:w-[400px] h-[200px] mr-12">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    priority={true}
                    src={featuredImage.node.mediaItemUrl}
                  />
                </div>
              ) : null}
              <section className="lg:w-[500px]">
                <div>
                  <p className="mb-2 text-sm">{events.eventDate}</p>
                  <h2 className="text-xl mb-3 font-semibold">{title}</h2>
                  <div
                    className="mb-2"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                  />
                  <p className="text-blue-400 underline cursor-pointer">
                    <Link href={`/${route}/${encodeURIComponent(slug)}`}>
                      Read more
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          )
        )}
      </>
    );
  }

  return (
    <>
      <div className="h-12" />
      {data.nodes.map(({ id, title, excerpt, date, featuredImage, slug }) => (
        <div
          className="pt-1 pb-9 md:flex md:items-center mb-10 border-b-2 border-gray-300"
          key={id}
        >
          {featuredImage ? (
            <div className="relative w-full lg:w-[400px] h-[200px] mr-12">
              <Image
                layout="fill"
                objectFit="cover"
                quality={90}
                priority={true}
                src={featuredImage.node.mediaItemUrl}
              />
            </div>
          ) : null}
          <section className="lg:w-[500px]">
            <p className="mb-2 text-sm">
              Published:{" "}
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
              <Link href={`/${route}/${encodeURIComponent(slug)}`}>
                Read more
              </Link>
            </p>
          </section>
        </div>
      ))}
    </>
  );
}
