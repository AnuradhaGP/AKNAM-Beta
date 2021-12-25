
document.addEventListener("scroll",(event) => {
    if(this.scrollY> 20){
        document.querySelector(".nav-bar").classList.add("sticky");
    }
    else{
        document.querySelector(".nav-bar").classList.remove("sticky");
    }
});

function closeWrap(){
    document.getElementsByClassName("header-wrap")[0].classList.add("remove");
}

document.querySelector(".heart-btn").addEventListener("mouseover",(event)=>{

    document.querySelector(".fa-heart-o").classList.add("fa-heart");
    document.querySelector(".fa-heart-o").classList.remove("fa-heart-o");
})
document.querySelector(".heart-btn").addEventListener("mouseout",(event)=>{

    document.querySelector(".fa-heart").classList.add("fa-heart-o");
    document.querySelector(".fa-heart").classList.remove("fa-heart");
})

document.querySelector(".comment-btn").addEventListener("mouseover",(event)=>{

    document.querySelector(".far").classList.add("fas");
    document.querySelector(".far").classList.remove("far");
})
document.querySelector(".comment-btn").addEventListener("mouseout",(event)=>{

    document.querySelector(".comment-btn .fas").classList.add("far");
    document.querySelector(".comment-btn .fas").classList.remove("fas");
    
})