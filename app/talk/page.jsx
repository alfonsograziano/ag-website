import GoogleSlides from "@/components/GoogleSlides";
import Link from "next/link";

export const talks = [
  {
    id: "2PACX-1vQhUH-qTFZsVNpB55gow10b8bp_ACr3QKuIORj2-vFwYRnPL69AxXQtWSG0jPVCASczRPaMVqYMeUQW",
    name: "The Staff Engineer VS Manager Path: A window over the tech career paths",
    slug: "career_growth",
  },
  {
    id: "2PACX-1vSjKUUdSG7AVTuLlI0tO6A_PMBSB9HJ3y9Wh6CbfZXRN24B_LExqNbMXdYlYKcAZA",
    name: "Create videos... with React!",
    slug: "create_videos",
  },
  {
    id: "2PACX-1vT5IImxQ6VBQZBcOrzo1M5HNjKKyH7f5FfHBuPBEqnLGKfDWLzLhz7UBwPGWXYEGw",
    name: "Create videos... with React! [IT]",
    slug: "create_videos_it",
  },
  {
    id: "2PACX-1vTcPZYPQB9_bTC5IZI93bY23gBC_0c4Yz0xs6uaGeZDTFTKuu0GBULpi2eJNVsavvRf3QJK7TWjG4e6",
    name: "Cloud 101 [IT]",
    slug: "cloud_101",
  },
];

export default async function Talks() {
  return (
    <main>
      <ul>
        {talks.map((talk) => (
          <li key={talk.id}>
            <Link href={"/talk/" + talk.slug}>{talk.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
