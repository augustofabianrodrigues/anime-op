(function () {
  const element = document.querySelector('anime-op-app');

  element.addEventListener('search', (e) => {
    console.log(e.detail);
    element.searchResults = {
      ...element.searchResults,
      loading: true,
    };

    setTimeout(() => {
      fetch('/search_mock.json')
        .then((res) => res.json())
        .then((results) => {
          element.searchResults = {
            items: results,
            hasMore: true,
            loading: false,
          };
        });
    }, 500);
  });

  element.addEventListener('loadmore', (e) => {
    console.log(e);
    element.searchResults = {
      ...element.searchResults,
      loading: true,
    };

    setTimeout(() => {
      fetch('/loadmore_mock.json')
        .then((res) => res.json())
        .then((results) => {
          element.searchResults = {
            // ...element.searchResults,
            items: [...element.searchResults.items, ...results],
            hasMore: false,
            loading: false,
          };
        });
    }, 500);
  });
})();
