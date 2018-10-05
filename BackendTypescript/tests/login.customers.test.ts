
import * as loginController from '../src/controllers/login-customers.controller';  

it('Login with user and password should be ok', async ()=> {
    await expect(loginController.default.processLogin('test1','test2')).resolves.toEqual("Token123455");
});

it('when Login have not user we should receive error', async ()=> {
    await expect(loginController.default.processLogin(null,'test2')).rejects.toEqual('Not user provided');
});

it('when Login have not password we should receive error', async ()=> {
    await expect(loginController.default.processLogin('test1',null)).rejects.toEqual('Not password provided');
});