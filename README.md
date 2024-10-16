<p align="center">
  <a href="https://react.dev/" target="blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="300" alt="React Logo" />
    <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="300" alt="TypeScript Logo" />
  </a>
</p>

# TaskBoard App Frontend - React + TS

Aplicación tipo tablero para gestionar tareas de desarrollo para metodologías ágiles

## Variables de Entorno

| Variable       | Tipo de Valor                                         | Descripción                                                                                                                                                                                                                         |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_MODE`    | `string` ejem:`development, production, testing, etc` | Especifica el modo de ejecución en el que se utilizarán las variables de entorno. Por ejemplo, development para desarrollo o production para producción.                                                                            |
| `VITE_API_URL` | `string` ejem: `http://localhost:8083/api/v1`         | Debe contener la URL del servidor backend incluyendo el prefijo de la API. Por ejemplo, `http://localhost:8083/api/v1` para un servidor backend en ejecución en `localhost` en el puerto `8083` con el prefijo de la API `api/v1/`. |

## Ejecución
1. Clonar el proyecto del repositorio
```
git clone https://github.com/garySZA/tasks-board-front.git
```
2. Clonar el archivo __.env.example__ y renombrar a __.env__
3. Llenar las variables de entorno definidas en el archivo ```.env```
4. Instalar las dependencias
```
  yarn install
```

## Ejecución Docker

```bash
  docker run -p 8090:80 -e VITE_API_URL=http://localhost:8083/api/v1 taskboard-app-front
```

## Ejecución de manera local

```
yarn dev
```

## Ejecución de Stack Completo Frontend - Backend - Mysql
```
docker compose -f docker-compose-prod.yaml --env-file .env.production up
```


> **NOTA:**
>
> Para ejecutar la aplicación se tienen diferentes modos (development, production, y testing). Para cada uno de ellos debe existir un archivo `.env` que contenga las variables específicas para cada modo.
>
> - `.env.development`
> - `.env.production`
> - `.env.testing`
>
> La ejecución se podrá realizar en los siguientes modos, considerando lo dicho anteriormente:
>
> ```bash
> yarn dev
> yarn prod
> ```

## STACK
* React JS
* Typescript