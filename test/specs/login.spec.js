import { LOGIN_USERS } from '../helpers/e2eConstants';

describe('Login', () => {
  beforeEach(async () => {

  });

  it('should be able to test loading of login page', async () => {
    browser.url('https://www.saucedemo.com/');
    setTimeout(function(){
      console.log("Executed after 5 second");
    }, 5000);
  });

});
