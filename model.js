const mongoose = require('mongoose');
let mongooseError = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect("mongodb://localhost:27017", mongooseError, (err) => {
    if (err) {
        console.log("MongoDB Session is not able to connect");
    } else {
        console.log("Session Connected Successfully");
    }
});

const authenticationSchema = new mongoose.Schema({
    id: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
});
const userDetailsSchema = new mongoose.Schema({

    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    }
});


const User = mongoose.model("loginDetails", authenticationSchema);
const localDetails = mongoose.model("localDetails", userDetailsSchema);


module.exports= {
    AuthUser:User,
    localUser:localDetails
};

