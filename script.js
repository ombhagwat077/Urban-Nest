const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link")
      

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-solid fa-eye-slash", "fa-solid fa-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-solid fa-eye", "fa-solid fa-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    
    
     

   
  


    //code for setup login page on home page
    //const formOpenBtn = document.querySelector("#form-open"),
     // home = document.querySelector(".home"),
      //container = document.querySelector(".container"),
     // pwShowHide = document.querySelectorAll(".showHidePw"),
     // pwFields = document.querySelectorAll(".password"),
      //signUp = document.querySelector(".signup-link"),
      //login = document.querySelector(".login-link");

      



