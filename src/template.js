export default reactDom => (
  `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>React SSR</title>
    </head>
    <body>
        <div id="app">${reactDom}</div>
        <script src="./app.bundle.js"></script>
    </body>
    </html>
  `
);