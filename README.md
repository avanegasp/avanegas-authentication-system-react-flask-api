#Sistema de Autenticación con Python, Flask y React.js

Este proyecto es una aplicación web de autenticación de usuarios que combina un backend robusto con Python y Flask y un frontend dinámico construido con React.js. La solución sigue las mejores prácticas de desarrollo de APIs RESTful para la creación de sistemas de autenticación seguros, ofreciendo registro, inicio de sesión, validación de acceso a rutas privadas, y cierre de sesión.

🚀 Características Principales
**Registro de Usuario:** Permite a los usuarios registrarse con un correo electrónico y contraseña, almacenando la información de manera segura en una base de datos. Tras el registro, el usuario es redirigido al formulario de inicio de sesión.

**Inicio de Sesión Seguro:** Autenticación de usuarios mediante credenciales (correo electrónico y contraseña) con validación del lado del servidor. Al iniciar sesión exitosamente, el usuario es redirigido a un área privada.
**Validación de Rutas Privadas:** Implementación de guardias de rutas que aseguran que solo los usuarios autenticados puedan acceder a ciertas páginas privadas, verificando la presencia de tokens en el sessionStorage.
**Cierre de Sesión:** Los usuarios pueden cerrar sesión en cualquier momento, eliminando el token de sessionStorage y redirigiendo a la página de inicio de sesión.

🛠️ Tecnologías Utilizadas
**Backend:** Python, Flask, Flask-JWT-Extended, SQLAlchemy
**Frontend:** React.js, React Router, Bootstrap para la UI
**Almacenamiento de Sesión:** sessionStorage API para manejo de tokens de autenticación en el frontend
**Base de Datos:** SQLite para almacenamiento de usuarios y datos de sesión

📂 Estructura de Componentes
**<Signup>:** Componente que renderiza el formulario de registro de usuario.
**<Login>:** Componente que renderiza el formulario de inicio de sesión.
**<Private>:** Componente protegido que verifica la autenticación del usuario antes de renderizar contenido privado.

🌐 Mejores Prácticas de Seguridad
Uso de JSON Web Tokens (JWT) para la autenticación basada en tokens.
Implementación de guardias de rutas para proteger contenido privado y redirigir a usuarios no autenticados.
Validación del lado del servidor para todas las solicitudes de autenticación y manejo de tokens.

📋 Más Información
Consulta el diagrama de autenticación y las instrucciones detalladas de configuración en el repositorio para aprender más sobre cómo se implementa el registro de usuarios, la autenticación, la validación de tokens, y el manejo seguro de sesiones.
