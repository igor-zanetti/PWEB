
        var nome; 
        var nota1;
        var nota2;
        var nota3;

        nome = prompt("Qual o seu nome?");

        alert("Seu nome  " + nome);

        nota1 = prompt("insira a nota 1");
        nota2 = prompt("insira a nota 2");
        nota3 = prompt("insira a nota 3");

        var nota1 = parseFloat(nota1);
        var nota2 = parseFloat(nota2);
        var nota3 = parseFloat(nota3);

        var media = (nota1 + nota2 + nota3) / 3;
 
        alert("media:" + media.toFixed(2));
        