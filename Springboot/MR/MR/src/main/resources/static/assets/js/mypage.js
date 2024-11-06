// 로고 클릭 시 main으로 이동
  document.getElementById("logo").addEventListener("click", function () {
    window.location.href = "main";
  });

  // 서버에서 사용자 정보를 가져와 마이페이지에 반영
  function fetchUserDetails() {
    return fetch("/user/mypage") // 서버에서 로그인된 사용자의 상세 정보를 가져옴
      .then((response) => {
        if (!response.ok) {
          throw new Error("사용자 정보를 가져오지 못했습니다.");
        }
        return response.json(); // JSON 형식으로 응답 받음
      })
      .then((data) => {
        // 마이페이지 필드에 정보 채우기
        document.getElementById("name").value = data.dtName;
        document.getElementById("phone").value = data.dtTelno;
        document.getElementById("email").value = data.dtId;
        document.getElementById("doctor-code").value = data.dtCode;
        document.getElementById("hospital").value = data.division;
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }

  // 비밀번호 유효성 검사 (영문, 숫자, 특수문자 포함, 8자 이상)
  document.getElementById("password").addEventListener("input", function () {
    const password = document.getElementById("password").value;
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!passwordRegex.test(password)) {
      document.getElementById("password-message").innerText =
        "비밀번호는 영문, 숫자, 특수문자를 포함하고 8자 이상이어야 합니다.";
    } else {
      document.getElementById("password-message").innerText = ""; // 조건 만족 시 메시지 제거
    }
  });

  // 비밀번호 확인 (일치 여부 확인)
  document
    .getElementById("password-confirm")
    .addEventListener("input", function () {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("password-confirm").value;
      const confirmPasswordMessage = document.getElementById(
        "confirm-password-message"
      );

      if (password === confirmPassword) {
        confirmPasswordMessage.innerText = "비밀번호가 일치합니다.";
        confirmPasswordMessage.style.color = "green"; // 일치 시 초록색
      } else {
        confirmPasswordMessage.innerText = "비밀번호가 일치하지 않습니다.";
        confirmPasswordMessage.style.color = "red"; // 불일치 시 빨간색
      }
    });

  // 비밀번호 변경 요청
  document
    .querySelector("button#update-password")
    .addEventListener("click", function () {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("password-confirm").value;

      // 비밀번호가 일치하는지 확인
      if (password === confirmPassword) {
        // 서버로 비밀번호 변경 요청
        fetch("/user/changepw", {
          method: "PUT", // 비밀번호 업데이트는 PUT 요청
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ dtPw: password }),
        })
          .then((response) => response.text())
          .then((result) => {
            if (result === "1") {
              alert("비밀번호가 성공적으로 변경되었습니다.");
            } else {
              alert("비밀번호 변경에 실패했습니다.");
            }
          })
          .catch((error) => {
            console.error("Error updating password:", error);
            alert("비밀번호 변경 중 오류가 발생했습니다.");
          });
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    });
    
    // 의사 소속 변경 요청
document.querySelector('button#update-division').addEventListener('click', function () {
  const division = document.getElementById('hospital').value;

  // 서버로 의사 소속 변경 요청
  fetch('/user/changedv', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ division: division }),  // 의사 소속 전송
  })
    .then(response => response.text())
    .then(result => {
      if (result === '1') {
        alert('의사 소속이 성공적으로 변경되었습니다.');
      } else {
        alert('의사 소속 변경에 실패했습니다.');
      }
    })
    .catch(error => {
      console.error('Error updating division:', error);
      alert('의사 소속 변경 중 오류가 발생했습니다.');
    });
});

// 페이지 로드 시 사용자 정보를 가져와 UI 업데이트
document.addEventListener('DOMContentLoaded', function () {
  fetchUserDetails();  // 로그인된 사용자의 상세 정보 가져오기
});


      // 페이지 로드 시 사용자 정보를 가져와 UI 업데이트
      document.addEventListener("DOMContentLoaded", function () {
        fetchUserDetails(); // 로그인된 사용자의 상세 정보 가져오기
      });