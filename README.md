# APLICACION-DE-AUTENTICACION

Aplicación web fullstack de autenticación con Angular (frontend) y Node.js/Express (backend), JWT y estilos modernos con Bootstrap.

## Características principales

- Registro de usuarios con validación y feedback visual.
- Inicio de sesión seguro con JWT.
- Protección de rutas (perfil solo para usuarios autenticados).
- Logout seguro y feedback visual.
- Navegación fluida y moderna (SPA) usando Angular Router.
- Diseño responsive y atractivo con Bootstrap y gradientes personalizados.
- Barra de navegación dinámica según autenticación.
- Página principal con acceso rápido a registro e inicio de sesión.
- Formularios estilizados, mensajes de error y éxito.
- Iconos modernos y experiencia de usuario mejorada.

## Estructura del proyecto

```
├── backend/           # Servidor Node.js/Express (API REST, JWT, usuarios)
├── src/
│   └── app/
│       ├── home/      # Página principal
│       ├── login/     # Login de usuario
│       ├── register/  # Registro de usuario
│       ├── profile/   # Perfil protegido
│       ├── navbar/    # Barra de navegación
│       ├── auth.ts    # Servicio de autenticación Angular
│       ├── auth-guard.ts # Guard para rutas protegidas
│       └── ...
├── styles.scss        # Estilos globales y Bootstrap
├── angular.json       # Configuración Angular
├── package.json       # Dependencias frontend
└── README.md          # Este archivo
```

## Instalación y ejecución

### Backend (Node.js/Express)
1. Ve a la carpeta `backend`:
   ```sh
   cd backend
   npm install
   node server.js
   ```
   El backend corre en http://localhost:4000

### Frontend (Angular)
1. Desde la raíz del proyecto:
   ```sh
   npm install
   npm start
   ```
   La app corre en http://localhost:4200

## Uso
- Regístrate con un usuario y contraseña.
- Inicia sesión con tus credenciales.
- Accede a tu perfil protegido.
- Cierra sesión desde el perfil.
- Navega entre login, registro y home usando los botones y la barra.

## Tecnologías usadas
- Angular 17+ (SPA, routing, standalone components)
- Node.js + Express (API REST, JWT, bcryptjs)
- Bootstrap 5 (estilos y responsive)
- Bootstrap Icons (iconos)

## Autoría y créditos
- Desarrollado por Fernando Vivanco.
- Imágenes e iconos: flaticon.com, freepik.com

---
¡Listo para usar y personalizar! Si tienes dudas o quieres mejorar la app, abre un issue o contribuye.
