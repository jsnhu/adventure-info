const gearButton = document.querySelector('#gearbutton');
const routeButton = document.querySelector('#routebutton');

gearButton.addEventListener('click', (event) => openTab(event, 'gear'));
routeButton.addEventListener('click', (event) => openTab(event, 'route'));

gearButton.click();

function openTab(event, tabName) {
    const allTabs = document.querySelectorAll('.tabcontent');

    allTabs.forEach((tab) => {
        tab.style.display = "none";
    });

    const tabLinks = document.querySelectorAll('.tablink');

    tabLinks.forEach((tabLink) => {
        tabLink.classList.remove('active');
    });

    document.querySelector(`#${tabName}`).style.display = 'block';
    event.currentTarget.classList.add("active");


}