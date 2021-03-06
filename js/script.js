// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// build scenes
// new ScrollMagic.Scene({triggerElement: ".sec01"})
// 				.setTween(".sec01 > div", {y: "80%", ease: Linear.easeNone})
// 				//.addIndicators()
// 				.addTo(controller);

// ===================================== section02 ===================================
new ScrollMagic.Scene({triggerElement: ".sec02"})
				.setTween(".sec02 .child02", {y: "80%", ease: Linear.easeNone})

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".cont01"})
				.setTween(".nube01", 1,  { left: 250 } )

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".cont02"})
				.setTween(".nube03", { left: -150, opacity: 1} )

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".cont02"})
				.setTween(".nube02", { right: 150, opacity: 1} )

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".cont02"})
				.setTween(".nube04", { right: 350} )

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".cont02"})
				.setTween(".nube05", { left: 250} )

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".cont02"})
				.setTween(".stars", { left: -250} )

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".cont02"})
				.setTween(".nube06", { right: 350} )

				.addTo(controller);


				$(function () { // wait for document ready
						var flightpath = {
							entry : {
								curviness: 1.25,
								autoRotate: true,
								values: [
										{x: 100,	y: 0},
										{x: 300,	y: 10}
									]
							},
							looping : {
								curviness: 1.25,
								autoRotate: true,
								values: [
										{x: 510,	y: 60},
										{x: 620,	y: -60},
										{x: 500,	y: -100},
										{x: 380,	y: 20},
										{x: 500,	y: 60},
										{x: 580,	y: 20},
										{x: 620,	y: 15}
									]
							},
							leave : {
								curviness: 1.25,
								autoRotate: true,
								values: [
										{x: 660,	y: 20},
										{x: 800,	y: 130},
										{x: $(window).width() + 300,	y: -100},
									]
							}
						};
						// init controller
						var controller = new ScrollMagic.Controller();

						// create tween
						var tween = new TimelineMax()
							.add(TweenMax.to($(".nave"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
							.add(TweenMax.to($(".nave"), 3, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
							.add(TweenMax.to($(".nave"), 1.2, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: ".cont02", duration: 500, offset: 100})
										.setPin(".wrapNave")
										.setTween(tween)
										 // add indicators (requires plugin)
										.addTo(controller);
					})

// ===================================== section03 ===================================

new ScrollMagic.Scene({triggerElement: ".sec03"})
				.setTween(".sec03 .child03", {y: "80%", ease: Linear.easeNone})

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec03"})
				.setTween(".nubes07", { opacity: 1})

				.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".sec03"})
				.setTween(".frances-bg-01", { left: 250})

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec03"})
				.setTween(".frances-bg-02", { right: 0})

				.addTo(controller);


// ===================================== section04 ===================================
new ScrollMagic.Scene({triggerElement: ".sec04"})
				.setTween(".sec04 .child04", {y: "80%", ease: Linear.easeNone})

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".cont04"})
				.setTween(".globo01", {top: 550})

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".cont04"})
				.setTween(".globo02", {top: 100})

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".cont04"})
				.setTween(".nubes08", {opacity: 1})

				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".cont04"})
				.setTween(".ingles-bg-01", {left: 0})

				.addTo(controller);
// ===================================== section05 ===================================
new ScrollMagic.Scene({triggerElement: ".sec05"})
				.setTween(".sec05 .child05", {y: "80%", ease: Linear.easeNone})
				.addTo(controller);

				$(function () { // wait for document ready
						var flightpath = {
							entry : {
								curviness: 1.25,
								autoRotate: false,
								values: [
										{x: 50,	y: 300},
										{x: 300,	y: 300}
									]
							},
							looping : {
								//curviness: 1.25,
								autoRotate: true,
								values: [
										{x: 620,	y: 400}
									]
							},
							leave : {
								curviness: 1.25,
								autoRotate: true,
								values: [
										{x: 660,	y: 400},
										{x: 800,	y: 380},
										{x: $(window).width() + 300,	y: -100},
									]
							}
						};
						// init controller
						var controller = new ScrollMagic.Controller();

						// create tween
						var tween = new TimelineMax()
							.add(TweenMax.to($(".lapiz01"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
							.add(TweenMax.to($(".lapiz01"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
							.add(TweenMax.to($(".lapiz01"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: ".cont05", duration: 500, offset: 100})
										.setPin(".wrapLapiz	")
										.setTween(tween)
										 // add indicators (requires plugin)
										.addTo(controller);
					})

new ScrollMagic.Scene({triggerElement: ".sec05"})
				.setTween(".clip01", {left: 30})
				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec05"})
				.setTween(".clip02", {right: 230})
				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec05"})
				.setTween(".taja", {right: 100})
				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec05"})
				.setTween(".clip03", {bottom: 200, right: 100})
				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec05"})
				.setTween(".virtual-tit", {bottom: 150})
				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec05"})
				.setTween(".apple", {opacity: 1})
				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec05"})
				.setTween(".clip04", {opacity: 1})
				.addTo(controller);



// ===================================== section 06 ====================================
new ScrollMagic.Scene({triggerElement: ".sec06"})
				.setTween(".sec06 .child06", {y: "80%", ease: Linear.easeNone})
				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec06"})
				.setTween(".contenidos-bg", {top: -60})
				.addTo(controller);
