// popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// slick slide

$(document).ready(function () {
  $('.autoplay').slick({
    setting: setting - value
  });
});

$('.autoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


// client count-up number
const counterElement1 = document.querySelector('.no-of-client-proj');
const counterElement2 = document.querySelector('.no-of-client');
const counterElement3 = document.querySelector('.no-of-client-staff');
const counterElement4 = document.querySelector('.no-of-client-award');

let count_client_projects = 0;
let count_clients = 0;
let count_client_staff = 0;
let count_client_award = 0;

function updateCounter() {

  // count_client_projects++;
  // count_clients++;
  // count_client_staff++;
  // count_client_award++;

  if (count_client_projects <= 1495) {
    count_client_projects += 5;
    counterElement1.textContent = count_client_projects;
  
  }

  if (count_clients <= 1560) {
    count_clients += 5;
    counterElement2.textContent = count_clients;
   
  }


  if (count_client_staff <= 444) {
    count_client_staff += 2;
    counterElement3.textContent = count_client_staff;

  }

  if (count_client_award <= 36) {
    count_client_award += 2;
    counterElement4.textContent = count_client_award;

  }

  if (count_client_projects <= 1495 || count_clients <= 1560 || count_client_staff <= 445 || count_client_award <= 36) {
    requestAnimationFrame(updateCounter);
  }

}


// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const clientSection = document.querySelector('.client');


  if (isInViewport(clientSection)) {

    setTimeout(() => {
      updateCounter();
    }, 500);

    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);

// testimonial owl carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
        dotsEach:1,
          items:1
      },
      600:{
        dotsEach:1,
          items:1
      },
      1000:{
        dotsEach:1,
          items:1
      }
  }
})


