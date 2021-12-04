import { VFC } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "src/constants";

export const Header: VFC = () => {
  return (
    <header className="flex justify-center py-8 border-b-2">
      {NAV_ITEMS.map((item, index) => (
        <Link key={index} href={item.url}>
          <a className="inline-block px-6 py-2 text-xl focus:text-blue-500 active:text-blue-500 hover:text-blue-500">
            {item.label}
          </a>
        </Link>
      ))}
    </header>
  );
};
