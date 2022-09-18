// Link to Another HTML
function goHomePage() {
  console.log("Relocation to Home");
  location.href = "../home.html";
}
function goMenuPage() {
  console.log("Relocation to Menu");
  location.href = "../menu.html";
}
function goUniHousePage() {
  console.log("Relocation to UniHouse");
  location.href = "../uniHouse.html";
}
function goAboutPage() {
  console.log("Relocation to About");
  location.href = "../about.html";
}

function goCartPage() {
  console.log("Relocation to Cart");
  location.href = "../cart.html";
}
function goProfilePage() {
  console.log("Relocation to Profile");
  location.href = "../profile.html";
}
function gojoinUsPage() {
  console.log("Relocation to Login");
  location.href = "../login.html";
}
function goRegisterPage() {
  console.log("Relocation to Register");
  location.href = "../register.html";
}

function goLoginPage() {
  console.log("Relocation to Login");
  location.href = "../login.html";
}

// Hamburger menu active
const hamburger = document.querySelector('.hamburger');
const navOption = document.querySelector('.nav-option');
const joinUs = document.querySelector('.joinUs');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navOption.classList.toggle("active");
  joinUs.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navOption.classList.remove("active");
  joinUs.classList.remove("active");
}))

// Login Register Hide Unhide
function togglePasswordVisibility(){
      var x = document.getElementById("password");
      var y = document.getElementById("hide2");
      var z = document.getElementById("hide1");

      if (x.type == 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
      }
      else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
      }
    }