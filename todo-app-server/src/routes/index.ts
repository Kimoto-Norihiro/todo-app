const { PrismaClient } = require('@prisma/client')
const router = require('express').Router()
const prisma = new PrismaClient()

// User一覧
router.get('/user', async (req: any, res: any) => {
	const data = await prisma.user.findMany()
	return res.json(data)
});

// 特定Userの表示
router.get('/user/:id', async (req: any, res: any) => {
	const id = Number(req.params.id)
	const data = await prisma.user.findUnique({
		where: {
			id
		},
	})
	return res.json(data)
});

// Userの追加
router.post('/user', async (req: any, res: any) => {
	res.send("post /user/");
	// const {title, content, userId} = req.body
	// const todo = await prisma.todo.create({
	// 	date:{
	// 		title: title,
	// 		content: content,
	// 		userId: userId
	// 	}
	// })
	// return res.json(todo)
});

// Userの削除
router.delete('/user/:id', async (req: any, res: any) => {
	res.send("delete /user/");
});

// userの修正
router.put('/user/:id', async (req: any, res: any) => {
	res.send("put /user/");
});

// Todo一覧
router.get('/todo', async (req: any, res: any) => {
	const data = await prisma.todo.findMany()
	return res.json(data)
});

// Todoの追加
router.post('/todo', async (req: any, res:any) => {
	res.send("post /todo/");
	const {title, content, userId} = req.body
	const todo = await prisma.todo.create({
		date:{
			title: title,
			content: content,
			userId: userId
		}
	})
	return res.json(todo)
});

// Todoの削除
router.delete('/todo', (req: any, res: any) => {
	res.send("delete /todo/");
});

// Todoの修正
router.put('/todo', (req: any, res: any) => {
	res.send("put /todo/");
});

module.exports = router;