AFRAME.registerComponent('clickhandler', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      var b = document.querySelector('#banner');
      b.setAttribute('visible',false)     
      }
    });
  }
});
