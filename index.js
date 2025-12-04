const exprees = require('express')
const app = exprees() //Espressni alohida uzgaruvchida chaqrib olayapti
const PORT = 8080

app.listen(PORT, () => console.log(`Server shu portda ishlayapti - http://localhost:${PORT}`))
