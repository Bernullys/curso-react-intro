# Repositorio base del Curso de Introducción a React.js en Platzi

¡Hola, Platzinauta!

En este repositorio encontrarás el código de todas las clases del [Curso de Introducción a React.js](https://platzi.com/reactjs). Para empezar solo debes clonar este repositorio (`git clone`), instalar sus dependencias (`npm i`) y ejecutar la aplicación (`npm start`).

La rama principal contiene el código con el que eempezamos el curso. En las demás ramas encontrarás el código de las siguientes clases y finalmente el deploy de la aplicación.

¡Mucha suerte aprendiendo React! #NuncaParesDeAprender

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


03/07/2023 (las notas que hago por clase estaran aqui y en los archivos)

Clase: ¿Que es un componente? 

Vamos a ver:
    Como trabajar con componentes.
    Cual es la diferencia de los componentes con los elementos de react.
    Y como estos elementos son distintos pero terminan transformandose en etiquetas html.

Cuando estemos mas preparados, enseñaran commo se configura un proyecto en react desde cero.

En el archivo index.html se coloca un div con id= "root" que es donde react renderizara toda la aplicación.
El archivo robots.txt indica a que se le puede hacer web scraping --- (esto es otro tema y por ahora quedara ahi)
EL archivo manifest.jason es para que tome los estilos si es que esta offline la aplicación.

La sintaxis que esta dentro del archivo app.js  que parece html en realidad es jsx. Por ejemplo class es className.
Mas adelante se convertira en html.

Los componentes se tienen que exportar al index.js. Por eso si hacemos un nuevo componente lo podemos insertar dentro del comonente que se exporta pero como una etiqueta.

Resumen:
    Los componentes se crean(como funciones y con UpperCamelCase).
    Despues los componentes se llaman dentro de el componente exportado. Utilizando la sintaxis como de etiqueta html.
    Para renderizar (el componente exportado con sus elementos y otros componentes dentro) se utiliza el codigo que aparece en el index.js
    Los componentes reciben props, propiedades a diferencia de las funciones que reciben parametros, pero no es lo mismo. Ejemplo:
        
        function TodoItem(props) {
            return (
                <li>
                <span>V</span>
                <p>Llorar al monte</p>
                <span>X</span>
                </li>
            );

    Y asi se envian las props:

        <TodoItem
        completed={3}
        total={5}
        />

        Ojo: so propiedades, no atributos.

    Al final los elementos son los que se terminan transformando en html una vez que pasan por la "fabrica" de renderizado React.js.



Clase: Componentes de TODO Machine

    En esta clase se quiere llegar a una vista que tenga:

    Un texto que diga cuantos TODO has completado de los que tienes pendientes.
    Un input.
    Tres listas que tengan:
        V por check
        Un texto del TODO
        X por borrar
    Y abajo a la derecha un boton para crear TODOs

    Para esto primero se crea la estructura con los componentes y despues se crean los elementos que los definan.
    Pero los componentes se crean aparte (uno por archivo.js). Por lo tanto hay que importarlos al App.js. Al exportarlos es mejor utilizar export por nombre y no por default, asi se evitan errores.

    Ojo: ver como se hizo para que en un componente que contiene otro componente se le colocan props y como se llaman (en el archivo TodoListContainer).



04/07/23

Clase: ¿Como se comunican los componentes? Props y atributos

En esta clase van a cambiar los TODO's completados de los totales.
Ademas se van a renderizar los TODO's items de acuerdo a lo que se escriban.

Ahora se va a trabajar con las Props. Primero en el TodoStatus.js, vamos a hacer que sean dinamicas las cantidades.
Como a las funciones les ponemos parametros, a los componentes les ponemos props. Las props son objetos y se pueden escribir directamente props y despues definir las que queramos con props.algo, props.otracosa. Despues las props dentro del componente se colocan dentro de {} para que lo entienda js.
Ahora para enviar los valores de los props, se hacen desde donde tenemos la estructura, en el componente, dandole propiedades (como en html le damos atributos a las etiquetas).
React no muestra las props que le damos cuando renderiza.
A los elementos en react se le pueden poner atributos que se convertiran en atributos html.

React transforma todo lo que esta dentro de un componente en la propiedad childern. Como se hizo con el TodoListContainer que tiene como children a los TodoItems.

Para no estar metiendo div cada vez que se mete un fragmento de la aplicación --> tiene que estar dentro de un paquete pero en este caso utilizamos la herramienta React.Fragment. Este React.Fragment es invisible en el html. Ojo: para trabajar con esta herramienta, hay que importar React from "react".

Ahora vamos a renderizar arrays.
En este array vamos a crear objetos que representaran las acciones en los Todos. Es decir cada tarea sera un objeto dentro de este array que tiene dos propiedades: text y completed.
Por cada objeto dentro del array vamos a renderizar un TodoItem.
Para eso, llamamos al array y creamos un nuevo array con map. Pero a cada objeto hay que darle una key, osea a cada TodoItem hay que darle una key diferente y una propiedad con el texto.
Tambien para que cambie el texto en cada todo, hay que insertarle props a TodoItem.
Se hace lo mismo con el completed.

De esta forma se comunican los componentes utilizando propiedades. 




