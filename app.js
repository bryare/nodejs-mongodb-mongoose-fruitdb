const mongoose = require("mongoose");
// LOCAL HOST NOT WORKING FOR MONGOOSE OR MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// WONT WORK SINCE RATING IS HIGHER THAN 34

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 34,
//   review: "Amazing fruit",
// });

// WONT WORK SINCE NAME IS A REQUIRED FIELD

// const peach = new Fruit({
//   rating: 10,
//   review: "Amazing fruit",
// });

// peach.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit.",
});

// pineapple.save();

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple,
// });

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit",
// });
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me",
// });
// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture",
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits");
//   }
// });

// fruit.save();

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach(function (element) {
      console.log(element.name);
    });
  }
});

// UPDATING A PREVIOUS ENTRY

// Fruit.updateOne(
//   { _id: "62b4ddcb7c613c01403faf8f" },
//   { name: "Peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Succesfullly updated the document.");
//     }
//   }
// );

// DELETING AN ENTRY

// Fruit.deleteOne(
//   {
//     name: "Peach",
//   },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Peach gone.");
//     }
//   }
// );

// DELETING MANY ENTRIES

// Person.deleteMany(
//   {
//     name: "John",
//   },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("John gone.");
//     }
//   }
// );

Person.updateOne(
  { name: "John" },
  { favoriteFruit: pineapple },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Succesfullly updated the document.");
    }
  }
);
