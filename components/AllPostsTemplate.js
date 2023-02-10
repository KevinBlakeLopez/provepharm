import Image from "next/image";
import Link from "next/link";

// function calculateAspectRatio(width, height) {
//     return width / height;
//   }

export default function AllPostsTemplate({ data, route }) {
  // const aspectRatio = calculateAspectRatio(
  //   data.featuredImage.node.mediaDetails.width,
  //   data.featuredImage.node.mediaDetails.height
  // );
  // let width, height;
  // if (aspectRatio > 1) {
  //   // image is rectangular
  //   width = 400;
  //   height = 400 / aspectRatio;
  // } else {
  //   // image is square
  //   height = 400;
  //   width = 400 * aspectRatio;
  // }

  return (
    <>
      <div className="h-12" />
      {data.nodes.map(({ id, title, excerpt, date, featuredImage, slug }) => (
        <div className="md:flex md:items-center mb-10" key={id}>
          {featuredImage ? (
            <div className="md:w-[386px] mr-12">
              <Image
                width={featuredImage.node.mediaDetails.width}
                height={featuredImage.node.mediaDetails.height}
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
              <Link href={`/${route}/${encodeURIComponent(slug)}`}>
                Read more
              </Link>
            </p>
            <div className="w-full h-[1px] bg-[#ebebeb]"></div>
          </section>
        </div>
      ))}
      <div className="h-12" />
    </>
  );
}
