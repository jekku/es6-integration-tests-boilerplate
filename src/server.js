'use strict';

import {default as config} from 'config/config';
import {default as R} from 'ramda';
import {default as importer} from 'anytv-node-importer';

const start = () => {
  R.pipe(
    R.map(buildTestTreesByID),
    R.forEach(runIndividualTests)
  )(config.rootIntegrationIDs);
};

const buildTestTreesByID = (integrationID) => {
  return {
    id: integrationID,
    tests: importer.dirloadSync(__dirname + '/' + integrationID)
  };
};

const runIndividualTests = (testTree) => {
  describe(`${testTree.id} Integration Test`, () => {
    R.map(test => test.index.default.runTest(), testTree.tests);
  });
};

start();

