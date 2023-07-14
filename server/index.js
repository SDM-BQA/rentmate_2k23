const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcryptjs');
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
app.post("/api/insert", async (req, res) => {
    const userType = req.body.userType;
    const userName = req.body.userName;
    const userAge = req.body.userAge;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);


    const sqlInsert =
        "INSERT INTO user_info (userType,userName,userAge,userEmail,userPassword) VALUES (?,?,?,?,?)";

    db.query(
        sqlInsert,
        [userType, userName, userAge, userEmail, hashedPassword],
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

    db.query(sqlSelect, userEmail, async (err, result) => {
        if (err) {
            res.send({ err: err });
        }

        if (result.length > 0) {
            const isPasswordMatch = await bcrypt.compare(userPassword, result[0].userPassword);

            if (isPasswordMatch) {
                res.send(result[0]);
            } else {
                res.send({ message: "Wrong username/password combination!" });
            }
        } else {
            res.send({ message: "User does not exist!" });
        }
    });
});

// fetch all house details
app.get("/api/houseList", (req, res) => {
    const sqlSelect = "SELECT * FROM house_info";

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});



// const port = process.env.PORT || 5174;

app.listen(5174, () => {
    console.log(`Server is running on port 5174`);
});