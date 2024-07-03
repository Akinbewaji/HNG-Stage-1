document.addEventListener('DOMContentLoaded', function() {
    // Function to update the current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(-12, -4);
        document.getElementById('utcTime').textContent = utcTime;
    }

    // Function to update the current day of the week
    function updateDay() {
        const now = new Date();
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
        document.getElementById('dayOfWeek').textContent = dayOfWeek;
    }

    updateTime();
    updateDay();
    setInterval(updateTime, 60000); // Update the time every minute
});

