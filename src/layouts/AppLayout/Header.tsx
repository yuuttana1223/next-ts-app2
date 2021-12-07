import { VFC } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { url: "/", label: "Home" },
  { url: "/posts", label: "Posts" },
  { url: "/users", label: "Users" },
  { url: "/comments", label: "Comments" },
];

export const Header: VFC = () => {
  return (
    <header className="flex justify-center py-8 mb-4 border-b-2">
      {NAV_ITEMS.map((item) => (
        <Link key={item.url} href={item.url}>
          <a className="inline-block px-6 py-2 text-xl focus:text-blue-500 active:text-blue-500 hover:text-blue-500">
            {item.label}
          </a>
        </Link>
      ))}
    </header>
  );
};
