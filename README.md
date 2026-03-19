# 🚀 Yuju App

![Yuju Logo](https://yuju.io/assets/images/logo/logo.svg)

Aplicación desarrollada con **Angular 21**, siguiendo buenas prácticas de arquitectura y organización de componentes mediante el **patrón atómico (Atomic Design)**.

---

## 📌 Tecnologías utilizadas

- **Angular**: 21.2.x
- **Angular Material**: 21.2.x
- **Angular CDK**: 21.2.x
- **RxJS**: 7.8.x
- **TypeScript**: 5.9.x
- **Vite/Vitest** (testing moderno)
- **Prettier** (formateo de código)

---

## 🧱 Arquitectura

Este proyecto implementa el enfoque de **Atomic Design**, organizando la UI en:

- **Átomos** → Componentes básicos (botones, inputs, labels)
- **Moléculas** → Combinación de átomos (formularios simples, cards)
- **Organismos** → Secciones completas (headers, layouts, tablas)
- **Templates** → Estructura de páginas
- **Pages** → Vistas completas

Esto permite:

- Reutilización de componentes
- Escalabilidad
- Mantenimiento más sencillo

---

## ⚙️ Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/beyakus/test-yuju.git
cd yuju-app
```

2. Instalar dependencias:

```bash
npm install
```

---

## ▶️ Levantar el proyecto (modo desarrollo)

```bash
npm start
```

o

```bash
ng serve
```

El proyecto estará disponible en:

```
http://localhost:4200
```

---

## 🏗️ Compilar el proyecto

Para generar la build de producción:

```bash
npm run build
```

Esto generará los archivos optimizados en la carpeta:

```
/dist
```

---

## 👀 Modo desarrollo con watch

```bash
npm run watch
```

Compila automáticamente al detectar cambios.

---

## 🧪 Ejecutar pruebas

```bash
npm run test
```

Se utiliza **Vitest** como framework de testing.

---

## 📦 Scripts disponibles

| Script          | Descripción                       |
| --------------- | --------------------------------- |
| `npm start`     | Levanta el servidor de desarrollo |
| `npm run build` | Compila la aplicación             |
| `npm run watch` | Compilación en modo observador    |
| `npm run test`  | Ejecuta pruebas                   |

---

## 📁 Dependencias principales

### Dependencias

- `@angular/core`
- `@angular/common`
- `@angular/forms`
- `@angular/router`
- `@angular/material`
- `@angular/cdk`
- `rxjs`

### DevDependencies

- `@angular/cli`
- `@angular/compiler-cli`
- `typescript`
- `vitest`
- `prettier`

---

## 🧑‍💻 Requisitos

- Node.js (recomendado >= 18)
- npm 10.8.2

---

## 📌 Notas

- Proyecto configurado con Angular CLI
- Uso de buenas prácticas de modularización
- Preparado para escalabilidad y mantenimiento

---

## 📄 Licencia

Este proyecto es privado.
