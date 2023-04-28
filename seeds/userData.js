const { User } = require('../models');

const userData = [{
        username: 'Jacone97',
        password: '12345678'

    },
    {
        username: 'Fish23',
        password: 'abcdefghi'
    },
    {
        username: 'Surfer22',
        password: 'bigwaves'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;