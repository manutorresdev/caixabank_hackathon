## Cross Platfom React Native App

Bienvenidos a este prototipo de aplicación para React Native.

Para utilizarlo:
    1. Descargar de GitHub el proyecto.
    2. Instalar el paquete de expo-cli. [expo install](https://docs.expo.io/versions/latest/sdk/cli/install/).
    3. Utilizar el comando: expo start o npm start.

## Reutilización Componentes Web/App

Para reutilizar el código en web/app, los componentes se pueden pintar de forma variable según la plataforma de donde cargue la app.
Ejemplo:

    ```
    const isWeb = Platform.OS === 'web'

    return (
      <View>
        {isWeb ? <WebComponent /> : <AppComponent />}
      </View>
    )
    ```

Como veréis, el "WeeklyChart" se pinta en web pero no en la app, esto se podría escalar de forma "infinita".

Por supuesto, hay muchísimas cosas a optimizar. Pero yo sigo 3 claves en el desarrollo de mis apps:
    1. Haz que funcione.
    2. Optimizalo.
    3. Hazlo mejor.

En este tramo de tiempo, y teniendo en cuenta que no sabía utilizar Typescript ni React Native, creo que el resultado es decente.

## Conclusiones

Me quedo con todo lo aprendido, muchas gracias por haber organizado todo el evento. Ha sido muy educativo y divertido.
