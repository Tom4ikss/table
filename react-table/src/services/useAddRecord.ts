import {
  useMutation,
  useQueryClient,
  type InfiniteData,
} from '@tanstack/react-query';
import type { RecordData } from '../types/RecordData';
import type { FetchPageResult } from '../types/FetchPageResult';

const AddRecord = (newRecord: RecordData) =>
  fetch('http://localhost:3001/records', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRecord),
  }).then((res) => res.json());

export const useAddRecord = () => {
  const queryClient = useQueryClient();

  return useMutation<RecordData, Error, RecordData, unknown>({
    mutationFn: AddRecord,
    onSuccess: (createdRecord: RecordData) => {
      queryClient.setQueryData<InfiniteData<FetchPageResult>>(
        ['records'],
        (oldData) => {
          if (!oldData) return oldData;

          const newPages = [...oldData.pages];
          newPages[0] = {
            ...newPages[0],
            data: [createdRecord, ...newPages[0].data],
          };

          return { ...oldData, pages: newPages };
        }
      );
    },
  });
};
