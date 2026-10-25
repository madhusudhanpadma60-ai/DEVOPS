```javascript
function reg() {
    let n = document.getElementById("n").value;
    let e = document.getElementById("e").value;
    let v = document.getElementById("v").value;

    if (n == "" || e == "" || v == "") {
        msg.innerHTML = "Fill all fields";
    } else {
        msg.innerHTML = "Registration Successful: " + n;
    }
}
```