const sportsSelect = document.getElementById("sports");

  sportsSelect.addEventListener("change", function() {
    const selectedOption = sportsSelect.options[sportsSelect.selectedIndex];
    const url = selectedOption.getAttribute("data-url");

    if (url && url !== "") {
      window.location.href = url; // Redirect to the selected URL
    }
  });