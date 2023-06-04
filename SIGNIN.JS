const signinForm = document.getElementById("signinForm");

signinForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const usernameLogin =  document.getElementById("usernameLogin").value;
  const passwordLogin = document.getElementById("passwordLogin").value;

  // Kiểm tra thông tin đăng nhập trong Local Storage
  const storedUser = localStorage.getItem("user");
  
    const user = JSON.parse(storedUser);
    if (usernameLogin === user.username &&  passwordLogin === user.password) {
      alert("Đăng nhập thành công!");
      // Thực hiện các hành động sau khi đăng nhập thành công
    } else {
      alert("Tên người dùng hoặc mật khẩu không đúng.");
    }
  

  // Xóa giá trị trong các trường input
  document.getElementById("usernameLogin").value = "";
  document.getElementById("passwordLogin").value = "";
});
