const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle registration form submission
app.post('/register', (req, res) => {
  // Read the existing user data from the JSON file
  const userData = JSON.parse(fs.readFileSync('./userData.json'));

  // Generate a unique ID for the new user
  const newUserId = userData.users.length + 1;

  // Create a new user object
  const newUser = {
    id: newUserId,
    fullName: req.body.fullName,
    email: req.body.email,
    sex: req.body.sex,
    age: req.body.age,
    country: req.body.country,
    password: req.body.password,
  };

  // Add the new user to the existing user data
  userData.users.push(newUser);

  // Write the updated user data back to the JSON file
  fs.writeFileSync('./userData.json', JSON.stringify(userData, null, 2));

  res.send('Registration successful!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
