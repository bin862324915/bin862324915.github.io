

"use strict";

document.addEventListener('DOMContentLoaded', function() { AOS.init({ offset: 200, duration: 600, easing: 'ease-in-sine', delay: 100, }); });

module.exports = { init: function() { document.addEventListener('DOMContentLoaded', function() { AOS.init({ offset: 200, duration: 600, easing: 'ease-in-sine', delay: 100, }); }); } };