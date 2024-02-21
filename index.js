const express = require('express'); 
const app = express(); 
const PORT = 3000; 

// Add all routes to main app, its best to split routes into seperate files for scalability and good design
// To see the code of each route, check the routes folder
const tweetsRoute = require('./routes/Tweets');
const linksRoute = require('./routes/Links');
const tweetDetailsRoute = require('./routes/TweetDetails');
const profileRoute = require('./routes/Profiles');

app.use('/tweets', tweetsRoute);
app.use('/links', linksRoute);
app.use('/tweet-details', tweetDetailsRoute);
app.use('/profile', profileRoute);


// Default code for root of the server
app.get('/', (req, res)=>{ 
    res.status(200);
    res.send("Welcome to the root of localhost:" + PORT); 
});

app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is listening on port " + PORT)
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 