# 預計之後當作主頁面的 next ssr 專案
* 建構中
* 目前在此專案上層使用以下 docker-compose.yml 設定建立開發環境
```
version: "3"

services:
  first-next-app:
    image: node:21-slim
    container_name: first-next-app
    working_dir: /app
    volumes:
      - ./first-next-app:/app
    # 給 container 間互相連接使用
    # expose:
    #   - "3000"
    # 給 dev 或是外部連接使用
    ports:
      - 3000:3000
    command: npm run dev
    user: "${UID}:${GID}"
    stop_grace_period: 1s
```
* 搭配以下 .env 檔案使用，避免 permission deny 的情況
```
UID=<USERUID>
GID=<USERGID>
```
