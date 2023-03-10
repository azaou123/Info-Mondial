
function nextBref(){
    var nbr = document.getElementById('countBref').innerText
    for (let i=1;i<4;i++){
        document.getElementById('bref'+i).style.display = "none"
    }
    document.getElementById('bref'+nbr).style.display= ""
    document.getElementById('imgBref').src ='../images/bref'+nbr+'.jpg'
    if (nbr=='2'){
        document.getElementById('countBref').innerHTML = '3'
    }
    else if (nbr=='3'){
        document.getElementById('countBref').innerHTML = '1'
    }
    else {
        document.getElementById('countBref').innerHTML = '2'
    }
}
   
