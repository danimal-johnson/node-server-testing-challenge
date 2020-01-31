const Users = require('./users-model.js');
const db = require('../data/dbConfig.js');

describe("Users model", function () {

  describe ("test environment", function() {
    it("should use the testing environment", function() {
      expect(process.env.DB_ENV).toBe("testing");
    })
  });

  describe("add()", function() {
    beforeEach(async () => {
      await db('users').truncate();
    });
    it("adds a new user to the database", async function() {
      await Users.add( {
        username: "inspector",
        password: "gadget",
        department: "cartoon" });
      await Users.add( {
        username: "speedy",
        password: "gonzales",
        department: "cartoon" });

        const users = await db('users');
        expect(users).toHaveLength(2);
    });
  });
});