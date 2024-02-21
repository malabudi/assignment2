const express = require('express');
const router = express.Router()

// Gather data from data.json file and parse into object
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json'));

// returns create time, id, and text of the tweet for all tweets
router.get("/", (req, res) => {
    // map every object to have only created_at, id, and text for each tweet and save it into body variable then return
    const body = data.map((item) => {
        obj = {
            create_time: item['created_at'],
            id: item['id'],
            tweet_text: item['text']
        }

        return obj;
    });

    res.status(200);
    res.send(body);
});

module.exports = router;
