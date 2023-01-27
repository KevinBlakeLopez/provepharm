import Image from "next/image";

export default function SinglePostTemplate({ pressRelease }) {
  return (
    <section>
      <figure className="mb-16">
        <Image
          src={pressRelease.featuredImage.node.mediaItemUrl}
          width="400"
          height="400"
        />
      </figure>
      <div className="text-lg">
        <h5 className="mb-8">
          {new Date(pressRelease.date).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </h5>
        <h2 className="text-lg md:text-2xl mb-8">{pressRelease.title}</h2>
        <div
          className={"post-content"}
          dangerouslySetInnerHTML={{ __html: pressRelease.content }}
        ></div>
      </div>
    </section>
  );
}
