import Image from "next/image";

export default function SinglePostTemplate({ pressRelease }) {
  return (
    <section>
      <h5 className="mb-1 font-medium text-blue-600">
        {new Date(pressRelease.date).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </h5>
      <h2 className="font-semibold text-lg md:text-2xl mb-8">
        {pressRelease.title}
      </h2>
      <figure className="mb-16">
        <Image
          src={pressRelease.featuredImage.node.mediaItemUrl}
          width="600"
          height="600"
        />
      </figure>
      <div className="text-lg">
        <div
          className={"post-content"}
          dangerouslySetInnerHTML={{ __html: pressRelease.content }}
        ></div>
      </div>
    </section>
  );
}
