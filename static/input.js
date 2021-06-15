

const suggBox = document.getElementById("autocom-box");

const ib=document.getElementById("mvnm")

ib.onkeyup=(e)=>{
    let user=e.target.value.toLowerCase();
    let moviesarr=[]
    if(user.length>2){
        moviesarr=movie.filter(movie=>movie.toLowerCase().includes(user))
        moviesarr=moviesarr.map(movie=>`<li class="sugg" onclick="givetoinput('${movie}')"> ${movie} </li>`)
    }
    
    console.log(moviesarr)
    showarray(moviesarr)
}


function showarray(moviesarr){
    const html=!moviesarr.length ? '':moviesarr.join('');
    suggBox.innerHTML = html;
}


function givetoinput(st){
    let inp=document.getElementById("mvnm")
    let btn=document.getElementById("click")
    let sugg=document.getElementById("autocom-box")
    let suggbox=document.getElementsByClassName("sugg")
    inp.value=st
    sugg.style.display='none'
    btn.click()
}