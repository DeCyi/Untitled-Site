window.onload = function() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var greeting;
  
    if (currentHour < 12) {
      greeting = "Good morning!";
    } else if (currentHour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
  
    document.getElementById("demo").innerHTML = greeting;
  };