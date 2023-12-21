# Тестовое задание

Этот репозиторий содержит API, предоставляющего функционал по работе с учениками, занятиями и оценками.

## Описание

Это API разработано на языке программирования NodeJS с использованием фреймворка NestJS и хранением данных в PostgreSQL при помощи TypeORM. Документация API предоставляет описание эндпоинтов, параметров запросов и структуру ответов.

## Доступ к API

API доступно по следующему URL:

- Base URL: `https://localhost:3000/api`

## Инструкция по запуску

Для запуска API необходимо выполнить следующие шаги:

1. Установить зависимости: `npm install`
2. Запустить сервер: `npm start` или версию разработки `npm run start:dev`

## Описание методов

API предоставляет следующие методы:

- `GET /users`: Получить список учеников
- `POST /users`: Добавить одного ученика
- `GET /lessons/{id}`: Получить информацию о занятии по ID
- `POST /lessons`: Добавить занятие
- `POST /lessons/{id}/evaluations`: Добавить оценку ученика по занятию

## Использование документации

Документация Swagger предоставляет подробное описание каждого метода, параметры запросов, примеры ответов и схемы данных. Для получения более подробной информации, пожалуйста, обращайтесь к файлу `documentation.yaml` или <a href='https://app.swaggerhub.com/apis-docs/ARTEM_10/test-lesson/1.0.0'>по ссылке</a>.

## Поддержка

Если у вас есть вопросы или предложения по улучшению этого API, пожалуйста, создайте `issue` в этом репозитории.

