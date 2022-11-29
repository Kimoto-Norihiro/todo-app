import express from 'express';
import noImpl from '../../noImpl';

const router = express.Router();

// Todo一覧
router.get('/', noImpl);

// Todoの追加
router.post('/', noImpl);

// Todoの削除
router.delete('/', noImpl);

// Todoの修正
router.put('/', noImpl);

export default router;