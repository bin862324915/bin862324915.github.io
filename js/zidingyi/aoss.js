"use strict";

document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
});

module.exports = {
  init: function() {
    document.addEventListener('DOMContentLoaded', function() {
      AOS.init({
          easing: 'ease-in-out-sine',
          duration: 700,
          delay: 100，
      });
    });
  }
};
