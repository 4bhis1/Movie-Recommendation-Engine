function load(){
    var preloader=document.getElementById('loading')
    
    preloader.style.display='none'
    console.log("Time to remove")
  }



function move(he,st){
    console.log("clcije")
    let pp=document.getElementById('pp')
    let head=document.getElementById('head')
    let ovr=document.getElementById('overview')
    head.innerHTML=he
    ovr.innerHTML=st

    pp.style.visibility="visible"
    pp.style.opacity=1

    // pp.innerHTML=st
    console.log(st)
}

function cls(){
    console.log("closedS")
    let pp=document.getElementById('pp')
    pp.style.visibility='hidden'
    pp.style.opacity=0
}

const buttonRight = document.getElementById('lft');
const buttonLeft = document.getElementById('rght');


buttonRight.onclick = function () {
    
  document.getElementById('container').scrollLeft += 800
  console.log("right clciked")
};
buttonLeft.onclick = function () {
    
  document.getElementById('container').scrollLeft -= 800
  console.log("left clciked")
};

function movie_recommend(movie_name){
  document.getElementById("mvnm").value=movie_name
  document.getElementById("click").click()
}
