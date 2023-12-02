// init Isotope
let $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    let filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });
  
  let filterBtns = $('.filter-button-group').find('button');
  function resetFilterBtns(){
    filterBtns.each(function(){
      $(this).removeClass('active-filter-btn');
    });
  }

// gallery modal
document.addEventListener('click', function (e){
    if(e.target.classList.contains("gallery_item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".img__modal").src = src;
        //const myModal = new bootstrap.Modal(document.getElementById('gallery__modal'));
        $('#gallery__modal').modal('show');
    }
});

$('.btn-close').on('click', function(){
    $('#gallery__modal').modal('hide');
});