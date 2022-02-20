function SwitchingTabs(event) {
	var idLink = event.target.id;
	idTab = event.target.id.slice(4);

	$('.tabs a').removeClass('active');
	$('.tabs .tab').removeClass('active');

	$('#' + idLink).addClass('active');
	$('#' + idTab).addClass('active');
}