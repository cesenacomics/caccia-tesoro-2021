function myFunction() {
    let psw = document.getElementById("pwd").value;

    if (psw === 'ABCDEFG') {
        window.open("landing.html");
    }  else {
        alert('Password sbagliata, riprova.')
    }
}
