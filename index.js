'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 8080
    });

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: function (request, h) {

                return 'Hello, OpenDurian team!';
            }
        },
        {
            method: 'GET',
            path: '/random',
            handler: function (request, h) {

                return `The random is ${Math.random()*10}`;
            }
        },
        {
            method: 'GET',
            path: '/random2',
            handler: function (request, h) {

                return `The random is ${Math.random()*100}`;
            }
        },
        {
            method: 'GET',
            path: '/random3',
            handler: function (request, h) {

                return `The random is ${Math.random()*1000}`;
            }
        },
        {
            method: 'GET',
            path: '/newapi',
            handler: function (request, h) {

                return `Test`;
            }
        }
    ]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
