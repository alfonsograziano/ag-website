/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/alfonso-graziano/",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/alfonsograziano",
        permanent: false,
      },
      {
        source: "/roadmap",
        destination: "https://github.com/alfonsograziano/web-developer-roadmap",
        permanent: false,
      },
      {
        source: "/youtube",
        destination: "https://youtube.com/@alfonsograziano",
        permanent: false,
      },
      {
        source: "/bari",
        destination: "/talk/career_growth_it",
        permanent: false,
      },
      {
        source: "/worldcongress",
        destination: "/talk/career_growth_2",
        permanent: false,
      },
      {
        source: "/romajs",
        destination: "/talk/videos_react_it",
        permanent: false,
      },
      {
        source: "/aws",
        destination: "/blog/f64d410e694c4aaea52106124b8c535e",
        permanent: false,
      },
      {
        source: "/nearform",
        destination: "https://calendly.com/alfonso-graziano/30min",
        permanent: false
      },
      {
        source: "/ctc",
        destination: "https://forms.gle/B6BnQkCPuajbaheb9",
        permanent: false
      }
    ];
  },
};

module.exports = nextConfig;
