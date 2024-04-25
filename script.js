

// function opentab(tabname){
//     const tablinks = document.getElementsByClassName("tab-links");
//     const tabcontents = document.getElementsByClassName("tab-contents");

//     for(tablink of tablinks){
//         tablink.classList.remove("active-link")
//     }
//     for(tabcontent of tabcontents){
//         tabcontent.classList.remove("active-tab")
//     }
//     event.currentTarget.classList.add("active-link")
//     document.getElementById(tabname).classList.add("active-tab")
// }

function openTab(tabname) {
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-contents");

    // Remove 'active-link' class from all tab links
    tablinks.forEach(tablink => {
        tablink.classList.remove("active-link");
    });

    // Remove 'active-tab' class from all tab contents
    tabcontents.forEach(tabcontent => {
        tabcontent.classList.remove("active-tab");
    });

    // Add 'active-link' class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Add 'active-tab' class to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");

function openMenu(){
    sidemenu.style.right = "0"
}

function closeMenu(){
    sidemenu.style.right = "-200px"
}