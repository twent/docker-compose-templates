# Gitea в Docker

> В переменной `GITEA__database__HOST` указывем порт до СУБД во внутренней сети Докера, например gitea-db:5432

> Cначала создаём сеть для Gitea и Drone:

 ``docker network create gitea-net``

Если нужен CI/CD (Drone), то добавляем OAuth приложения в настройках (http://192.168.0.230:3000/user/settings/applications).
1. Имя приложения: Drone
   URL: http://192.168.0.220:2080/login

Docker-compose для [Drone](https://github.com/twent/docker-compose-templates/tree/main/drone/)
