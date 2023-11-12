const minhaLista = [
    {id:'1', value: 'fruta'},
    {id:'2', value: 'pao'},
    {id:'3', value: 'cafe'}
]

export default function MinhaLista() {
    return minhaLista.map((item) => {
        <div key= {item.id}>
            <h4>{item.value}</h4>
        </div>
    })
}


//cada item da lista precisa de um key unique

