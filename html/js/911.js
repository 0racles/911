var app = (function () {
var 
i=0,
autorized = document.getElementById("autorized"),
autorized2 = document.getElementById("autorized2"),
autorized3 = document.getElementById("autorized3"),
validate1 = document.getElementById("validate1"),
validate2 =document.getElementById("validate2"),
play =document.querySelectorAll(".play"),
//play = document.getElementById("play"),
play2 = document.getElementById("play2"),
play3 = document.getElementById("play3"),
go_btn = document.querySelectorAll(".btns"),
back = document.querySelectorAll(".back"),
avataro = document.querySelectorAll(".avataro")[0],
head = document.getElementById("head"),
send_invite = document.getElementById("send_invites"),
upload_conatact = document.getElementById("upload_conatact"),
form = document.querySelectorAll(".form")[0],
open_settings,
perform_validation,
sign_in,
div,
go_back,
go_back2,
go_back3,
send_invites,
span,
span_2,
span_3,
// dropdown for microphone settings

open_settings = function() {
   autorized.classList.remove("none");
   //gogo.classList.remove("none");
},

// if mic settings passed, go touser settings 

//if user settings passed, go to add contacts using slider revolution 
sign_in = function (event) {
    
    autorized.insertAdjacentHTML("beforebegin", "<ul><li data-transition='slideout' data-slotamount='2' data-masterspeed='100'><div class='tp-caption lft fadeout rs-parallaxlevel-1' data-x='950' data-y='510' data-speed='100' data-start='0' data-easing='Power4.easeOut'></div></li></ul>");
    autorized2.classList.remove("none");
    
   },

   invite_contacts = function () {
    if ((validate1.value && validate2.value) === "") { 
           validate1.placeholder = "enter full names";
           validate2.placeholder = "enter unique password";
           validate1.style.border = "1px solid red";
           validate2.style.border = "1px solid red";
       } else {
      autorized3.classList.remove("none");
      }
   },

// this is to close and open move the log in slides
   
   go_back = function () {
   autorized.classList.add("none");
   },

   go_back2 = function () {
   autorized2.classList.add("none");
   },

   go_back3 = function () {
   autorized3.classList.add("none");
   },

   go_back4 = function () {
   autorized4.classList.add("none");
   },

   invite_friends = function () {
    autorized4.classList.remove("none");
   },

   // send invites to friends

   send_invites = function () {
    var parg = head.parentNode;

  if (!autorized3.classList.contains("none")) {
      avataro.parentNode.removeChild(avataro);
      upload_conatact.parentNode.removeChild(upload_conatact);
      send_invite.parentNode.removeChild(send_invite);

  span = "<span style='font-size:40px;font-weight:500;position:absolute;left:10%;'></span><p class='container avatari' id='take_text' style='text-align:center;'>Hey! would you like to try out this cool App with me. We can look out for each other and keep safe <a href='#'>Check it out</a></p>",
  span_2 = "<a href='report_page.html' class='btn btn-success' id='first_btn'></a>";
  span_3 = "";
  form.insertAdjacentHTML("beforeend", span);
  form.insertAdjacentHTML("beforeend", span_2); 
  parg.replaceChild('<h3>Compose Message<span></span></h3>', head);
  }

  /*h3_take.textContent = "";
  take_text.classList.remove("loading");
  if (msg_parser) {
  
  remove_quota()
  } else {
  span = "<span class='fa fa-times' style='color:red;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Message Not sent. Try Again</p>";
  span_2 = "<a href='report_page.html' class='btn btn-warning' id='first_btn'>continue</a>";
  parent.insertAdjacentHTML("beforeend", span);
  parent.insertAdjacentHTML("beforeend", span_2);
      }*/
   },

	init = function () {
    for (i; i < go_btn.length; i++) {
		go_btn[i].addEventListener("click", open_settings);
  }
    back[0].addEventListener("click", go_back);
    back[1].addEventListener("click", go_back2);
    back[2].addEventListener("click", go_back3);
    back[3].addEventListener("click", go_back4);
		play[0].addEventListener("click", sign_in);
		play[1].addEventListener("click", invite_contacts);
    play[2].addEventListener("click", invite_friends)
    play[3].addEventListener("click", send_invites);
	};

	return {
		init : init
	};
}());
app.init();