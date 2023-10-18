function sub() {
    console.log("sub");
    //alert("submitted");
    var emailval=document.getElementById('email').value;
    
    console.log(emailval);
    var emalbool=valEmail(emailval) ;
    console.log(emalbool,"emali boolean");
    
    
    var contval=document.getElementById('con').value;
    var contbool=valCont(contval) ;
    console.log(contbool,"contact boolean");
    
 
    
    var namval=document.getElementById('name').value;
    var nambool=valName(namval) ;
  
    var ageval=document.getElementById('age').value;
    var agebool=valAge(ageval) ;
  
  
    var desval=document.getElementById('deg').value;
    var desbool=valDes(desval) ;
  
    
  var dobval=document.getElementById('dob').value;
    var dobbool=valDob(dobval) ;
  
  //check all boolean 
  
   console.log(emalbool, "email") ;
   console.log(contbool,"contact") ;
  console.log(nambool, "name") ;
  console.log(agebool, "Age") ;
  console.log(dobbool, "Dob") ;
  console.log(desbool, "Desgination") ;
  
 
  var res=emalbool && contbool && nambool && agebool && desbool && dobbool;
  console.log(res, "resbool");
 
    if(res)//if val inside tru / false.if condition is tru then exe it else exe else claus {
       {
        alert("submitted form. ",res);
        vac();
    }
   else{
        alert("check feilds. ");
        
    }
}
function valEmail(emailval) {
    var valid=false;
    var emailErr=document.getElementById('email-err');
    var p=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   // console.log(emailval);
    if(emailval.trim()==""){
        emailErr.innerHTML="this feild is required";
    }
    else if(!p.test(emailval.trim())){
        // check in if it's value is true /false inside the brackets, then ex
       
        emailErr.innerHTML="invalid email";

    }
    else{
        valid=true;
     emailErr.innerHTML="";

    }
    return valid;
}
    
    
function sho() {
     alert("hi");
 }
 
 function vac() {
    var email=document.getElementById('email');
    var name=document.getElementById('name');
    var cont=document.getElementById('con');
    var age=document.getElementById('age');
    var deg=document.getElementById('deg');
    var dob=document.getElementById('dob');
    email.value="";
    name.value="";
    cont.value="";
    age.value="";
    deg.value="";
    dob.value="";
    
  
}
 
 
function valCont(contval) {
    var valid=false;
    var contval=contval.trim();
   // console.log(contval,contval.length);
    var conErr=document.getElementById('cont-err');
    var p=/^[0-9]*$/;
   // console.log(emailval);
    if(contval==""){
        
        console.log(contval," contval value");
        conErr.innerHTML="this feild is required";
    }
    
    else if(!(p.test(contval))){
        // check in if the value is true /false.
        conErr.innerHTML="invalid contact";
}
    
   else if(!(contval.length == 10)){
        conErr.innerHTML="invlid contact";
    }
    else{
        valid=true;
        conErr.innerHTML="";

    }
    return valid;
}


function valName(nameval) {
    var valid=false;
    var nameval=nameval.trim();
   console.log(nameval,nameval.length);
    var namErr=document.getElementById('name-err');
    var p=/^[a-zA-Z]*$/;
   // console.log(emailval);
    if(nameval==""){
        console.log(nameval," nameval value");
        namErr.innerHTML="this feild is required";
    }
    
    else if(!(p.test(nameval))){
        // check in if it's value is true /false.
        namErr.innerHTML="invalid name";
}
    
   else if(nameval.length < 3){
        namErr.innerHTML="invalid name entrd";
    }
    else{
        valid=true;
        namErr.innerHTML="";

    }
    return valid;
}



function valAge(ageval) {
    var valid=false;
    var ageval=ageval.trim();
   console.log(ageval,ageval.length);
    var ageErr=document.getElementById('age-err');
    var p=/^[0-9]*$/;
   // console.log(emailval);
    if(ageval==""){
        console.log(ageval,"ageval value");
        ageErr.innerHTML="this feild is required";
    }
    
    else if(!(p.test(ageval))){
        // check in if it's value is true /false.
        ageErr.innerHTML="invalid Age";
}
    
   else if(ageval.length>3){
        ageErr.innerHTML="invalid age entrd";
    }
    else{
        valid=true;
        ageErr.innerHTML="";

    }
    return valid;
}


function valDes(desval) {
    var valid=false;
    var desval=desval.trim();
   console.log(desval,desval.length);
    var desErr=document.getElementById('deg-err');
    var p=/^[A-Za-z]*$/;
   // console.log(emailval);
    if(desval==""){
        console.log(desval,"desval value");
        desErr.innerHTML="this feild is required";
    }
    
    else if(!(p.test(desval))){
        // check in if it's value is true /false.
       //not true cond. 
       desErr.innerHTML="invalid designation";
}
    
    else{
        valid=true;
        desErr.innerHTML="";

    }
    return valid;
}


function valDob(dobval) {
    console.log(dobval, "donval");
    var dobErr=document.getElementById('dob-err');
   
    if(dobval==""){
        console.log(dobval,"dobval value");
        dobErr.innerHTML="DOB is required";
    }
    else {
        
        d=Date();
        tip=dobval.getTime();
            pms=d.getTime();
            console.log(tip) ;
            console.log (pms);
            var valid=false;
            console.log("current dt",d,d.length);
            console.log("dobval ",dobval,dobval.length);
            
            if(tip>pms){
                console.log("date greater than today");
                dobErr.innerHTML="DOB is invalid";
            }
            else{
                valid=true;
                console.log ("valid");
                dobErr.innerHTML="valid";
            }
    return valid;
}
}