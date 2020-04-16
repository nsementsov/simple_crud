const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const services = require('../services/');
const userValidator = require('../utils/validators/user-validator');

// страница для добавления нового юзера
router.get("/create", (req,res) => {
    try {
        res.render("create.hbs");
    }
    catch(err) {
        res.send(err);
    }
});

// добавление нового юзера
router.post("/create", async (req,res) => {
    try {
        let user = req.body;
        if(userValidator.validate(user)) {
            await services.userService.createUser(req.body)
            res.redirect("/");
        }
    }
    catch(err) {
        res.send(err);
    }
});

// получаем юзера по id для редактирования
router.get("/edit/:id", async (req,res) => {
    try {
        let userId = req.params.id;
        let user = await services.userService.getUserById(userId);
        res.render("edit.hbs", {
            user: user[0]
        });
    }
    catch(err) {
        res.send(err);
    }
});

// обновление данных юзера
router.post("/save", async (req,res) => {
    try {
        let user = req.body;
        if(userValidator.validate(user)) {
            await services.userService.updateUser(req.body);
            res.redirect("/");
        }
    }
    catch(err) {
        res.send(err);
    }
});

// удаление юзера
router.post("/delete/:id", async (req,res) => {  
    try {
        let id = req.params.id;
        await services.userService.deleteUser(id);
        res.redirect("/");
    }
    catch(err) {
        res.send(err);
    }
});
    
// главная страница со списком всех юзеров
router.get('/', async (req,res) => {
    try {
        let users = await services.userService.getUsers();
        res.render("index.hbs", {
        users
        });
    }
    catch(err) {
        res.send(err);
    }
});

module.exports = router;