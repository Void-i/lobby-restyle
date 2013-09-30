$('body').append(
	$('<div />', { id: 'background' }),
	$('<link />', { type: 'text/css', rel: 'stylesheet', href: 'https://dl.dropboxusercontent.com/s/skncdoz95uywhwl/lobbyRestyle.css' }),
);
$('#create-room-button').html('CREATE ROOM');
$('.overlay-header-line').remove();
$('#button-lobby').on('click', function(){
	$('#room-view').css('-webkit-filter', 'blur(60px)');
	$('#background').css('-webkit-filter', 'blur(60px)');
});
$('.overlay-close-button').on('click', function(){
	$('#room-view').css('-webkit-filter', 'blur(0px)');
	$('#background').css('-webkit-filter', 'blur(0px)');
});

