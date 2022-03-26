# GITについて

## ローカル | 追跡 | リモート

## 最初の動作
(1) $ git init  
(2) $ git add .  
(3) $ git commit -m "any message"  
(4) $ git remote add origin <URI> // リモートリポジトリの情報をローカル内に登録
(5) $ git push origin master  // リモートのmasterへ登録

### 補足
- initする前にデフォルトブランチをmasterからmainにしておくと良い。
  - $ git config --global init.defaultBranch main


## マージ: 変更内容の取り込み
(1) $ git status でコミット忘れないかを確認
