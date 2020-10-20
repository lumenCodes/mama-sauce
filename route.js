
app.use(express.static(path.join(__dirname, 'public')))

app.get('/order-food', (req, res) => {

})
app.put('/order-food', (req, res) => {

})

app.get('/payment', (req, res) => {
    
})
app.post('/payment', (req, res) => {

})
app.get("/", (req, res) => {
    // handle root
})

// route to get menu
app.get('/food-menu', (req, res) => {
})

module.exports = route