const exprees = require('express')
const app = exprees() //Espressni alohida uzgaruvchida chaqrib olayapti

app.use(exprees.json())

app.get('/', (req, res ) => {
    res.status(200).json({message: "Hello Nurbek!"})
})
app.post('/' , (req, res) => {
    const {firstname, lastname} = req.body
    const massege = `His full name - ${firstname} ${lastname}`
    res.send(massege)
})
app.delete("/:id", (req, res) => {
     const {id} = req.params
    res.send(id)
})
app.put("/:id" , (req, res) => {
    const {id} = req.params
    const body = req.body
    res.json({id, body})
})




const PORT = 8080

app.listen(PORT, () => console.log(`Server shu portda ishlayapti - http://localhost:${PORT}`))
