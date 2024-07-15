document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '9e4d96270c2a4767a3a102422241407';
    const city = 'PUNE';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].main.toLowerCase();
            const header = document.getElementById('header');

            if (weather.includes('rain')) {
                header.classList.add('rainy');
                const rainAnimation = document.createElement('div');
                rainAnimation.className = 'rain-animation';
                header.appendChild(rainAnimation);
            }

            // Add conditions for other weather types...
        })
        .catch(error => console.error('Error fetching weather data:', error));
});

/**
 * Shows a specific content section based on the given sectionId.
 * Hides all other content sections and removes the 'active' class from them.
 * Adds the 'active' class to the specified section.
 *
 * @param {string} sectionId - The id of the content section to be shown.
 * @returns {void}
 */
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
        activeSection.classList.add('active');
    }
}
