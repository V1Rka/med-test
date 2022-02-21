let fields = document.querySelectorAll('.field__file');

Array.prototype.forEach.call(fields, function (input) {
	let label = input.nextElementSibling,
		labelVal = label.querySelector('.field__file-fake').innerText;

	input.addEventListener('change', function (e) {
		let name = '',
			countName = this.files[0].name.length,
			difference = '';

		if (countName > 13) {
			difference = countName - 13;
			name = this.files[0].name.slice(0, -difference);
		}

		if (name)
			label.querySelector('.field__file-fake').innerText = name + '......';
		else
			label.querySelector('.field__file-fake').innerText = labelVal;
	});
});