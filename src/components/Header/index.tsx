import { VFC } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "src/constants";

export const Header: VFC = () => {
  return (
    <header className="flex justify-center py-8">
      <div className="border-solid border-4 border-blue-500">aaa</div>
      {NAV_ITEMS.map((item, index) => (
        <Link key={index} href={item.url}>
          <a className="inline-block py-2 px-6 text-xl focus:text-blue-500 active:text-blue-500 hover:text-blue-500">
            {item.label}
          </a>
        </Link>
      ))}
    </header>
  );
};
// .header {
//   border-bottom: 1px solid #eaeaea;
// }

// .header a {
//   font-size: 1.2rem;
// }

// .header a:hover,
// .header a:focus,
// .header a:active {
//   color: #0070f3;
//   border-color: #0070f3;
// }
