const express = require('express')

module.exports = function(server) {

    //Api
    const router = express.Router()
    server.use('/api', router)

    const todoService = require('./api/todo/todoService')
    todoService.register(router, '/todos')
}