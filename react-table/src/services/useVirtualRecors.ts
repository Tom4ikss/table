import { useInfiniteQuery } from '@tanstack/react-query';
import type { RecordData } from '../types/RecordData';

export interface FetchPageResult {
  data: RecordData[];
  nextPage: number | null;
}

const PAGE_SIZE = 10;

export const fetchRows = async ({ pageParam = 1 }): Promise<FetchPageResult & { totalCount: number }> => {
  const res = await fetch(`http://localhost:3001/records?_page=${pageParam}&_limit=${PAGE_SIZE}`);
  const data: RecordData[] = await res.json();
  console.log(res.headers) 
  const totalCount = Number(res.headers.get('X-Total-Count'));

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);
  console.log(totalPages, totalCount)
  const nextPage = pageParam < totalPages ? pageParam + 1 : null;

  return {
    data,
    nextPage,
    totalCount,
  };
};

export const useVirtualRecords = () =>
  useInfiniteQuery<FetchPageResult, Error>({
    queryKey: ['records'],
    //@ts-expect-error в примере с документации TanStack Query абсолютно также но видимо я чего то не понимаю
    queryFn: fetchRows,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });