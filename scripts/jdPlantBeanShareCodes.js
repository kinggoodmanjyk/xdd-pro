let codes = ['',''];
for (let i = 0; i < codes.length; i++) {
	const index = (i + 1 === 1) ? '' : (i + 1);
	exports['PlantBeanShareCodes' + index] = codes[i];
}