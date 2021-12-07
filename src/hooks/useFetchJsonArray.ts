import useSWRImmutable from "swr/immutable";

export const useFetchJsonArray = <T>(url: string | null) => {
  const { data, error } = useSWRImmutable<T[], Error>(url);

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data?.length === 0,
  };
};
