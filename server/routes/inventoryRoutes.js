import express from 'express';
import inventoryController from '../controllers/inventoryController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
const router = express.Router();
router.use(verifyToken);

router.get('/', inventoryController.getItems);
router.post('/', inventoryController.addItem);
router.put('/:id', inventoryController.updateItem);

export default router;