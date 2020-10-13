import { Styled } from 'direflow-component';
import React, { FC, useRef } from 'react';
import chunk from 'lodash/chunk';
import zip from 'lodash/zip';
import SearchStore from '../../../../stores/SearchStore';
import AnimeCard from './AnimeCard';
import styles from './SearchResultsGrid.less';
import AnimeSearchResultModel from '../../../../models/AnimeSearchResultModel';
import useElementSize from '../../../../hooks/useElementSize';
import AnimeCardSkeletonLoader from './AnimeCardSkeletonLoader';

const CARD_WIDTH_IN_PIXELS = 288; // 18rem
const COLUMN_GAP_IN_PIXELS = 16; // 1rem

function getColumnCount(elementWidth: number) {
  return Math.max(
    Math.floor(elementWidth / (CARD_WIDTH_IN_PIXELS + COLUMN_GAP_IN_PIXELS)),
    1
  );
}

function renderGrid(
  items: AnimeSearchResultModel[],
  columnCount: number,
  loading: boolean
) {
  const rows = chunk(items, columnCount);
  const columns = zip(...rows);

  const loadersCountByColumns = columns
    .slice(1)
    .reduce(
      (accumulator, column) =>
        accumulator.concat([
          column.filter((row) => row === undefined).length + 1,
        ]),
      [1]
    );

  return columns.map((rows, columnIndex) => (
    <div key={columnIndex} className="grid-column">
      {rows
        .map((item) => item && <AnimeCard key={item.id} {...item} />)
        .concat(
          loading
            ? Array(loadersCountByColumns[columnIndex])
                .fill(null)
                .map((_, loaderIndex) => (
                  <AnimeCardSkeletonLoader
                    key={`anime-card-loader-${columnIndex}-${loaderIndex}`}
                  />
                ))
            : []
        )}
    </div>
  ));
}

function renderSkeletonLoader(columnCount: number) {
  return Array(columnCount)
    .fill(null)
    .map((_, index) => (
      <div key={index} className="grid-column skeleton-loader">
        <AnimeCardSkeletonLoader />
      </div>
    ));
}

const SearchResultsGrid: FC = () => {
  const { items, loading } = SearchStore.useState((s) => s.results);
  const resultsGridElement = useRef<HTMLDivElement>(null);
  const [width] = useElementSize(resultsGridElement.current);
  const columnCount = getColumnCount(width);

  const gridTemplateColumns = `repeat(${columnCount}, 18rem)`;

  return (
    <Styled styles={styles}>
      <div
        ref={resultsGridElement}
        className="search-results-grid"
        style={{ gridTemplateColumns }}
      >
        {width && renderGrid(items, columnCount, loading)}
        {loading && items.length === 0 && renderSkeletonLoader(columnCount)}
      </div>
    </Styled>
  );
};

export default SearchResultsGrid;
