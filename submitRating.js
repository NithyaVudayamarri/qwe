function submitRating(e) {
  e.preventDefault();
  var ratingf = getInputVal('ratingf');
  saveMessagef(ratingf);
  document.getElementById('ratingss').reset();
}
