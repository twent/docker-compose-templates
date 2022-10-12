# Gitea in Docker

> В переменной `GITEA__database__HOST` указывем порт до СУБД во внутренней сети Докера, например gitea-db:5432


Если нужен CI/CD (Drone), то добавляем OAuth приложение в настройках (http://localhost:3000/user/settings/applications).
1. Имя приложения: Drone
2. URL: http://localhost:НОМЕР_ПОРТА_ДРОНА/login

Docker-compose для [Drone](https://github.com/twent/docker-compose-templates/tree/main/drone/)
