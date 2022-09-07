'use strict';

const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);

describe("Test home page", () => {
    it("Home Page Work!", async () => {
        const res = await request.get('/');

        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Middleware Server')
    });
});

describe("Test Square Route", () => {

    it("square route work!", async () => {

        const res = await request.get('/square').query(4);

        expect(res.status).toEqual(200);
        expect(JSON.parse(res.text)).toEqual({ num: 16 });
    });
});

// describe("Test Square Route wrong query", () => {

//     it("square route work as needed!", async () => {

//         const dumy = Math.random()+": string"
//         const res = await request.get('/square')
//         .query(dumy);

//         expect(res.status).toEqual(500);
//         expect(JSON.parse(res.text))
//         .toEqual({
//             code_error: 500,
//             message: `Server error: ${dumy} is not number`
//         });
//     });
// });


describe("Test wrong Route", () => {

    it("404 error handler works!", async () => {

        const res = await request.get('/unknown').query(4);

        expect(res.status).toEqual(404);
        expect(JSON.parse(res.text))
            .toEqual({
                code_error: 404,
                message: `Page Not Found: error`
            });
    });
});