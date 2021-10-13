export const form = () => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm');
    const text = document.getElementById('text');
    const validate = document.querySelectorAll('[data-validate]');


    //Show input error message
    const showError = (input, message) => {
        const formControl = input.closest('.form__control');
        formControl.classList.add('error');
        formControl.classList.remove('success');

        const small = formControl.querySelector('small');
        small.classList.add('error');
        small.classList.remove('success');
        small.innerText = message;
    }

    //Show success outline
    const showSuccess = (input, message) => {
        const formControl = input.closest('.form__control')
        formControl.classList.add('success');
        formControl.classList.remove('error');

        const small = formControl.querySelector('small');
        small.classList.add('success');
        small.classList.remove('error');
        small.innerText = message;
    }

    //Check email is valid

    const checkEmail = (input) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(input.value.trim()) ?
            showSuccess(input, 'Great! This email is valid now :)') :
            showError(input, 'Email is not valid')
    }

    //Check password match

    const checkPasswordMatch = (input, match) => {
        input.value !== match.value ?
            showError(match, 'Passwords do not match') :
            showSuccess(input, 'It is matches now! :)')
    }

    //Get fieldname

    const getFieldName = input =>
        input.id.charAt(0).toUpperCase() + input.id.slice(1);

    //Check required fields

    const checkRequired = inputArr => {
        inputArr.forEach((input) => {
            if (input.value.trim() === '') {
                showError(input, `${getFieldName(input)} is required`)
            } else {
                showSuccess(input, 'Success!');
            }
        });
    }

    //Check input length

    const checkLength = (input, min, max) => {
        input.value.length < min ?
            showError(input, `${getFieldName(input)} must be at least ${min} characters`) :
            input.value.length > max ?
                showError(input, `${getFieldName(input)} must be less than ${max} characters`) :
                showSuccess(input, 'Great!');
    }

    const isEmptyValue = (val) => !!val;

    //Event listeners
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let counter = 0;

        checkRequired([username, email, password, confirm]);
        checkLength(username, 3, 16);
        checkLength(password, 4, 24);
        checkLength(text, 3, 255);
        checkEmail(email);
        checkPasswordMatch(password, confirm);

        validate.forEach(input => {
            if (!isEmptyValue(input.value)) {
                return counter;
            } else {
                counter++;
            }
        });

        if (counter === validate.length) {
            form.querySelectorAll('.form__control').forEach(item => item.classList.add('hidden'));
            form.querySelector('.form__submit').classList.add('hidden');
            form.insertAdjacentHTML("beforeend", `<h2 class="form__success-message">Success!</h2>`);
            form.reset();
        }
    });

}
