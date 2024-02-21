const express = require('express');
const router = express.Router()

// Gather data from data.json file and parse into object
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json'));

// returns id and all external links for all tweets
router.get("/", (req, res) => {
    const linkRegex = /https?:\/\/[^\s]+/g

    // map every object to grab the id of a tweet, and the external links within the text using regex
    /* external_links will be returned as an array if there are multiple links. Multiple links can be found
    by using match all, and passing in a regex*/
    const body = data.map((item) => {
        obj = {
            id: item['id'],
            external_links: Array.from(item['text'].matchAll(linkRegex), (match) => match[0])
        }

        return obj;
    });

    res.status(200);
    res.send(body);
});

module.exports = router;
