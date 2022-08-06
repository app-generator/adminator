var $ = require('jquery')
import Masonry from 'masonry-layout';

(function () {
  window.addEventListener('load', () => {
    if ($('.masonry').length > 0) {
      new Masonry('.masonry', {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true,
      });
    }
  });
}());
