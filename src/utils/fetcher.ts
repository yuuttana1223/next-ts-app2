import { Post } from "src/types/post";
import { User } from "src/types/user";

// 戻り値をPromise<User | Post>にするとエラーになるので呼び出し時型アサーションを使用
export const fetcher = async (url: string): Promise<any> => {
  const res: Response = await fetch(url);
  if (!res.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました。");
  }
  const json: Post | User | Post[] = await res.json();
  return json;
};
