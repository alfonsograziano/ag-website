import GoogleSlides from "@/components/GoogleSlides";
import { talks } from "../page";

export default function TalkPage({ params }) {
  const talkId = talks.find((talk) => talk.slug === params.slug)?.id;

  return (
    <main style={{ height: "100%" }}>
      <GoogleSlides id={talkId} />
    </main>
  );
}
