import Image from "next/image";
import WYSIWYG from "./WYSIWYG";

function calculateAspectRatio(width, height) {
  return width / height;
}

export default function SinglePostTemplate({ data }) {
  const aspectRatio = calculateAspectRatio(
    data.featuredImage.node.mediaDetails.width,
    data.featuredImage.node.mediaDetails.height
  );
  let width, height;
  if (aspectRatio > 1) {
    // image is rectangular
    width = 800;
    height = 800 / aspectRatio;
  } else {
    // image is square
    height = 800;
    width = 800 * aspectRatio;
  }

  return (
    <section>
      <h5 className="mb-2 font-bold text-blue-600">
        Published:{" "}
        {new Date(data.date).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </h5>
      <h1 className="font-semibold text-lg md:text-2xl mb-8">{data.title}</h1>
      <figure className="mb-8 text-center">
        <Image
          src={data.featuredImage.node.mediaItemUrl}
          width={width}
          height={height}
        />
      </figure>
      <WYSIWYG content={data.content} />
    </section>
  );
}
