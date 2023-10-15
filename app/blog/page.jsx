import { NotionAPI } from "notion-client";
import NotionPage from "@/components/NotionPage";

const blogHome = "905955f3-a757-483d-a4b4-d938ce5ee7df";

export default async function BlogHome() {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage(blogHome);

  return (
    <main>
      <NotionPage recordMap={recordMap} />
    </main>
  );
}
