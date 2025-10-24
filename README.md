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
│   ├───Adapters
│   │   ├───Cli
│   │   ├───Events
│   │   ├───Http
│   │   │   │   web.controller.ts
│   │   │   │
│   │   │   └───Apis
│   │   │           userApi.controller.ts
│   │   │
│   │   └───Repositories
│   │       ├───Prisma
│   │       │       userPrisma.repo.ts
│   │       │
│   │       └───User
│   │               authUser.repo.ts
│   │               userProfile.repo.ts
│   │
│   ├───App
│   │   ├───Dtos
│   │   │       user.dtos.ts
│   │   │
│   │   ├───Ports
│   │   │   ├───In
│   │   │   │   ├───Auth
│   │   │   │   └───Users
│   │   │   │           create-user.port.ts
│   │   │   │           delete-user.port.ts
│   │   │   │           get-user.port.ts
│   │   │   │           list-users.port.ts
│   │   │   │           update-user.port.ts
│   │   │   │
│   │   │   └───Out
│   │   │           user-repo.port.ts
│   │   │
│   │   └───UseCases
│   │       ├───Auth
│   │       └───Users
│   │               create-user.case.ts
│   │               delete-user.case.ts
│   │               get-user.case.ts
│   │               list-users.case.ts
│   │               update-user.case.ts
│   │
│   ├───Domain
│   │   └───Entity
│   │       └───Users
│   │               user.entity.ts
│   │
│   ├───Infrastructure
│   │   ├───Config
│   │   │       app.config.ts
│   │   │       config.service.ts
│   │   │       cors.config.ts
│   │   │
│   │   ├───Database
│   │   │   │   database.module.ts
│   │   │   │
│   │   │   └───prisma
│   │   │       │   prisma.service.ts
│   │   │       │   schema.prisma
│   │   │       │
│   │   │       └───migrations
│   │   │           │   migration_lock.toml
│   │   │           │
│   │   │           └───20251021222736_startup
│   │   │                   migration.sql
│   │   │
│   │   ├───Server
│   │   │       main.ts
│   │   │
│   │   └───Utils
│   │           Labels.ts
│   │
│   └───Modules
│       ├───App
│       │       app.module.ts
│       │       webApp.module.ts
│       │
│       ├───Auth
│       ├───Files
│       └───Users
│               user.module.ts 

```
