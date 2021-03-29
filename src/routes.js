const express = require("express")
const routes = express.Router()

const view = __dirname + "/views/"

const profile = {
    name: "Gabriel",
    avatar: "https://github.com/oliveiiraa.png",
    "monthly-budget": 3000,
    "hours-per-day": parseInt(8),
    "days-per-week": 5,
    "vacation-per-year": 4
}


routes.get('/', (req, res) => res.render( view + "index"))
routes.get('/jobs', (req, res) => res.render( view + "job"))
routes.get('/job/edit', (req, res) => res.render( view + "job-edit"))
routes.get('/profile', (req, res) => res.render( view + "profile", {profile}))

module.exports = routes;