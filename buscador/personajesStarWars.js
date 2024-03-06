module.exports = class personajesStarWars {

    constructor(personajes){
    this.personajes = personajes;
    }

    findPersonaje(personajeFind){
        let personajesBusqueda = this.personajes;
        if(personajesBusqueda.length === 0){
            return null;
        }

        let foundPersonaje = personajesBusqueda.filter(personaje => personaje.name.toLowerCase().includes(personajeFind.toLowerCase()));
        return foundPersonaje;

    }

};