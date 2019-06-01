var webdriver = require('selenium-webdriver')
var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();
driver.get('https://ui61us.maxymiser.com/');
driver.sleep(1000);
driver.findElement(webdriver.By.id('Login')).sendKeys('ravi.tiwari@impetus.co.in');
driver.findElement(webdriver.By.id('Password')).sendKeys('Imp1234567');
driver.findElement(webdriver.By.className('btn-block')).click();
driver.executeScript('window.open("test.com");');
//  driver.wait(webdriver.until.titleIs('webdriver - Google Search'), 1000);
//driver.quit();