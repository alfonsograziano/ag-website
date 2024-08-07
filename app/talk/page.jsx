import GoogleSlides from "@/components/GoogleSlides";
import Link from "next/link";

export const talks = [
  {
    id: "2PACX-1vTszcZ1DY4r2iQnfy5pxQJKO7aOQFSI4-3M8b8Z9buRJTUxfA7Q6WZ7tOA0X_HWAg",
    name: "The Staff Engineer VS Manager Path: A window over the tech career paths [IT]",
    slug: "career_growth_it",
  },
  {
    id: "2PACX-1vQhUH-qTFZsVNpB55gow10b8bp_ACr3QKuIORj2-vFwYRnPL69AxXQtWSG0jPVCASczRPaMVqYMeUQW",
    name: "The Staff Engineer VS Manager Path: A window over the tech career paths",
    slug: "career_growth",
  },
  {
    id: "2PACX-1vQeQc55n8zcslDwvJmej9eYJZsXcq1TCjxg2cgMDVAgOSsDQ_04x3iN7jMoQ8T0dxNq1QB8gXCLWL5n",
    name: "The Staff Engineer VS Manager Path: A window over the tech career paths (v2)",
    slug: "career_growth_2",
  },
  {
    id: "2PACX-1vSD46lCGsB_WUl3yCFGaKAwdqkFGr2jo739ZsJLg5qGViiFRmDYAfB9F0J3AwQxoEMm99ePKku52kgX",
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
  {
    id: "2PACX-1vQCPOkAxiexVULMGApDcnZ7cU_82r6jiBUhy7QvO1G9Xq2aa_0xzFC1l7jNgwM1Pw",
    name: "Create videos with React V2 [ITA]",
    slug: "videos_react_it",
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
