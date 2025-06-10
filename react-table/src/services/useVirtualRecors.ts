import { useInfiniteQuery } from '@tanstack/react-query';
import { PAGE_SIZE } from '../config/fetchPageSize';
import type { RecordData } from '../types/RecordData';
import type { FetchPageResult } from '../types/FetchPageResult';

export const fetchRows = async ({
  pageParam = 1,
}): Promise<FetchPageResult & { totalCount: number }> => {
  const res = await fetch(
    `http://localhost:3001/records?_page=${pageParam}&_limit=${PAGE_SIZE}`
  );
  const data: RecordData[] = await res.json();
  console.log(res.headers);
  const totalCount = Number(res.headers.get('X-Total-Count'));

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);
  console.log(totalPages, totalCount);
  const nextPage = pageParam < totalPages ? pageParam + 1 : null;

  return {
    data,
    nextPage,
    totalCount,
  };
};

export const useRecords = () =>
  useInfiniteQuery({
    queryKey: ['records'],
    queryFn: ({ pageParam }) => fetchRows({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
