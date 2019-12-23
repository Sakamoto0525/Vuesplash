# Vuesplash

## 各コンテナのビルド（初めて起動する時）
```bash
$ docker-compose build
```

## 各コンテナの起動
```bash
$ docker-compose up
```

## Vue.jsビルド・起動
```bash
$ docker-compose exec app sh
$ npm run dev
$ npm run watch
```
[localhost](localhost)で確認できる

## PHPコード整形実行

#### fixer

```bash
$ docker-compose exec app sh
$ fixer
# 自動整形せず整形必要箇所のみ出力したいならこっち
$ fixer --dry-run
```
[php-cs-fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)

#### sniffer

```bash
$ docker-compose exec app sh
$ sniffer
# コーディング規約としてPSR12を指定している
```
[php_codesniffer](https://github.com/squizlabs/php_codesniffer)

