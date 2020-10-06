// Search Listeners
(function () {
  const element = document.querySelector('anime-op-app');

  element.addEventListener('search', ({ detail }) => {
    console.log(detail);
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
})();
