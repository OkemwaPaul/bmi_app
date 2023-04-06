const { remote } = require('webdriverio');
const assert = require('assert');

let browser;

;(async () => {
    browser = await remote({
        capabilities: { browserName: 'chrome' }
    })

    await browser.navigateTo('bmi_calculate/index.js')

    const searchInput = await browser.$('#twotabsearchtextbox')
    await searchInput.setValue('')

    const searchBtn = await browser.$('#nav-search-submit-button')
    await searchBtn.click()

    const pageTitle = await browser.getTitle();
    assert(pageTitle === 'index.js : calculate.hbs');
    console.log("Acceptance test successful!")

})().catch((err) => {
    console.error(err);
    return browser.deleteSession();
})