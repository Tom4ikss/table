import { FixedSizeList as List } from 'react-window';
import type { ListChildComponentProps } from 'react-window';
import TableRow from './TableRow';
import { useVirtualRecords } from '../services/useVirtualRecors';
import InfiniteLoader from 'react-window-infinite-loader';
import TableHeader from './TableHeader';
import { useMemo } from 'react';

const Row = ({ index, style, data }: ListChildComponentProps) => {
  console.log(data, index);
  if (!data[index]) return <div>Loading...</div>;
  return (
    <div style={style}>
      <TableRow data={data[index]}></TableRow>
    </div>
  );
};

const VirtualTable = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useVirtualRecords();

  const records = useMemo(
    () => data?.pages.flatMap((p) => p.data) ?? [],
    [data]
  );
  const itemCount = hasNextPage ? records.length + 1 : records.length;
  const isItemLoaded = (index: number) => index < records.length;
  const loadMoreItems = isFetchingNextPage
    ? () => Promise.resolve()
    : (startIndex: number, stopIndex: number): Promise<void> => {
        // ??? почему я должен тут писать колбек с startIndex и stopIndex если в самих примерах на гитхабе такой логики нет
        console.log(startIndex, stopIndex);
        return fetchNextPage().then(() => {});
      };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-max overflow-x-hidden">
        <TableHeader />
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <List
              height={800}
              itemCount={itemCount}
              itemSize={32}
              itemData={records}
              width="100%"
              onItemsRendered={onItemsRendered}
              ref={ref}
            >
              {Row}
            </List>
          )}
        </InfiniteLoader>
      </div>
    </div>
  );
};

export default VirtualTable;
