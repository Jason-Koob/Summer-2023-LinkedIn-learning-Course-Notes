
const updateJuiceBox = (update) => {
  console.info(update);
}

const lunchbox = {
    sandwich: "Turkey",
    chipNum: 17,
    juiceBox: true,
    color: "red",
    contents: {
      snack: "Beef Jerky",
      fruit: "Banana",
      noteFromMom: true,
    },
    drinkJuiceBox: function (juiceBox) {
        this.juiceBox = juiceBox;
        updateJuiceBox(`Juice status changed.`);
        console.log("There is juice in the juice box:",lunchbox.juiceBox)
    },
};

console.log("The lunchbox has a", lunchbox.sandwich, "sandwich in it.")