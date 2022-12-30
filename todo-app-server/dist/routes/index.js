"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { PrismaClient } = require('@prisma/client');
const router = require('express').Router();
const prisma = new PrismaClient();
router.get('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma.user.findMany();
    return res.json(data);
}));
router.get('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const data = yield prisma.user.findUnique({
        where: {
            id
        },
    });
    return res.json(data);
}));
router.post('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("post /user/");
}));
router.delete('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("delete /user/");
}));
router.put('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("put /user/");
}));
router.get('/todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma.todo.findMany();
    return res.json(data);
}));
router.post('/todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("post /todo/");
    const { title, content, userId } = req.body;
    const todo = yield prisma.todo.create({
        date: {
            title: title,
            content: content,
            userId: userId
        }
    });
    return res.json(todo);
}));
router.delete('/todo', (req, res) => {
    res.send("delete /todo/");
});
router.put('/todo', (req, res) => {
    res.send("put /todo/");
});
module.exports = router;
//# sourceMappingURL=index.js.map