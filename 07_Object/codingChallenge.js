// coding Challenge
var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  culcTip: function () {
    this.tips = [];
    this.total = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percent;
      var bill = this.bills[i];

      if (bill < 50) {
        percent = .2;
      } else if (bill >= 50 && bill < 200) {
        percent = .15;
      } else {
        percent = .1;
      }

      this.tips[i] = bill * percent;
      this.total[i] = bill + (bill * percent);

    }

  },
};

john.culcTip();
console.log(john);
