import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Places = {
  PLACES_COUNT: 314,
};

const Sorting = {
  SORT_TYPE: 'By Price',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount = {Places.PLACES_COUNT}
      sortType = {Sorting.SORT_TYPE}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
