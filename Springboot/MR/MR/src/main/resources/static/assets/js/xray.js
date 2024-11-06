document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('diagnosisCanvas');
  const ctx = canvas.getContext('2d');
  const brushToolButton = document.getElementById('brushTool');
  const rectangleToolButton = document.getElementById('rectangleTool');
  const clearCanvasButton = document.getElementById('clearCanvas');
  const camButton = document.getElementById('camButton'); // New CAM button
  const colorPicker = document.getElementById('colorPicker');
  const brushSize = document.getElementById('brushSize');
  const loadImageBtn = document.getElementById('loadImageBtn');
  const imageLoader = document.getElementById('imageLoader');
  const diagnosisResults = document.getElementById('diagnosisResults');
  const xrayCode = localStorage.getItem('xrayCode');
  const doctorOpinionTextarea = document.querySelector('textarea[placeholder="의사 소견 입력"]');
  const saveButton = document.querySelector('.bg-blue-500'); // 저장 버튼 선택
  
  console.log('Loaded xrayCode:', xrayCode); // 받아온 값 확인
 


  // Initial state
  let isDrawing = false;
  let startX, startY;
  let currentTool = 'brush';
  let selectedColor = '#000000';
  let selectedSize = 5;
  let uploadedImage = null;
  let heatmapActive = false; // Track if heatmap is active

  // Tool selection
  brushToolButton.addEventListener('click', () => (currentTool = 'brush'));
  rectangleToolButton.addEventListener(
    'click',
    () => (currentTool = 'rectangle')
  );

  // Update color and size
  colorPicker.addEventListener(
    'input',
    (e) => (selectedColor = e.target.value)
  );
  brushSize.addEventListener('input', (e) => (selectedSize = e.target.value));

  // Load an image onto the canvas
  loadImageBtn.addEventListener('click', () => imageLoader.click());

  imageLoader.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        uploadedImage = img; // Save uploaded image
      };
      img.src = event.target.result;
      loadImageBtn.classList.add('hidden'); // Hide the "이미지 가져오기" button
    };

    reader.readAsDataURL(file);
  });

  // Canvas event listeners for drawing
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    if (currentTool === 'brush') {
      ctx.lineWidth = selectedSize;
      ctx.lineCap = 'round';
      ctx.strokeStyle = selectedColor;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      startX = e.offsetX;
      startY = e.offsetY;
    }
  });

  canvas.addEventListener('mouseup', (e) => {
    isDrawing = false;

    if (currentTool === 'rectangle') {
      const rectWidth = e.offsetX - startX;
      const rectHeight = e.offsetY - startY;
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = selectedSize;
      ctx.strokeRect(startX, startY, rectWidth, rectHeight);
    }
  });

  // Clear only drawings on the canvas, keep uploaded image
  clearCanvasButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (uploadedImage) {
      ctx.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height); // Redraw uploaded image
    }
  });

  // CAM button functionality
  camButton.addEventListener('click', () => {
    heatmapActive = !heatmapActive;

    if (heatmapActive) {
      // Simulate heatmap by overlaying color spots on the canvas
      drawHeatmap();
      camButton.textContent = 'Hide CAM';
    } else {
      // Clear heatmap and redraw uploaded image if available
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (uploadedImage) {
        ctx.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height);
      }
      camButton.textContent = 'Show CAM';
    }
  });

  function drawHeatmap() {
    // Placeholder heatmap rendering logic
    ctx.globalAlpha = 0.5; // Set transparency for heatmap effect
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Red color for heatmap area
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI); // Central red spot
    ctx.fill();

    ctx.fillStyle = 'rgba(0, 255, 0, 0.3)'; // Green color for heatmap area
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 4, 60, 0, 2 * Math.PI); // Green spot
    ctx.fill();

    ctx.globalAlpha = 1.0; // Reset transparency
  }

  // Sample data for "촬영 리스트", "병변 예측 결과", and "의사 소견란"
  const patientData = [
    { code: '24.10.21.14:20' },
    { code: '24.10.19.15:35' },
    { code: '24.10.12.17:15' },
  ];

  const resultsData = [
    { name: 'Atelectasis', value: '87%' },
    { name: 'Consolidation', value: '76%' },
    { name: 'Lung Lesion', value: '72%' },
    { name: 'Pneumonia', value: '67%' },
    { name: 'Pleural Other', value: '55%' },
  ];

  // Display results dynamically
  resultsData.forEach((result) => {
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between');
    div.innerHTML = `<span>${result.name}</span><span class="font-semibold">${result.value}</span>`;
    diagnosisResults.appendChild(div);
  });
  
   if (xrayCode) {
    console.log('X-ray Code:', xrayCode);
    
    // X-ray 코드로 서버에서 초기 데이터 가져오기
    fetch(`/xray/dtOpinion?xrayCode=${encodeURIComponent(xrayCode)}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('의견 데이터를 가져오는 데 실패했습니다.');
        }
        return response.text(); // JSON 대신 단순 텍스트 반환 시
      })
      .then(data => {
        if (data) {
          doctorOpinionTextarea.value = data; // 서버에서 단순 텍스트 반환 시
        } else {
          doctorOpinionTextarea.value = ""; // 의견 데이터가 없는 경우
        }
      })
      .catch(error => {
        console.error('의사 소견 데이터를 가져오는 중 오류 발생:', error);
      });
  }else {
    console.error('xrayCode가 없습니다. 다시 확인하세요.');
  }

  // 전송 버튼 클릭 시 의견 업데이트
  saveButton.addEventListener('click', function() {
    const updatedOpinion = doctorOpinionTextarea.value;

    if (xrayCode && updatedOpinion) {
      fetch(`/xray/dtOpinion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          xrayCode: xrayCode,
          dtOpinion: updatedOpinion,
        }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('의견 업데이트에 실패했습니다.');
        }
        return response.text();
      })
      .then(message => {
        alert(message);
      })
      .catch(error => {
        console.error('의견 업데이트 중 오류 발생:', error);
        alert('의견 업데이트 중 오류가 발생했습니다.');
      });
    } else {
      alert('의사 소견을 입력해주세요.');
    }
  });
  
});
