document.addEventListener('DOMContentLoaded', function () {
  const fileInput = document.getElementById('fileInput');
  const selectFilesBtn = document.getElementById('selectFilesBtn');
  const uploadBox = document.getElementById('upload-box');
  const previewContainer = document.getElementById('preview-container');
  const previewImage = document.getElementById('preview-image');
  const closePreviewBtn = document.querySelector('.close-preview');
  const submitBtn = document.getElementById('submitBtn');
  const uploadTitle = document.querySelector('h1'); // "DICOM Upload" 텍스트 선택
  const patientInfoBody = document.getElementById('patient-info-body');
  let ptCode = null; // 전역 변수로 ptCode 저장


  // 파일 선택 버튼 클릭 시 파일 입력 창 열기
  selectFilesBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // 중복 호출 방지
    fileInput.click();
  });

  // 파일 선택 또는 드래그 앤 드롭 시 파일 미리보기 처리
//  fileInput.addEventListener('change', handleFileUpload);
  fileInput.addEventListener('change', function(event){
	const file =event.target.files[0];
	if(file){
		selectedFile = file; // 전역 변수에 파일 저장
        const formData = new FormData();	
        formData.append('file', file); // 'file'은 서버에서 받을 변수명과 일치해야 함
//        formData.append('otherData', 'someValue'); // 파일 외에 추가 데이터도 함께 전송 가능

        // jQuery AJAX 요청
        $.ajax({
            url: 'https://192.168.0.2:8000/dupload', // 서버 업로드 엔드포인트
            type: 'POST',
            enctype: 'multipart/form-data',
            data: formData,
            withCredentials: true,
            contentType: false, // multipart/form-data를 사용하기 위해 false로 설정
            processData: false, // 데이터를 쿼리 스트링으로 변환하지 않도록 설정
            success: function(response) {
				console.log("test")
				
                console.log('File uploaded successfully:', response);
                
                // ptCode 값을 전역 변수에 저장
                if (response.metadata && response.metadata.ptCode) {
                    ptCode = response.metadata.ptCode;
                }

        
                
                // Base64 이미지 미리보기 표시
	          if (response.image) {
            previewImage.src = "data:image/png;base64," + response.image;
            previewImage.dataset['name'] = file.name.split(".")[0];
            previewImage.dataset['ext'] = file.name.split(".")[1];
            previewContainer.classList.remove('hidden');
            uploadBox.classList.add('hidden');
            submitBtn.classList.remove('hidden');
            closePreviewBtn.classList.remove('hidden');
            patientInfoBody.classList.remove('hidden');
            
    // ptCode를 이용해 담당 의사 정보 가져오기
            if (response.metadata.ptCode) {
				
				
				console.log(response.metadata.ptCode)
              $.ajax({
                url: `/api/upload/dtsearch?ptCode=${response.metadata.ptCode}`,
                type: 'GET',
                success: function(doctorResponse) {
                  console.log('Doctor info:', doctorResponse);

                  // 환자 정보를 테이블에 표시
                  patientInfoBody.innerHTML = `
                    <tr>
                      <td class="border px-4 py-2">${response.metadata.ptCode}</td>
                      <td class="border px-4 py-2">${response.metadata.ptName || 'N/A'}</td>
                      <td class="border px-4 py-2">${response.metadata.ptBirthdate || 'N/A'}</td>
                      <td class="border px-4 py-2">${response.metadata.ptGen || 'N/A'}</td>
                      <td class="border px-4 py-2">${doctorResponse.dtName || 'N/A'}</td>
                    </tr>
                  `;
                },
                error: function(xhr, status, error) {
                  console.error('Failed to get doctor info:', xhr, status, error);
                  alert("담당 의사 정보를 가져오는 데 실패했습니다.");
                }
              });
            }
            
            
          }
        },
            error: function(xhr, status, error) {
                console.error('Failed to upload file:',xhr, status, error);
            }
        });
        event.target.value = '';
  }
 });
 
  uploadBox.addEventListener('dragover', function (event) {
    event.preventDefault();
  });

  uploadBox.addEventListener('drop', function (event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      fileInput.files = files;
      handleFileUpload();
    }
  });

  // 파일 업로드 시 미리보기 처리 함수
  function handleFileUpload() {
    const file = fileInput.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (event) {
        previewImage.src = event.target.result;
        previewContainer.classList.remove('hidden');
        uploadBox.classList.add('hidden');
        uploadTitle.classList.add('hidden');
        submitBtn.classList.remove('hidden'); // 전송 버튼 보이기
        closePreviewBtn.classList.remove('hidden'); // 닫기 버튼 보이기
        patientInfoBody.classList.remove('hidden'); // tbody 보이기

        // 닫기 버튼 위치 설정 (오른쪽 상단)
        closePreviewBtn.classList.add('absolute', 'top-2', 'right-2');

        // 전송 버튼 위치 설정 (오른쪽 하단)
        submitBtn.classList.add('absolute', 'bottom-2', 'right-2');
      };
      reader.readAsDataURL(file);
    } else {
      alert('이미지 파일만 업로드 가능합니다.');
    }
  }

  // 전송 버튼 클릭 시 FastAPI로 파일 전송
  submitBtn.addEventListener('click', async function () {
    if (!ptCode) {
        alert("ptCode가 설정되지 않았습니다. 파일을 먼저 업로드하세요.");
        return;
    }
    
    // FileReader로 파일을 Base64로 읽어들입니다.
    const base64Image = previewImage.src; // 미리보기의 Base64 이미지 가져오기
    const formData = new FormData();
    formData.append("image", base64Image);
    formData.append("ptCode", ptCode); // ptCode 추가
    formData.append("fileName",previewImage.dataset['name'])
    /*// ptCode를 동적으로 추가 (이전에 받은 값을 사용)
    const ptCode = response.metadata.ptCode; // response는 이전 AJAX 요청에서 설정된 값이어야 함
    formData.append("ptCode", ptCode);*/

    try {
      const response = await fetch("/api/upload/imgupload", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("업로드에 실패했습니다.");
      }

//      const data = await response.json();
//      const data = response;
//		console.log(data)
	  alert("업로드가 완료되었습니다.");
      console.log("서버 응답 : ", response);
      
      // 페이지 새로고침
      location.reload();
      
    } catch (error) {
      alert("이미 존재하는 파일입니다.");
      console.error('업로드 중 오류 발생:',error);
    }

});

  // 미리보기 닫기 버튼
  closePreviewBtn.addEventListener('click', function () {
    previewContainer.classList.add('hidden');
    uploadBox.classList.remove('hidden');
    submitBtn.classList.add('hidden');
    closePreviewBtn.classList.add('hidden');
    uploadTitle.classList.remove('hidden');
    fileInput.value = '';
    patientInfoBody.classList.add('hidden'); // tbody 숨기기
    patientInfoBody.innerHTML = ''; // tbody 내용 비우기
  });

  // 로고 클릭 시 main 페이지로 이동
  document.getElementById('logo').addEventListener('click', function () {
    window.location.href = 'main';
  });

/*  // 환자 정보 표시 함수
  const samplePatientData = [
    { code: '24-0001', name: '이순신', age: 56, gender: '남', doctor: '허준' },
    { code: '24-0002', name: '홍길동', age: 42, gender: '남', doctor: '이석규' }
  ];

  function renderPatientInfo() {
    patientInfoBody.innerHTML = '';
    samplePatientData.forEach((patient) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="border px-4 py-2">${patient.code}</td>
        <td class="border px-4 py-2">${patient.name}</td>
        <td class="border px-4 py-2">${patient.age}</td>
        <td class="border px-4 py-2">${patient.gender}</td>
        <td class="border px-4 py-2">${patient.doctor}</td>
      `;
      patientInfoBody.appendChild(row);
    });
  }
*/
  /*renderPatientInfo();*/
});
