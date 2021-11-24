import { ChangeEvent, useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState<string>("");
  const [array, setArray] = useState<string[]>([]);
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください。");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      setText("");
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
