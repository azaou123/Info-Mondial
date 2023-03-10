
function blogChange(x){
    for (let i=1;i<7;i++){
        document.getElementById('part'+i).style.display="none"
        document.getElementById('li'+i).style.color = ""
    }
    document.getElementById('part'+x).style.display=""
    for (let i=1;i<4;i++){
        document.getElementById('btnStart'+i).click()
    }
}
