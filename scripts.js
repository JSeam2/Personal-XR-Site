AFRAME.registerComponent('navigate-on-click', {
  schema: {
    url: {default: ''}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener('click', function () {
      window.open(data.url, '_blank');
    });
  }
});