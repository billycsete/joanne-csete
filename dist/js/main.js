(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Add raf shim
window.requestAnimationFrame = (function() {
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();


/**
 * scrollToElement
 *
 * @description smooth scroll to an element
 * @param {Element} element - anchor link scroll to trigger
 * @param {Number} scrollSpeed - speed of scroll in milliseconds
 */
function scrollToElement(element, scrollSpeed) {

	var scrollTargetY = element.offsetTop || 0;
	var scrollY = window.scrollY;
	var speed = scrollSpeed || 2000;
	var currentTime = 0;

	// min time 0.1, max time 0.8 seconds
	var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

	// easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	function easeOutSine(pos) {
		return Math.sin(pos * (Math.PI / 2));
	}

	// add animation loop
	function tick() {
		currentTime += 1 / 60;

		var p = currentTime / time;
		var t = easeOutSine(p);

		if (p < 1) {
			requestAnimationFrame(tick);
			window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
		} else {
			window.scrollTo(0, scrollTargetY);
		}
	}

	// call it once to get started
	tick();
}


module.exports = scrollToElement;

},{}],2:[function(require,module,exports){
'use strict';

var scrollToElement = require('./helpers/scrollToElement.js');


/**
 * Main JS
 */
var Main = (function() {


	/**
	 * Setup scroll to section sidebar links
	 */
	function initSectionScrollLinks() {

		var scrollLinks = document.querySelectorAll('.sidebar-link');

		for (var i = 0; i < scrollLinks.length; i++) {
			scrollLinks[i].addEventListener('click', function(evt) {
				// get a reference to the element associated with the scroll to link that was clicked
				var id = evt.target.getAttribute('href').replace('#', '');
				var element = document.getElementById(id);
				// if no matching element was found, exit now
				if (!element) {
					return;
				}
				// prevent the default anchor link jump
				evt.preventDefault();
				// scroll to the section related to the sidebar link clicked
				scrollToElement(element, 1500);
			});
		}
	}


	/**
	 * Initialize Main
	 */
	return {
		initialize : function() {
			// setup sidebar links
			initSectionScrollLinks();
		},
	};


})();

module.exports.Main = Main.initialize();

},{"./helpers/scrollToElement.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaGVscGVycy9zY3JvbGxUb0VsZW1lbnQuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy8gQWRkIHJhZiBzaGltXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0ZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcblx0fTtcbn0pKCk7XG5cblxuLyoqXG4gKiBzY3JvbGxUb0VsZW1lbnRcbiAqXG4gKiBAZGVzY3JpcHRpb24gc21vb3RoIHNjcm9sbCB0byBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBhbmNob3IgbGluayBzY3JvbGwgdG8gdHJpZ2dlclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjcm9sbFNwZWVkIC0gc3BlZWQgb2Ygc2Nyb2xsIGluIG1pbGxpc2Vjb25kc1xuICovXG5mdW5jdGlvbiBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgc2Nyb2xsU3BlZWQpIHtcblxuXHR2YXIgc2Nyb2xsVGFyZ2V0WSA9IGVsZW1lbnQub2Zmc2V0VG9wIHx8IDA7XG5cdHZhciBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG5cdHZhciBzcGVlZCA9IHNjcm9sbFNwZWVkIHx8IDIwMDA7XG5cdHZhciBjdXJyZW50VGltZSA9IDA7XG5cblx0Ly8gbWluIHRpbWUgMC4xLCBtYXggdGltZSAwLjggc2Vjb25kc1xuXHR2YXIgdGltZSA9IE1hdGgubWF4KDAuMSwgTWF0aC5taW4oTWF0aC5hYnMoc2Nyb2xsWSAtIHNjcm9sbFRhcmdldFkpIC8gc3BlZWQsIDAuOCkpO1xuXG5cdC8vIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZGFucm8vZWFzaW5nLWpzL2Jsb2IvbWFzdGVyL2Vhc2luZy5qc1xuXHRmdW5jdGlvbiBlYXNlT3V0U2luZShwb3MpIHtcblx0XHRyZXR1cm4gTWF0aC5zaW4ocG9zICogKE1hdGguUEkgLyAyKSk7XG5cdH1cblxuXHQvLyBhZGQgYW5pbWF0aW9uIGxvb3Bcblx0ZnVuY3Rpb24gdGljaygpIHtcblx0XHRjdXJyZW50VGltZSArPSAxIC8gNjA7XG5cblx0XHR2YXIgcCA9IGN1cnJlbnRUaW1lIC8gdGltZTtcblx0XHR2YXIgdCA9IGVhc2VPdXRTaW5lKHApO1xuXG5cdFx0aWYgKHAgPCAxKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsWSArICgoc2Nyb2xsVGFyZ2V0WSAtIHNjcm9sbFkpICogdCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsVGFyZ2V0WSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gY2FsbCBpdCBvbmNlIHRvIGdldCBzdGFydGVkXG5cdHRpY2soKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbFRvRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNjcm9sbFRvRWxlbWVudCA9IHJlcXVpcmUoJy4vaGVscGVycy9zY3JvbGxUb0VsZW1lbnQuanMnKTtcblxuXG4vKipcbiAqIE1haW4gSlNcbiAqL1xudmFyIE1haW4gPSAoZnVuY3Rpb24oKSB7XG5cblxuXHQvKipcblx0ICogU2V0dXAgc2Nyb2xsIHRvIHNlY3Rpb24gc2lkZWJhciBsaW5rc1xuXHQgKi9cblx0ZnVuY3Rpb24gaW5pdFNlY3Rpb25TY3JvbGxMaW5rcygpIHtcblxuXHRcdHZhciBzY3JvbGxMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLWxpbmsnKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2Nyb2xsTGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHNjcm9sbExpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdC8vIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHNjcm9sbCB0byBsaW5rIHRoYXQgd2FzIGNsaWNrZWRcblx0XHRcdFx0dmFyIGlkID0gZXZ0LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuXHRcdFx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRcdFx0Ly8gaWYgbm8gbWF0Y2hpbmcgZWxlbWVudCB3YXMgZm91bmQsIGV4aXQgbm93XG5cdFx0XHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBwcmV2ZW50IHRoZSBkZWZhdWx0IGFuY2hvciBsaW5rIGp1bXBcblx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdC8vIHNjcm9sbCB0byB0aGUgc2VjdGlvbiByZWxhdGVkIHRvIHRoZSBzaWRlYmFyIGxpbmsgY2xpY2tlZFxuXHRcdFx0XHRzY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgMTUwMCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIE1haW5cblx0ICovXG5cdHJldHVybiB7XG5cdFx0aW5pdGlhbGl6ZSA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gc2V0dXAgc2lkZWJhciBsaW5rc1xuXHRcdFx0aW5pdFNlY3Rpb25TY3JvbGxMaW5rcygpO1xuXHRcdH0sXG5cdH07XG5cblxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMuTWFpbiA9IE1haW4uaW5pdGlhbGl6ZSgpO1xuIl19
