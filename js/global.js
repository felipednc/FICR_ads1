const cardnv = document.getElementById('cardnv')
const btnnv = document.getElementById('btnnv')
const lost = document.getElementById('lost')

btnnv.addEventListener('click', function() {
    cardnv.style.display = 'block'
})
lost.addEventListener('click', function() {
    cardnv.style.display = 'none'
})