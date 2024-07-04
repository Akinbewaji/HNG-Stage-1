document.addEventListener('DOMContentLoaded', function() {
    // Function to update the current time and date in GMT+1
    function updateTimeAndDate() {
        const now = new Date();
        const options = {
            timeZone: 'Europe/London',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        const optionsDate = {
            weekday: 'long',
        };
        const gmtPlus1Time = now.toLocaleString('en-GB', options);
        const gmtPlus1Date = now.toLocaleString('en-GB', optionsDate);
        
        document.getElementById('gmtPlus1Time').textContent = gmtPlus1Time;
        document.getElementById('gmtPlus1Date').textContent = gmtPlus1Date;
    }

    updateTimeAndDate();
    setInterval(updateTimeAndDate, 1000); // Update the time every second
});
