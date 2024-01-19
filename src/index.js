import populateHome from "./home";

// Get menu icon, menu container and close btn
const menuIcon = document.getElementById('menu-logo'),
      menuContainer = document.getElementById('menu-container'),
      closeBtn = document.getElementById('close-Btn');


// Function Close and Open menu
function closeOpenMenu() {
    // Does menuIcon exist
    if(menuIcon) {
        //Open MenuContainer
        menuIcon.addEventListener('click', () => {
            menuContainer.classList.remove('hidden'); // remove hidden class
        })
    }

    // Does closeBtn exist
    if(closeBtn) {
        //Close MenuContainer
        closeBtn.addEventListener('click', () => {
           menuContainer.classList.add('hidden'); // add hidden class
        })
    }
}

// Call CloseOpenMenu Function
closeOpenMenu();

// When the page is loading call populateHome
document.addEventListener('DOMContentLoaded', populateHome());


// Function to handle tabs Switching
const handletabs = () => {
    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const aboutTab = document.getElementById('about-tab');
    const content = document.getElementById('content');

    // listen for a click on Home Tab
    homeTab.addEventListener('click', () => {
        content.innerHTML = ''; // empty content
        populateHome(); // Call populate Home module
    })
    
    // listen for a click on Menu Tab
    menuTab.addEventListener('click', () => {
        content.innerHTML = ''; // empty content
        populateMenu(); // Call populate Menu module
    })

    // listen for a click on About Tab
    aboutTab.addEventListener('click', () => {
        content.innerHTML = ''; // empty content
        populateAbout(); // Call populate About module
    })
}

handletabs();