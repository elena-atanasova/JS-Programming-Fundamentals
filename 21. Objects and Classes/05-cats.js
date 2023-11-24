function catCreator(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }

    let cats = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, age] = arr[i].split(' ');
        cats.push(new Cat(name, age));
    }

    cats.forEach(cat => cat.meow());
}

catCreator(['Mellow 2', 'Tom 5']);