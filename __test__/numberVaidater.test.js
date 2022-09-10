'use strict';

const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);


describe("Test validate-number middleware", () => {

    it('Accept query with a valide number', async () => {

        const res = await request.get('/square').query('num=5');

        expect(res.status).toEqual(200);
        expect(res.text).toEqual('{num: 25}');

    });

    it('Reject query with invalide data', async () => {
        const res = await request.get('/square').query('num=notNumber');

        expect(res.status).toEqual(500);
        expect(res.text).toEqual('Server error: Your input is not number, enter a valid data');
    });
});