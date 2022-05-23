const formBtn = document.querySelectorAll('.form-btn')
const formTab = document.querySelectorAll('.form-item')

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