const cron = require('node-cron');
const axios = require('axios');

// Set your cron expression
const cronExpression = '*/5 * * * *'; // Example: Run every 5 minutes

// Function to start the cron job
const startCronJob = () => {
  const cronJob = cron.schedule(cronExpression, async () => {
    try {
      // Make an API request
      const response = await axios.get(apiUrl);

      // Check the status in the response
      const { status } = response.data;

      if (status === 'finished') {
        console.log('API response indicates finished status. Waiting for 15 minutes before restarting.');

        // Wait for 15 minutes (900,000 milliseconds)
        setTimeout(() => {
          console.log('Restarting cron job after 15 minutes.');
          cronJob.stop();
          startCronJob(); // Restart the cron job
        }, 900000);
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
};

// Start the initial cron job
startCronJob();
