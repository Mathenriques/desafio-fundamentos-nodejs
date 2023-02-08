import { Database } from "./database.js"
import { randomUUID } from "node:crypto";

const database = new Database

export const routes = [
    {
        method: 'GET',
        path: '/tasks',
        handler: (req, res) => {
            const tasks = database.select('tasks')

            return res.end(JSON.stringify(tasks))
        }
    },
    {
        method: 'POST',
        path: '/tasks',
        handler: (req, res) => {
            const { title, description } = req.body
            const dateTime = new Date().toLocaleString()

            const task = {
                id: randomUUID(),
                title: title,
                description: description,
                completed_at: null,
                created_at: dateTime,
                updated_at: dateTime

            }

            database.insert('tasks', task)

            return res.writeHead(201).end()
        }
    },
    {
        method: 'PUT',
        path: '',
        handler: (req, res) => {
            return res.end()
        }
    },
    {
        method: 'DELETE',
        path: '',
        handler: (req, res) => {
            return res.end()
        }
    },
]