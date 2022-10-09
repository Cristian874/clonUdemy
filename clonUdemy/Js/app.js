$(document).ready(function () {
    $(".icono__menu").on("click", function () {
      $("nav").slideToggle();
    });
  });


  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  function monstrarMenu1() {
    document.getElementById('populares').style.display = 'block';

    document.getElementById('nuevos').style.display = 'none';
    document.getElementById('avanzados').style.display = 'none';
   


  }
  function monstrarMenu2() {
    document.getElementById('populares').style.display = 'none';

    document.getElementById('nuevos').style.display = 'block';
    document.getElementById('avanzados').style.display = 'none';
   


  }

  function monstrarMenu3() {
    document.getElementById('populares').style.display = 'none';

    document.getElementById('nuevos').style.display = 'none';
    document.getElementById('avanzados').style.display = 'block';
   


  }

  /* menu dos */

  function uno() {
    document.getElementById('uno').style.display = 'block';

    document.getElementById('dos').style.display = 'none';
    document.getElementById('tres').style.display = 'none';
    document.getElementById('cuatro').style.display = 'none';
    document.getElementById('cinco').style.display = 'none';
    document.getElementById('seis').style.display = 'none';


   


  }
  function dos() {
    document.getElementById('uno').style.display = 'none';

    document.getElementById('dos').style.display = 'block';
    document.getElementById('tres').style.display = 'none';
    document.getElementById('cuatro').style.display = 'none';
    document.getElementById('cinco').style.display = 'none';
    document.getElementById('seis').style.display = 'none';


   


  }
  function tres() {
    document.getElementById('uno').style.display = 'none';

    document.getElementById('dos').style.display = 'none';
    document.getElementById('tres').style.display = 'block';
    document.getElementById('cuatro').style.display = 'none';
    document.getElementById('cinco').style.display = 'none';
    document.getElementById('seis').style.display = 'none';


   


  }
  function cuatro() {
    document.getElementById('uno').style.display = 'none';

    document.getElementById('dos').style.display = 'none';
    document.getElementById('tres').style.display = 'none';
    document.getElementById('cuatro').style.display = 'block';
    document.getElementById('cinco').style.display = 'none';
    document.getElementById('seis').style.display = 'none';


   


  }

  function cinco() {
    document.getElementById('uno').style.display = 'none';

    document.getElementById('dos').style.display = 'none';
    document.getElementById('tres').style.display = 'none';
    document.getElementById('cuatro').style.display = 'none';
    document.getElementById('cinco').style.display = 'block';
    document.getElementById('seis').style.display = 'none';


   


  }

  function seis() {
    document.getElementById('uno').style.display = 'none';

    document.getElementById('dos').style.display = 'none';
    document.getElementById('tres').style.display = 'none';
    document.getElementById('cuatro').style.display = 'none';
    document.getElementById('cinco').style.display = 'none';
    document.getElementById('seis').style.display = 'block';


   


  }