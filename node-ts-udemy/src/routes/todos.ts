import { Router } from 'express';

import { createTodo, deleteTodo, getTodos, updateTodos } from '../controller/todo';

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodos);

router.delete('/:id', deleteTodo);

export default router;