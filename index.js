// index.js
const axios = require('axios');

const API_URL = 'https://gannapy.onrender.com/docs';

async function callApi() {
  try {
    const response = await axios.get(API_URL);
    console.log(`API called successfully at ${new Date().toISOString()}`);
    console.log('Response:', response.data);
  } catch (error) {
    console.error(`Error calling API at ${new Date().toISOString()}:`, error.message);
  }
}

// Call the API immediately upon startup
callApi();

// Set interval to call the API every 30 seconds
setInterval(callApi, 30 * 1000);
