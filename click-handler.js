AFRAME.registerComponent('clickhandler', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      var b = document.querySelector('#banner2');
      b.setAttribute('visible',false)     
      }
    });
  }
});
