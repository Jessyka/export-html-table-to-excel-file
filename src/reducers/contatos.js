export default function(state = []) {
    return {
        listaContatos: [
            {Codigo: 1, Nome: 'Patricia', Telefone: '85 98888-8888', DataNascimento: '01/01/2000'},
            {Codigo: 1, Nome: 'Paula', Telefone: '85 98888-8888', DataNascimento: '01/01/2000'},
            {Codigo: 1, Nome: 'Lara', Telefone: '85 98888-8888', DataNascimento: '01/01/2000'},
            {Codigo: 1, Nome: 'Camila', Telefone: '85 98888-8888', DataNascimento: '01/01/2000'}
        ],
        ...state
    }; 
}
