

- Add SCSS features
    - In index.html
         <link rel="stylesheet" href="css/style.css"/>

    - % sudo npm install -g sass

    - Use File Watchers in Webstorm
        ◦ Install SASS plugin in Webstorm in preferences/Plugins
        ◦ Preferences / Tools / File Watchers
            ‣ Make SCSS checked
            ‣ Double click SCSS to change settings (leave default)

                Arguments : $FileName$:../css/$FileNameWithoutExtension$.css
                Output Paths : ../css/$FileNameWithoutExtension$.css:../css/$FileNameWithoutExtension$.css.map

    • Or in the terminal
        ◦ Sass --watch scss/style.scss css/style.css.  (making to a different folder called css)
        ◦ As long as it is running it will check for the changes in sass file and compiles them into css file.

    • Compress CSS file
        ◦ % sudo npm install -g yuicompressor
        ◦ Add File Watcher
            ‣ Yui Compressor CSS

    - Webstorm LiveEdit
        - Documentation : https://confluence.jetbrains.com/display/WI/Live+Edit?_ga=2.53775144.1482590996.1585422253-1223985983.1518190055
        - Install Chrome plugin
            - JetBrains IDE Support
        - To start using Live Edit you need to start a JavaScript debug session for any html file.

            - To start the JavaScript debugger|http://confluence.jetbrains.com/display/WI/Starting+a+JavaScript+debug+session], select Debug file from the context menu of any html file (or in the context menu of the editor when the file is opened).


- Add bootstrap
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


For editing a SVG icon :
<!--

    Copy the icon from : https://thenounproject.com/
    Drag and drop into Figma
    Edit in Figma
    Group everything inside in a group
    Copy / Copy As SVG in Figma
    Open the svg file in the project and paste the copied svg data

-->

Proxy:
- In the client project, under the route src directory, copy the setupProxy.js file
