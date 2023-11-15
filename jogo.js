
//--------------------------------------------------------------
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

// recebimento e tratativa da informação vinda atrealada ao link app.html 
//após setado o nivel.
//atribuindo tempos menores de acordo com cada nivel.
var nivelMosquito = 1500
var nivel = window.location.search
var nivel = (nivel.replace('?', ''))

if (nivel === 'normal') {
	nivelMosquito = 1500

}else if (nivel ==='dificil') {
	nivelMosquito = 1000
}
else if (nivel === 'chucknorris') {
	nivelMosquito = 750

}


//Indentificação do tamanho da real do eixo x e y da  tela, 
//para usar como base para o movimento randômico da img.
function ajusteTamanhoPalcoJogo(){
	 altura = window.innerHeight
	 largura = window.innerWidth
    console.log(largura, altura)
    }

//Chamada da função para recebimento dos valores captados no onresize.
ajusteTamanhoPalcoJogo()


//Tempo de Jogo e o fluxo se foi vencedor

var cronometro = setInterval(function(){ 
     tempo -= 1

     if (tempo < 0) 
     {
     	clearInterval(cronometro)
     	clearInterval(clearmosquito)
     	window.location.href = 'vitoria.html'
     }
    else {
    	document.getElementById('cronometro').innerHTML = tempo
  } } , 1000)


 // if(tempo===0){window.location.href = 'vitoria.html'} 
//------------------------------------------------------------
//Criação da imagem randômica do mosquito
function posicaoRandomica(){

//Remover img anterior (caso  exista).

if(document.getElementById('mosquito'))
	{document.getElementById('mosquito').remove()	
      
//Contrela das vidas ao deixar os corações vazios caso não click na img a tempo.
// e o fluxo para fim de jogo.
   if (vidas > 3) {
	window.location.href = 'fim_de_jogo.html'
	
} else{
	document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png" 
	vidas++
 }
}


//Impresão Mosquito
// Criação de valores aleatórios para eixo e e y, aredondado para valor inteiro em seguida multiplicado pelovalor real do eixo.
// O -90 é para não estourar pra fora do Browser a img.
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

// controle para que a posição da img seja 0, porque for negativa após decrementar -90 ela some do browser, seja corrigido.
posicaoX = posicaoX < 0 ? 0: posicaoX
posicaoY = posicaoY < 0 ? 0: posicaoY

console.log(posicaoX, posicaoY)

//-----------------------------------------------------------

//Criar Elemento HTML
var mosquito = document.createElement('img')

//atribuir o valor (src) da img (html) criado.
mosquito.src = 'imagens/mosquito.png'
 
 //Qual class sera atribuida randômicamente ao tamanho e posicionamento da img.
 mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

//Posicionamento da img em pxs no body de forma 
 //rândomica
 mosquito.style.left = posicaoX +'px'
 mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

//Indentificador pra o getElementById utilizadopara
//remoção da img
mosquito.id = 'mosquito'

//Captura do click sobre a img e em seguida remover
//e indentificar que acertou.
mosquito.onclick = function () {
	this.remove()}

 // Atribuição da imagem ao body da página
document.body.appendChild(mosquito)


}

//-------------------------------------------------------------
//Atribuição de forma randõmica  o tamanho da img.
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random()*3)

	switch(classe){
	case 0: return ' mosquito1'
    case 1: return  'mosquito2'
    case 2: return 	'mosquito3'
 
	}
}
//------------------------------------------------------------

//Atribuição de forma randõmica  do lado da img.
function ladoAleatorio(){
	var classe = Math.floor(Math.random()*2)

	switch(classe){
	case 0: return ' ladoA'
    case 1: return  'ladoB'

	}
}








   
	


	
