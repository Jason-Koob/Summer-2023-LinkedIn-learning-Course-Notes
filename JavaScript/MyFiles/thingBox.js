
class thingBox {
    constructor(
// Defines parameters:
      name,
      item1,
      item2,
      item3,
      item4,
      isOpen,
      color,
    ) { 
// Defines properties:
      this.name = name,
      this.item1 = item1,
      this.item2 = item2,
      this.item3 = item3,
      this.item4 = item4,
      this.isOpen = isOpen,
      this.color = color;
    }
// Defines a method:
    toggleOpen (isOpen) {
        this.isOpen = isOpen;
    }
  }

  export default thingBox;