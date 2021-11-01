let Car = function () {
 
    this.get = function () {
        this.name = prompt('Введите марку и модель автомобиля');
        this.fuelConsuption = +prompt('Введите расход топлива, л/100 км.');
        this.distance = +prompt ('Введите расстояние которое необходимо преодолеть , км');
        this.typeOfFuel = prompt ('Введите тип топлива (возможные варианты: АИ-92, АИ-95, ДТ, ГАЗ)');
        this.speed = +prompt('Введите скорость, км/ч');
        
 
        this.operation();
    };
 
    this.operation = function () {

        switch(this.typeOfFuel) {
            case 'АИ-92':
                this.costFuel = 1.99;
                break;
            case 'АИ-95':
                this.costFuel = 2.09;
                break;
            case 'ДТ':
                this.costFuel = 2.09;
                break;  
            case 'ГАЗ':
                this.costFuel = 1.19;
                break;  
            default: this.costFuel = 0;
        }

        this.numderOfLiters = this.fuelConsuption * this.distance / 100;
        this.tripCost = (this.costFuel * this.numderOfLiters).toFixed(2);
        this.time = (this.distance / this.speed).toFixed(2);
        this.minutes = Math.floor(this.time * 60);
 
        this.show();
    };
 
    this.show = function () {
        
        if (this.fuelConsuption == '' || this.distance == '' || this.costFuel == 0 || this.speed == '') {
            console.log('Ошибка! Введены неверные данные. Попробуйте еще раз');
        } else {
            console.log(`Чтобы проехать на автомобиле ${this.name} расстояние в ${this.distance} км. Вам понадобится ${this.numderOfLiters} литров топлива. Стоимость топлива на данную поездку составит ${this.tripCost} рублей. Затраченное время при веденной скорости составит ${this.time} часа (${this.minutes} минут)`);
        }   
    };
};
 
let car = new Car();
car.get();

let car2 = new Car();
car2.get();


