import Image from "next/image";

export default function SinglePostTemplate({ data }) {
  return (
    <section>
      <h5 className="mb-1 font-medium text-blue-600">
        {new Date(data.date).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </h5>
      <h2 className="font-semibold text-lg md:text-2xl mb-8">{data.title}</h2>
      <figure className="mb-16">
        <Image
          src={data.featuredImage.node.mediaItemUrl}
          width="600"
          height="600"
        />
      </figure>
      <div className="text-lg">
        <div
          className={"post-content"}
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
      </div>
    </section>
  );
}
