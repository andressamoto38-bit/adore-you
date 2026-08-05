const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const book = document.getElementById("book");

const pages = document.querySelectorAll(".page-card");
const nextButtons = document.querySelectorAll(".next");

let current = 0;

openBtn.addEventListener("click", () => {
    envelope.classList.add("hidden");
    book.classList.remove("hidden");
});

nextButtons.forEach(button => {
    button.addEventListener("click", () => {

        pages[current].classList.remove("active");

        current++;

        if(current < pages.length){
            pages[current].classList.add("active");
        }

    });
});

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,500);
