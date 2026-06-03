
const body=document.body;
function increaseFont(){body.classList.add('font-large');localStorage.setItem('fontLarge','1')}
function decreaseFont(){body.classList.remove('font-large');localStorage.removeItem('fontLarge')}
function toggleSeniorMode(){body.classList.toggle('senior-mode');localStorage.setItem('seniorMode',body.classList.contains('senior-mode')?'1':'0')}
function toggleContrast(){body.classList.toggle('contrast');localStorage.setItem('contrast',body.classList.contains('contrast')?'1':'0')}
function toggleMenu(){document.querySelector('.menu')?.classList.toggle('open')}
if(localStorage.getItem('fontLarge')==='1') body.classList.add('font-large');
if(localStorage.getItem('seniorMode')==='1') body.classList.add('senior-mode');
if(localStorage.getItem('contrast')==='1') body.classList.add('contrast');

// Animace nesmí schovat obsah, když se v prohlížeči něco pokazí.
// Proto se třída animations-ready přidá až po načtení skriptu.
document.documentElement.classList.add('animations-ready');
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})
  },{threshold:.08,rootMargin:'0px 0px -40px 0px'});
  revealItems.forEach(el=>observer.observe(el));
  setTimeout(()=>revealItems.forEach(el=>{if(el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible')}),250);
}else{
  revealItems.forEach(el=>el.classList.add('visible'));
}
function acceptCookies(){localStorage.setItem('cookiesOK','1');document.getElementById('cookieBanner')?.classList.remove('show')}
function declineCookies(){localStorage.setItem('cookiesOK','0');document.getElementById('cookieBanner')?.classList.remove('show')}
window.addEventListener('load',()=>{if(!localStorage.getItem('cookiesOK')) setTimeout(()=>document.getElementById('cookieBanner')?.classList.add('show'),700)})
