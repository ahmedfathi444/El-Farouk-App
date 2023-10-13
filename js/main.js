
$("a[href^='#']").click(   function(){


    $(this).css('color','rgba(214, 46, 51, 0.6)');
    $("a[href^='#']").not($(this)).css('color','#fff')

   console.log( $(this).attr('href'));

    let heightSectionTop = $(`${$(this).attr('href')}`).offset().top;

    console.log(heightSectionTop);

    // // $(window).scrollTop(`${heightDurationTop}`,2000);

    $("html","body").animate({ scrollTop: `${heightSectionTop}` } ,5000)


})














// -------------------Start Home-----------------------
let sideWidth =$('.sidebarInner').innerWidth();
$('#sideBar').css('left',-sideWidth)

$('#openSideBar').click(function(){

    $('#sideBar').animate({left:`0px`}) 
})


$('.closeSideBar').click(function(){

    let sideWidth =$('.sidebarInner').innerWidth();
    $('#sideBar').animate({left:`-${sideWidth}`})

})
// ----------------------------End Home------------------


// ---------------------Start Section 2-----------------------

$('#signerOneContent').show()

$('.sliderDown h4').click(  function(){

 $(this).next().slideToggle();

 $('.sliderDown div').not($(this).next()).slideUp();
})

// ---------------------End Section 2--------------------------


// ------------------------Start Section 3---------------------


// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"

//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

let temp=`                <div class="col-md-3 ">
<div class="item mx-auto text-white fs-1 fw-bold d-flex justify-content-center align-items-center">
    -${days} D
</div>
</div>
<div class="col-md-3 ">
<div class="item mx-auto text-white fs-1 fw-bold d-flex justify-content-center align-items-center">
    ${hours}h
</div>
</div>
<div class="col-md-3 ">
<div class="item mx-auto text-white fs-1 fw-bold d-flex justify-content-center align-items-center">
    ${minutes}m
</div>
</div>
<div class="col-md-3 ">
<div class="item mx-auto text-white fs-1 fw-bold d-flex justify-content-center align-items-center">
    ${seconds}s
</div>
</div>`

document.getElementById("demo").innerHTML = temp;

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// -------------------------End Section 3--------------------------


// --------------------------Start Section 4----------------------

$('textarea').keyup(   function(){

let myMessegeLength= $('textarea').val().length;  //1

let myMessege = 100-myMessegeLength //

if(myMessege > 0){

    $('.countMessege').text(`${myMessege}`)
}
else{
    $('.countMessege').text('your available character finished')
}
})
// ---------------------------End Section 4--------------------------























// --------------------------End Section 4-------------------------