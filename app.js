let video = document.querySelector('.video');
let yesBtn = document.querySelector('.yes');
let noBtn = document.querySelector('.no');
let h1 = document.querySelector('.center h1');
let h2 = document.querySelector('.center h2');
let topBox = document.querySelector('.top');
let smgBtn = document.querySelector('.smg');
let gift1 = document.querySelector('.gift1');
let gift2 = document.querySelector('.gift2');
let gift3 = document.querySelector('.gift3');
let quiz = document.querySelector('.quiz');
let page2 = document.querySelector('section.page2');
let page1 = document.querySelector('section.page1');
let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let quiz1Result = document.querySelector('.acha p');
let quizTitle = document.querySelector('.quiz-title');
let back = document.querySelector('.back');
let letter = document.querySelector('section.letter');
let letterBtn = document.querySelector('.ltr-back');
let photosContainer = document.querySelector('.photos');
let imgGlry = document.querySelector('.img-glry');
let glryBack = document.querySelector('.glry-back');
let finalBtn = document.querySelector('.finally');
let finallyContainer = document.querySelector('section.finally');


const photosData = [
    {
      id: 1,
      img: "i1.png",
      title: "Sweet Hello"
    },
    {
      id: 2,
      img: "i2.png",
      title: "True Smile"
    },
    {
      id: 3,
      img: "i3.png",
      title: "Perfect Day"
    },
    {
      id: 4,
      img: "i4.png",
      title: "Only Us"
    },
    {
      id: 5,
      img: "i5.png",
      title: "My Home"
    },
    {
      id: 6,
      img: "i6.png",
      title: "Forever Us"
    }
];
  

let scale = 1;
let step = 0;

const img = document.createElement("img");
img.src = "/media/badmosh-cat.jpg";
img.alt = "please";
img.classList.add("cat-img");
const scaleBtn = function(){
    scale += 1.2;
    yesBtn.style.transform = `scale(${scale})`;

}

noBtn.addEventListener('click', () => {
    step++;
    scaleBtn()
    if(step === 1){
        h1.innerText = "Think again ! 😭";
        video.src = "/media/v2.mp4";
    }
    if(step === 2){
        h1.innerText = "Are you sure ? 😭";
        video.src = "/media/v4.mp4";
        video.style.objectPosition = "center";
    }
    if(step === 3){
        h1.innerText = "See This ! 👿";
        video.style.display = "none";
        if(!topBox.contains(img)){
            topBox.appendChild(img);
        }
    }
    
    if(step > 3){
        step = 0;
        h1.innerText = "Will you be Mine ?";
        img.remove();
        video.style.display = "block";
        video.src = "/media/v1.mp4";
        video.style.objectPosition = "center";
    }    
})

yesBtn.addEventListener('click', () => {
    h1.innerText = "Happy Valentine's Day! ❤️";
    h2.innerText = "I am so glad you said yes! ❤️";

    img.remove();
    video.style.display = "block";
    video.src = "/media/v5.mp4";
    video.style.objectPosition = "center";

    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    smgBtn.style.display = "block";
});


smgBtn.addEventListener('click',() => {
    page2.style.display = "flex";
    page1.style.display = "none";
})

gift1.addEventListener('click', () => {
    quiz.style.display = "flex";
    page2.style.display = "none";
})

let quizStep = 1;

option1.addEventListener('click', () => {
    if(quizStep === 1){
        quiz1Result.innerText = 'Oohoo, please try again !';
    }
    else if(quizStep === 2){
        option1.innerHTML = 'On Mars';
        option2.innerHTML = 'In Your Heart';
        quizTitle.innerText = 'Where do you want to go on a date? ❤️';
        quiz1Result.innerText = '';
        quizStep = 3;
    }
});

option2.addEventListener('click', () => {
    if(quizStep === 1){
        option1.innerHTML = 'Me';
        option2.innerHTML = 'Always you';
        quizTitle.innerText = 'Who fights more in this relationship? ❤️';
        quiz1Result.innerText = '';
        quizStep = 2;
    }
    else if(quizStep === 2){
        quiz1Result.innerText = 'Oohoo, please try again !';
    }
    else if(quizStep === 3){
        option1.style.display = "none";
        option2.style.display = "none";
        quizTitle.innerHTML = 'Yay you passed the test! you really love me ❤️';
        quiz1Result.innerText = 'Aww 🥰 perfect choice!';

        back.addEventListener('click', () => {
            quiz.style.display = "none";
            page2.style.display = "flex";
            option1.style.display ="flex",
            option2.style.display = "flex"
            quizTitle.innerHTML = 'Who is the absolute "BOSS" in this relationship';
            quiz1Result.innerText = '';
            quizStep = 1;
            option1.innerHTML = 'Me';
            option2.innerHTML = 'Obviously You';
        })
    }
});

gift2.addEventListener('click', () => {
    letter.style.display = "flex";
    page2.style.display = "none";
} )

letterBtn.addEventListener('click', () => {
    letter.style.display = "none";
    page2.style.display = "flex";
}
)


function createPhotos(){
    let cluster = "";
    photosData.forEach((dets,idx) => {
        cluster += `
                     <div class="photo">
                        <div class="img">
                            <img src="https://i.pinimg.com/1200x/50/44/2f/50442f605e47cdb76c4d1a5b06c84cd0.jpg" alt="">
                        </div>
                        <h2>${dets.title}</h2>
                    </div>
        `
    })

    photosContainer.innerHTML = cluster;
}

createPhotos();

gift3.addEventListener('click', () => {
    imgGlry.style.display = "flex";
    page2.style.display = "none";
})
glryBack.addEventListener('click', () => {
    imgGlry.style.display = "none";
    page2.style.display = "flex";
}
)

finalBtn.addEventListener('click', () => {
    finallyContainer.style.display = "flex";
    page2.style.display = "none";
})