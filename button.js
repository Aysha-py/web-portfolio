function toggle(){
    let button = document.getElementById("dropdown")
    let toggleBtn = document.getElementById("toggle-btn")
    let dots = document.getElementById("dots")
  

    if (button.style.display === "none" && dots.style.display === "none"){
        button.style.display = "block";
        dots.style.display ="block"
        toggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
        </svg>`
    }
    else{
        dots.style.display ="none"
        button.style.display = "none";
        toggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" fill="black" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>`
    }
}



// const dots = document.querySelectorAll(".dots")
// const dropdown = document.querySelectorAll("dropdown")
// const toggleBtn = document.querySelector("toggleBtn")

// let showDropdown ="false";

// toggleBtn.addEventListener("click",toggle);

