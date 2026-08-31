import './style.css'

const darkModeBtn = document.querySelector('.dark-mode')

darkModeBtn.addEventListener('click', () =>{
  const isDark = document.documentElement.classList.toggle('dark')
  darkModeBtn.setAttribute('aria-pressed', String(isDark))
  localStorage.theme = isDark ? 'dark': 'light'
 } )


