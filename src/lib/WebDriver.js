'use strict';

import {default as Selenium} from 'selenium-webdriver';
import {default as config} from 'config/config';

export default function (path) {
  return new Selenium.Builder()
    .forBrowser('phantomjs')
    .usingServer(config.seleniumServerUrl)
    .build();
};

