function calcular_media(n1,n2,n3,n4)
{
	var m = (n1 + n2 + n3 + n4) / 4;
	return m;
}

function mostrar_resultado(form)
{
	var media = calcular_media
	(parseFloat(form.nota1.value), 
	parseFloat(form.nota2.value), 
	parseFloat(form.nota3.value),
	parseFloat(form.nota4.value));	

	if (media >= 7) 
		alert("Aluno Aprovado com média " + media.toFixed(1) + " !");
	else
		alert("Aluno Reprovado com média " + media.toFixed(1) + " !");	
}