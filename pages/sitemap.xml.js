import { getSitemapProps } from "@faustwp/core";

export default function Sitemap() {}

export function getServerSideProps(context) {
  return getSitemapProps(context, {
    frontendUrl: "http://localhost:3000/", // Set the FRONTEND_URL as an env var
  });
}
