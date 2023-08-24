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

                return 'Hello, DevOps Team EGAT!';
            }
        },
        {
            method: 'GET',
            path: '/Benzasdfasdf',
            handler: function (request, h) {

                return Math.random();
            }
        },
        {
            method: 'GET',
            path: '/age/{year}',
            handler: function (request, h) {
                const birthYear = parseInt(request.params.year);
                const currentYear = new Date().getFullYear();
                const age = currentYear - birthYear;
                return `Your age is ${age} years old`;
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
