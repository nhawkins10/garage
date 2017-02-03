$(document).ready(function() {
	var isMobile = $(document).width() < 600,
		  isTablet = $(document).width() < 775;
	
	if (isMobile) {
		$("navigation").hide(0, function() {
			$("navigation").addClass("nav-closed");
		});
	}
	
	$(".navigation-link").on("click", function() {
		if (isMobile) {
			$("navigation").slideUp(400, function() {
				$("navigation").addClass("nav-closed");
				$(".menu-icon").css("background", "url(../images/menu.png) center / cover");
			});
		} 
	});
	
	$(document).on("scroll", function() {
		if (isMobile || isTablet) {
			if ($(document).scrollTop() > 700) {
				$(".scroll-helper").removeClass("hidden");
			} else {
				$(".scroll-helper").addClass("hidden");
			}
		}
	});
	
	$(window).on("resize", function() {
		 isMobile = $(document).width() < 600;
		 isTablet = $(document).width() < 775;
		 
		if (isMobile) {
			$("navigation").hide(0, function() {
				$("navigation").addClass("nav-closed");
				$(".menu-icon").css("background", "url(../images/menu.png) center / cover");
			});
		} else {
			$("navigation").show(0, function() {
				$("navigation").removeClass("nav-closed");
				$(".menu-icon").addClass("hidden");
			});
		}
	});
});

function toggleNavMenu() {
	if ($("navigation").hasClass("nav-closed")) {
		$("navigation").slideDown(400, function() {
			$("navigation").removeClass("nav-closed");
			$(".menu-icon").css("background", "url(../images/close.png) center / cover");
		});
	} else {
		$("navigation").slideUp(400, function() {
			$("navigation").addClass("nav-closed");
			$(".menu-icon").css("background", "url(../images/menu.png) center / cover");
		});
	}
}

function scrollTo(value) {
	var offset = $.isNumeric(value) ? value : $(document.getElementsByName(value)[0]).offset().top;
	$("html, body").animate({
		scrollTop: offset
	});
}