function laptop() {
    class Laptop {
        constructor(info, quality) {
            this.info = info,
            this.quality = quality,
            this.isOn = false
        }

        turnOn() {
            this.isOn = true;
            this.quality -= 1;
        }

        turnOff() {
            this.isOn = false;
            this.quality -= 1;
        }

        showInfo() {
            let obj = {
                producer: this.info.producer,
                age: +this.info.age,
                brand: this.info.brand
            }

            let json = JSON.stringify(obj);
            return json;
        }

        get price() {
            return 800 - this.info.age * 2 + this.quality * 0.5;
        }
    }

    // test
    let info = {producer: "Dell", age: 2, brand: "XPS"}
    let laptop = new Laptop(info, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    console.log(laptop.quality)
    laptop.turnOn()
    console.log(laptop.isOn)
    console.log(laptop.price)
}

laptop();