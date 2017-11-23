$(document).ready(function() {

  var num = 1;

	  $('.quote').typeIt({
    	speed: 50,
    	loop:true,
    	loopDelay:300,
      breakLines:true
  	});





	// var delay=300, setTimeoutConst;

    $(".general").hover(function(){

    	let a = this.id.slice(4,5);
        let imgname = 'assets/img/entry' + a +'.jpg';

        $(".box").toggleClass("box-change");

        	$(this).css("background", "rgba(207,197,173,.85)");
       		// $(this).css("font-weight","420");

        	

       		document.getElementById("entrybg").src = imgname;


    }, function(){

    	$(this).css("background", "rgba(207,197,173,.7)");
    	// clearTimeout(setTimeoutConst);

    });





     $("#carousel-next").click(function(){

      let marg = parseInt($('#carousel').css('margin-left').replace("px", ""));

      if (marg == -3840) {
        console.log("false");

      } else {

      let cur = marg - 960;
      $('#carousel').css('margin-left', cur);

      if ($(".info").hasClass("info-active")) {

        $('#viewmore').removeClass("viewmore-active");
        $('#viewmore').addClass("viewmore-o");
        $('.info').removeClass("info-active");

        let te = '#m' + num.toString();
        $(te).fadeOut();




      } else {

        console.log('no change');



      }

      
      num = num + 1;
      setTimeout(function() {
        $('body').addClass('no-scroll');
       }, 300);

      }

  });



  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function(){

      let marg = parseInt($('#carousel').css('margin-left').replace("px", ""));

      if (marg == 0) {
        console.log("false");

      } else {
      
      let cur = marg + 960;
      $('#carousel').css('margin-left', cur);

      if ($(".info").hasClass("info-active")) {

        $('#viewmore').removeClass("viewmore-active");
        $('#viewmore').addClass("viewmore-o");
        $('.info').removeClass("info-active");

        let te = '#m' + num.toString();
        $(te).fadeOut();

      } else {

        console.log('no change');
      }


      num = num - 1;
      }


  });




 $("#viewmore").click(function(){

  let te = '#m' + num.toString();

  if ($(".info").hasClass("info-active")) {

    $('#viewmore').removeClass("viewmore-active");
    $('#viewmore').addClass("viewmore-o");
    $('.info').removeClass("info-active");
    $(te).fadeOut();


  } else {

    $('#viewmore').removeClass("viewmore-o");
    $('#viewmore').addClass("viewmore-active");
    $('.info').addClass("info-active");
    $(te).fadeIn();


  }

  });










}) 













