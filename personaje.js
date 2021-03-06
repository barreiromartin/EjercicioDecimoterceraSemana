class personaje {
    constructor(nombre, vida, ataque, nivel) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.nivel = nivel;
    }

    set setVida(vida) {
        this.vida = vida;
    }

    set setAtaque(ataque) {
        this.ataque = ataque;
    }

    set setNivel(nivel) {
        this.nivel = nivel;
    }
    

    //GETTERS
    get getNombre() {
        return this.nombre;
    }

    get getVida() {
        return this.vida;
    }

    get getAtaque() {
        return this.ataque;
    }

    get getNivel() {
        return this.nivel;
    }

    get getExperiencia() {
        return this.experiencia;
    }

    //FUNCIONES

    dañoRecibido(daño) {
        this.vida = this.vida - daño;
        return this.vida
    }

    conVida() {
        if (this.vida < 1) {
            var estado = false;
        } else {
            var estado = true;
        }
        return estado;
    }

    dañoDeAtaque() {
        var daño = this.ataque * this.nivel;
        return daño;
    }

    puntosDeVida() {
        var hp = this.vida + (this.nivel * 100);
        return hp;
    }


}