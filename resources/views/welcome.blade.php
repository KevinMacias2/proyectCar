<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>

        <!-- Styles -->
        <style>
            body{
                font-family:white;
                background: #23242a;
                display: block;
                align-items:center;
                justify-content:center;
                min-height:100vh;
               

            }

            #login{
               background:black;
               overflow:hidden;
               color: white;
               
            }

        </style>
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        
    </head>
    <body >
        <div id = "application">
        </div>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
    crossorigin></script>

    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin></script>


    </body>
</html>
