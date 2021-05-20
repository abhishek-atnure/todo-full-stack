const pool = require("./db");
const bcrypt = require("bcrypt");

const jwtGenrator = require("./jwtGen");
const { Client } = require("pg");

//users

const register = async (req, res, next) => {
    try {
        const { fname, email, password } = req.body;

        const user = await pool.query(
            `SELECT  *  FROM account WHERE
                                        email=$1`,
            [email]
        );

        if (user.rows.length !== 0) {
            return res.status(401).send("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const createUser = await pool.query(
            `INSERT INTO account(name,email,password) VALUES
      ($1,$2,$3)RETURNING id`,
            [fname, email, hashedPassword]
        );

        const token = jwtGenrator(createUser.rows[0].id);
        res.json({ token });
    } catch (err) {

        console.log(err.message);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query(`SELECT *  FROM account WHERE email=$1`, [
            email,
        ]);

        if (user.rows.length === 0) {
            return res.status(401).json("Password or Email is incorrect");
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(401).json("Password or email is incorrect");
        }
        const token = jwtGenrator(user.rows[0].id);
        res.json({ token });
    } catch (error) {
        console.error(error.message);
    }
};

const createTodo = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { description, date } = req.body;
        const createdTodo = await pool.query("insert into todolist (user_id,description,due_date) values($1,$2,$3) RETURNING id",
            [user_id, description, date]);
        res.json(createdTodo.rows)
    } catch (error) {
        console.error(error.message)
    }
}

const getAllTodos = async (req, res) => {
    try {
        const { user_id } = req.params;
        const getTodos = await pool.query("SELECT * FROM todolist WHERE user_id=$1", [
            user_id,
        ]);
        res.json(getTodos.rows);
    } catch (err) {
        console.log(err.message);
    }

};


const updateTodo = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { description, todo_id } = req.body;
        const updatedTodo = await pool.query(
            `UPDATE todolist SET description=$1 WHERE user_id=$2 AND id=$3 returning id`,
            [description, user_id, todo_id]
        );
        res.json(updatedTodo.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
};

const deleteTodo = async (req, res) => {
    try {
        // const { user_id } = req.params;
        const { todo_id, user_id } = req.body;

        const deletedTodo = await pool.query(
            "delete from todolist where user_id=$1 and id=$2",
            [user_id, todo_id]
        );
        res.json("todo removed");
    } catch (err) {
        console.log(err.message);
    }
};

const dashboard = async (req, res) => {
    try {
        res.json(req.user)

    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
};

module.exports = {
    register,
    login,
    getAllTodos,
    updateTodo,
    deleteTodo,
    createTodo,
    dashboard
}