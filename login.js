let lockicon = document.getElementById("lockicon");
let password = document.getElementById("password");
lockicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        lockicon.src="https://cdn-icons-png.freepik.com/256/7482/7482685.png?ga=GA1.1.617146296.1709204938&";
    }else{
        password.type = "password";
        lockicon.src="https://cdn-icons-png.freepik.com/256/12598/12598865.png?ga=GA1.1.617146296.1709204938&";
    }
}