const express = require('express');

const app = express();

const router = express.Router();

const users = [
    {
        "id": "2976a4e8-9f2f-4a45-9f9f-5a56dd47b1ca",
        "name": "Jenny Doe"
    },
    {
        "id": "6a034cbd-88b8-4e9e-b94d-cfdab7c06b9b",
        "name": "John Doe"
    }
];

router.route('/api/v1/users')
    .get((request, response) => {
        response.json({
            users: users,
        })
    })

    .post((request, response) => {
        const user = {
           "id": "2976a4e8-9f2f-4a45-9f9f-5a56dd47b1bb",
            "name": "Jane Doe"
        };
        
        users.push(user);

        response.json({
            user: user,
        })
    });

app.use(router);

app.listen(3000);