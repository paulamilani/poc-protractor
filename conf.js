// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
    //navegadores
   capabilities: {
     'browserName': 'chrome',
      /*'chromeOptions': {
        'args': ['show-fps-counter=true']
     }*/
  },
  
  //suites testes
  suites: {
    loginpage: ['spec/specLogin.js'],
    homepage: ['spec/specCadastro.js'],
  },


  //tela maximizada
  onPrepare: function() {
    browser.driver.manage().window().maximize();
  },

  //relatorio testes
  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
       browserName = caps.get('browserName');
       browserVersion = caps.get('version');
       platform = caps.get('platform');

       var HTMLReport = require('protractor-html-reporter-2');

       testConfig = {
           reportTitle: 'Relatório testes',
           outputPath: './',
           outputFilename: 'Relatório testes',
           screenshotPath: './screenshots',
           testBrowser: browserName,
           browserVersion: browserVersion,
           modifiedSuiteName: false,
           screenshotsOnlyOnFailure: true,
           testPlatform: platform
       };
       new HTMLReport().from('xmlresults.xml', testConfig);
   });
},

}
