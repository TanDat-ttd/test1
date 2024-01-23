let apiUser = "http://localhost:3000/user";

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

function login() {
    getUser(handleLogin);
}

function getUser(callback) {
    fetch(apiUser).then(function (res) {
        return res.json().then(callback);

    });
}
function handleLogin(data) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = data.find(function (user) {
      return user.username === username && user.password === password;
    });
  
    if (user) {
      window.location.href = "index_login.html";
    } else {
      alert("Đăng nhập sai username hoặc mật khẩu");
    }
  }
function signUp() {
    handledCreateForm();
}

function createUser(data) {
    fetch(apiUser, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(function (res) {
        return res.json();
    });
    if (data) {
        alert('Tạo Tài Khoản Thành Công');
    }
}

function handledCreateForm() {
    let email = document.getElementById("email");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let password_confirm = document.getElementById("password-confirm");
    let user = {
        email: email.value,
        username: username.value,
        password: password.value,
        passwordConfirm: password_confirm.value,
    };

    //check mail
    if (email.value != "") {
    } else {
        alert("Vui lòng nhập username");
        email.focus();
        return false;
    }


    //check username
    if (username.value != "") {
        if( username.value.length < 8){
            alert("Username phải trên 8 kí tự");
            username.focus();
            return false;
        }
    } else {
        alert("Vui lòng nhập username");
        username.focus();
        return false;
    }

    //check password
    if (password.value != "") {
        if( password.value.length < 8){
            alert("password phải trên 8 kí tự");
            password.focus();
            return false;
        }
    } else {
        alert("Vui lòng nhập password");
        password.focus();
        return false;
    }

    //check confirm password
    if (password_confirm.value != "") {
        if( password.value != password_confirm.value) {
            alert("Password không trùng khóp");
            password.focus();
            return false;
        }
    } else {
        alert("Vui lòng nhập lại password");
        password.focus();
        return false;
    }

    createUser(user);
}
