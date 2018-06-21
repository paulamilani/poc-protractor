// specLogin.js
describe('Login', function() {
    it('login salesforce', function() {
      browser.get('https://gestaocomercial.pagseguro.com.br');
          //interargir com elementos da página
          var button = element(by.id('btnChoosePagseguro')).click();          
            var login = element(by.id('login')).sendKeys('sf_evendas');
            var password = element(by.id('password')).sendKeys('mudar$123');
            var button = element(by.id('btnEntrar')).click();
            var menuSair =  element(by.css('[data-ng-click="menuController.logout()"]'));
      
      expect(menuSair.isDisplayed()).toBeTruthy();
    });
  });