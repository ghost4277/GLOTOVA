const formBtn = document.querySelectorAll('.form-btn')
const formTab = document.querySelectorAll('.form-item')
const btnClose = document.querySelector('.close-modal')

btnClose.onclick = function () {
    modal.style.display = 'none'
}
window.onclick = function (event) {
    if (event.target == modal)
        modal.style.display = 'none'

}
formBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        let currentBtn = item
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)
        formBtn.forEach(function (item) {
            item.classList.remove('active')
        })
        formTab.forEach(function (item) {
            item.classList.remove('active')
        })
        currentBtn.classList.add('active')
        currentTab.classList.add('active')
    })
})
document.querySelectorAll('.popup-link').forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        let id = element.getAttribute('href').replace('#', '')
        document.getElementById(id).style.display = 'block'
    })
});
let modal = document.querySelector('.modal-window')
let mdoalBtn = document.querySelector('.popup-link')
mdoalBtn.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'block'
})