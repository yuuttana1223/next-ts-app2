import { useEffect, useMemo } from "react";
import { useRouter } from "next/dist/client/router";

export const useBgColor = (): void => {
  const router = useRouter();

  const bgColor: string = useMemo(() => {
    switch (router.pathname) {
      case "/":
        return "lightblue";
      case "/about":
        return "beige";
      default:
        return "";
    }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
