import cron from 'node-cron'
import axios from 'axios'


const apiUrl = 'https://example.com/api';

// Define your cron schedule (runs every day at midnight)
const cronSchedule = '30 2 * * *';

// Function to make the API call
const makeApiCall = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log('API response:', response.data);
  } catch (error) {
    console.error('Error making API call:', error.message);
  }
};

// Schedule the job
cron.schedule(cronSchedule, () => {
  console.log('Running daily job...');
  makeApiCall();
});
