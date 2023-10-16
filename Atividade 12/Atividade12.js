document.write("Atividade 12<br><br>");

function Retangulo(x, y){
    this.x = x;
    this.y = y;

    this.calcArea = function(){
        return x * y;
    }
}

var x = prompt("Insira a base do retângulo");
var y = prompt("Insira a altura do retângulo");

var objRet = new Retangulo(x, y);

document.write("A área do Retângulo é de: " + objRet.calcArea() + "<br><br><br>");


function Conta(){

    this.getNome = function(){
        return this.nome;
    }

    this.setNome = function(nome){
        this.nome = nome;
    }

    this.getBanco = function(){
        return this.banco;
    }

    this.setBanco = function(banco){
        this.banco = banco;
    }

    this.getNumConta = function(){
        return this.numConta;
    }

    this.setNumConta = function(numConta){
        this.numConta = numConta;
    }

    this.getSaldo = function(){
        return this.saldo;
    }

    this.setSaldo = function(saldo){
        this.saldo = saldo;
    }

    
}

function Corrente(){ 

    this.getSaldoEspecial = function(){
        return this.saldoEspecial;
    };

    this.setSaldoEspecial = function(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    };
}

function Poupanca(){ 
    
    this.getJuros = function(){
        return this.juros;
    };
    
    this.setJuros = function(juros){
        this.juros = juros;
    };

    this.getDataVencimento = function(){
        return this.dataVencimento;
    };
    
    this.setDataVencimento = function(dataVencimento){
        this.dataVencimento = dataVencimento;
    };
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

objCorrente = new Corrente();
objPoupanca = new Poupanca();

objCorrente.setNome("Igor");
objCorrente.setBanco("Itaú");
objCorrente.setNumConta("98");
objCorrente.setSaldo(5500);
objCorrente.setSaldoEspecial(11111);

objPoupanca.setNome("Augusto");
objPoupanca.setBanco("C6 Bank");
objPoupanca.setNumConta("53");
objPoupanca.setSaldo(20);
objPoupanca.setJuros(25);
objPoupanca.setDataVencimento("25/05/2023");

document.write("Dados da conta corrente:<br>Nome: " + objCorrente.getNome() + 
                "<br>Banco: " + objCorrente.getBanco() + 
                "<br>Número da Conta: " + objCorrente.getNumConta() +
                "<br>Saldo: " + objCorrente.getSaldo() +
                "<br>Saldo Especial: " + objCorrente.getSaldoEspecial());

document.write("<br><br>Dados da conta poupança:<br>Nome: " + objPoupanca.getNome() + 
                "<br>Banco: " + objPoupanca.getBanco() + 
                "<br>Número da Conta: " + objPoupanca.getNumConta() +
                "<br>Saldo: " + objPoupanca.getSaldo() +
                "<br>Juros: " + objPoupanca.getJuros() +
                "<br>Data de vencimento: " + objPoupanca.getDataVencimento());