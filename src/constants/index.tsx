export const ITEMS = [
  {
    url: "https://nextjs.org/docs",
    // →はutf-8なら問題ないが、\u2192で書いてもできる。
    title: "Documentation \u2192",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    url: "https://nextjs.org/learn",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    url: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples →",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    url: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export const NAV_ITEMS = [
  { url: "/", label: "Home" },
  { url: "/posts", label: "Posts" },
];
