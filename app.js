function toggleAccordion(contentId, triggerElement) {
    var contentElement = document.getElementById(contentId);
    var icon = triggerElement.querySelector('.accordion-icon');
  
    if (contentElement.style.display === "block") {
      contentElement.style.display = "none";
      icon.classList.remove('rotate');
    } else {
      contentElement.style.display = "block";
      icon.classList.add('rotate');
    }
  }
  