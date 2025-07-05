


function randamnum(min,max){
    var a= Math.floor(Math.random()*(max-min+1)+min);
    // console.log(a)
    return a
    
    }
    
    let e=randamnum(1,6)
    console.log(e)
    let count4=0;

    var but4=document.getElementById("but4")
    but4.addEventListener("click",gunpoint)
    

    function gunpoint(){
     var gun=document.getElementById("gun")
     setTimeout(function(){ gun.style.display="block" },1000)
     setTimeout(function(){ gun.style.display="none"},8000)
     setTimeout(check4,8000)
    }
     

    function check4(){
        count4++;
    //    var but=document.getElementById("but")
    
    // console.log(count)
    if(count4==e){
        var gunshot=document.getElementById("gunshot")
        setTimeout(function() { gunshot.play()},1000)
        setTimeout(function(){ gunshot.pause() },8000)
        

        var gunfire=document.getElementById("gunfire")
        setTimeout(function(){ gunfire.style.display="block" },1000)
        setTimeout(function(){ gunfire.style.display="none" },8000)
       
        var text4=document.getElementById("text4")
        text4.textContent="go to hell"
        text4.style.color="red";
        text4.style.fontSize="20px";
        // console.log("your dead")
    }
    else{
        var text4=document.getElementById("text4")
        setTimeout(function(){  text4.textContent="trigger to kill youeself" },3000)
       text4.textContent="Your alive"
     
        // console.log("your alive")
    }
    
    }