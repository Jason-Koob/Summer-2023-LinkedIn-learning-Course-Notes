
function SuitCase(
// Parameters:
    name,
    Sitem1,
    Sitem2,
    Sitem3,
    isOpen,
  ) {
// Properties:
    this.name = name,
    this.Sitem1 = Sitem1,
    this.Sitem2 = Sitem2,
    this.Sitem3 = Sitem3,
    this.isOpen = isOpen,
    this.toggleOpen = 
// Method:
    function toggleOpen (isOpen) {
        this.isOpen = isOpen;
    }
  }
  
export default SuitCase;