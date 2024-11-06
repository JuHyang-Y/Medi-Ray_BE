document.addEventListener('DOMContentLoaded', function () {
  // 로그인 버튼 클릭 시
  document.getElementById('loginBtn').addEventListener('click', function () {
    const dtId = document.getElementById('email').value;
    const dtPw = document.getElementById('password').value;
   

	// 둘다 값이 입력되었는지 확인
	if (dtId === '' || dtPw === '') {
    alert('이메일과 비밀번호를 모두 입력해주세요.');
    return;
  	}

    // 서버에 로그인 요청 보내기
    fetch('/login/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `dtId=${encodeURIComponent(dtId)}&dtPw=${encodeURIComponent(dtPw)}`
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('서버 응답 오류');
      }
      return response.json();
    })
    .then(result => {
      if (result === 1) {
        // 로그인 성공
        alert('로그인 완료! 메인 화면으로 이동합니다.');
        window.location.href = 'main';  // 메인 화면으로 이동
      } else {
        // 로그인 실패
        alert('이메일 혹은 비밀번호를 확인해주세요');
      }
    })
    .catch(error => {
      console.error('로그인 처리 중 오류 발생:', error);
      alert('로그인 중 문제가 발생했습니다. 다시 시도해주세요.');
    });
  });
  // 엔터누르면 서버에 요청 보내기	
	document.addEventListener('keydown', function(event) {
		if (event.key === 'Enter') {
			// 특정 컴포넌트의 클릭 이벤트 트리거
			document.getElementById('loginBtn').click();
		}
	});

  // 회원가입 링크 클릭 시
  document.getElementById('signupLink').addEventListener('click', function () {
    window.location.href = 'signup';  // 회원가입 화면으로 이동
  });
});
