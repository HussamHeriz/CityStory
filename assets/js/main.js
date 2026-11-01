document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');
 if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
 document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
 document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
   document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
   const f=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(card=>card.style.display=(f==='all'||card.dataset.category===f)?'block':'none');
 }));
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
});
