function showSidebar () {
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = (sideBar.style.display === 'none' || sideBar.style.display === '' ) ? 'flex' : 'none';
}

function hideSidebar () {
    const closeBtn = document.querySelector('.sidebar');
    closeBtn.style.display = 'none';
}