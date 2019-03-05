const person = {
	life: {
		work: {
			type: 'FE'
		}
	}
};
if (person?.life?.work?.type === 'FE') {
	console.log('Front-End');
}