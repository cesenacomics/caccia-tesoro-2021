function myFunction() {
    let psw = document.getElementById("pwd").value;

    if (psw === '24IEY5ISAZ') {
        window.open("landing.html");
    }  else {
        alert('Password sbagliata, riprova.')
    }
}

