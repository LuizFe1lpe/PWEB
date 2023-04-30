//primeira parte
class Retangulo{
    constructor(altura,comprimento){
        this.altura = altura;
        this.comprimento = comprimento;
    }
    get area(){
        return this.calculaArea();
    }
    calculaArea(){
        return  this.altura * this.comprimento;
    }
}
function MostraArea(){
    let a = parseFloat(document.getElementById("txtAltura").value); 
    let c = parseFloat(document.getElementById("txtComprimento").value);
    
    const ret = new Retangulo(a,c);
    alert("A área do retangulo é: " + ret.area.toFixed(2));
}

//segunda parte
function Conta(nome_correntista, banco, numero_da_conta, saldo){
        this.nome_correntista = nome_correntista;
        this.banco = banco;
        this.numero_da_conta = numero_da_conta;
        this.saldo = saldo;
        
    this.getNome_Correntista = function (){
        return this.nome_correntista;
    }
    this.setNome_Correntista = function (value){
        this.nome_correntista = value;
    }
    this.getBanco = function (){
        return this.banco;
    }
    this.setBanco = function (value){
        this.banco = value;
    }
    this.getNumero_da_Conta = function (){
        return this.numero_da_conta;
    }
    this.setNumero_da_Conta = function (value){
        this.numero_da_conta = value;
    }
    this.getSaldo = function (){
        return this.saldo
    }
    this.setSaldo = function (value){
        this.saldo = value;
    }
}

function ContaCorrente(saldoEspecial){
    this.saldoEspecial = saldoEspecial;

    this.getSaldoEspecial = function (){
        return this.saldoEspecial
    }

    this.setSaldoEspecial = function (value){
        this.saldoEspecial = value;
    }    
}

function ContaPoupança(juros,dataDeVencimento){
    this.juros = juros;
    this.dataDeVencimento = dataDeVencimento;

    this.getJuros = function (){
        return this.juros
    }

    this.setJuros = function (value){
        this.juros = value;
    }
    
    this.getDataDeVencimento = function (){
        return this.dataDeVencimento;
    }

    this.setDataDeVencimento = function (value){
        this.dataDeVencimento = value;
    }
}

ContaCorrente.prototype = new Conta();
ContaPoupança.prototype = new Conta();

function CriarConta(){
    var opt = document.getElementById("tipo");
    var tipo = opt.value;

    if(tipo == "c"){
        const cc = new ContaCorrente();
        console.log(cc);

        cc.setNome_Correntista(document.getElementById("txtNome").value);
        cc.setBanco(document.getElementById("txtBanco").value);
        cc.setNumero_da_Conta(document.getElementById("txtNumero").value);
        cc.setSaldo(document.getElementById("txtSaldo").value);
        cc.setSaldoEspecial(parseFloat(cc.getSaldo()) * 1.7);

        alert("Nome: " + cc.getNome_Correntista() + "\n Banco: " + cc.getBanco() + "\n Numero da conta: " + cc.getNumero_da_Conta() + "\n Saldo: " + cc.getSaldo() + "\n Saldo Especial: " + cc.getSaldoEspecial());
    }
    else{
        const cp = new ContaPoupança();

       cp.setNome_Correntista(document.getElementById("txtNome").value);
       cp.setBanco(document.getElementById("txtBanco").value);
       cp.setNumero_da_Conta(document.getElementById("txtNumero").value);
       cp.setSaldo(document.getElementById("txtSaldo").value);

       cp.setJuros("8.5");
       const date = new Date();
       cp.setDataDeVencimento(date.toString()); //data atual
       alert("Nome: " + cp.getNome_Correntista() + "\n Banco: " + cp.getBanco() + "\n Numero da conta: " + cp.getNumero_da_Conta() + "\n Saldo: " + cp.getSaldo() + "\n Juros: " + cp.getJuros() + "\n Data de Vencimento: " + cp.getDataDeVencimento());
    }
}