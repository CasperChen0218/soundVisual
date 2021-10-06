function preload(){
  sound = loadSound('【中英歌詞】Roddy Ricch - The Box.mp3');
}

function setup(){
  let cnv = createCanvas(windowWidth,windowHeight);
  //background(0);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw(){
  background(0);
  let spectrum = fft.analyze();//?只吃音頻
  //console.log(spectrum);
  noFill();
  stroke(0,((width-mouseX)*256/width)*256,(height-mouseY)*256/height);
  //for loop
  
  let xPosition=0
  let yPosition=0
  
  for (let i = 0; i< spectrum.length; i++){
    //let x = map(i, 0, spectrum.length, 0, width);
    //let h = -height + map(spectrum[i], 0, 255, height, 0);
    //rect(x, height, width / spectrum.length, h )
    //ellipse(xPosition,yPosition,spectrum[i]/10,spectrum[i]/10)
    ellipse(xPosition,windowWidth/2,spectrum[i],spectrum[i]);
    xPosition+=10
    
    if (xPosition==windowWidth-1){
      yPosition+=400;//?????
      xPosition=0
      
    }
  }
}
  
  

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}