const inputName = document.querySelector(".name")
const inputPhone = document.querySelector(".phone")
const inputEmail = document.querySelector(".email")
const inputPassword = document.querySelector(".password")
const singUpBtn = document.querySelector(".signup")
const requiredPar = document.createElement("p");
const body = document.querySelector("body")
const loginInputEmail = document.querySelector(".Login")
const loginInputPassword = document.querySelector(".Logpw")
const loginBtn = document.querySelector(".Loginbtn")

// const users = [];
// localStorage.setItem("users", users);
const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
console.log(users)




singUpBtn.addEventListener("click", () => {

    if (
        inputName.value === "" ||
        inputPhone.value === "" ||
        inputPassword.value === "" ||
        inputEmail.value === "" 
        
    ) {
        // const requiredPar = document.createElement("p");

        requiredPar.innerText = "Please fill in all the blanks";
        requiredPar.style.color = "red";
        // document.body.appendChild(requiredPar);
    } else {

        let = isError = false;

        for (let i = 0; i < users.length; i++) {

            if (users[i].email === inputEmail.value) {
                isError = true;
            }
        }

        if (isError) {
            requiredPar.innerText = "User with this email already exists!";
            requiredPar.style.color = "red";
        } else {
            const userData = {
                name: inputName.value,
                phone: inputPhone.value,
                email: inputEmail.value,
                password: inputPassword.value,
            };
            users.push(userData); // obnavili objet polazhiv tuda user
            localStorage.setItem("users", JSON.stringify(users));
            inputName.value = "";
            inputPhone.value = "";
            inputEmail.value = "";
            inputPassword.value = "";
            requiredPar.innerText = "You have been registered";
            requiredPar.style.color = "green";
            requiredPar.style.marginLeft = "100px;"
        }
    }



    document.body.appendChild(requiredPar);
});

loginBtn.addEventListener("click", () => {
 let isLoginError = true;

    for(let i = 0; i <users.length; i++) {

        if (
        loginInputEmail.value === users[i].email &&
        loginInputPassword.value === users[i].password
        ) {
            isLoginError = false;
        } 
       
        if (isLoginError) {
            if (loginInputEmail.value === "" || loginInputPassword.value === "") {
              requiredPar.innerText = "You need to fill all fields";
              requiredPar.style.color = "red";
            } else {
              requiredPar.innerText = "You have invalid email or password";
              requiredPar.style.color = "red";
            }
          } else {
            loginInputEmail.value = "";
            loginInputPassword.value = "";
            requiredPar.innerText = "You have been logged in";
            requiredPar.style.color = "green";

            console.log("hi")
            body.innerHTML = "";
            const btnLogout = document.createElement("button");
            btnLogout.innerText = "Logout";
            body.append(btnLogout);
          }
          document.body.appendChild(requiredPar);
    }

    
    // console.log(isLoginError)
    document.body.appendChild(requiredPar);
});




















// console.log(inputName.value);
// console.log(inputPhone.value);
// console.log(inputEmail.value);
// console.log(inputPassword.value);


// if(users === null) {
//     users = []
// } else {
//     users = localStorage.getItem("users");
// }



// function foo(x) {
//     return typeof x === "number" ? "number" : "string"
// }

// console.log(foo("Hi"))
//ternarnij operator