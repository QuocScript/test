const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function(event) {

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

   let user = {
    username: username,
    email: email,
    password: password
  };

  // Lưu thông tin người dùng vào Local Storage
  localStorage.setItem("user", JSON.stringify(user));

  // Xóa giá trị trong các trường input
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  alert("Đăng ký thành công!");
});