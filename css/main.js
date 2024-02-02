window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".top-navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Counter Animation Function
function animateValue(element, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(function () {
    current += increment;
    element.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Function to start counter animations
function startCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const endValue = parseInt(counter.innerText, 10);
    animateValue(counter, 0, endValue, 2000); // 2000ms (2 seconds) duration for each counter
  });
}

// Run the counter animation when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  startCounters();
});
