const expess = require('express')
const bodyParser = require('body-parser')
const placeRoutes = require('./routes/places-routes')

const app = expess()


app.use(placeRoutes)


app.listen(5000)