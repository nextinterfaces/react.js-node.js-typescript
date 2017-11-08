const express = require('express')
const app = express()
const path = require("path")

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/api/v1/sampledata', (req, res) => res.send(`
    ["Canada", "Bulgaria"]
`))

app.get('/', (req, res) =>
    res.send(
        `
        <!DOCTYPE HTML>
        <html>
        <body>
        <div id='next-app-root'>
            This will be replaced by React
        </div>
        
        <script src="/static/dist/next.app.js"></script>
        
        </body>
        </html>
      `
    )
)


app.listen(3000, () => console.log('Next app listening on port 3000!'))