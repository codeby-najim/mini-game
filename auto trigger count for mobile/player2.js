

function randamnum(min,max){
    var a= Math.floor(Math.random()*(max-min+1)+min);
    // console.log(a)
    return a
    
    }
    
    let c=randamnum(1,6)
    console.log(c)
    let count2=0;

    var but2=document.getElementById("but2")
    but2.addEventListener("click",gunpoint2)
    

    function gunpoint2(){
     var gun=document.getElementById("gun")
     setTimeout(function(){ gun.style.display="block" },1000)
     setTimeout(function(){ gun.style.display="none"},8000)
     setTimeout(check2,8000)
    }
 
    function check2(){
        count2++;
    //    var but=document.getElementById("but")
    
    // console.log(count2)
    if(count2==c){

        var gunshot=document.getElementById("gunshot")
        setTimeout(function() { gunshot.play()},1000)
        setTimeout(function(){ gunshot.pause() },8000)
        

        var gunfire=document.getElementById("gunfire")
        setTimeout(function(){ gunfire.style.display="block" },1000)
        setTimeout(function(){ gunfire.style.display="none" },8000)
   

        var text2=document.getElementById("text2");
            text2.textContent="go to hell";
            text2.style.color ="red";
            text2.style.fontSize="20px";
         
        // console.log("your dead")
        
    }
    else{
        var text2=document.getElementById("text2");
        
        setTimeout(function(){  text2.textContent="trigger to kill youeself" },3000)
        
        text2.textContent="Your alive";

        // console.log("your alive")
        
    }
    
    }