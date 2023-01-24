import className from "classnames/bind";
import { Heading, PostInfo, FeaturedImage } from "..";
import Container from "../Container";
import styles from "./EntryHeader.module.scss";

let cx = className.bind(styles);

export default function EntryHeader({ title, image, date, author, className }) {
  const hasText = title || date || author;

  return (
    <div className={cx(["component", className])}>
      {image && (
        <FeaturedImage image={image} className={cx("image")} priority />
      )}

      {hasText && (
        <div className={cx("text", { "has-image": image })}>
          <Container>
            {!!title && (
              <Heading className="text-white text-2xl">{title}</Heading>
            )}
            <PostInfo
              className="text-white text-xl"
              author={author}
              date={date}
            />
          </Container>
        </div>
      )}
    </div>
  );
}
