# 📦 Storage Management API

Sistema de gestión de almacenamiento desarrollado con NestJS, Prisma y
PostgreSQL.

---

## Clone the repository

```bash
git@github.com:Ricardo-Vega01/storage-management.git
cd storage-managment
```

## Package Management

```bash
yarn install
```

## Prisma and PostgreSQL Config

```bash
cp .env.example .env
```

make sure that in the .gitignore file is .env

## Prisma Init

```bash
npx prisma init
npx prisma generate
npx prisma migrate dev --name name_migration
```

## Execute in local environment

```bash
yarn dev
```

## In Production environment

- Build project

```bash
yarn build
```

- Execute on server

```bash
yarn start
```

## Util commands

- look at migrations state

```bash
npx prisma migrate status
```

- Access to prisma studio interfaz

```bash
npx prisma studio
```

## Project Structure

```bash
├──src
│   ├── Adapters
│   │   ├── In
│   │   └── Out
│   ├── App
│   │   ├── Ports
│   │   │   ├── In
│   │   │   │   └── user-service.port.ts
│   │   │   └── Out
│   │   │       └── user-repo.port.ts
│   │   └── UseCases
│   │    └── Users
│   │        └── create-user.case.ts
│   ├── Domain
│   │   ├── Entity
│   │   │   └── Users
│   │   │   │   └── user.entity.ts
│   │   │   └── Values
│   ├── Infrastructure
│   │   ├── Config
│   │   │   ├── app.config.ts
│   │   │   ├── config.service.ts
│   │   │   └── cors.config.ts
│   │   ├── Database
│   │   │   ├── database.module.ts
│   │   │   └── prisma
│   │   │       ├── migrations
│   │   │       ├── prisma.service.ts
│   │   │       └── schema.prisma
│   │   ├── Middleware
│   │   ├── Server
│   │   │   ├── app.module.ts
│   │   │   └── main.ts
│   │   └── Utils
│   │   │    └── Labels.ts
│   └── Modules

25 directories, 16 files
```
