

function randamnum(min,max){
    var a= Math.floor(Math.random()*(max-min+1)+min);
    // console.log(a)
    return a
    
    }
    
    let b=randamnum(1,6)
    console.log(b)
    let count=0;
    
    var but1=document.getElementById("but1")
    but1.addEventListener("click",gunpoint)
    

    function gunpoint(){
     var gun=document.getElementById("gun")
     setTimeout(function(){ gun.style.display="block" },1000)
     setTimeout(function(){ gun.style.display="none"},8000)
     setTimeout(check,8000)
    }
     
    function check(){
          
    
    count++;
    //    var but=document.getElementById("but")
   
    // console.log(count)
   if(count==b){

    var gunfire=document.getElementById("gunfire")
    setTimeout(function(){ gunfire.style.display="block" },1000)
    setTimeout(function(){ gunfire.style.display="none" },8000)

    var gunshot=document.getElementById("gunshot")
    setTimeout(function() { gunshot.play()},1000)
     setTimeout(function(){ gunshot.pause() },8000)
    

        var text1=document.getElementById("text1")
         text1.textContent="go to hell";
         text1.style.color="red";
         text1.style.fontSize="20px";
         
        // console.log("your dead")
    }
    else{
        var text1=document.getElementById("text1")
    
        
        setTimeout(function(){  text1.textContent="trigger to kill youeself" },3000)
        text1.textContent="Your alive"
        
        // console.log("your alive")
    }
    
    
    }