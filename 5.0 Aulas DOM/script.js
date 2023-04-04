let button = document.querySelector('button')
let select = document.querySelector('select')
let input = document.querySelector('input')

input.addEventListener('focus', ()=>{
    console.log('Dei um foco ao input')
})

select.addEventListener('change', ()=>{
    console.log(select.value)
})

button.addEventListener('click', ()=>{
    alert('O botão foi clicado')
})