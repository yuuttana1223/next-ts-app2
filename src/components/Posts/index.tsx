import { useState, useCallback, useEffect, VFC } from "react";

type Post = {
  useId: number;
  id: number;
  title: string;
  body: string;
};

export const Posts: VFC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>();

  const fetchPosts = useCallback(async (): Promise<void> => {
    try {
      const res: Response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました");
      }
      const json: Post[] = await res.json();
      setPosts(json);
    } catch (error: unknown) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <div>ローディング中</div>;
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }

  if (posts.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
  );
};
