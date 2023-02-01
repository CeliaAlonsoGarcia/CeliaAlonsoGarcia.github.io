
  function toggleDisplay(id) {
    var copy = document.getElementById(id);
    if (copy.style.display === "none") {
      copy.style.display = "block";
    } else {
      copy.style.display = "none";
    }
  }