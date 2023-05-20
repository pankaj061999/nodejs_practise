// const name = "Pankaj";
// const userAge = 24;
// const location = "jaipur";

// const user = {
//   name: name,
//   age: userAge,
//   location: location,
// };

const user1 = {
  name: "arjun",
  age: 23,
  location: "Jaipur",
  bonus: 89,
};

const { name, age, location, bonus = 9 } = user1;

const commonfucn = (type, { name, age }) => {
  console.log("return:", type, name + age);
};

commonfucn("order", user1);

// console.log(name, location, bonus);
