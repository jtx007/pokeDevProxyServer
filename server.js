require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const request = require('request')

app.use(cors());

app.listen(port, () => console.log('Pokedev startup', port))

app.get('/', (req, res) => {
    const pokemon = req.query.pokemon
    console.log(pokemon)
    
    let pokeDevAPIRequest = request(`https://pokeapi.glitch.me/pokemon/${pokemon}`, (error, response, body) => {
        if (error) {
            res.render('error', {error})
        }
        res.send(body)
    })
})