$('#deletebtn').click(function() {
  var gameid = window.location.pathname.split('/')[2];

  return $.ajax({
    url: '/api/games/' + gameid,
    data: {'gameid': gameid},
    type: 'DELETE',
    success: function() {
      window.location.replace('/manager');
    }
  });
});
