import { NotionAPI } from "notion-client";
import NotionPage from "@/components/NotionPage";

export default async function BlogPage({ params }) {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage(params.slug);

  return (
    <main>
      <NotionPage recordMap={recordMap} />
    </main>
  );
}
