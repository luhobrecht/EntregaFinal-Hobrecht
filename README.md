# Proyecto desarrollado para el curso de React de Coderhouse 📝

# Geeks 🎮 
<img src="/public/assets/geeks.svg" alt="Geeks logo" style="width: 50%"/>

Geeks es un sitio web de ecommerce dedicado a la venta de productos de merchandising de series, películas y videojuegos entre otros. 

## 💻 Lenguajes utilizados: 
* **ReactJS** 
* **Javascript** 
* DDBB: **Firebase | FireStore** 
*Librerías:*
* Styling: **Bootstrap & CSS** 
* Router: **React Router DOM** 

# Funcionamiento de la página.

- Empezando por el inicio o home. En esta vista aparece la barra de navegación con el logo de marca que al presionarlo nos devuelve al home; opción de filtrado por categorías o ver todos los productos y el ícono del carrito de compras que al presionarlo nos lleva a la vista del mismo.
<img src="/public/assets/screenshots/1.png" style="width: 50%"/>

- El funcionamiento de la barra de búsqueda que realiza el filtrado de productos, según nombre de producto.
<img src="/public/assets/screenshots/1a.png" style="width: 50%"/>
<img src="/public/assets/screenshots/1b.png" style="width: 50%"/>

- Siguiendo por el recorrido, acá podemos ver el funcionamiento del filtrado por categorías, disponible en la barra de navegación.
<img src="/public/assets/screenshots/2.png" style="width: 50%"/>

- Al ingresar al ícono del carrito, si no se encuentran productos, nos desplegara un mensaje avisandonos de que esta vacío.
<img src="/public/assets/screenshots/2a.png" style="width: 50%"/>

- Si ingresamos a un producto específico nos aparecerá su detalle, y el contador que da la funcionalidad para poder agregar la cantidad al carrito. También tenemos la funcionalidad de volver hacia la vista principal con el botón "Volver al inicio".
<img src="/public/assets/screenshots/3.png" style="width: 50%"/>

- En el detalle de producto también tenemos un selector de color que despliega los colores correspondientes y cambia la imagen del producto según su color seleccionado.
<img src="/public/assets/screenshots/4.png" style="width: 50%"/>
<img src="/public/assets/screenshots/5.png" style="width: 50%"/>

- El botón de agregar al carrito permanece deshabilitado hasta que el contador tenga un valor mayor a 0, es decir, que se esten sumando unidades.
<img src="/public/assets/screenshots/6.png" style="width: 50%"/>

- Una vez presionado el botón de agregar al carrito, se modifica la vista para tener la opción de "seguir comprando" o finalmente "terminar la compra".
<img src="/public/assets/screenshots/7.png" style="width: 50%"/>

- Una vez presionado "Terminar la compra", nos lleva a la vista del carrito, con el detalle de cada producto agregado. En caso de ser el mismo producto, los agrupara sumandole cantidad. En caso de ser el mismo producto, pero distinto color, también hará la distinción de producto; y agregara cantidad según color. También tenemos un botón para continuar la compra, vacíar el carrito, eliminar por producto o finalmente confirmar terminar la compra.
<img src="/public/assets/screenshots/8.png" style="width: 50%"/>
<img src="/public/assets/screenshots/8a.png" style="width: 50%"/>

- Si presionamos el botón de "Terminar la compra", nos guiará a la vista del formulario para validar los datos del comprador. Aún no hay un login implementado por lo cual, es esencial que completen estos datos, por ende son obligatorios para continuar la compra.
<img src="/public/assets/screenshots/9.png" style="width: 50%"/>
<img src="/public/assets/screenshots/10.png" style="width: 50%"/>

- Una vez enviado el formulario, se crea la orden de compra en la base de datos creada con firebase. Primero verán un mensaje de que el pedido se está creando y luego la confirmación de la compra con su número de orden correspondiente.
<img src="/public/assets/screenshots/11.png" style="width: 50%"/>
<img src="/public/assets/screenshots/12.png" style="width: 50%"/>

- En la parte de contacto, también hay un formulario donde pueden dejar sus datos y sus consultas. Esta información también se envía a la base de datos creada en firebase.
<img src="/public/assets/screenshots/13.png" style="width: 50%"/>

- La página también es responsive, asique les dejo algunas vistas de como se ve en tablet y móvil.
<img src="/public/assets/screenshots/14.png" style="width: 50%"/>
<img src="/public/assets/screenshots/15.png" style="width: 50%"/>
<img src="/public/assets/screenshots/16.png" style="width: 50%"/>
<img src="/public/assets/screenshots/17.png" style="width: 50%"/>
<img src="/public/assets/screenshots/18.png" style="width: 50%"/>


## Diseñado por 
* **Lucía Hobrecht** - *Full-stack developer* | Github: [luhobrecht](https://github.com/luhobrecht)



