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
        source: "/aws",
        destination: "/blog/f64d410e694c4aaea52106124b8c535e",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
