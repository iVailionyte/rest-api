const express = require('express');

const app = express();

const router = express.Router();

const users = [
    {
        "id": "2976a4e8-9f2f-4a45-9f9f-5a56dd47b1ca",
        "name": "jenny-doe"
    },
    {
        "id": "6a034cbd-88b8-4e9e-b94d-cfdab7c06b9b",
        "name": "john-doe"
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
            "name": "jane-doe"
        };
        
        users.push(user);

        response.json({
            user: user,
        })
    });

router.route('/api/v1/users/:id')
    .get((request, response) => {
        const singleUser = users.find(function(single) {
            return single.name === request.params.id;
        });

        response.json({
            user: singleUser,
        })
    })

app.use(router);

app.listen(3000);