 (function () {
  $('#chat-sidebar-toggle').on('click', e => {
    $('#chat-sidebar').toggleClass('open');
    e.preventDefault();
  });
}())
