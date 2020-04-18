var tooltip = document.getElementById('tooltip');

document.addEventListener('click', function() {
	document.getElementsByTagName('body')[0].focus();
	document.getElementById('tooltip').setAttribute('style','display: none');
	document.getElementById('canvasFrame').focus();
});