
const buttons = document.querySelectorAll('.tab');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        showTab(button.id);
        removeActiveTabClassFromButtons(buttons);
        addActiveTabClass(event.target);
    });
});
document.querySelector('#tab-1-button').click();

const headerButtons = document.querySelectorAll('.header-button');

headerButtons.forEach((headerButton) => {
    headerButton.addEventListener("click", () => {
        toggleSectionText(headerButton);
    });
});

const showAllButton = document.querySelector('#show-all');
const hideAllButton = document.querySelector('#hide-all');

showAllButton.addEventListener('click', () => {
    toggleAllSections(showAllButton, "show");
})

hideAllButton.addEventListener('click', () => {
    toggleAllSections(hideAllButton, "hide");
})

// *****************************
// functions
// 
// 

function toggleAllSections(showAllButton, action) {
    const sectionDiv = showAllButton.closest('.section');

    const sectionTextDivs = sectionDiv.querySelectorAll('.section-text');

    if (action == "show") {
        sectionTextDivs.forEach((sectionTextDiv) => {
            sectionTextDiv.classList.remove('hidden');
        });
    } else {
        sectionTextDivs.forEach((sectionTextDiv) => {
            sectionTextDiv.classList.add('hidden');
        });
    }
}



function addActiveTabClass(button) {
    button.classList.add("active");
}
function removeActiveTabClassFromButtons(buttonsNodeList) {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
}

function showTab(tabButtonId) {
    // tabButtonId is of the form tab-N-button
    const tabContentId = tabButtonId.replace("button", "content");

    // hide all tabs again
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((tabContent) => hideTabContent(tabContent));

    const tabContentToShow = document.querySelector(`#${tabContentId}`);
    showTabContent(tabContentToShow);
}

function hideTabContent(tabContent) {
    tabContent.style.display = "none";
}

function showTabContent(tabContent) {
    tabContent.style.display = "block";
}

function toggleSectionText(headerButton) {
    const sectionTextId = headerButton.id.replace("-header","");
    const sectionText = document.querySelector(`#${sectionTextId}`);
    sectionText.classList.toggle('hidden');    
}