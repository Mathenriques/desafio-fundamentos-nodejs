import { Database } from "./database.js"

const database = new Database

export const routes = [
    {
        method: 'GET',
        path: '/tasks',
        handler: (req, res) => {
            
            return res.end()
        }
    },
    {
        method: 'POST',
        path: '',
        handler: (req, res) => {
            return res.end()
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