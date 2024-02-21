const express = require('express');
const router = express.Router()

// Gather data from data.json file and parse into object
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json'));

// returns the detailed profile including location, description, follower count, and friend count given a user's screen name
router.get("/:screen_name", (req, res) => {
    // using the find method on a array will help find an user by their matching screen name, even if key is nested
    const profile = data.find(item => item.user?.screen_name === req.params['screen_name'])

    // check if profile is not found
    if (profile === undefined) {
        res.status(404)
        res.send({
            status: 404,
            error_message: 'Profile with screen name ' + req.params['screen_name'] + ' does not exist',
            path: '/profile'
        })
    }
    // profile found
    else {
        const body = {
            location: profile['user']['location'],
            description: profile['user']['description'],
            followers_count: profile['user']['followers_count'],
            friends_count: profile['user']['friends_count']
        }

        res.status(200);
        res.send(body);
    }
});

module.exports = router;