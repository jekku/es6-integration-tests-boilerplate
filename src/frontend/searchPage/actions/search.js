'use strict';

import {default as config} from 'config/config';
import {default as createWebDriver} from 'lib/WebDriver';
import {default as Selenium} from 'selenium-webdriver';
import {default as should} from 'should';

export default function (done) {
  const driver = createWebDriver();

  driver.get(config.siteUrl)
    .then( () => {
      const searchBar = driver.findElement(
	Selenium.By.name('q')
      );
      const searchButton = driver.findElement(
	Selenium.By.name('btnG')
      );

      searchBar.sendKeys('Maria Sharapova');
      searchButton.click();

      driver.getTitle().then( result => {
	result.should.be.exactly('Maria Sharapova - Google Search');
	driver.quit();
	done();
      });
    });
};

