// Tarefas agendadas com temporizador

const schedule = require("node-schedule")

const tarefa1 = schedule.scheduleJob("*/1 * 03 * * 2", function(){
    console.log("Executando tarefa 1!", new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log("Cancelando tarefa 1.")
}, 5000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 3
regra.second = 25


const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("Executando tarefa 2!", new Date().getSeconds())
})
