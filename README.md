# Breaking Bad App 🧪

[![](https://i.gyazo.com/cb0a32c36ce7841825f6dc06c721bf94.png)](https://i.gyazo.com/cb0a32c36ce7841825f6dc06c721bf94.png)

¡Bienvenido/a! En este repositorio encontrarás una aplicación web con la cual podrás consultar información de cualquier personaje relevante de la mítica serie de televisión Breaking Bad.

Todos estos datos están disponibles gracias a https://breakingbadapi.com/

## Comenzando 🚀


### Pre-requisitos 📋

Este proyecto está realizado con React v17.
Es necesario tener instalado en tu equipo [Node.js](https://nodejs.org/es/ "Node.js"), [Git](https://git-scm.com/downloads) para clonar el repositorio y [NPM](https://www.npmjs.com/) para la instalación de dependencias.

### Instalación 🔧

Una vez clonado el proyecto deberás situarte dentro de la carpeta del mismo.


Asegurate de estar la rama main del repositorio.

Y en tu consola de comandos preferida y compatible con NPM ejecutar las siguiente líneas de comandos.

_Instalar las dependencias_

```
npm install
```
Una vez instaladas las dependencias se puede proceder a la ejecución.

_Arrancar el proyecto_

```
npm start
```
En caso de iniciar el proyecto y no haberse abierto automáticamente una nueva ventana o pestaña de tu navegador, deberás acceder al siguiente enlace en el cual se encuentra ejecutándose de manera local el proyecto: http://localhost:3000


## Despliegue 📦

La web actualmente se encuentra desplegada de manera gratuita en la plataforma [Netlify](https://www.netlify.com/).

Enlace del proyecto: https://app-breaking-bad.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5be84bf-cda6-4f8e-a92e-712fd70f8d17/deploy-status)](https://app.netlify.com/sites/app-breaking-bad/deploys)

## Construido con 🛠️

* [React.js v17](https://es.reactjs.org/) - El framework web usado
* [Redux](https://react-redux.js.org/) - Manejado del estado global
* [Boostrap 5](https://getbootstrap.com/) - Estilos generales

## Detalles del proyecto 📖

### Rutas disponibles 🔛
+ **/** - Página de inicio
+ **/random-character** - Datos de un personaje aleatorio
+ **/character/*Nombre de un personaje*** - Datos de un personaje
+ **/?? ** - Cualquier otra ruta no establecida redirige a la página de inicio

### Sistema de carpetas 🌇
Primero una imagen con una vista general a las carpetas y luego entraré en detalle un poco más en detalle con una breve explicación de cada una de ellas.

[![](https://i.gyazo.com/756c4d1cc369962a07a44f137d44c60f.png)](https://i.gyazo.com/756c4d1cc369962a07a44f137d44c60f.png)

#### Public
Archivos estáticos de la aplicación como el archivo index.html y el favicon.png.

----
#### src
Código fuente del proyecto:

#### app
En la carpeta app podemos encontrar tanto código, como archivos usados directamente por la aplicación. La idea de esta carpeta es agrupar los archivos enlazados de forma más directa al funcionamiento del proyecto.

Para un mejor entendimiento, las carpetas que no pertenecen a app pueden ser funcionalidades o servicios completamente agnósticos a la aplicación y fácilmente reemplazables, garantizando así una buena escalabilidad de la aplicación a largo plazo.

##### assets
Archivos corrientes utilizados en la aplicación. Actualmente imágenes y archivos SVG.

##### components
Los componentes en el framework React.js son elementos autónomos que se pueden reutilizar a lo largo de toda la página.

En el caso de este proyecto se han ido generando conforme a la necesidad, pensando siempre en una buena versatilidad de los mismos y facilidad a la hora de hacer cambios globales sobre la aplicación, modificando lo mínimo posible.

[![](https://i.gyazo.com/6d7439eab039c927172c4f1d77a17877.png)](https://i.gyazo.com/6d7439eab039c927172c4f1d77a17877.png)

Os dejo con una breve explicación de algunas de las carpetas y componentes más relevantes:

###### Characteres
Esta carpeta contiene diferentes componentes, todos relacionados con el renderizado de información de personajes. Por ejemplo, el componente Characteres que da nombre a la carpeta permite renderizar todos los personajes recibidos de la API, con la ayuda de otros componentes como Pagination o Card.

Por poner otro ejemplo, en esta carpeta también encontramos el componente CharacterData que permite renderizar toda la información de un personaje únicamente recibiendo su nombre a través de parámetros o de forma aleatoria.

###### ContainerBreakpoits
Este componente está creado para globalizar y mantener una línea de estilo.

Por ejemplo, centrar de igual manera los contenidos de todas las páginas y el header, haciendo que estos ocupen la misma anchura y compartan los mismos puntos de ruptura en el responsive.

###### HandlerError
Renderiza mensajes de alerta. Es utilizado para manejar los casos de error a lo largo de la aplicación.

Puede recibir una función de callback asociada a un botón para dar al usuario una opción como, por ejemplo, reintento de carga de datos o alternativas en caso de error.

###### ImageFrame
Contenedor general para las imágenes de la aplicación.

###### LangSelector
Este componente permite cambiar el idioma de la aplicación.

Renderiza un desplegable con los idiomas disponibles y realiza el cambio de idioma con la ayuda del hook useLang en el estado global.

En esta carpeta también se pueden encontrar componentes de los cuales depende LangSelector, pero que podemos reutilizar de igual manera. Como FlagIcon, el cual permite renderiza un icono svg con la bandera de un idioma recibiendo el código del mismo.

###### Pagination
Este componente llamado Pagination renderiza una paginación con los elementos recibidos e indicando el número de elementos máximo por página.

Dentro de la misma carpeta podemos encontrar componentes de los que depende la paginación y que podríamos reutilizar. Como PaginationNavBar para renderizar una barra de navegación extra para la propia paginación.

###### Routing
Este componente está encargado del routing como su nombre indica.

Todo lo que se renderiza dentro de él, son componentes página. Y este renderizado dependerá directamente de la URL solicitada a la aplicación.

##### pages
Componentes página utilizados, en el componente Routing.

##### css
Archivos formato CSS de la web.
+ Boostrap versión 5.
+ Clases especificas para algunos componentes.

----
#### constants
Valores constantes reutilizados a lo largo de toda la aplicación.

Actualmente existen:
+ Diccionario de idiomas
+ Rutas de la web
+ Códigos de idiomas disponibles e iconos svg de banderas asociados a ellos

----
#### hooks
Hooks customizados utilizados en la aplicación.

Los hooks customizados te permiten extraer lógica o datos para que puedan ser reutilizados de una manera sencilla. Por ejemplo retornando funciones.

En el momento en el que se escribe esta documentación, todos los hooks creados están directamente relacionados con los estados de la store. Por ejemplo, uno de los hooks llamado useLang permite acceder a los datos del estado global lang, y ofrece funciones creadas para influir sobre ese estado.

Esto permite, por ejemplo, que de manera muy sencilla cualquier componente pueda ejecutar una función para cambiar el idioma de todos los textos de la aplicación. O extraer directamente del diccionario una cadena de texto que dependa del idioma establecido en ese mismo momento en el estado global.

----
#### services
En esta carpeta se encuentra todo lo relacionado con servicios externos a la aplicación.

La idea de trabajar de esta forma con los servicios, es hacer que la llamada a estos se resuma en funciones completamente agnósticas a la aplicación, y que podrían cambiar sus protocolos, métodos y lógica interna sin afectar al funcionamiento de la misma.

En este momento, únicamente se encuentra la petición de datos a través del protocolo HTTP, con su método get. Y dentro de las APIs disponibles, la que nos provee de datos sobre la serie Breaking Bad.

----
#### store
El store contiene todo el árbol de estados globales en la aplicación. En este caso realizado con Redux.

Dentro de esta carpeta podrás encontrar una carpeta por cada estado disponible. A su vez, cada una de ellas tienen de manera individual sus acciones, acciones creadoras que despachan las acciones y una función reductora.

El archivo index.js dentro de la carpeta store realiza una agrupación de todos los estados y genera el propiamente dicho store. El cual se le provee a toda la aplicación en el archivo principal del proyecto src/index.js

En este proyecto, todos los datos y acciones creadoras de los estados globales son controlados directamente por hooks customizados. Hay uno específico para cada estado.

El hecho de que no se acceda directamente a datos o funciones del store desde la aplicación y deba ser a través de hooks, permite tener un mejor control sobre las opciones de modificación y acceso a datos de los estados. Y tener una capa de lógica intermedia en caso de modificaciones o implementaciones, garantizando una mejor escalabilidad del proyecto.

En proyectos pequeños se podrían utilizar soluciones más simples que Redux, como el propio Context que ofrece React. Pero la decisión de implementar un store más complejo, en este caso, es que nos va a permitir a la larga tener una mejor organización y acceso a las posibilidades que ofrezcan los estados. Por ejemplo, si quisiéramos aprovechas más servicios de la API de Breaking Bad, implementar nuevas APIs relacionadas con el tema, o de nuevas series de las que queramos ofrecer información a los usuarios.

Los estados de los que dispone la aplicación actualmente son:
+ **breakingBadCharacterQuotes** - Ofrece frases aleatorias de un personaje de Breaking Bad con uno de los servicios de la aplicación.
+ **breakingBadCharacters** - Ofrece los datos de los personajes de Breaking Bad con uno de los servicios de la aplicación.
+ **lang** - Ofrece los datos del diccionario, encargado de los textos de la aplicación y el idioma establecido.

----
#### utils
Utilidades en forma de función que se utilizan a lo largo de la aplicación.

Actualmente, solo hay una función, la cual se emplea para la normalización de los datos recibidos en los servicios. Estos son guardados en los estados de la store para un óptimo acceso a ellos.

### Testing ⚙️

El testing realizado hasta el momento ha sido con Jest y React Testing Library.

Por temas de tiempo, los test actuales consisten en pruebas unitarias de los componentes más reutilizables. Pruebas que abarcan, por ejemplo: Renderizado de contenidos, estilos, renderizado de imágenes, funcionamiento de botones, etc...

Adjunto una captura de la cobertura y el número total de tests.

[![](https://i.gyazo.com/b50efdab0a327c6af1420c4aedcce559.png)](https://i.gyazo.com/b50efdab0a327c6af1420c4aedcce559.png)


## Autores ✒️

* **Iván Quesada Gervás** - *Desarrollador* [Linkedin](https://www.linkedin.com/in/ivanquesadagervas/)
