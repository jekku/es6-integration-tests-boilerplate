'use strict';

import {default as nightmareFactory} from 'lib/NightmareFactory';
import {default as should} from 'should';

const performSearchByButton = function searchByButton () {
  return nightmareFactory()
    .type('[name=q]', 'Maria Sharapova')
    .wait(1000)
    .evaluate( () => document.title)
    .end()
    .then( (title) => {
      title.should.be.exactly('maria sharapova - Google Search');
    });
};

const performEmptySearch = function emptySearch () {
  return nightmareFactory()
    .click('[name=btnK]')
    .wait(1000)
    .evaluate( () => document.title)
    .end()
    .then( (title) => {
      title.should.be.exactly('Google');
    });
};

export default {
  performSearchByButton,
  performEmptySearch,
};

