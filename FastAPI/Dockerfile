FROM python:3.10-slim
# 작업 디렉토리 생성
WORKDIR /app

# 패키지 설치 전에 pip 업데이트
RUN pip install --upgrade pip

# 필요한 파일 복사
COPY requirements.txt .

# 패키지 설치
RUN pip install --no-cache-dir -r requirements.txt
# OpenCV가 필요한 그래픽 라이브러리 설치
RUN apt-get update && apt-get install -y libgl1 libglib2.0-0


# 애플리케이션 코드 복사
# 첫번째 .은 로컬파일을 두번째 .은 workdir를
# 지금 로컬경로에 있는 모든 것을 docker workdir로 복사하겠다는 의미
COPY . .

# FastAPI 실행 명령어
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0" , "--port", "8000", "--ssl-certfile", "app/cert.pem", "--ssl-keyfile", "app/key.pem"]

# 필요 포트 공개
EXPOSE 8000