require('dotenv').config();
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const axios = require('axios');

let answerData = {
  username: '',
  password: '',
  returnData: {},
}

async function signInUser(username, password) {
  let requestConfig = {
    method: 'get',
    baseURL: process.env.BASE_URL,
    url: '/getUserData',
    auth: {
      username: username,
      password: password
    }
  }
  answerData.returnData = await axios(requestConfig);
}

async function signUpUser(username, password) {
  let requestConfig = {
    method: 'post',
    baseURL: process.env.BASE_URL,
    url: '/signup',
    auth: {
      username: username,
      password: password
    }
  }
  answerData.returnData = await axios(requestConfig);
}

rl.question("Do you have an account? (please enter 'yes' or 'no') ", function (createdAct) {
  let createdActStr = createdAct.toLowerCase().trim();
  if (createdActStr === 'yes') {
    // Get credentials for logging in existing user
    rl.question("What is your username? ", function (username) {
      answerData.username = username;
      rl.question("What is your password? ", async function (password) {
        answerData.password = password;
        // Axios request receiving user data
        signInUser();
      });
    });
  } else {
    // Get credentials to make an account
    rl.question("What is your username? ", function (username) {
      answerData.username = username;
      rl.question("What is your password? ", async function (password) {
        answerData.password = password;
        // Axios request making account
        signUpUser();
      });
    });
  }
});

console.log(answerData.returnData);
