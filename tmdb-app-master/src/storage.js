let storage = {
  apiKey: '3e357df61bcc30e4d66fa95f18a4b8a3',
  sessionId: localStorage.getItem('session_id') || null,
  userId: localStorage.getItem('user_id') || null,
  pageTitlePostfix: ' — ' + document.title,
  listTypes: [
    {
      title: 'Estrenos',
      shortTitle: 'Estrenos',
      query: 'now_playing',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Mas Populares',
      shortTitle: 'Mas Populares',
      query: 'popular',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Mas Valoradas',
      shortTitle: 'Mas Valoradas',
      query: 'top_rated',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Proximamente',
      shortTitle: 'Proximamente',
      query: 'upcoming',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Resultados de Busqueda',
      query: 'search',
      isCategory: false
    },
    {
      title: 'Peliculas Favoritas',
      query: 'favorite',
      isCategory: false
    }
  ],
  categories: {},
  // For Browser History
  backTitle: '',
  moviePath: '',
  createMoviePopup: false,
  moviePopupOnHistory: false
};

// Create categories titles
storage.listTypes.forEach(function(listType){
  storage.categories[listType.query] = listType.title;
});

export default storage;
