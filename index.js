var secret = "jXPy3KLCdvj0hHPderFtC0816aU4iJbmNYg1Rb5e";
var database = "webapp-6b505-default-rtdb.asia-southeast1";
var url = `https://${database}.firebasedatabase.app/users.json?auth=${secret}`;

function authenticateUser(that) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
            var userData = JSON.parse(xhr.responseText);
            var username = that.username.value;
            if (username in userData && userData[username] == that.password.value) {
                alert("Login Successful!");
                return window.location.replace("lottie.html");
            } else return alert("Invalid username/password combination!");
        }
    };

    xhr.send();
}