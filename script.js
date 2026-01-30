particlesJS("particles-js",{
  particles:{
    number:{value:70,density:{enable:true,value_area:1000}},
    color:{value:"#0078ff"},
    shape:{type:"circle"},
    opacity:{value:.85,random:true},
    size:{value:3.4,random:true},
    line_linked:{enable:true,distance:170,color:"#0078ff",opacity:.6,width:1},
    move:{enable:true,speed:2,random:true,out_mode:"bounce"}
  },
  interactivity:{events:{onhover:{enable:true,mode:"repulse"}},modes:{repulse:{distance:120,duration:.4}}},
  retina_detect:true
});

/* MOVIMIENTO TARJETA */
const card=document.getElementById("card");
document.addEventListener("mousemove",e=>{
  const x=(e.clientX/window.innerWidth-0.5)*30;
  const y=(e.clientY/window.innerHeight-0.5)*30;
  card.style.transform=
    `perspective(1200px)
     translate(${x}px,${y}px)
     rotateY(${x*0.6}deg)
     rotateX(${-y*0.6}deg)`;
});

/* CURSOR */
const c=document.getElementById("customCursor");
document.addEventListener("mousemove",e=>{
  c.style.left=e.clientX+"px";
  c.style.top=e.clientY+"px";
});

/* CONTADOR */
fetch("https://api.countapi.xyz/hit/davidghol-hyperservices/visits")
  .then(r=>r.json())
  .then(d=>{document.getElementById("viewCount").innerText=d.value});

/* MUSICA (ARCHIVOS .mp3.mp3) */
const music=document.getElementById("bgMusic");
const playPause=document.getElementById("playPause");
const playIcon=document.getElementById("playIcon");
const nextTrack=document.getElementById("nextTrack");
const prevTrack=document.getElementById("prevTrack");

const tracks=["music1.mp3.mp3","music2.mp3.mp3"];
let current=0;
music.volume=0.3;

const playSVG=`<polygon points="8,5 20,12 8,19"/>`;
const pauseSVG=`<rect x="7" y="5" width="4" height="14"/><rect x="13" y="5" width="4" height="14"/>`;

playPause.onclick=()=>{
  if(music.paused){music.play();playIcon.innerHTML=pauseSVG}
  else{music.pause();playIcon.innerHTML=playSVG}
};
nextTrack.onclick=()=>{
  current=(current+1)%tracks.length;
  music.src=tracks[current];
  music.play();playIcon.innerHTML=pauseSVG;
};
prevTrack.onclick=()=>{
  current=(current-1+tracks.length)%tracks.length;
  music.src=tracks[current];
  music.play();playIcon.innerHTML=pauseSVG;
};
