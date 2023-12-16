$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });

  document.addEventListener('DOMContentLoaded', function() {
   var downloadBtn = document.getElementById('downloadLink');

   downloadBtn.addEventListener('click', function() {
       // Replace 'cv.pdf' with the actual path to your CV file
       var cvFilePath = 'Ritik_CV.pdf';

       // Create an anchor element
       var anchor = document.createElement('a');

       // Set the download attribute and file path
       anchor.setAttribute('download', 'cv.pdf');
       anchor.setAttribute('href', cvFilePath);

       // Trigger a click on the anchor element
       anchor.click();
   });
});

function redirectToAboutMe() {
   // Get the element with id "About_me"
   var aboutMeSection = document.getElementById('About_me');

   // Check if the element exists
   if (aboutMeSection) {
       // Scroll to the element
       aboutMeSection.scrollIntoView({ behavior: 'smooth' });
   }
}
