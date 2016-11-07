'use strict';

import {default as config} from 'config/config';
import {default as createWebDriver} from 'lib/WebDriver';
import {default as Selenium} from 'selenium-webdriver';
import {default as should} from 'should';

let driver;
let searchBar;
let searchButton;

const initialize = function initialize () {
  driver = createWebDriver();

  const bindElements = function () {
    searchBar = driver.findElement(
      Selenium.By.name('q')
    );

    searchButton = driver.findElement(
      Selenium.By.name('btnG')
    );
  }

  return driver.get(config.siteUrl)
    .then(bindElements);
}

const performSearchByButton = function searchByButton (done) {
  initialize()
    .then( () => {
      searchBar.sendKeys('Maria Sharapova');
      searchButton.click();
      return driver.getTitle();
    })
    .then( result => {
      result.should.be.exactly('Maria Sharapova - Google Search');
      driver.quit();
      done();
    });
};

const performEmptySearch = function emptySearch (done) {
  initialize()
    .then( () => {
      searchBar.sendKeys(Selenium.Key.ENTER);
      return driver.getTitle();
    })
    .then( result => {
      result.should.be.exactly('Google');
      driver.quit();
      done();
    });
};

export default {
  performSearchByButton,
  performEmptySearch,
};

