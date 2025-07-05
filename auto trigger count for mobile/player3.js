

function randamnum(min,max){
    var a= Math.floor(Math.random()*(max-min+1)+min);
    // console.log(a)
    return a
    
    }
    
    let d=randamnum(1,6)
    console.log(d)
    let count3=0;

    var but3=document.getElementById("but3")
    but3.addEventListener("click",gunpoint)
    

    function gunpoint(){
     var gun=document.getElementById("gun")
     setTimeout(function(){ gun.style.display="block" },1000)
     setTimeout(function(){ gun.style.display="none"},8000)
     setTimeout(check3,8000)
    }

    function check3(){
        count3++;
    //    var but=document.getElementById("but")
    
    // console.log(count)
    if(count3==d){

        var gunshot=document.getElementById("gunshot")
        setTimeout(function() { gunshot.play()},1000)
        setTimeout(function(){ gunshot.pause() },8000)
        
        var gunfire=document.getElementById("gunfire")
        setTimeout(function(){ gunfire.style.display="block" },1000)
        setTimeout(function(){ gunfire.style.display="none" },8000)
       
        var text3=document.getElementById("text3")
         text3.textContent="go to hell"
        text3.style.color="red";
        text3.style.fontSize="20px";
        // console.log("your dead")
    }
    else{
        var text3=document.getElementById("text3")
        setTimeout(function(){  text3.textContent="trigger to kill youeself" },3000)
        text3.textContent="Your alive"
        // console.log("your alive")
    }
    
    }