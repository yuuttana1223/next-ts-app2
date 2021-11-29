import { useCallback, useEffect, VFC, useReducer } from "react";

type Post = {
  useId: number;
  id: number;
  title: string;
  body: string;
};

type State = {
  data: Post[];
  loading: boolean;
  error: unknown;
};

type Action = State & {
  type: "end" | "error";
};

const initialState: State = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      throw new Error("No such action type!");
  }
};

export const Posts: VFC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const fetchPosts = useCallback(async (): Promise<void> => {
    try {
      const res: Response = await fetch(
        "https://jsonplaceholder.typicode.com/postsa"
      );
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました");
      }
      const json: Post[] = await res.json();
      dispatch({
        ...state,
        type: "end",
        data: json,
      });
    } catch (error: unknown) {
      dispatch({
        ...state,
        type: "end",
        error,
      });
    }
  }, [state]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  console.log("ff");

  if (state.loading) {
    return <div>ローディング中</div>;
  }

  if (state.error instanceof Error) {
    return <div>{state.error.message}</div>;
  }

  if (state.data.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {state.data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
  );
};
