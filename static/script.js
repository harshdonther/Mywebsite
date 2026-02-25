// Simple fade animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition="all 0.6s ease";
});
// Toggle Password
function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

// Form Validation
document.getElementById("signupForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(name === "" || email === "" || password === ""){
        alert("Please fill all fields!");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters!");
        return;
    }

    alert("Account Created Successfully 🚀");
});// Auto image slider (one image at a time, swipe left every 5 sec by default)
document.querySelectorAll(".auto-slider-track").forEach((track) => {
    const slides = track.querySelectorAll(".auto-slide");
    if (!slides.length) return;

    let index = 0;
    const intervalMs = Number(track.dataset.interval || 5000);

    setInterval(() => {
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }, intervalMs);
});

// Hide login status text after 5 seconds
const loginStatusToast = document.getElementById("login-status-toast");
if (loginStatusToast) {
    setTimeout(() => {
        loginStatusToast.classList.add("hide");
    }, 5000);
}
