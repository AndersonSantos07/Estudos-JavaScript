/* se for vip fica no sector black se não no setor green */

const list = [
    { name: 'anderson', vip: true },
    { name: 'maria', vip: false },
    { name: 'joão', vip: true },
    { name: 'bruno', vip: false },
    { name: 'carla', vip: true },
    { name: 'ana', vip: false },
    { name: 'julio', vip: true },
]

const newList = list.map((client) => {
    const result = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? 'Black' : 'Green'
    }
    return result
})

console.log(newList)