// Navbar tab and mobile
let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active')
}

// Video switch
document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
  btn.onclick = () =>{
    let src = btn.getAttribute('data-src')

    document.querySelector('.about .video-container .video').src = src
  }
})

// OWL CAROUSEL AUTOPLAY
let owl = $('.owl-carousel');
owl.owlCarousel({
    items:8, 
  
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});