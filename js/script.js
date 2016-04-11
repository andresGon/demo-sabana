// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// build scenes
// new ScrollMagic.Scene({triggerElement: ".sec01"})
// 				.setTween(".sec01 > div", {y: "80%", ease: Linear.easeNone})
// 				//.addIndicators()
// 				.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".sec02"})
				.setTween(".sec02 > div", {y: "80%", ease: Linear.easeNone})
				//.addIndicators()
				.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".sec03"})
				.setTween(".sec03 > div", {y: "80%", ease: Linear.easeNone})
				//.addIndicators()
				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec04"})
				.setTween(".sec04 > div", {y: "80%", ease: Linear.easeNone})
				//.addIndicators()
				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec05"})
				.setTween(".sec05 > div", {y: "80%", ease: Linear.easeNone})
				//.addIndicators()
				.addTo(controller);
new ScrollMagic.Scene({triggerElement: ".sec06"})
				.setTween(".sec06 > div", {y: "80%", ease: Linear.easeNone})
				//.addIndicators()
				.addTo(controller);
