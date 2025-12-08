#  Apuntes de Markdown

##  1. ¿Qué es Markdown?

Markdown es un lenguaje de marcado ligero que permite dar formato al
texto de manera sencilla. Se usa en GitHub, documentación, blogs,
apuntes y README.

------------------------------------------------------------------------

##  2. Encabezados

Se usan almohadillas (#):

    # Título 1
    ## Título 2
    ### Título 3
    #### Título 4

------------------------------------------------------------------------

##  3. Estilos de texto

    *Italic* o _Italic_
    **Negrita**
    ***Negrita + Italic***
    ~~Texto tachado~~

------------------------------------------------------------------------

##  4. Listas

### ✔️ Listas sin orden

    - Elemento
    - Elemento
        - Sub-elemento

### ✔️ Listas ordenadas

    1. Primer punto
    2. Segundo punto
    3. Tercer punto

------------------------------------------------------------------------

##  5. Citas


    > Esto es una cita.
    > Se puede extender varias líneas.

------------------------------------------------------------------------

##  6. Código

### ✔️ Código en línea

    `codigo()`

### ✔️ Bloques de código

    ```python
    print("Hola mundo")
    ```

------------------------------------------------------------------------

##  7. Enlaces

    [Texto del enlace](https://ejemplo.com)

------------------------------------------------------------------------

##  8. Imágenes

    ![Texto alternativo](ruta_o_url.png)

------------------------------------------------------------------------

##  9. Tablas

    | Nombre | Edad | País   |
    |--------|------|--------|
    | Ana    | 20   | España |
    | Luis   | 25   | México |

------------------------------------------------------------------------

##  10. Separadores

    ---

------------------------------------------------------------------------

##  11. Listas de tareas

    - [x] Tarea completada
    - [ ] Tarea pendiente

------------------------------------------------------------------------

##  12. Saltos de línea

Para forzar un salto de línea manual: Añadir dos espacios al final de la
línea.

------------------------------------------------------------------------

##  13. Emojis

Markdown permite usar emojis directamente: 😄 👍 ⭐

------------------------------------------------------------------------

##  14. Diagramas (Mermaid en GitHub)

    ```mermaid
    flowchart TD
      A[Inicio] --> B[Proceso]
      B --> C[Fin]
    ```

------------------------------------------------------------------------

##  15. Buenas prácticas

-   Usa encabezados para organizar secciones.
-   Mantén líneas cortas para facilitar lectura.
-   No abuses de la negrita o los emojis.
-   Usa tablas cuando tengas datos ordenados.
-   Añade enlaces de referencia al final del documento.

| ------------------------------------------------------------------------





# 16.  Generar HTML con pandoc
Para convertir un archivo Markdown a HTML, puedes usar el comando:

```bash 
pandoc archivo.md -o archivo.html
```
------------------------------------------------------------------------

## 17 . Generar PDF con pandoc
Para convertir un archivo Markdown a PDF, puedes usar el comando:

```bash
pandoc archivo.md -o archivo.pdf

```

pero se tiene que tener instalado LaTeX para que funcione correctamente.

------------------------------------------------------------------------

## 18. Generacion de páginas estaticas con MkDocs
Para generar una página estática con MkDocs, primero instala MkDocs:

```bash
pip install mkdocs
```
Luego, crea un nuevo proyecto:

```bash
mkdocs new mi_proyecto
```
Esto creará una estructura básica de directorios. Puedes editar el archivo
`mkdocs.yml` para configurar tu sitio. Para iniciar un servidor de desarrollo,
usa:

```bash
mkdocs serve
```
Esto iniciará un servidor local donde podrás ver tu sitio en
http://con el puerto que la terminal te indique


## Despliegue a Neocities
Para desplegar la pagina web en Neocities es primero crear una cuenta en neocieties.org y luego instalar la herramienta de neocities:

y luego buscar la carpeta del proyecto en el ordenador y despues se va a la pagina de neocities y se envia la carpeta en la seccion de "Upload files"