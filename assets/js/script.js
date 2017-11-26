$(document).ready(function() {



	$('.quote').typeIt({
  	speed: 50,
  	loop:true,
  	loopDelay:300,
    breakLines:true
	});




  // jQuery Function Number 1
  $(".general").hover(function(){

    	let a = this.id.slice(4,5);
        let imgname = 'assets/img/entry' + a +'.jpg';

        $(".box").toggleClass("box-change");

          // jQuery Function Number 2
        	$(this).css("background", "rgba(207,197,173,.88)");
       		// $(this).css("font-weight","420");

       		document.getElementById("entrybg").src = imgname;


      }, function(){

        $(this).css("background", "rgba(207,197,173,.7)");
        // clearTimeout(setTimeoutConst);

  });



  var num = 1;

  // jQuery Function Number 3
  $("#carousel-next").click(function(){

      let marg = parseInt($('#carousel').css('margin-left').replace("px", ""));

      if (marg == -3840) {
        console.log("false");

      } else {

        let cur = marg - 960;
        $('#carousel').css('margin-left', cur);

        // jQuery Function Number 4
        if ($(".info").hasClass("info-active")) {

          // jQuery Function Number 5
          $('#viewmore').removeClass("viewmore-active");

          // jQuery Function Number 6
          $('#viewmore').addClass("viewmore-o");
          $('.info').removeClass("info-active");

          let te = '#m' + num.toString();

          // jQuery Function Number 7
          $(te).fadeOut();


        } else {

          console.log('no change');

        }
      
        num = num + 1;

      }

  });




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

      // jQuery Function Number 8
      $(te).fadeIn();


    }

  });





  $(".checkitem").click(function(){

    if ($(this).hasClass("check-active")) {

      $(this).removeClass("check-active");

    } else {

     $(this).addClass("check-active");

    }

  });





  var addct = 2;

  $('.inputitem').click(function(){

    var x = document.getElementById("frm1");
    var temp = x.elements[0].value;
    var itemnew = "<div class='sty checkitem"+ addct + "'>&#8226 " + temp + "</div>";
    
    // jQuery Function Number 9
    $("#listwrap").append(itemnew);


    $(".checkitem" + addct).click(function(){

      if ($(this).hasClass("check-active")) {

        $(this).removeClass("check-active");

      } else {

        $(this).addClass("check-active");

      }

    });

    addct += 1;

  });







}) 













