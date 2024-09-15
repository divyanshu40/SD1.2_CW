// Exercise 1: Initializing Project
let express = require("express");
let cors = require("cors");
let app = express();
let PORT = 3000;
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
    console.log("This server is running");
});
const users = [
    {
      id: 1,
      username: 'octocat',
      name: 'The Octocat',
      repoCount: 8,
      location: 'San Francisco',
    },
    {
      id: 2,
      username: 'torvalds',
      name: 'Linus Torvalds',
      repoCount: 25,
      location: 'Portland',
    },
    {
      id: 3,
      username: 'gaearon',
      name: 'Dan Abramov',
      repoCount: 50,
      location: 'London',
    },
    {
      id: 4,
      username: 'addyosmani',
      name: 'Addy Osmani',
      repoCount: 42,
      location: 'Mountain View',
    },
    {
      id: 5,
      username: 'tj',
      name: 'TJ Holowaychuk',
      repoCount: 150,
      location: 'Victoria',
    },
  ];
  // function to get all users
  function getAllUsers() {
    return {users};
  }
  // function to get user by id.
  function getUserById(id) {
   let user = users.find((ele) => ele.id === id);
   if (! user) {
    return null;
   } else {
    return { user };
   }
  }

  // Exercise 2: Get all users
  app.get("/users", (req, res) => {
    try {
        let result = getAllUsers();
        if (result.users.length === 0) {
            return res.status(404).json({ error: "No users found"});
        }
        return res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  });
// Exercise 3: Get user by ID
app.get("/users/:id", (req, res) => {
    let id = parseInt(req.params.id);
    try {
        let result = getUserById(id);
        if (result === null) {
            return res.status(404).json({ error: "User not found"});
        }
        return res.status(200).json(result);
    } catch (error) {
        req.status(500).json({ error: error.message });
    }
});