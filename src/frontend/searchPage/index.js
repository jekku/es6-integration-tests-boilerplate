'use strict';

import {default as actions} from 'frontend/searchPage/actions';
import 'babel-polyfill';

export default {
  name: 'Search Page',
  runTest: () => {
    describe('Search Page', () => {
      it('Will perform a search when the search button is clicked after a search query is typed', actions.performSearchByButton);
      it('Will not change page if no search query is provided', actions.performEmptySearch);
    });
  }
};

