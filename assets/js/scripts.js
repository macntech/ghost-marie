/*
*  	MARIE Ghost Theme
*	blog: macandtech.com 
*	Github: @macntech
*/

/*
******************   DO NOT EDIT THIS FILE  *************************
*                                                                   *
*   You should not edit this file unless it is really necessary     *
*   Enable and edit the custom js file instead			            *
*   (check out the readme file how to do this)                      *
*                                                                   *
*********************************************************************

============================== START Javascript ========================================================================== */


//============= START THEME SWITCHER ========================= //

// theme switch button
const themeSwitcher = document.getElementById("theme-switch");
themeSwitcher.checked = true;

function clickHandler() {

	if (this.checked) {
	  	
		//if dark switch to light
		document.body.setAttribute('data-theme', 'light');
		localStorage.removeItem('marie_data-theme'); //remove item if default
		
	} else {
		// if light switch to dark
		document.body.setAttribute('data-theme', 'dark');
		localStorage.setItem('marie_data-theme', 'dark'); //set local storage
	}
  }
  themeSwitcher.addEventListener("click", clickHandler);



//Reset theme from local Storage13
window.onload = checkTheme();

function checkTheme() {

	  const localStorageTheme = localStorage.getItem("marie_data-theme"); //get theme from local storage

	  if(localStorageTheme !== null && localStorageTheme === "dark"){
		  	document.body.setAttribute("data-theme", "dark"); //set theme to dark if dark -> light is default so do nothing
			themeSwitcher.checked = false;
		}
		else if(theme === "dark"){
			document.body.setAttribute("data-theme", "dark"); //set theme to dark if dark -> light is default so do nothing
			themeSwitcher.checked = false;
		}
		else if(theme === "auto" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
			document.body.setAttribute("data-theme", "dark"); //set theme to dark if dark -> light is default so do nothing
			themeSwitcher.checked = false;
		}
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
		themeSwitcher.checked = true;
  })

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
	themeSwitcher.checked = false;
})

//============= END THEME SWITCHER ========================= //
  



function larger_font() { 
	document.getElementsByTagName('html')[0].style.fontSize = "larger";
}

function smaller_font() { 
	document.getElementsByTagName('html')[0].style.fontSize = "smaller";
}

'use strict';



(function ($) {

	$(document).ready(function () {
		
		//FONT SIZE FUNCTION

		var resize = new Array('.resizable');
		resize = resize.join(',');

		//resets the font size when "reset" is clicked
		var resetFont = $(resize).css('font-size');

		$(".reset").click(function() {
			$(resize).css('font-size', resetFont);

		});

		//increases font size when "+" is clicked
		$(".increase").click(function() {
			var originalFontSize = $(resize).css('font-size');
			var originalFontNumber = parseFloat(originalFontSize, 10);
			var newFontSize = originalFontNumber * 1.2;

			$(resize).css('font-size', newFontSize);

			return false;
		});

		//decrease font size when "-" is clicked

		$(".decrease").click(function() {
			var originalFontSize = $(resize).css('font-size');
			var originalFontNumber = parseFloat(originalFontSize, 10);
			var newFontSize = originalFontNumber * 0.8;
						
			$(resize).css('font-size', newFontSize);

			return false;
		});
		

		/*

		$(".theme-switch").click(function() {
			var icon =  $(this).find('.fa-moon,.fa-sun');

			$(icon).toggleClass('fa-moon fa-sun');
		})*/


		/* Mobile Menu function */


		var $btnMenu = $('.menu-toggler'),
			$header = $('.header'),
			$hideMenu = $('.hide-menu');

		$btnMenu.on('click', function () {
			$header.toggleClass('active');

			if ($header.hasClass('active')) {
				$hideMenu.addClass('active');
			}
			else {
				$hideMenu.removeClass('active');
			}
		});
		$hideMenu.on('click', function () {
			$header.removeClass('active');
			$hideMenu.removeClass('active');
		});

		$('.menu-item-has-children', '.main-menu').on('click', ' > a', function (e) {
			var ww = $(window).width();

			if (ww <=991) {
				var $parent = $(e.target).closest('.menu-item-has-children');
				e.preventDefault();
				$('>.sub-menu', $parent).slideToggle(400);
			}
		});

	});

})(jQuery);