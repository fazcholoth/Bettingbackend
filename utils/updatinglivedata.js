const cron = require('node-cron');
const axios = require('axios');

// Define your API endpoint
const apiUrl = 'https://example.com/api/status';

// Schedule a cron job to run every 5 minutes
const cronExpression = '*/5 * * * *';

const cronJob = cron.schedule(cronExpression, async () => {
  try {
    // Make an API request
    const response = await axios.get(apiUrl);

    // Check the status in the response
    const { status } = response.data;

    if (status === 'finished') {
      console.log('API response indicates finished status. Stopping cron job.');
      cronJob.stop(); // Stop the cron job if the condition is met
    } else {
      console.log('API response status:', status);
      // Continue with any other logic based on the response
    }
  } catch (error) {
    console.error('Error making API request:', error.message);
  }
});

// Handle cron job stop event (optional)
cronJob.on('stop', () => {
  console.log('Cron job has been stopped.');
});

// Start the cron job
cronJob.start();
