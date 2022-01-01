function carregar() {
	var msg = window.document.getElementById('msg');
	var img = window.document.getElementById('imagem');
	var data = new Date();
	var hora = data.getHours();
	var minutos = data.getMinutes();  


	msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;

	if (hora >= 0 && hora < 12) {
		img.src = 'fotomanha.png';
		document.body.style.backgroundColor = '#e8dbd1'
	} else if (hora >= 12 && hora < 18) {
		img.src = 'fototarde.png';
		document.body.style.backgroundColor = '#7ca4a9'
	} else {
		img.src = 'fotonoite.png';
		document.body.style.backgroundColor = '#5e676e'
	}
}
