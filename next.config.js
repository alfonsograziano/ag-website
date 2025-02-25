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
        source: "/bari/slide",
        destination:
          "https://docs.google.com/presentation/d/e/2PACX-1vTTVNSh_D_GKmuDROlpMKqeQBmNIoNABjgBbRdM5IIRpW7A9AX_8Q-WLd32maR60ZlwGwHzPbu5zZ_x/pub?start=false&loop=false&delayms=3000",
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
      {
        source: "/pescara/slide",
        destination:
          "https://docs.google.com/presentation/d/e/2PACX-1vSbYc5jvcBr2CxS-MA8gPS_OCM_TQsNx-wIMVKshjhV-DsfYvLD39TKUsWppyo0-ZutyU8N-ungUDdx/pub?start=false&loop=false&delayms=3000",
        permanent: false,
      },
      {
        source: "/pescara",
        destination: "https://forms.gle/p2dLsV7GM9Rx4tAC7",
        permanent: false,
      },
      {
        source: "/coderful",
        destination: "https://forms.gle/Xf2g3jxZUiXsrYRJ9",
        permanent: false,
      },
      {
        source: "/devworld",
        destination:
          "https://forms.gle/nZRziB5JWLQ8zwSs5",
        permanent: false,
      },
      {
        source: "/devworld/slides",
        destination:
          "https://docs.google.com/presentation/d/e/2PACX-1vQGfr3VLuxza2liZxe9nwdd3wL4ZgxclyTZ-n0HSvyoA2aTUgU4DVHEc8ex3v2AGhzIFYh6QIKubtqO/pub?start=false&loop=false&delayms=3000",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
