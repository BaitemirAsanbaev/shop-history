
# Сервис историй действий с товарами

Этот проект представляет REST API для управления историями действий с товарами. Реализован с использованием **Node.js**, **ExpressJS**, и **PostgreSQL**.



## Технологический стек
- **TypeScript**
- **Node.js**
- **Express.js**
- **PostgreSQL**
- **SQL**
- **Swagger**



## Установка и запуск проекта

### 1. Клонирование репозитория
```bash
git clone https://github.com/BaitemirAsanbaev/shop-inventory.git
```

### 2. Установка зависимостей
Перейдите в директорию проекта и установите все необходимые библиотеки:
```bash
npm install
```

### 3. Создание базы данных
shop-inventory и shop-history имеют общую базу данных, если она ещё не создана то создайте её:
```sql
CREATE DATABASE inventory;
```

### 4. Создание таблиц
Используйте команды SQL, указанные в файле `db/db.sql`, для создания необходимых таблиц.

### 4. Заполнить таблицу действий
Используйте команды SQL, указанные в файле `db/actions.sql`, для создания необходимых действий.

### 6. Настройка файла окружения
Скопируйте пример файла `.example.env` и заполните его корректными значениями:
```bash
cp .example.env .env
```

### 7. Запуск приложения
```bash
npm start
```



## Функционал

- **CRUD для историй и действий**
- **Получение историй с фильтрацией:**
  - По PLU товара
  - По ID магазина
  - По действию
  - По количеству товаров
  - По дате с-по


## Структура проекта

### `/db`
- SQL файлы для создания таблиц и заполнения действий
- JS файл для подключения к базе данных

### `/utils`
- Обработка ошибок
- Валидация
- Swagger-документация
- Логгер

### `/router`
  Маршруты API с документацией Swagger и привязанными middleware для валидации.
### `/controller`
  Обработка запросов клиента, вызов сервисов, валидация, отправка ответов.
### `/services`
  Бизнес-логика, обработка данных, вызов методов из репозитория.
### `/repositor` 
  Работа с базой данных, выполнение SQL-запросов.




## Документация API
Документация доступна по адресу `/api-docs` после запуска приложения. Для её генерации используется **Swagger**.

