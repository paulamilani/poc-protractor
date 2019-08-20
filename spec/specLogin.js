// specLogin.js
describe('Login', function () {
  it('login', function () {
    browser.get('url');
    //interargir com elementos da página
    var button = element(by.id('btnChoosePagseguro')).click();
    var login = element(by.id('login')).sendKeys('user');
    var password = element(by.id('password')).sendKeys('senha');
    var button = element(by.id('btnEntrar')).click();
    var menuSair = element(by.css('[data-ng-click="menuController.logout()"]'));

    expect(menuSair.isDisplayed()).toBeTruthy();
  });
});
