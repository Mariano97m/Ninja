class ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log(this.nombre, this.fuerza, this.velocidad, this.salud);
    }
    drinSake (){
        this.salud += 10;
    }
}

const mart = new ninja ("Mariano", 500);
mart.sayName();
mart.showStats();
mart.drinSake();
mart.showStats();