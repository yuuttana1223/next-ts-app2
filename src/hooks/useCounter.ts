import { MouseEvent, useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(1);
  const [isShow, setIsShow] = useState<boolean>(true);

  const doubleCount: number = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay, doubleCount };
};
