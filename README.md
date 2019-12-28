# Vuesplash

## 各コンテナのビルド（初めて起動する時）

```bash
$ docker-compose build
```

## 各コンテナの起動

```bash
$ docker-compose up
```

## Vue.js ビルド・起動

```bash
$ docker-compose exec app sh
$ npm run dev
$ npm run watch
```

[localhost](localhost)で確認できる

## PHP コード整形実行

#### fixer

```bash
$ docker-compose exec app sh
$ composer fixer--fix
# 自動整形せず整形必要箇所のみ出力したいならこっち
$ composer fixer
```

[php-cs-fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)

#### sniffer

```bash
$ docker-compose exec app sh
$ composer sniffer--fix
# コーディング規約としてPSR12を指定している
# 自動整形せず整形必要箇所のみ出力したいならこっち
$ composer sniffer
```

[php_codesniffer](https://github.com/squizlabs/php_codesniffer)

## JS コード整形実行

#### eslint

```bash
$ docker-compose exec app sh
$ npm run lint--fix
# 自動整形せず整形必要箇所のみ出力したいならこっち
$ npm run lint
```
