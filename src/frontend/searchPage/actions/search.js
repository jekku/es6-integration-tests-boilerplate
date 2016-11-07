'use strict';

import {default as config} from 'config/config';
import {default as Nightmare} from 'nightmare';

const performSearchByButton = function searchByButton (done) {
  Nightmare({show: true})
    .goto('https://www.google.com')
    .type('[name=q]', 'Maria Sharapova')
    .wait(1000)
    .evaluate( () => document.title)
    .end()
    .then( (title) => {
      title.should.be.exactly('Google Search - Maria Sharapova');
      done();
    })
    .catch(() => done());
};

const performEmptySearch = function emptySearch (done) {
  Nightmare({show: true})
    .goto('https://www.google.com')
    .click('[name=btnK]')
    .wait(1000)
    .evaluate( () => document.title)
    .end()
    .then( (title) => {
      title.should.be.exactly('Google');
      done();
    })
    .catch(() => done());
};

export default {
  performSearchByButton,
  performEmptySearch,
};

