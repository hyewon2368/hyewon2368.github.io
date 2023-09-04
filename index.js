buttonLinks = [
	'https://fullstack-ms.vercel.app/', //첫번째 버튼을 클릭했을 때 이동할 경로
	'https://fonts.google.com/?subset=korean&noto.script=Kore', //두번째 버튼을 클릭했을 때 이동할 경로
	//...
];

document.querySelectorAll('button#link').forEach((button, index) => {
	button.addEventListener('click', () => {
		let link = buttonLinks[index] ? buttonLinks[index] : '/';
		document.location.href = link;
	});
});
