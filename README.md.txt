Gestión de Tienda – Proyecto SENA

Sistema desarrollado como parte del proyecto formativo “Construcción de software integrador de tecnologías orientadas a servicios”, del programa Análisis y Desarrollo de Software (ADS).

Este proyecto permite gestionar los módulos principales de una tienda:

Gestión de Usuario

Gestión de Cliente

Gestión de Producto

Gestión de Proveedor

Gestión de Ventas

Informes

Tecnologías Utilizadas
Frontend

HTML5

CSS3

JavaScript

Diseño responsivo

Modales y validaciones

Base de Datos

MySQL (modelo conceptual, lógico y físico)

Scripts SQL

Herramientas

Git y GitHub

Visual Studio Code

XAMPP o MySQL Workbench

Canva para prototipos

Android Studio (maquetación XML solicitada por el SENA)
gestion_tienda/
│── frontend/
│     ├── index.html
│     ├── style.css
│     └── app.js
│
│── backend/
│     └── server.js  (archivo opcional)
│
│── database/
│     ├── script_mysql.sql
│     ├── modelo_ER.png
│     └── modelo_relacional.png
│
│── docs/
│     ├── manual_usuario.pdf
│     ├── manual_instalacion.pdf
│     └── matriz_trazabilidad.xlsx
│
│── tests/
│     ├── casos_de_prueba.xlsx
│     └── ambiente_pruebas.pdf
│
└── README.md


Descripción de Módulos


1. Módulo Usuario

Permite registrar datos básicos del usuario:

Nombre

Correo electrónico

2. Módulo Cliente

Permite gestionar clientes:

Nombre

Teléfono

Incluye validación obligatoria del nombre.

3. Módulo Producto

Registro de productos:

Nombre

Precio

Stock

4. Módulo Proveedor

Gestión de proveedores:

Nombre

Contacto

5. Módulo Ventas

Permite registrar ventas:

Producto

Cantidad

6. Módulo Informe

Espacio destinado para reportes como:

Ventas totales

Productos más vendidos

Movimientos del día


Instalación y Ejecución
1. Clonar el repositorio

git clone https://github.com/TU_USUARIO/gestion_tienda.git

2. Abrir el proyecto

Abrir Visual Studio Code

Abrir la carpeta gestion_tienda

3. Ejecutar el frontend

Solo abre:

frontend/index.html

en tu navegador.

Documentación Incluida

El proyecto incluye:

Manual de Usuario
Manual de Instalación
Matriz de Trazabilidad
Casos de Prueba

Todos ubicados en la carpeta docs/ y tests/.

Autora

Yudi Mira
Estudiante del programa Análisis y Desarrollo de Software – SENA
Proyecto: Gestión de Tienda

Estado del Proyecto

Versión 1.0 – Frontend totalmente funcional.
