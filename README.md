# 全国図書蔵書検索アプリ　lib0122-3 ()

このアプリは、Reactで作られたWebアプリケーションであり、全国の図書館の蔵書を検索できる機能を提供しています。本アプリはスマートフォンの画面に最適化されており、PC画面のレイアウトは現在未対応です。

## デモURL（スマホ画面レイアウトのみ対応）
https://lib-search-app.azurewebsites.net/

## 機能
- Google Books APIを使用した本検索機能
- カーリルAPIを使用した蔵書検索機能
- ログイン機能
- Amazon, 楽天へのクイックアクセス機能

## 使い方
1. デモURLにアクセスします。
2. トップページにて、本のタイトル、著者名、出版社名等を入力し、「検索」ボタンをクリックします。
3. 検索結果が表示されます。
4. ログインが必要な場合、ログイン画面でアカウントを作成し、ログインしてください。

## 注意事項
- 蔵書検索の処理がうまくいかないので蔵書検索機能はまだ使えません。本の検索はできます。
- PC画面のレイアウトは未対応のため、スマートフォンでの閲覧を推奨します。


## 画像
<div style="display:flex;">
  <img src="https://user-images.githubusercontent.com/48282517/236221006-7bbc9138-f274-495f-8af4-a2b1095d9530.PNG" width="200" />
  <img src="https://user-images.githubusercontent.com/48282517/236220998-372d5c2f-6b17-457c-8853-4fb0df349d6e.PNG" width="200" />
  <img src="https://user-images.githubusercontent.com/48282517/236220991-eb19afc7-4eb6-4b40-b98a-3e932332f305.PNG" width="200" />
  <img src="https://user-images.githubusercontent.com/48282517/236220984-142a191b-a790-4eb6-811d-f2d84de3f0d7.PNG" width="200" />
  <img src="https://user-images.githubusercontent.com/48282517/236220977-6a1d8a9d-8536-4bd4-b5cc-df87040ec449.PNG" width="200" />
  <img src="https://user-images.githubusercontent.com/48282517/236220976-8210b3bf-4a15-4b85-9894-8a2673d7d4df.PNG" width="200" />
</div>




### Required Installation　（ローカル環境時のnpmコマンド）
npm install react-router-dom

npm install bootstrap react-bootstrap

npm i firebase

npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

#### It is necessary to specify the API key for Firebase in the environment variable .env file.
