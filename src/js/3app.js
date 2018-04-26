const entrarButton = document.getElementById('entrarButton');
const emailInput = document.getElementById('emailInput');
const senhaInput = document.getElementById('senhaInput');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
const check = document.getElementById('check');

entrarButton.addEventListener('click', () => {
    if (emailInput.value !== "" && senhaInput.value !== "") {
        notification.style.backgroundColor = 'rgb(76, 226, 134)';
        $(check).html("&check;").text();
        notificationText.textContent = 'Você foi logado com sucesso';
        $('#notification').fadeIn();
    } else {
        notification.style.backgroundColor = 'rgb(255, 78, 72)';
        $(check).html("&times;").text();
        notificationText.textContent = 'Digite seu email e senha';
        $('#notification').fadeIn();        
    }
})

emailInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        entrarButton.click();
    };
});

senhaInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        entrarButton.click();
    };
});