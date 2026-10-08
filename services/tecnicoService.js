const tecnicos = [
    {
        nome:"Matheus Laurindo Da Silva",
        especialidade: "redes"
    },
    {
        nome:"joao salafrario",
        especialidade: "software"
    },
    {
        nome:"sasuke",
        especialidade: "hardware"
    }
];

function buscaPorEspecialidade(especialidade){
    return tecnicos.find((tecnico)=>tecnico.especialidade === especialidade);
}

module.exports = {
    buscaPorEspecialidade
}