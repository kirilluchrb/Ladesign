function toogleMenu() {
    const button = getElementbyId('header-burger')
    const menu = getElementbyId('header-list')

    button.classList.toogle('active');
    menu.classList.toogle('active');
}