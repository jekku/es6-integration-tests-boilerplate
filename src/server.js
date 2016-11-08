'use strict';

import {default as config} from 'config/config';
import {default as R} from 'ramda';
import {default as importer} from 'anytv-node-importer';

const run = function runIndividualTestTrees (testTree) {
  describe(`${testTree.id} Integration Test`, () => {
    R.map(test => test.index.default.runTest(), testTree.tests);
  });
};

const build = function buildTestTreesByID (integrationID) {
  return {
    id: integrationID,
    tests: importer.dirloadSync(__dirname + '/' + integrationID)
  };
};

const start = function start () {
  R.pipe(
    R.map(build),
    R.forEach(run)
  )(config.rootIntegrationIDs);
};



start();

