const form = document.getElementById("userForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");

const storedName = document.getElementById("storedName");
const storedEmail = document.getElementById("storedEmail");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn form reload trang

  // Lấy giá trị người dùng nhập
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  // Lưu vào localStorage
  localStorage.setItem("userName", nameValue);
  localStorage.setItem("userEmail", emailValue);

  // Hiển thị lại
  showStoredInfo();
});

// Hàm hiển thị dữ liệu từ localStorage
function showStoredInfo() {
  storedName.textContent = "Name: " + (localStorage.getItem("userName") || "");
  storedEmail.textContent =
    "Email: " + (localStorage.getItem("userEmail") || "");
}

// Tự động hiển thị nếu có dữ liệu cũ
showStoredInfo();
