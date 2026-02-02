import  express  from "express"

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(express.urlencoded())
app.use(express.json())

app.post("/test", (req, res) =>{
    console.log(req.body)
    const respuesta ={
        msg: "Datos recibidos correctamente",
        playload: req.body
    }
    res.json(respuesta)
    
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))

