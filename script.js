
const buttons = document.querySelectorAll('.tab');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        showTab(button.id);
        removeActiveTabClassFromButtons(buttons);
        addActiveTabClass(event.target);
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