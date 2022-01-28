let buttonModal = document.querySelector('.button')
const openModal = (OpenModalButton, ModalWindow)=>{
    if(buttonModal.dataset.modal == 'modal'){
        OpenModalButton.addEventListener('click',()=>{
            ModalWindow.classLisst.add('is-active')
        })
    }
}
const Modal = ModalWindow =>{
    openModal(document.querySelector('.button'),ModalWindow)
}
Modal(document.querySelector('.modal'))