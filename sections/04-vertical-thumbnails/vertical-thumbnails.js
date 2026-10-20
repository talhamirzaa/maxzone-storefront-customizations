// Add this script in main-product.liquid, at the end of the file

function syncWidthToHeight() {
  const sourceElement = document.querySelector('.product__media');
  const targetElement = document.querySelector('.grid__item.product__media-wrapper slider-component.thumbnail-slider');

  if (sourceElement && targetElement) {
    const sourceHeight = sourceElement.offsetHeight;
    targetElement.style.width = `${sourceHeight}px`;
  }
}

function resetThumbnailWidth() {
  const targetElement = document.querySelector('.grid__item.product__media-wrapper slider-component.thumbnail-slider');
  if (targetElement) {
    targetElement.style.width = ''; // Reset to default
  }
}

const mediaQuery = window.matchMedia('(min-width: 986px)');

function handleViewportChange(e) {
  if (e.matches) {
    syncWidthToHeight(); // Screen is >= 986px
  } else {
    resetThumbnailWidth(); // Screen is < 986px
  }
}

document.addEventListener('DOMContentLoaded', () => {
  handleViewportChange(mediaQuery);
  mediaQuery.addEventListener('change', handleViewportChange);
});

// Optional: run on resize for fine control
window.addEventListener('resize', () => {
  if (mediaQuery.matches) {
    syncWidthToHeight();
  }
});
