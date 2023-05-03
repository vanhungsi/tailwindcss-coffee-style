// Author: vhs

const topMenu = document.getElementById('vhs-top-menu')
const toggleTopMenuIcon = document.getElementById('vhs-toggle-top-menu-icon')

document.addEventListener('click',(e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // Click to toggle top menu icon
    topMenu.classList.toggle('hidden')
  } else {
    // Click outside from toggle top menu icon
    
  }
})