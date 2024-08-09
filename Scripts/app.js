const dayNightContainer = document.querySelector('.day-night-container')

// Toggles between dark and light themes
document.querySelector('.theme-switch-btn').addEventListener
('click', () => {
   document.body.classList.toggle('dark');
   const currentRotation = parseInt(getComputedStyle(dayNightContainer)
   .getPropertyValue('--rotation'))
   dayNightContainer.style.setProperty('--rotation', currentRotation + 180)
});