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
        destination: "https://forms.gle/995Uyf1X43ciVvgu8",
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
        permanent: false,
      },
      {
        source: "/ctc",
        destination: "https://forms.gle/B6BnQkCPuajbaheb9",
        permanent: false,
      },
      {
        source: "/modena",
        destination: "https://forms.gle/mU9RK85LDij8fYim6",
        permanent: false,
      },
      {
        source: "/modena/slide",
        destination:
          "https://docs.google.com/presentation/d/e/2PACX-1vQjX-F3Hj5Qn_8zjh9foTw_Jnlx6Iw3U0FLD9-MoXpc20KrNq8OHxnLwIDXMumu4kcAYSkjUAU1hnYS/pub?start=false&loop=false&delayms=3000",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
