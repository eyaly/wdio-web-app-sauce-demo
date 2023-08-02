
describe('Login', () => {
  beforeEach(async () => {
    browser.url('https://www.saucedemo.com/');
  });

  it('should be able to test loading of login page', async () => {
    setTimeout(function(){
      console.log("Executed after 5 second");
    }, 5000);
  });

});
