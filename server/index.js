const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

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
            const isPasswordMatch = await bcrypt.compare(
                userPassword,
                result[0].userPassword
            );

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

// insert home data into database
app.post("/api/homeDataInsert", (req, res) => {
    const {
        ownerName,
        age,
        gender,
        bhkNo,
        bedroom,
        bathroom,
        carpetArea,
        balconies,
        furnishing,
        rent,
        address,
        wheelchair,
        pet,
        eletricCharge,
        kitchen,
        wifi,
        lift,
    } = req.body;

    const sqlInsert =
        "INSERT INTO house_info ( ownerName, age, gender,bhkNo, bedroom, bathroom,  carpetArea, balconies, furnishing, rent, address, WheelChairFriendly, PetFriendly, ElectricityWaterCharges, kitchen, wifi, lift) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(
        sqlInsert,
        [
            ownerName,
            age,
            gender,
            bhkNo,
            bedroom,
            bathroom,
            carpetArea,
            balconies,
            furnishing,
            rent,
            address,
            wheelchair,
            pet,
            eletricCharge,
            kitchen,
            wifi,
            lift,
        ],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                console.log(result);
                res.status(200).send("Home data inserted successfully");
            }
        }
    );
});

// ----------------------------------------------
// Route to fetch initial house data
app.get('/api/houseData', (req, res) => {
    const userName = req.query.userName;
    const sqlSelect = "SELECT * FROM house_info WHERE ownerName = ?";

    db.query(sqlSelect, [userName], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

// SSE route to notify clients about new house data
app.get('/api/sse/houseData', (req, res) => {
    // Enable response as SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Function to send SSE event
    const sendSSE = (data) => {
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    // Set up a listener for new house data (change this part based on how you add data)
    const onChange = (newData) => {
        sendSSE(newData);
    };

    // Subscribe to the "change" event (You need to set up this part in your backend code)
    // For example, if you use Socket.IO or another WebSocket library, you'd emit the event from there.
    // Here, we assume that you have a global EventEmitter-like object that emits "change" event
    // when a new row is added to the database.
    houseDataEventEmitter.on('change', onChange);

    // Clean up on client disconnect
    req.on('close', () => {
        houseDataEventEmitter.off('change', onChange);
    });
});


// const port = process.env.PORT || 5174;

app.listen(5174, () => {
    console.log(`Server is running on port 5174`);
});
