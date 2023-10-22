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
