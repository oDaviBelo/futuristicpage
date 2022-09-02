const divnum = document.querySelectorAll('[id^="div"]').length;

function getnum(){
    let i = 0;
    while(i<divnum){
        i++;
        document.getElementById(`div${i}`).innerHTML=(1000000000000000000000*Math.random())
    }
}
window.setInterval(getnum,100)



function closeWindow() {  
    window.close();  
}  
