import express from "express"
import bodyParser from "body-parser"
import  mongoose  from "mongoose"
import cors from "cors"
import postRoutes from './routes/posts.js'

const App = express()

App.use(bodyParser.json({
    limit: '30mb',
    extended: true
}))
App.use(bodyParser.urlencoded({
    limit: '30mb',
    extended: true
}))

App.use(cors())
App.use("/posts",postRoutes)

const CONNECTION_URL ="mongodb+srv://Test:salam1@cluster0.ot2rj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT=process.env.PORT||5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:true})
.then(()=>App.listen(PORT,console.log(`Server runing on ${PORT}`)))
.catch((err)=>console.log(err.message))
mongoose.set('toJSON',false)



