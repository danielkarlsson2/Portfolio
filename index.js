// Variables
const regForm = document.getElementById('regForm');
const fullName = document.getElementById('fullName_id');
const email = document.getElementById('email_id');
const messageId = document.getElementById('message_id');

const nameError = document.getElementById('nameError');
const mailError = document.getElementById('mailError');
const output = document.getElementById('output');

// regForm.addEventListener('submit', e => {
//     e.preventDefault();

//     // validateInputs();
//     // SendMail();
    

// })

// // SetErrors
//     const setError = (element, message) => {
//         const inputControl = element.parentElement;
//         const errorDisplay = inputControl.querySelector('.feedback');

//         errorDisplay.innerText = message;
//         inputControl.classList.add('error');
//         inputControl.classList.remove('success');
//     }
//     const setSuccess = element => {
//         const inputControl = element.parentElement;
//         const errorDisplay = inputControl.querySelector('.feedback');

//         errorDisplay.innerText = '';
//         inputControl.classList.add('success');
//         inputControl.classList.remove('error');
//     }
//     const isValidEmail = email => {
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(String(email).toLowerCase());
//     }

// // Validate

// const validateInputs = () => {

//     const nameValue = fullName.value.trim();
//     const emailValue = email.value.trim();
//     const messageValue = messageId.value;

//     if (nameValue === '') {
//         setError(fullName, 'Please write your name');
//         console.log('Enter a name')
//     }
//     else if (nameValue.length == 1 || nameValue.length <= 2) {
//         setError(fullName, 'Name has to be more than two characters')
//     }
//     else {
//         setSuccess(fullName);
//     }


//     if (emailValue === '') {
//         setError(email, 'Email is required');
//         console.log('Entar email adress')
//     }
//     else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     }
//     else {
//         setSuccess(email);
//     }

//     if ( messageValue === '') {
//         setError(messageId, 'Please write something in your message')
//     }

// };



// Mailjs 

    // let errMessage = []

    // if (fullName.value === '' || fullName.value.length == null) {
    // //    errMessage.push('Name is required')
    //     nameError.innerText = 'Name is required'
    //     console.log('Name is required')
    // }
    // else if (fullName.value.length == 1 || fullName.value.length == 2) {
    //     // errMessage.push('Name must have more than 2 characters');
    //     nameError.innerText = 'Name must have more than 2 character'
    // }
    // if (mailError.value === '') {
    //     mailError.innerText = 'Please enter a valid email adress'
    // }


    function SendMail() {
        let params = {
            from_name : fullName.value,
            email_id : email.value,
            message : messageId.value
        } 
        emailjs.send("service_38cnv5u, template_onn3gz1", params).then(function (res) {
            alert("Success! " + res.status);  
            // output.appendChild("h2")
        })
    }

    // -------------Image Modal
    document.querySelectorAll('.image-container img').forEach(image => {
        image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
            console.log('click')
        }

        document.querySelector('.popup-image span').onclick = () => {
            document.querySelector('.popup-image').style.display = 'none';
        }
    });
