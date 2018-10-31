const panels = document.querySelectorAll('.panel');
console.log(panels);
function toggleFocus()
{
  this.classList.toggle('focus');
}

function toggleOpen(e)
{
  console.log(e.propertyName);
  if(e.propertyName.includes('flex'))
  this.classList.toggle('open');
}
panels.forEach(panel => panel.addEventListener('click',toggleFocus));
panels.forEach(panel => panel.addEventListener('transitionend',toggleOpen));
