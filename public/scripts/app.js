const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const toggleSubmenuBtn = document.querySelector("#submenu-toggle-btn");
const submenu = document.querySelector(".submenu");
const submenIconDown = document.querySelector(".submenu-btn-down");
const submenuIconUp = document.querySelector(".submenu-btn-up");
const navOpenBtn = document.querySelector("#nav-open-btn");
const cartOpenBtn = document.querySelector("#cart-open-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileCart = document.querySelector(".mobile-cart");
const closeNavBtn = document.querySelector(".close-nav-btn");
const closeCartBtn = document.querySelector(".close-cart-btn");
const overlay = document.querySelector(".overlay");

toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})


// this section is for when user come back and continues his usage with choosen theme before
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

toggleSubmenuBtn.addEventListener('click', (event) => {
    event.currentTarget.parentElement.classList.toggle('text-orange-300')
    submenu.classList.toggle('submenu-open-btn')

    if (submenIconDown.classList.length === 3) {
        submenIconDown.classList.add('hidden')
        submenuIconUp.classList.remove('hidden')
    } else {
        submenIconDown.classList.remove('hidden')
        submenuIconUp.classList.add('hidden')
    }

})

navOpenBtn.addEventListener('click', () => {
    mobileNav.classList.add('right-0')
    mobileNav.classList.remove('-right-64')
    overlay.classList.add('overlay--visible')
})

cartOpenBtn.addEventListener('click', () => {
    mobileCart.classList.add('left-0')
    mobileCart.classList.remove('-left-64')
    overlay.classList.add('overlay--visible')
})

const closeMobileNav = () => {
    mobileNav.classList.remove('right-0')
    mobileNav.classList.add('-right-64')
    overlay.classList.remove('overlay--visible')
}
const closeMobileCart = () => {
    mobileCart.classList.remove('left-0')
    mobileCart.classList.add('-left-64')
    overlay.classList.remove('overlay--visible')
}

closeNavBtn.addEventListener('click', closeMobileNav)

closeCartBtn.addEventListener('click', closeMobileCart)

overlay.addEventListener('click', () => {
    closeMobileNav()
    closeMobileCart()
})