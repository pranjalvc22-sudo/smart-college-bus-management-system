function loginUser() {
    const userType = document.getElementById("userType").value;
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const busNumber = document.getElementById("busNumber").value;
    const errorMsg = document.getElementById("error-msg");

    errorMsg.textContent = "";

    const users = {
        admin: { id: "admin123", password: "adminpass" },
        driver: { id: "driver123", password: "driverpass" },
        student: { id: "student123", password: "studentpass" }
    };

    // validation
    if (!userType) {
        errorMsg.textContent = "Please select user type";
        return false;
    }

    if (!users[userType]) {
        errorMsg.textContent = "Invalid user type";
        return false;
    }

    if (userId !== users[userType].id || password !== users[userType].password) {
        errorMsg.textContent = "Invalid ID or Password";
        return false;
    }

    // ✅ store role for GPS system
    localStorage.setItem("role", userType);

    // ✅ store bus only for student/driver/admin selection
    if (userType === "student" || userType === "driver") {
        localStorage.setItem("bus", busNumber);
    }

    if (userType === "admin") {
        localStorage.setItem("bus", busNumber); // admin selects bus
        window.location.href = "project (1).html";
    } 
    else if (userType === "driver") {
        window.location.href = "driver.html";
    } 
    else if (userType === "student") {
        window.location.href = "student1 (1).html";
    }

    return false;
}