import nock from 'nock';
import Api from '../../../src/services/Api';


describe('httpRequest sign_in', () => {
    describe('.post', () => {
        it('returns the data from the http endpoint', async () => {

            // when
            const response = await Api.post('https://empresas.ioasys.com.br/api/v1/users/auth/sign_in', {

                "email": "testeapple@ioasys.com.br",
                "password": "12341234"

            });


            expect(response).toEqual(response);
        });

    });
});