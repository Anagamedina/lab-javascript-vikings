// Soldier
class Soldier {
    constructor(health, strength) {  //debe recibir 2 argumentos (salud y fuerza)
        this.health = health;
        this.strength = strength;
    }


    attack() {      //primer metodo ,debería ser una función, debe recibir 0 argumentos
        return this.strength; //debe devolver la propiedad de fuerza del soldado
    }


    receiveDamage(damage) {   //segundo metodo, debería ser una función, debe recibir 1 argumento (el daño)
        this.health -= damage; //debe quitar el daño recibido de la propiedad de la salud
    }
}   //no debería devolver nada




// Viking
class Vikingo extends Soldier {  // La clase  "Vikingo" se extiende o hereda de la clase "Soldado"
    constructor(name, health, strength) {
        super(health, strength); //clave super es usada para acceder y llamar funciones del padre de un objeto.
        this.name = name;  //Esto permite que cada Vikingo tenga su propio nombre y pueda ser identificado de manera individual.
    }


    battleCry() {   //1 metodo es una funcion recibe 0 argumentos
        return "¡Odin es nuestro líder!";
    }


    receiveDamage(damage) {  //2ªmetodo , debe recibir 1 argumento (el daño)
        this.salud -= damage;  //debe quitar el daño recibido de la propiedad de la salud
                                // Esto representa el daño recibido por el Vikingo.
        if (this.health > 0) {
            return `${this.name} ha recibido ${damage} puntos de daño`;
        } else {
            return `${this.name} ha muerto en combate`;
        }
    }
}




// Saxon
class Saxon extends Soldier {   // no tiene nombre.
    receiveDamage(damage) {
        this.health -= damage;


        if (this.health > 0) {
            return `A Saxon ha recibido ${damage} puntos de daño`;
        } else {
            return "A Saxon has died in combat";
        }
    }
}




// War
class War {
    constructor() {  //Cuando creamos una Guerra por primera vez, los ejércitos deberían estar vacíos.
        this.vikingArmy = [];
        this.saxonArmy = [];
    }


    addViking(viking) {
        this.vikingArmy.push(viking);  //Añade 1 vikingo al ejército vikingo.
    }  //Si quieres un ejército vikingo de 10, debes llamar esto 10 veces.???


    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    }  


    vikingAttack() {
        const aleteatorioSaxonIndex = Math.floor(Math.aleatorio() * this.saxonArmy.length);
        const aleteatorioVikingIndex = Math.floor(Math.aleatorio() * this.vikingArmy.length);
        const aleatorioSaxon = this.saxonArmy[aleteatorioSaxonIndex];
        const aleatorioViking = this.vikingArmy[aleteatorioVikingIndex];


        const result = aleatorioSaxon.receiveDamage(aleatorioViking.strength);


        if (aleatorioSaxon.health <= 0) {
            this.saxonArmy.splice(aleatorioSaxonIndex, 1);
        }


        return result;
    }


    saxonAttack() {
        const aleatorioSaxonIndex = Math.floor(Math.aleatorio() * this.saxonArmy.length);
        const aleatorioVikingIndex = Math.floor(Math.aleatorio() * this.vikingArmy.length); // genera un número aleatorio en el rango [0, saxonArmy.length), es decir, entre 0 (inclusive) y la longitud del array saxonArmy (exclusivo).
        const aleatorioSaxon = this.saxonArmy[aleatorioSaxonIndex];
        const aleatorioViking = this.vikingArmy[aleatorioVikingIndex];


        const result = aleatorioViking.receiveDamage(aleatorioSaxon.strength);


        if (aleatorioViking.health <= 0) {
            this.vikingArmy.splice(aleatorioVikingIndex, 1);
        }


        return result;
    }


    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have won the war!";
        } else {
            return "The war rages on!";
        }
    }
}





