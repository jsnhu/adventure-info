
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
    headerButton.addEventListener("click", (event) => {
        toggleSectionText(event, headerButton);
    });
});


// *****************************
// functions
// 
// 
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

function toggleSectionText(event, headerButton) {
    const sectionTextId = headerButton.id.replace("-header","");
    const sectionText = document.querySelector(`#${sectionTextId}`);
    sectionText.classList.toggle('hidden');    
}