const cardnv = document.getElementById('cardnv')
const btnnv = document.getElementById('btnnv')
const lost = document.getElementById('lost')
const formnvlista = document.getElementById('nvlista')

const listas = []


btnnv.addEventListener('click', function() {
    cardnv.style.display = 'block'
})
lost.addEventListener('click', function() {
    cardnv.style.display = 'none'
})
formnvlista.addEventListener('submit', function(event) {
    event.preventDefault()
    const inputTitulo = document.querySelector('input[name="titulolista"]')
    if (inputTitulo.value !== ''){
        const nvlista = {
            id: listas.length + 1,
            titulo: inputTitulo.value
        }
        inputTitulo.value = ''
        listas.push(nvlista)
        console.log(listas)
        window.localStorage.listas = JSON.stringify(listas)
    }
    console.log(listas)
})

