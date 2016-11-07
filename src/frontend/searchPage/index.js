'use strict';

import {default as actions} from 'frontend/searchPage/actions';
import 'babel-polyfill';

export default {
  name: 'Search Page',
  runTest: () => {
    describe('Search Page', () => {
      it(
        'Will perform a search on finish of typing query',
        actions.performSearchByButton
      );

      it(
        'Will not change page if no search query is provided',
        actions.performEmptySearch
      );
    });
  }
};

