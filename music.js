console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('/song1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let mastersong=document.getElementById('mastersong');
const container=document.querySelector('.container');
let timeafter=document.querySelector('.timeafter');
let songs=[
    {songName:"Salam_e_Ishq", filepath:"/song1.mp3",coverpath:"/1.jpg"},
    {songName:"Raatan_Lambiyan", filepath:"/song2.mp3",coverpath:"/2.jpg"},
    {songName:"Moon_Rise", filepath:"/song3.mp3",coverpath:"/3.jpg"},
    {songName:"Besharam_Rang", filepath:"/song4.mp3",coverpath:"/4.jpg"},
    {songName:"Jhoome Jo Pathaan", filepath:"/song5.mp3",coverpath:"/5.jpg"},
    {songName:"Let_Me_Love_You", filepath:"/song6.mp3",coverpath:"/6.jpg"},
    {songName:"Aap_ki_Nazron", filepath:"/song7.mp3",coverpath:"/7.jpg"},
    {songName:"naam_gum_jayega", filepath:"/song8.mp3",coverpath:"/8.jpg"},
    {songName:"Haye_Rama", filepath:"/song9.mp3",coverpath:"/9.jpg"},
]
songItem.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

    let audio = new Audio();
    audio.src = `/song${i+1}.mp3`;
    audio.addEventListener('loadedmetadata', function() {
        let duration = audio.duration;
        let minutes = Math.floor(duration / 60);
        let seconds = Math.floor(duration % 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        element.getElementsByClassName('timestamp')[0].innerText = minutes + ":" + seconds;
        // timeafter[i].innerText = minutes + ":" + seconds;
    });
})




masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        let currentPlayButton = document.getElementById(`${songIndex}`);
        currentPlayButton.classList.remove('fa-circle-play');
        currentPlayButton.classList.add('fa-circle-pause');
        container.style.backgroundImage=`url(${songs[songIndex].coverpath})`;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        let currentPlayButton = document.getElementById(`${songIndex}`);
        currentPlayButton.classList.remove('fa-circle-pause');
        currentPlayButton.classList.add('fa-circle-play');
        container.style.backgroundImage=`url(${songs[songIndex].coverpath})`;

    }
} )

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value=progress;
    
})

let lastUpdate = 0;

myProgressBar.addEventListener('input', (event) => {
  const now = Date.now();

  if (now - lastUpdate > 50) {
    audioElement.currentTime = ((event.target.value * audioElement.duration) / 100);
    lastUpdate = now;
  }
});

  
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        let currentSongIndex = parseInt(e.target.id);
        if (songIndex === currentSongIndex && !audioElement.paused) {
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity=0;
        } else {
            makeAllPlays();
            songIndex = currentSongIndex;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src=`/song${songIndex+1}.mp3`;
            mastersong.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            container.style.backgroundImage=`url(${songs[songIndex].coverpath})`;
            let audio1 = new Audio();
            audio1.src = `/song${songIndex+1}.mp3`;
            audio1.addEventListener('loadedmetadata', function() {
            let duration = audio1.duration;
            let minutes = Math.floor(duration / 60);
            let seconds = Math.floor(duration % 60);
            if (seconds < 10) {
               seconds = "0" + seconds;
            }
            timeafter.innerText = minutes + ":" + seconds;
            console.log(duration);
            console.log(timeafter[0].innerText);

        
          });
        }
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0;
        let currentPlayButton3 = document.getElementById(`${songIndex+8}`);
        currentPlayButton3.classList.remove('fa-circle-pause');
        currentPlayButton3.classList.add('fa-circle-play');
    
    }
    else{
        songIndex=songIndex+1;
        let currentPlayButton3 = document.getElementById(`${songIndex-1}`);
        currentPlayButton3.classList.remove('fa-circle-pause');
        currentPlayButton3.classList.add('fa-circle-play');
    
    }
    audioElement.src=`/song${songIndex+1}.mp3`;
    mastersong.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    container.style.backgroundImage=`url(${songs[songIndex].coverpath})`;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    let currentPlayButton2 = document.getElementById(`${songIndex}`);
    currentPlayButton2.classList.remove('fa-circle-play');
    currentPlayButton2.classList.add('fa-circle-pause');
    // let currentPlayButton3 = document.getElementById(`${songIndex-1}`);
    // currentPlayButton3.classList.remove('fa-circle-pause');
    // currentPlayButton3.classList.add('fa-circle-play');
    
    let audio2 = new Audio();
            audio2.src = `/song${songIndex+1}.mp3`;
            audio2.addEventListener('loadedmetadata', function() {
            let duration = audio2.duration;
            let minutes = Math.floor(duration / 60);
            let seconds = Math.floor(duration % 60);
            if (seconds < 10) {
               seconds = "0" + seconds;
            }
            timeafter.innerHTML=minutes + ":" + seconds;
            console.log(timeafter);
          });
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=8;
        let currentPlayButton1 = document.getElementById(`${songIndex-8}`);
        currentPlayButton1.classList.remove('fa-circle-pause');
        currentPlayButton1.classList.add('fa-circle-play');
    }
    else{
        songIndex=songIndex-1;
        let currentPlayButton1 = document.getElementById(`${songIndex+1}`);
        currentPlayButton1.classList.remove('fa-circle-pause');
        currentPlayButton1.classList.add('fa-circle-play');

    }
    // let currentSongIndex1 = parseInt(songIndex.target.id);
    audioElement.src=`/song${songIndex+1}.mp3`;
    mastersong.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    container.style.backgroundImage=`url(${songs[songIndex].coverpath})`;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    let currentPlayButton = document.getElementById(`${songIndex}`);
    currentPlayButton.classList.remove('fa-circle-play');
    currentPlayButton.classList.add('fa-circle-pause');
    // let currentPlayButton1 = document.getElementById(`${songIndex+1}`);
    // currentPlayButton1.classList.remove('fa-circle-pause');
    // currentPlayButton1.classList.add('fa-circle-play');
    let audio1 = new Audio();
            audio1.src = `/song${songIndex+1}.mp3`;
            audio1.addEventListener('loadedmetadata', function() {
            let duration = audio1.duration;
            let minutes = Math.floor(duration / 60);
            let seconds = Math.floor(duration % 60);
            if (seconds < 10) {
               seconds = "0" + seconds;
            }
            timeafter.innerHTML = minutes + ":" + seconds;
            console.log(timeafter);
          });
})