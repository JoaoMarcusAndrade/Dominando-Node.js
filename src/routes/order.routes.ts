import { Router } from 'express';
import { getRestaurantOrders } from "../controllers/order.controller"

const router = Router();

router.get('/restaurant/:id/orders', getRestaurantOrders);
export default router