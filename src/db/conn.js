const mongoose = require("mongoose");

mongoose.set("strictQuery" , true);

mongoose.connect('mongodb+srv://Navnoor:<password>@cluster0.o4jie7m.mongodb.net/?retryWrites=true&w=majority', { tls: true, ssl: true })
.then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
}); 