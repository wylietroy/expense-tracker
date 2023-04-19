const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

async function create(req, res) {
    try {
        // Add the user to the database
        const user = await User.create(req.body);
        // token will be a string
        const token = createJWT(user);
        // Yes, we can use res.json to send back just a string
        // The client code needs to take this into consideration
        res.json(token);
        
      } catch (err) {
        // Client will check for non-2xx status code 
        // 400 = Bad Request
        console.log(err);
        res.status(400).json(err);
      }
    console.log("This is the body", req.body);
  }

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  } 

async function login(req, res) {
  // req.body = {email & password}
  try {
    // check DB for matching email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    // check if password matches
    const match = await bcrypt.compare(req.body.password, user.password);
    // If it doesn't respond with error. throw triggers catch block
    if (!match) throw new Error();
    // If it does create a token and respond with it
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

module.exports = {
    create,
    login,
};



