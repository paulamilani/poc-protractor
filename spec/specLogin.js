// specLogin.js
describe('Login', function () {
  it('login', function () {
    browser.get('https://gestaocomercial.pagseguro.com.br');
    //interargir com elementos da página
    var button = element(by.id('btnChoosePagseguro')).click();
    var login = element(by.id('login')).sendKeys('sf_gcanais');
    var password = element(by.id('password')).sendKeys('DresoV68o');
    var button = element(by.id('btnEntrar')).click();
    var menuSair = element(by.css('[data-ng-click="menuController.logout()"]'));

    expect(menuSair.isDisplayed()).toBeTruthy();
  });
});