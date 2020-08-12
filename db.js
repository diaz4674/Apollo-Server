const Sequelize = require("sequelize");
require("dotenv").config();

const twitScrapeDb = new Sequelize(`${process.env.TWEET_DB}`);

twitScrapeDb
  .authenticate()
  .then(() => {
    console.log("connected to Twitter db");
  })
  .catch((err) => {
    console.log("error could not connect to Twitter db");
  });

const Org = twitScrapeDb.define("Org", {
  orgName: {
    type: Sequelize.STRING,
  },
});

const Tweets = twitScrapeDb.define("Tweets", {
  tweet: { type: Sequelize.ARRAY(Sequelize.TEXT) },
  tweetWritten: { type: Sequelize.STRING },
});

module.exports.Org = Org;
module.exports.Tweets = Tweets;
