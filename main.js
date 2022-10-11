var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var accDiv = this.nextElementSibling;
      if (accDiv.style.display === "block") {
        accDiv.style.display = "none";
      } else {
        accDiv .style.display = "block";
      }
    });
  }



