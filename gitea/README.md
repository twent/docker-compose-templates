# Gitea в Docker

> В переменной `GITEA__database__HOST` указывем порт до СУБД во внутренней сети Докера, например gitea-db:5432

> Cначала создаём сеть для Gitea и Drone:

 ``docker network create gitea-net``

Если нужен CI/CD (Drone), то добавляем OAuth приложение в настройках (http://localhost:3000/user/settings/applications).
1. Имя приложения: Drone
2. URL: http://HOST_DRONE_SERVER:DRONE_PORT/login

Docker-compose для [Drone](https://github.com/twent/docker-compose-templates/tree/main/drone/)
