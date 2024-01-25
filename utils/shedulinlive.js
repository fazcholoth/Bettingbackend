import cron  from 'node-cron'

// Mock array of matches
const allMatches = [
  { id: 1, startTime: new Date('2024-01-25T12:00:00Z') },
  { id: 2, startTime: new Date('2024-01-26T15:30:00Z') },
  // Add more matches as needed
];

// Mock array of scheduled matches
const scheduledMatches = [
  { id: 1, startTime: new Date('2024-01-25T12:00:00Z') },
  // Assume match with ID 2 is not scheduled
];

// Function to check if a match is upcoming and not scheduled
const checkAndScheduleMatch = (match) => {
  const currentTime = new Date();

  // Check if the match is upcoming
  if (match.startTime > currentTime) {
    // Check if the match is not scheduled
    const isNotScheduled = !scheduledMatches.some((scheduledMatch) => scheduledMatch.id === match.id);

    if (isNotScheduled) {
      // Schedule a cron job for the match
      const cronExpression = '0 0 * * *'; // Change this to your desired cron expression
      cron.schedule(cronExpression, () => {
        console.log(`Cron job for match with ID ${match.id}`);
        // Add your cron job logic here
      });

      console.log(`Match with ID ${match.id} scheduled for a cron job.`);
    }
  }
};

// Iterate through the array of matches
allMatches.forEach((match) => {
  checkAndScheduleMatch(match);
});
