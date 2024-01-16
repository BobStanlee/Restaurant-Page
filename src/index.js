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