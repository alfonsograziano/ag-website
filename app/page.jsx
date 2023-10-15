import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <h1>Hey, I&apos;m Alfonso 👋🏻</h1>
        <span>
          Software developer who enjoys learning and sharing knowledge. Based in
          Italy 🇮🇹
        </span>
        <span>
          Senior Developer @ Nearform | AWS Solutions Architect Associate |
          Pasta addicted 🍝
        </span>
        <div>
          <Image src="/me.jpg" width={112} height={112} alt="me" />
        </div>
      </section>

      <section>
        <h2>Currently at</h2>
        <div>Add here the NF description...</div>
      </section>

      <section>
        <h2>My certifications</h2>
        <div>Add here the list...</div>
      </section>
    </main>
  );
}
