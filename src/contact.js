function createContact(){
    const contactContent = document.createElement('div');
    const upperContainer = document.createElement('div');
    const message = document.createElement('h1');
    const contact = document.createElement('p');
    const emailDiv = document.createElement('div');
    const contactDiv = document.createElement('div');
    const addressDiv = document.createElement('div');
    const email = document.createElement('p');
    const emailIcon = document.createElement('i');
    const contactIcon = document.createElement('i');
    const addressIcon = document.createElement('i');
    const emailSpan = document.createElement('span');
    const address = document.createElement('p');

    message.textContent = "GET IN TOUCH";
    upperContainer.appendChild(message);

    const contactIconList = ["fa-solid", "fa-phone-volume"];
    contactIconList.forEach(icon => {
        contactIcon.classList.add(icon);
    })
    contact.textContent = 'Phone: +66611992102';
    contactDiv.appendChild(contactIcon);
    contactDiv.appendChild(contact);
    upperContainer.appendChild(contactDiv);

    const emailIconList = ["fa-solid", "fa-envelope"];
    emailIconList.forEach(icon => {
        emailIcon.classList.add(icon);
    })
    emailSpan.style.color = 'red';
    emailSpan.textContent = 'zizu@practice.com';
    email.textContent = 'Email:';
    email.appendChild(emailSpan);
    emailDiv.appendChild(emailIcon);
    emailDiv.appendChild(email);
    upperContainer.appendChild(emailDiv);

    const addressIconList = ["fa-solid", "fa-location-crosshairs"];
    addressIconList.forEach(icon => {
        addressIcon.classList.add(icon);
    })
    contact.textContent = 'Phone: +66611992102';
    address.textContent = 'Address: 18 Mahmoud Azmy Street, of 24th April Road, Tamale, Ghana.';
    addressDiv.appendChild(addressIcon);
    addressDiv.appendChild(address);
    upperContainer.appendChild(addressDiv);


    const lowerContainer = document.createElement('form');
    const lowerLeftDiv = document.createElement('div');
    const leftTextInput = document.createElement('input');
    const leftEmailInput = document.createElement('input');
    const leftTelInput = document.createElement('input');
    const lowerRightDiv = document.createElement('div');
    const rightTextArea = document.createElement('textarea');
    const lowerButton = document.createElement('button');

    leftTextInput.setAttribute('placeholder', 'Your Name:')
    leftTextInput.setAttribute('required', 'true');
    leftTextInput.style = 'font-family: "Times New Roman"; font-size: 16px; font-weight: bold; border-radius: 10px;'+
    'box-shadow: 1px 1px 3px white; border-style: none; line-height: 120%';

    leftEmailInput.setAttribute('placeholder', 'Your Email Address Here:')
    leftEmailInput.setAttribute('required', 'true');
    leftEmailInput.style = 'font-family: "Times New Roman"; font-size: 16px; font-weight: bold; border-radius: 10px;'+ 
    'box-shadow: 1px 1px 3px white; border-style: none;';

    leftTelInput.setAttribute('placeholder', 'Your Phone Number:')
    leftTelInput.setAttribute('required', 'true');
    leftTelInput.style = 'font-family: "Times New Roman"; font-size: 16px; font-weight: bold; border-radius: 10px;'+
    'box-shadow: 1px 1px 3px white; border-style: none;';

    lowerLeftDiv.appendChild(leftTextInput);
    lowerLeftDiv.appendChild(leftEmailInput);
    lowerLeftDiv.appendChild(leftTelInput);

    lowerRightDiv.appendChild(rightTextArea);

    lowerContainer.appendChild(lowerLeftDiv);
    lowerContainer.appendChild(lowerRightDiv);
    lowerButton.textContent = "SEND MESSAGE";
    lowerContainer.appendChild(lowerButton);
    
    contactContent.appendChild(upperContainer);
    contactContent.appendChild(lowerContainer);

    upperContainer.style = 'grid-row: 1/2; margin: 0 auto; font-family: "Times New Roman"; font-size: 25px; font-weight: bold;';

    lowerContainer.style = 'grid-row: 2/3; display: grid; grid-template: 1fr 50px / repeat(2, 1fr);' + 
    'margin: 10px;';

    lowerLeftDiv.style = 'grid-column: 1/2; grid-row: 1/2; display: grid; grid-template: repeat(3, 1fr)/1fr; gap: 20px; margin: 10px;';

    lowerRightDiv.style = 'grid-column: 2/3;';

    rightTextArea.setAttribute('rows', 20); 
    rightTextArea.setAttribute('cols', 100);
    rightTextArea.setAttribute('placeholder', 'Write your comments here.');
    rightTextArea.style = 'margin: 10px; '

    lowerButton.style = 'grid-row: 2/3; grid-column: 1/3';

    contactContent.style = "display: grid; grid-template: repeat(2, 1fr) / 1fr;" +
    "width: 1500px; height: 100vh; margin: 0 auto; background-image: url(/assets/1536017106.png);" +
    "background-position: center; background-repeat: no-repeat; background-size: cover; opacity: 0.7;";
    
    return contactContent;
}

export default createContact;