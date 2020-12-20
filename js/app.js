
const checbox = document.querySelector('#checkbox')
if(window.matchMedia('(prefers-color-scheme)').matches){
    checbox.setAttribute('checked', true)

}

checbox.addEventListener('change', function(e){
    if(this.checked){
        document.body.classList.add('is-dark-mode')
        document.body.classList.remove('is-light-mode')
    }else{
        document.body.classList.add('is-light-mode')
        document.body.classList.remove('is-dark-mode')
    }

})