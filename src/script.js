const progressBar = document.querySelector(".progress");
const previousBtn = document.querySelector("#previous-btn");
const fowardBtn = document.querySelector("#foward-btn");

let progress = 0;

function updateProgressBar() {
    progressBar.style.width = progress + "%";
}

function fowardStep(){
    progress += 5;
    if(progress > 100) progress = 100;
    updateProgressBar();

}

function previousStep() {
    progress -= 5;
    if(progress < 0) progress = 0;
    updateProgressBar();
}
fowardBtn.addEventListener("click", fowardStep)
previousBtn.addEventListener("click", previousStep)