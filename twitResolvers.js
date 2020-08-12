const { Org, Tweet } = require("./db");

module.exports = {
  Query: {
    allOrgs: () => Org.findAll({ attributes: "orgName" }),
  },
};
