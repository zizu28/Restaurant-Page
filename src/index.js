import './style.css';

// Create elements dynamically
const masterContainer = document.createElement('div');
   
// Navigation elements
const navContainer = document.createElement('div');
const content = document.createElement('div');
const restaurantName = document.createElement('div');
const restaurantActionBtns = document.createElement('div');
const btns = document.createElement('div');
const selectPages = document.createElement('div');
const pageLabel = document.createElement('label');
const selection = document.createElement('select');
const navIcon = document.createElement('i');
const navH1 = document.createElement('h1');

// Content elements
const divider = document.createElement('div');
const details = document.createElement('div');
const welcome = document.createElement('h1');
const introduction = document.createElement('p');
const command = document.createElement('button');



function createContent(){
    // Append options to select element
    const optionList = ['Booking', 'Our Teams', 'Testimonials'];
    optionList.forEach(option => {
        const opt = document.createElement('option');
        opt.textContent = option;
        selection.appendChild(opt);
    })

    // Append a label and select element to the selectPages div element
    pageLabel.textContent = "Pages";
    selectPages.appendChild(pageLabel);
    selection.classList.add('pages');
    selectPages.appendChild(selection);

    // Append icons and h1 elements to restaurantName div element
    const restaurantNavIcons = ["fa-solid", "fa-utensils", "font"];
    restaurantNavIcons.forEach(icon => {
        navIcon.classList.add(icon);
    })
    restaurantName.appendChild(navIcon);
    navH1.classList.add('name');
    navH1.textContent = 'Zulka';
    restaurantName.appendChild(navH1);

    // Append buttons to btns div element
    const btnNames = ['Home', 'About', 'Service', 'Menu'];
    btnNames.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn;
        btns.appendChild(button);
    })

    // Append btns and selectPages div elements to the restaurantActionBtns parent container
    btns.classList.add('btns');
    restaurantActionBtns.appendChild(btns);
    selectPages.classList.add('select-pages');
    restaurantActionBtns.appendChild(selectPages);

    restaurantName.classList.add('restaurant-name');
    navContainer.appendChild(restaurantName);
    restaurantActionBtns.classList.add('restaurant-action-btns');
    navContainer.appendChild(restaurantActionBtns);

    // Append elements to content container
    welcome.textContent = 'Enjoy our delicious meals';
    welcome.classList.add('welcome');
    introduction.classList.add('introduction');
    introduction.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    command.classList.add('command');
    command.textContent = "BOOK A TABLE";
    details.appendChild(welcome);
    details.appendChild(introduction);
    details.appendChild(command);
    details.classList.add('details');

    divider.appendChild(details);
    divider.classList.add('divider');
    content.appendChild(divider);

    navContainer.classList.add('nav');
    content.classList.add('content');

    
    return { content, navContainer };
}

const container = createContent();

masterContainer.classList.add('main-container');
masterContainer.appendChild(container.navContainer);
masterContainer.appendChild(container.content);
document.body.appendChild(masterContainer);
