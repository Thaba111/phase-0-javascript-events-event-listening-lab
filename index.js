function addingEventListener() {
    // Grab the element with the id "input"
    const input = document.getElementById('input');
  
    // Define the callback function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the click event listener
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to set up the event listener
  addingEventListener();
  