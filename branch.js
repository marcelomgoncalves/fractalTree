function Branch(x,y,a,len,lvl,max) {
     
    this.x = x;
    this.y = y;
    this.a = a;
    this.len = len;
    this.lvl = lvl;
    this.max = max;
  
  this.show = function() {
    push();                          // salva tela
    translate(x,y);                  // translate para posições x e y
    strokeWeight(map(lvl, 0, max, 10, 1));  // grossura da linha conforme lvl

    if (lvl > 5 && (lvl < max)) {       // definições de cores
      stroke('lime');      
    } else if (lvl == 5) {      
      stroke('green');        
    } else if (lvl == max) {
      stroke('yellow');
    } else if (lvl > max) {
      stroke('red');    
    } else {
      stroke('SaddleBrown');
    }
    if (lvl<=max) {
      line(0,0,0,-len);               // desenha as linhas da árvore
    } else {    // bloco opcional
      strokeWeight(5);  // grossura da linha conforme lvl
      point(0,0);
    }
    //rect(0,0,0, -len)
    // verifica se o level é menor ou igual ao tamanho máximo 
    if(lvl <= max) {
      translate(0, -len);            
      rotate(a);
      new Branch(0, 0, a, len * 2/3, lvl + 1, max);
      rotate(-2 * a);
      new Branch(0, 0, a, len*2/3, lvl+1, max);      
    }
    pop();
  }
  
  this.show();
    
}