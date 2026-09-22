## Lista-de-compras-en-HTML-y-JS
Aplicación sencilla de lista de compras desarrollada con HTML, CSS y JavaScript. Permite agregar, marcar y eliminar ítems de manera dinámica en el navegador.

Se incluye un conjunto de pruebas automatizadas con Playwright MCP, que validan la funcionalidad principal de la aplicación (agregar productos, marcarlos como comprados y borrarlos). Esto asegura que la app se mantenga estable y confiable a medida que evoluciona.

Ideal como proyecto de práctica para aprender:

 - Manipulación del DOM con JavaScript
 - Persistencia básica en el navegador
 - Automatización de pruebas con Playwright MCP

###Guía de uso – Lista de Compras
1. Inicio de la aplicación
- Abre el archivo index.html en tu navegador.
- Se mostrará una interfaz simple con un campo de texto y un botón para agregar productos.

2. Agregar productos
- Escribe el nombre de un producto en el campo de entrada.
- Haz clic en Agregar o presiona Enter.
- El producto aparecerá en la lista.

3. Marcar productos
- Cada producto tiene una casilla o botón que permite marcarlo como comprado.
- Al marcarlo, se aplica un estilo visual (por ejemplo, tachado o resaltado).

4. Eliminar productos
- Junto a cada producto hay un botón de Eliminar.
- Al presionarlo, el producto se borra de la lista.

5. Persistencia (opcional)
- Si activaste localStorage, la lista se guarda automáticamente en el navegador.
- Al recargar la página, los productos añadidos permanecen.

6. Pruebas automatizadas
- El proyecto incluye pruebas con Playwright MCP.

Estas validan que:
- Se puedan agregar productos.
- Se puedan marcar como comprados.
- Se puedan eliminar correctamente.
- Para ejecutarlas, abre la terminal y corre:

bash
npx playwright test
