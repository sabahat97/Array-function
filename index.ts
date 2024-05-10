function calculateTax(amount: number): number {
    return amount * 1.2;
   }
   function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
   }
   let price = [100, 75, 42, 20];
   let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];
   price.forEach((price, index) => {
    writePrice(names[index], calculateTax(price)); 
   });