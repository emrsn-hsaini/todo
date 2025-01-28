const express = require('express');
const { addTask, getTasks, markTaskAsCompleted } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addTask);
router.get('/', authMiddleware, getTasks);
router.put('/:taskId', authMiddleware, markTaskAsCompleted);

module.exports = router;