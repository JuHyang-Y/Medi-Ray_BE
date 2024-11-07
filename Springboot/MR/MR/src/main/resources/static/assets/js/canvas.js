document.addEventListener('DOMContentLoaded', function() {
	const canvas = document.getElementById('diagnosisCanvas');
	const ctx = canvas.getContext('2d');
	const brushToolButton = document.getElementById('brushTool');
	const rectangleToolButton = document.getElementById('rectangleTool');
	const clearCanvasButton = document.getElementById('clearCanvas');
	const colorPicker = document.getElementById('colorPicker');
	const brushSize = document.getElementById('brushSize');
	/*const loadImageBtn = document.getElementById('loadImageBtn');*/
	const imageLoader = document.getElementById('imageLoader');


	// Initial state
	let isDrawing = false;
	let startX, startY;
	let currentTool = 'brush';
	let selectedColor = '#000000';
	let selectedSize = 5;
	/*let uploadedImage = null;*/
	
	

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
	/*loadImageBtn.addEventListener('click', () => imageLoader.click());

	imageLoader.addEventListener('change', (e) => {
		const file = e.target.files[0];
		if (!file) return;
		
		const reader = new FileReader();
		reader.onload = (event) => {
			const img = new Image();
			img.onload = () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				uploadedImage = img; // Save uploaded image
			};
			img.src = event.target.result;
		};

		reader.readAsDataURL(file);
	});*/

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


});


