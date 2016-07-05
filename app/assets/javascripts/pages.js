# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

getURLParameter = function (name) {
return decodeURIComponent((new RegExp('[?|&]' + name + '=' +
'([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
};

setTimeout(function () {
alert('han pasado 5')
}, getURLParameter('timer'));