const scrollContainer = document.getElementById('scrollContainer');
const daysContainer = document.getElementById('daysContainer');

scrollContainer.addEventListener('wheel', (e) => {
  // Calculate and update the scroll position based on the mouse wheel movement
  daysContainer.scrollLeft += e.deltaY;
  // Prevent the default scroll behavior
  e.preventDefault();
});
