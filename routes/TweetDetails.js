const express = require('express');
const router = express.Router()

// Gather data from data.json file and parse into object
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json'));

// returns tweet created at, text, and user screen name given a tweet's id
router.get("/:id", (req, res) => {
    // using the find method on a array will help find an object by id
    const tweet = data.find(item => item['id_str'] === req.params['id'])

    // Edge case: throw a error response that the tweet id does not exist with appropraite message and status
    if (tweet === undefined) {
        res.status(404)
        res.send({
            status: 404,
            error_message: 'The tweet with id ' + req.params['id'] + ' does not exist',
            path: '/tweet-details'
        })
    }
    // tweet found
    else {
        const body = {
            created_at: tweet['created_at'],
            text: tweet['text'],
            user_screen_name: tweet['user']['screen_name']
        }
    
        res.status(200);
        res.send(body);
    }
});

module.exports = router;