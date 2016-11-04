'use strict';

import {default as actions} from 'frontend/searchPage/actions';

export default {
  name: 'Search Page',
  runTest: () => {
    describe('Search Page', () => {
      it('Search by typing in a query and clicking the search button', actions.search);
    });
  }
};

