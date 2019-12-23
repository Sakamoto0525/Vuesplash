# Vuesplash

## 各コンテナのビルド（初めて起動する時）
```bash
$ docker-compose build
```

## 各コンテナの起動
```bash
$ docker-compose up

# Vue.js自動Compiling起動
$ docker-compose exec app sh
$ npm run watch
```
[localhost](localhost)で確認できる

## PHPコード整形
```
# vendor/bin/php-cs-fixer fix -v --dry-run
```
[php-cs-fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)

```

```

