import {
  useMutation,
  useQueryClient,
  type InfiniteData,
} from '@tanstack/react-query';
import type { RecordData } from '../types/RecordData';
import type { FetchPageResult } from '../types/FetchPageResult';

const addRecord = (newRecord: RecordData) =>
  fetch('http://localhost:3001/records', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRecord),
  }).then((res) => res.json());

export const useAddRecord = () => {
  const queryClient = useQueryClient();

  return useMutation<RecordData, Error, RecordData, unknown>({
    mutationFn: addRecord,
    onSuccess: (createdRecord: RecordData) => {
      queryClient.setQueryData<InfiniteData<FetchPageResult>>(
        ['records'],
        (oldData) => {
          if (!oldData) return oldData;

          const newPages = [...oldData.pages];
          newPages[newPages.length - 1] = {
            ...newPages[newPages.length - 1],
            data: [...newPages[newPages.length - 1].data, createdRecord],
          };

          return { ...oldData, pages: newPages };
        }
      );
    },
  });
};
