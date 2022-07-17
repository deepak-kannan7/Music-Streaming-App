console.log("Welcome to Spotify for CPR")
//Initializing variables
let songIndex=1;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let masterSongName=document.getElementById('masterSongName');
let myProgressBar=document.getElementById('myProgressBar');
let songs=[
    {songName: "Stayin' Alive", filePath: "Spotify Clone/1.mp3", coverPath: "Spotify Clone/th1.jpg"},
    {songName: "Dancing Queen", filePath: "Spotify Clone/2.mp3", coverPath: "Spotify Clone/th2.jpg"},
    {songName: "Hips Dont Lie", filePath: "Spotify Clone/.mp3", coverPath: "Spotify Clone/th3.jpg"},
    {songName: "Numb", filePath: "Spotify Clone/4.mp3", coverPath: "Spotify Clone/th4.jpg"},
    {songName: "Highway to Hell", filePath: "Spotify Clone/5.mp3", coverPath: "Spotify Clone/th5.jpg"},
    {songName: "It's My Life", filePath: "Spotify Clone/6.mp3", coverPath: "Spotify Clone/th6.jpg"}
]

//audioElement.play()
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
    }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=6;
    }
    else{
        songIndex -=1;
    }
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=1;
    }
    else{
        songIndex +=1;
    }
    console.log(songIndex);
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})