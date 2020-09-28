# アニメ OP • Overview
An application which users are capable of searching for an anime show (TV, OVA, ONA, special, movie, music) and see details about it in another page.

The application is mobile first and progressively enhanced to a larger screen version.

## Home Page

The home page searches for any anime by text. There are filters for age rating and genre. The backend API handles the filtering, pagination and returning the results.

### Visualization

* Grid which shows a list of cards with:
  * Cover image (if it has one available)
  * Show type (TV, OVA, ONA, special, movie, music)
  * Canonical Title
  * Number of episodes (only for TV and ONA)
  * The rating of the anime from 0 to 5 (shown as colored star images)
* List that only shows list items with the canonical title and show type
* Filters are displayed as a navigation drawer (on desktop are always fixed at the left side of the screen)

### Behavior

The initial state of the page loads the animes from the API (paged). As the user types the search field, a debounced/throttled search is triggered.

* While animes are loading, a corresponding skeleton loader is displayed.
* When the user clicks an anime item, the app will navigate to the details page.

The Age Rating filter is defined as:

* **G** - General Audiences
* **PG** - Parental Guidance Suggested
* **R** - Restricted

The filters will have default values for Age Rating: **G, PG**.

The Genres filter will be all the available genres from the API.

## Details Page

The details page will show the information about a specific anime.

### Visualization

There will be a back button which should lead to the home page.

The following information about the anime is included:
* Trailer from YouTube (if available)
* Canonical title
* The rating of the anime from 0 to 5 (shown as colored star images)
* Show type (TV, OVA, ONA, special, movie, music)
* Number of episodes (only for TV and ONA)
* Synopsis
* Age rating
* Genres
* Categories
* Titles
* Streamers (if available. Also links to the platform)
* Portrait of each character (only for characters with pictures)

### Behavior

As the user clicks on a character a modal with the current character info is displayed:
* Name
* Other language names
* Description

The page shows a skeleton loader of the content while it is still being loaded.
