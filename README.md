# 預計之後當作主頁面的 next ssr 專案
* 建構中

# 開發環境
* git clone 此專案後先在此專案根目錄執行以下指令
```shell
docker run --rm -it -u $(id -u):$(id -g) -w /app -v $PWD:/app node:21-slim npm install
```
* npm install 之後可在此專案上層(cd ..)使用以下 docker-compose.yml 設定建立開發環境，亦可自行調整 docker-compose.yml 設定來改變專案資料夾結構
```yaml
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
