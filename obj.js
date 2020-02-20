/*
    object
    -firstName
    -lastname
    -nickName
    -age
    -foveretColor[]
    -Address{
        -home
        -country
        -city
    }
    -function showAll 
*/

let personNote = {
  firstname: "Wissanu",
  Lastname: "Khongjandee",
  age: 19,
  feverletColor: ["green", "Yellow"],
  address: {
    home: "Sathupadit",
    country: "Yannawa",
    city: "Bangkok"
  },
  showAll: function () {
      return this.firstname + "feverletColor" + this.feverletColor;
  }
};

console.log(personNote.showAll());