
  document.querySelector('.terms-link').addEventListener('click', function(event) {
    event.preventDefault(); 

    setTimeout(function() {
      document.querySelector('#section-one').scrollIntoView({
        behavior: 'smooth', 
        block: 'start'      
      });
    }, 2000); 
  });

