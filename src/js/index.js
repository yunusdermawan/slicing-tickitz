const toggleOn = document.getElementById('toggleOn');
const toggleOff = document.getElementById('toggleOff');
const password = document.getElementsByClassName('password');

function togglePass() {
    if(password.type == 'password') {
        password.type = 'text';
        toggleOff.style.display = 'none';
        toggleOn.style.display = 'block';
        toggleOff.style.marginBottom = '5px';
        toggleOn.style.marginBottom = '5px';

    } else {
        password.type = 'password';
        toggleOff.style.display = 'block';
        toggleOn.style.display = 'none';
        toggleOff.style.marginBottom = '5px';
        toggleOn.style.marginBottom = '5px';
    }
}