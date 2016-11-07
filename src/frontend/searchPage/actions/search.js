'use strict';

import {default as nightmareFactory} from 'lib/NightmareFactory';
import {default as should} from 'should';

const performSearchByButton = function searchByButton (done) {
  nightmareFactory()
    .type('[name=q]', 'Maria Sharapova')
    .wait(1000)
    .evaluate( () => document.title)
    .end()
    .catch( (err) => { 
      should.not.exist(err);
    })
    .then( (title) => {
      title.should.be.exactly('maria sharapova - Google Search');
      done();
    });
};

const performEmptySearch = function emptySearch (done) {
  nightmareFactory()
    .click('[name=btnK]')
    .wait(1000)
    .evaluate( () => document.title)
    .end()
    .catch( (err) => {
      should.not.exist(err);
    })
    .then( (title) => {
      title.should.be.exactly('Google');
      done();
    });
};

export default {
  performSearchByButton,
  performEmptySearch,
};

