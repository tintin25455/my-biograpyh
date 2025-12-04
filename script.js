// Function to display a dynamic greeting based on time of day
function setGreeting() {
    const heroGreeting = document.getElementById('dynamic-greeting');
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    if (heroGreeting) {
        heroGreeting.textContent = greeting;
    }
}

// Function to toggle Dark Mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    // Change button text based on mode
    const btn = document.getElementById('theme-btn');
    if (body.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Light Mode";
    } else {
        btn.textContent = "🌙 Dark Mode";
    }
}

// Run the greeting function when the page loads
window.onload = setGreeting;
