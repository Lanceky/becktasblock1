
}

// Example: Add buttons to navigate
const prevButton = document.createElement('button');
prevButton.textContent = 'Previous';
prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));

const sliderSection = document.querySelector('.testimonial-slider-section');
sliderSection.appendChild(prevButton);
sliderSection.appendChild(nextButton);
// const images = document.querySelectorAll('img.tes__icon');
// if (images.length >= 3) {
//   const thirdImageHeight = images[2].getBoundingClientRect().height;
//   for (let i = 0; i < 2; i++) {
//     images[i].style.height = `${thirdImageHeight}px`;
//   }
// }
document.addEventListener('DOMContentLoaded', function() {
  // Select the header container where the logo should be added
  var headerContainer = document.querySelector('.header-container');

  if (headerContainer) {
    // Create a div to hold the logo
    var logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');

    // Create the image element for the logo
    var logoImg = document.createElement('img');
    logoImg.src = 'images/main logo.jpg'; // Update the path if needed
    logoImg.alt = 'Bektas Blocks Logo';
    logoImg.style.maxHeight = '80px'; // Adjust the height as desired

    // Append the image to the logo container
    logoDiv.appendChild(logoImg);

    // Insert the logo before the site title if it exists
    var siteTitle = headerContainer.querySelector('.site-title');
    if (siteTitle) {
      headerContainer.insertBefore(logoDiv, siteTitle);
    } else {
      // Otherwise, simply add it to the beginning of the header container
      headerContainer.prepend(logoDiv);
    }
  }
});


