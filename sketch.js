//                                      variaveis globais do jogo
let xBolinha = 30;
let yBolinha = 0;
let diametro = 20;
let raio = diametro/2;

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//                                          varaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//                                      variaveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let velocidadeYOponente;
let colidiu = false;

//                                      largura,altura da tela
function setup() {
  createCanvas(600, 400);
}

//                                          placar do jogo
let meusPontos = 0;
let pontosOponente = 0;


//                          configurações do que aparece na tela
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);//outra opcao de declarar variavel
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);//outra opcao declarar variavel
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
//verificaColisaoRaquete(); 
//verificaColisaoRaquete(xRaquete,yRaquete);
//verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  colisaoMinhaRaqueteBiblioteca(xRaquete,yRaquete);
  colisaoMinhaRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente);
//colisaoRaqueteOponenteBiblioteca();
  incluiPlacar();
  marcaPlacar();
}


//                                        cria a bolinha
function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro);
}

//                                    velocidade da bolinha
function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

//                            funcao que verifica colisao da bolinha
function verificaColisaoBorda(){
  
  if(xBolinha > width || xBolinha < 0){//quando chegar no limite horizontal volta
    velocidadexBolinha *= -1;}
  if(yBolinha > height  || yBolinha < 0){ //quando chega no limite vertical volta
    velocidadeyBolinha *= -1;}
}
//                      mostra minha raquete
function mostraRaquete(x,y){
    rect(x,y,raqueteComprimento,raqueteAltura);
}

//                              movimenta minha raquete
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
//                            movimenta raquete oponente automatica
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento/2 + 10;
  yRaqueteOponente += velocidadeYOponente;
}
//function movimentaRaqueteOponente(){
//  if(keyIsDown(UP_ARROW)){
//    yRaqueteOponente -= 10;
//  }
//  if(keyIsDown(DOWN_ARROW)){
//    yRaqueteOponente += 10;
//  }
//}

//                           funcao de colisao da bolinha na raquete
function verificaColisaoRaquete(){
  if(xBolinha-raio < xRaquete+raqueteComprimento && yBolinha-raio < yRaquete+raqueteAltura && yBolinha+raio > yRaquete){
    velocidadexBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca(x,y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadexBolinha *= -1;
  }
}

//function colisaoRaqueteOponenteBiblioteca(){
//  colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, //raqueteAltura, xBolinha, yBolinha, raio);
//  if(colidiu){
//    velocidadexBolinha *= -1;
//  }
//}

//                          funcao do placar do jogo
function incluiPlacar(){
  textAlign(CENTER);
  textSize(20);//tamanho do texto
 
  fill(color(255,140,0));//cor do retangulo em hexadecimal
  rect(180,12,40,20);//(x,y,largura do retangulo,altura retangula)
//placar do usuario
  fill(255);//a cor do objeto
  stroke(255);
  text(meusPontos,200,30);//(variavel,x,y)
 
//placar do oponente
  fill(color(255,140,0));//cor do retangulo
  rect(450,12,40,20);//(x,y,largura,altura)
  fill(255);//cor do objeto
  text(pontosOponente,470,30);//(variavel,x,y)
 
}

//                           funcao marcador de pontos
function marcaPlacar(){
  if(xBolinha > 600){
    meusPontos+=1;
  }
  if(xBolinha < 0){
    pontosOponente+=1;
  }
}
