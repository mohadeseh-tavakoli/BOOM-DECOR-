
(function(){
const P=[
{id:1,n:'پارکت لمینت طرح بلوط طبیعی',c:'پارکت و لمینت',p:1850000,img:'images/product-laminate-oak.jpg'},
{id:2,n:'پارکت لمینت رنگ گردویی',c:'پارکت و لمینت',p:2120000,img:'images/product-laminate-walnut.jpg'},
{id:3,n:'قرنیز پلی‌استایرن سفید',c:'قرنیز',p:265000,img:'images/product-baseboard-white.jpg'},
{id:4,n:'قرنیز طرح چوب روشن',c:'قرنیز',p:318000,img:'images/product-baseboard-white.jpg'},
{id:5,n:'ابزار گلویی پلی‌استایرن',c:'ابزار پلی‌استایرن',p:195000,img:'images/product-polystyrene.jpg'},
{id:6,n:'ابزار قاب‌بندی دکوراتیو',c:'ابزار پلی‌استایرن',p:245000,img:'images/product-polystyrene.jpg'},
{id:7,n:'پارکت لمینت رنگ طوسی گرم',c:'پارکت و لمینت',p:1980000,img:'images/product-laminate-oak.jpg'},
{id:8,n:'نبشی و پروفیل دکوراتیو',c:'ابزار پلی‌استایرن',p:175000,img:'images/product-polystyrene.jpg'}];
const fa=n=>new Intl.NumberFormat('fa-IR').format(n);
let cart=JSON.parse(localStorage.getItem('boomCart')||'[]');
function save(){localStorage.setItem('boomCart',JSON.stringify(cart));}
function count(){document.querySelectorAll('#count').forEach(e=>e.textContent=fa(cart.reduce((s,p)=>s+p.qty,0)));}
function add(id,qty){const p=P.find(x=>x.id===id);if(!p)return;let old=cart.find(x=>x.id===id);old?old.qty+=qty:cart.push({...p,qty});save();count();alert('محصول به سبد خرید اضافه شد.');}
function grid(){const g=document.querySelector('#productsGrid');if(!g)return;const q=document.querySelector('#query')?.value.trim()||'';const cat=new URLSearchParams(location.search).get('cat')||'همه';const sort=document.querySelector('#sort')?.value||'default';const title=document.querySelector('#categoryTitle');if(title&&cat!=='همه')title.textContent=cat;let list=P.filter(p=>(cat==='همه'||p.c===cat)&&p.n.includes(q));if(sort==='asc')list.sort((a,b)=>a.p-b.p);if(sort==='desc')list.sort((a,b)=>b.p-a.p);g.innerHTML=list.map(p=>`<article class="product"><a class="product-img" href="product.html?id=${p.id}" style="display:block;background-image:url('${p.img}')"></a><div class="p-info"><small>${p.c}</small><h3><a href="product.html?id=${p.id}">${p.n}</a></h3><div class="p-bottom"><span class="price">${fa(p.p)} تومان<small>قیمت نمونه</small></span><button class="add" data-add="${p.id}">+</button></div></div></article>`).join('')||'<p>محصولی یافت نشد.</p>';g.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>add(Number(b.dataset.add),1));}
function cartPage(){const box=document.querySelector('#cartPageItems');if(!box)return;box.innerHTML=cart.length?cart.map(p=>`<div class="cart-line"><img src="${p.img}" alt=""><span>${p.n}<br>${fa(p.p)} تومان</span><b>${fa(p.qty)} عدد</b><button data-remove="${p.id}">حذف</button></div>`).join(''):'سبد خرید شما خالی است.';let total=cart.reduce((s,p)=>s+p.p*p.qty,0);['cartPageTotal','checkoutTotal'].forEach(id=>{let e=document.getElementById(id);if(e)e.textContent=fa(total)+' تومان';});box.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{cart=cart.filter(p=>p.id!==Number(b.dataset.remove));save();cartPage();count();});}
function detail(){let el=document.querySelector('#productDetail');if(!el)return;let p=P.find(x=>x.id===Number(new URLSearchParams(location.search).get('id')||1))||P[0];document.querySelector('#detailImage').style.backgroundImage=`url('${p.img}')`;document.querySelector('#detailName').textContent=p.n;document.querySelector('#detailPrice').textContent=fa(p.p)+' تومان';document.querySelector('#detailCat').textContent=p.c;document.querySelector('#detailAdd').onclick=()=>add(p.id,Math.max(1,Number(document.querySelector('#qty').value)||1));}
document.querySelectorAll('#filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#filters button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');const u=new URL(location.href);u.searchParams.set('cat',b.dataset.filter);history.replaceState({},'',u);grid();});
document.querySelector('#query')?.addEventListener('input',grid);document.querySelector('#sort')?.addEventListener('change',grid);
document.querySelector('#checkoutForm')?.addEventListener('submit',e=>{e.preventDefault();alert('این سفارش نمایشی است؛ برای فروش واقعی باید ووکامرس و درگاه پرداخت متصل شوند.');});
document.querySelector('#accountForm')?.addEventListener('submit',e=>{e.preventDefault();alert('ورود واقعی با حساب کاربری ووکامرس فعال می‌شود.');});
document.querySelector('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();alert('فرم نمایشی است و برای ارسال واقعی باید به سرویس فرم متصل شود.');});
grid();cartPage();detail();count();
const drawer=document.querySelector('#drawer'),shade=document.querySelector('#shade');
document.querySelector('#cartOpen')?.addEventListener('click',()=>{drawer?.classList.add('open');shade?.classList.add('show');});
document.querySelector('#closeCart')?.addEventListener('click',()=>{drawer?.classList.remove('open');shade?.classList.remove('show');});
shade?.addEventListener('click',()=>{drawer?.classList.remove('open');shade?.classList.remove('show');});
document.querySelector('#searchJump')?.addEventListener('click',()=>{if(document.querySelector('#query'))document.querySelector('#query').focus();else location.href='shop.html';});
document.querySelector('#hamb')?.addEventListener('click',()=>document.querySelector('#nav')?.classList.toggle('show'));

})();
