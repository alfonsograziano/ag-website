import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

const notion = new NotionAPI();

export default async function BlogPage({ params }) {

  try{
    // I'm getting this error server side 
    // https://github.com/NotionX/react-notion-x/issues/525
    // const recordMap = await notion.getPage(params.slug);
  } catch(e){
    //TODO: Redirect if error
    console.log(e)
  }

  return (
    <div>
      {params.slug}
      {/* <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} /> */}
    </div>
  );
}
