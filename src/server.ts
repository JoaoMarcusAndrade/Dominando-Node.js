import express from "express";
import restaurantRouter from './routes/order.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', restaurantRouter)
app.get('/', (req,res) => {
    res.send("Bem-vindo ao restaurant-orders-API");
});

app.listen(port, () => {
    console.log(`Servidor inicializado em http://localhost:${port}`);
});