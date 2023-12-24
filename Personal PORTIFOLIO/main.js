function toggleReadMore() {
    var moreText = document.getElementById("moreText");
    var buttonText = document.querySelector("button");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        buttonText.innerHTML = "Read less";
        window.addEventListener("scroll", hideOnScroll);

    }else{
        moreText.style.display ="none";
        buttonText.innerHTML ="Read more";
        window.removeEventListener("scroll", hideOnScroll);
    }
}

function hideOnScroll() {
    var moreText = document.getElementById("moreText");
    var buttonText = document.querySelector("button");

    moreText.style.display ="none";
    buttonText.innerHTML ="Read more";
    window.removeEventListener("scroll", hideOnScroll);
}

const myform = document.querySelector(".contribution-form");
myform.addEventListener('Submit', submitFunc);

function submitFunc(event) {
    if(!myform.name.value || myform.value.length > 15) {
        document.querySelector("#name").classList.add("error")
    }
}
