# GITについて

## ローカル | 追跡 | リモート

## 最初の動作
(1) $ git init  
(2) $ git add . // ステージングする（ステージにあげる）
(3) $ git commit -m "any message"  
(4) $ git remote add origin <URI> // リモートリポジトリの情報をローカル内に登録
(5) $ git push origin master  // リモートのmasterへ登録

## 補足
- initする前にデフォルトブランチをmasterからmainにしておくと良い。
  - $ git config --global init.defaultBranch main

## オプション
$ git add -u
  - 変更内容のみステージングにアップする

## ステージングの取り下げ（コミット前）
$ git reset HEAD -- <filename>


## ブランチ操作
- $ git branch
  - ローカル内の全てのブランチを表示し、現在使用中のブランチは*で表示される。
- $ git branch --contains
  - 現在使用中のブランチを表示します。

## status
- $ git status
  - 現在の変更内容などを確認します。

## 差分ファイル列挙
- $ git diff --name-only <branch-name>

## ログ表示
- $ git log

## マージ: 変更内容の取り込み
(1) $ git status でコミット忘れないかを確認
