from fastapi import FastAPI
from app.routers import dicom_upload
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 허용할 출처 설정
origins = [
    "http://localhost:8089",  # 클라이언트가 실행되는 출처 추가
    "https://localhost:8443", # 필요 시 https 출처도 추가
]

# CORS 미들웨어 추가
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 허용할 출처 목록
    allow_credentials=True,
    allow_methods=["*"],  # 허용할 HTTP 메서드 (GET, POST 등)
    allow_headers=["*"]  # 허용할 HTTP 헤더

)

# 라우터 등록
app.include_router(dicom_upload.router, prefix="/dicom", tags=["DICOM"])
#app.include_router(grad_cam_.router, prefix="/grad-cam", tags=["Grad-CAM"])

# uvicorn으로 이 모듈을 직접 실행할 때 서버를 구동하기 위한 코드
if __name__ == "__main__":
    import uvicorn
    # FastAPI 애플리케이션을 uvicorn으로 실행
    uvicorn.run(app, host="192.168.0.2", port=8000, ssl_certfile="cert.pem", ssl_keyfile="key.pem")