import useSWR from "swr";

type Post = {
  useId: number;
  id: number;
  title: string;
  body: string;
};

const fetcher = async (url: string): Promise<Post[]> => {
  const res: Response = await fetch(url);
  if (!res.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました。");
  }
  const json: Post[] = await res.json();
  return json;
};

type UsePosts = {
  data?: Post[];
  error: unknown;
  isLoading: boolean;
  isEmpty?: boolean;
};

export const usePosts = (): UsePosts => {
  const { data, error } = useSWR<Post[], unknown>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
