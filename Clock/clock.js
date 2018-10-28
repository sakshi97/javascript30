function setTime()
{
  const now = new Date();
  console.log(now.getSeconds());
  const seconds= (now.getSeconds()/60)*360;
  const minutes = (now.getMinutes()/60)*360;
  const hours = (now.getHours()/12)*360;

  let hourhand= document.getElementsByClassName('hourhand');
  let minutehand= document.getElementsByClassName('minutehand');
  let secondhand= document.getElementsByClassName('secondhand');

console.log(seconds);
  secondhand.item(0).style.transform = `rotate(${seconds}deg)`;
  minutehand.item(0).style.transform = `rotate(${minutes}deg)`;
  hourhand.item(0).style.transform = `rotate(${hours}deg)`;
}

window.setInterval(setTime,1000);
