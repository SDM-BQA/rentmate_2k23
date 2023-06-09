const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

const db = mysql.createPool({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "rentmate",
});



// inserting into database
app.post("/api/insert", (req, res) => {
    const userType = req.body.userType;
    const userName = req.body.userName;
    const userAge = req.body.userAge;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;

    const sqlInsert =
        "INSERT INTO user_info (userType,userName,userAge,userEmail,userPassword) VALUES (?,?,?,?,?)";

    db.query(
        sqlInsert,
        [userType, userName, userAge, userEmail, userPassword],
        (err, result) => {
            if (err) {
                console.log(err);

            } else {
                console.log(result);

            }
        }
    );
});

// checking wheather email is already exist or not
app.post("/api/checkEmail", (req, res) => {
    const userEmail = req.body.userEmail;
    const sqlSelect = "SELECT userEmail FROM user_info WHERE userEmail = ?";

    db.query(sqlSelect, userEmail, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            if (result.length > 0) {
                res.status(409).send("Email already exists");
            } else {
                res.status(200).send("Email does not exist");
            }
        }
    });
});

// login
app.post("/api/login", (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    const sqlSelect = "SELECT * FROM user_info WHERE userEmail = ?";

    db.query(sqlSelect, userEmail, (err, result) => {
        if (err) {
            res.send({ err: err });
        }

        if (result.length > 0) {
            if (result[0].userPassword === userPassword) {
                res.send(result[0]);

            } else {
                res.send({ message: "Wrong username/password combination!" });
            }
        } else {
            res.send({ message: "User does not exist!" });
        }
    });
});



const port = process.env.PORT || 5173;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});