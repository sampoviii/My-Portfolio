// This function filters the gallery items based on the selected type.
// It is called when the user clicks one of the filter buttons (All, Photos, Videos).
function filterGallery(type) {

  // Get all gallery items (photo and video containers)
  var items = document.querySelectorAll('.gallery-item');

  // Get all filter buttons
  var buttons = document.querySelectorAll('.filter-btn');

  // Remove the 'active' class from all buttons first
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  // Add the 'active' class to the button that was clicked
  if (type === 'all') {
    buttons[0].classList.add('active');
  } else if (type === 'photo') {
    buttons[1].classList.add('active');
  } else if (type === 'video') {
    buttons[2].classList.add('active');
  }

  // Loop through all gallery items and show or hide them
  for (var i = 0; i < items.length; i++) {

    // If 'All' is selected, show everything
    if (type === 'all') {
      items[i].style.display = '';

    // If the item's data-type matches the selected filter, show it
    } else if (items[i].getAttribute('data-type') === type) {
      items[i].style.display = '';

    // Otherwise, hide the item
    } else {
      items[i].style.display = 'none';
    }
  }
}
