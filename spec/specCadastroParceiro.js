//specCadastroParceiro
describe('Cadastro de Parceiro', function () {
    it('cadastro novo parceiro ', function () {
        var EC = protractor.ExpectedConditions;
        var menuCadastroParceiro = element(by.id('partner')).click();
        browser.wait(EC.elementToBeClickable(menuCadastroParceiro), 5000);
        var novoParceiro = element(by.css('[data-ng-click="partnerSearchController.goTo('+"'partner.create'"+')"]')).click();
        var cnpj = element(by.id('cnpj')).sendKeys('31.347.300/0001-75');
        var name = element(by.id('name')).sendKeys('Parceiro Teste um');
        var email = element(by.id('email')).sendKeys('parceiro.teste@oi.com');
        //var modeloNegocio = findElement(protractor.By.css('select option:2')).click();
        var btnSalvar = element(by.css('[data-ng-click="partnerCreateController.onSave()"]')).click();
        
        //expect(getMessageModal()).toEqual('Parceiro criado com sucesso!');
    });


    it('cadastro parceiro já existente ', function () {
        var menuCadastroParceiro = element(by.id('partner')).click();
        var novoParceiro = element(by.css('[data-ng-click="partnerSearchController.goTo('+"'partner.create'"+')"]')).click();
        var cnpj = element(by.id('cnpj')).sendKeys('31.347.300/0001-75');
        var name = element(by.id('name')).sendKeys('Parceiro Teste dois');
        var email = element(by.id('email')).sendKeys('parceiro1.teste@oi.com');
        //var modeloNegocio = element(by.id('partnerBusinessModel')).todoList.get(2).click();
        var btnSalvar = element(by.css('[data-ng-click="partnerCreateController.onSave()"]')).click();
        
        // expect(page.getText()).toEqual('Já existe um parceiro cadastrado com o mesmo CNPJ e modelo de negócio.')
    });

    it('cadastro parceiro  botao cancelar', function () {
        var menuCadastroParceiro = element(by.id('partner')).click();
        var novoParceiro = element(by.css('[data-ng-click="partnerSearchController.goTo('+"'partner.create'"+')"]')).click();
        var btnCancelar = element(by.css('[data-ng-click="partnerCreateController.onCancel()"]')).click();

        //expect(page.getText()).toEqual('Já existe um parceiro cadastrado com o mesmo CNPJ e modelo de negócio.')
    });


});

