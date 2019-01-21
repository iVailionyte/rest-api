const express = require('express');

const app = express();

const router = express.Router();

router.route('/api/v1/users')
.get((request, response) => {
    const users = {
        "users": [
          {
            "id": "2976a4e8-9f2f-4a45-9f9f-5a56dd47b1ca",
            "name": "Jenny Doe"
          },
          {
            "id": "6a034cbd-88b8-4e9e-b94d-cfdab7c06b9b",
            "name": "John Doe"
          }
        ]
      };

    response.json({
        users: users,
    });
})


app.use(router);


app.listen(3000);

