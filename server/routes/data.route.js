import express from 'express'
const router = express.Router();
import { getData,addData } from '../controllers/data.controller.js';

router.get('/data', getData);
router.post('/data', addData);

export default router
