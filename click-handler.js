AFRAME.registerComponent('clickhandler', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      alert("click"); 
      }
    });
  }
});
