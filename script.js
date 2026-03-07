/* ── CURSOR ── */
const cur=document.getElementById('cur'),cur2=document.getElementById('cur2');
let mx=0,my=0,cx=0,cy=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur2.style.left=mx+'px';cur2.style.top=my+'px';});
(function loop(){cx+=(mx-cx)*.15;cy+=(my-cy)*.15;cur.style.left=cx+'px';cur.style.top=cy+'px';requestAnimationFrame(loop);})();
document.querySelectorAll('a,button,.mcard,.why-card,.tab,.tag,.qty-btn').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('hs'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('hs'));
});

/* ── NAVBAR SCROLL ── */
window.addEventListener('scroll',()=>document.getElementById('mainNav').classList.toggle('scrolled',scrollY>40));

/* ── MENU DATA (with img for cart thumb) ── */
const ITEMS=[
  {id:1,n:"Classic SmashBurger",p:45000,cat:"burgers",d:"Klassik smash kotlet, cheddar, taze sabzavotlar",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop",hot:true,s:5},
  {id:2,n:"Double Smash",p:65000,cat:"burgers",d:"Ikki qatlam kotlet, bacon, mozzarella, grill piyoz",img:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&auto=format&fit=crop",hot:true,s:5},
  {id:3,n:"BBQ Bacon Burger",p:55000,cat:"burgers",d:"Bacon, BBQ sous, grill piyoz, karamelli",img:"https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?w=500&auto=format&fit=crop",hot:false,s:4},
  {id:4,n:"Mushroom Swiss",p:50000,cat:"burgers",d:"Qo'ziqorin, shveytsariya pishloq, sarımsakli sous",img:"https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&auto=format&fit=crop",hot:false,s:4},
  {id:5,n:"Spicy Habanero",p:52000,cat:"burgers",d:"O'tkir habanero, jalapeno, avokado, chipotle",img:"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format&fit=crop",hot:true,s:5},
  {id:6,n:"Truffle Premium",p:75000,cat:"burgers",d:"Qora qo'ziqorin yog'i, wagyu kotlet, parmesan",img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop",hot:true,s:5},
  {id:7,n:"Crispy Chicken",p:42000,cat:"chicken",d:"Qovurilgan tovuq filesi, ranch sous, pomidor",img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop",hot:false,s:4},
  {id:8,n:"Spicy Chicken",p:44000,cat:"chicken",d:"O'tkir tovuq filesi, coleslaw, sriracha sous",img:"https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=500&auto=format&fit=crop",hot:true,s:5},
  {id:9,n:"Chicken Strips x5",p:38000,cat:"chicken",d:"5 ta qovurilgan tovuq bo'lagi, 2 xil sous",img:"https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop",hot:false,s:4},
  {id:10,n:"Chicken Wrap",p:35000,cat:"chicken",d:"Tortilla, tovuq, salat, pomidor, gurme sous",img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&auto=format&fit=crop",hot:false,s:4},
  {id:11,n:"SmashFries",p:18000,cat:"sides",d:"Maxsus ziravorlar bilan ishlangan kartoshka fri",img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop",hot:true,s:5},
  {id:12,n:"Loaded Fries",p:28000,cat:"sides",d:"Fri + eritilgan pishloq, bacon, sous",img:"https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&auto=format&fit=crop",hot:true,s:5},
  {id:13,n:"Onion Rings",p:20000,cat:"sides",d:"Qovurilgan piyoz halqalari, ranch sous",img:"https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&auto=format&fit=crop",hot:false,s:4},
  {id:14,n:"Mozzarella Sticks",p:22000,cat:"sides",d:"Eritilgan mozzarella, marinara sous",img:"https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=500&auto=format&fit=crop",hot:false,s:4},
  {id:15,n:"Hot Dog Smash",p:30000,cat:"sides",d:"Qo'l sausage, special non, xantal-ketchup",img:"https://images.unsplash.com/photo-1612392061787-2b12a3e0b4a3?w=500&auto=format&fit=crop",hot:false,s:4},
  {id:16,n:"Pepsi 0.5L",p:8000,cat:"drinks",d:"Muz sovuq Pepsi, limon bilan",img:"https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&auto=format&fit=crop",hot:false,s:4},
  {id:17,n:"Fresh Limonad",p:15000,cat:"drinks",d:"Yangi limon, zanjabil, nana",img:"https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500&auto=format&fit=crop",hot:false,s:5},
  {id:18,n:"Mango Smoothie",p:18000,cat:"drinks",d:"Yangi mango, sut, muzli kokteyl",img:"https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500&auto=format&fit=crop",hot:false,s:5},
  {id:19,n:"Oreo Milkshake",p:20000,cat:"drinks",d:"Qaim muzqaymoq, oreo, vanil kremi",img:"https://images.unsplash.com/photo-1572490122747-3e9172ec4e0a?w=500&auto=format&fit=crop",hot:false,s:4},
  {id:20,n:"Lemon Ice Tea",p:12000,cat:"drinks",d:"Sovuq choy, limon, muz kubiklari",img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop",hot:false,s:4},
];

function stars(n){return'<i class="fas fa-star"></i>'.repeat(n)+'<i class="far fa-star"></i>'.repeat(5-n);}

/* ── INTERSECTION OBSERVER ── */
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});},{threshold:.1});
document.querySelectorAll('.reveal,.rl,.rr').forEach(el=>io.observe(el));

/* ── RENDER MENU ── */
function renderMenu(cat='all'){
  const g=document.getElementById('menuGrid');
  g.innerHTML='';
  (cat==='all'?ITEMS:ITEMS.filter(m=>m.cat===cat)).forEach((m,i)=>{
    const d=document.createElement('div');
    d.className='mcard reveal';
    d.style.transitionDelay=(i%4)*.07+'s';
    d.innerHTML=`
      <div class="mcard-img">
        <img src="${m.img}" alt="${m.n}" loading="lazy">
        ${m.hot?'<div class="mcard-hot">🔥 Hot</div>':''}
        <div class="mcard-price">${m.p.toLocaleString()} UZS</div>
      </div>
      <div class="mcard-body">
        <div class="mcard-stars">${stars(m.s)}</div>
        <h3>${m.n}</h3>
        <p>${m.d}</p>
        <button class="add-btn" data-id="${m.id}">
          <i class="fas fa-plus"></i> Savatga Qo'sh
        </button>
      </div>`;
    g.appendChild(d);
    io.observe(d);
  });
  // bind add buttons
  g.querySelectorAll('.add-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const item=ITEMS.find(m=>m.id===+btn.dataset.id);
      addToCart(item);
      btn.innerHTML='<i class="fas fa-check"></i> Qo\'shildi!';
      btn.classList.add('done');
      setTimeout(()=>{btn.innerHTML='<i class="fas fa-plus"></i> Savatga Qo\'sh';btn.classList.remove('done');},1400);
    });
  });
}

document.querySelectorAll('.tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.cat);
  });
});

/* ── GALLERY ── */
const gImgs=["https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop","https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop","https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&auto=format&fit=crop","https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop","https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?w=400&auto=format&fit=crop","https://images.unsplash.com/photo-1562967914-608f82629710?w=400&auto=format&fit=crop","https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&auto=format&fit=crop","https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400&auto=format&fit=crop"];
const gt=document.getElementById('gTrack');
[...gImgs,...gImgs].forEach(src=>{const img=document.createElement('img');img.src=src;img.loading='lazy';gt.appendChild(img);});

/* ══════════════════════════════════════
   CART STATE — har bir qo'shish ALOHIDA uid
   cart = [ { uid, item, qty } ]
══════════════════════════════════════ */
let cart=[];
let uidCounter=0;

function addToCart(item){
  // Har doim yangi alohida entry (unique card)
  cart.push({uid:++uidCounter, item, qty:1});
  updateCart();
  bumpCount();
  showToast('🛒 '+item.n+' savatga qo\'shildi');
}

function changeQty(uid, delta){
  const entry=cart.find(e=>e.uid===uid);
  if(!entry) return;
  entry.qty+=delta;
  if(entry.qty<=0) cart=cart.filter(e=>e.uid!==uid);
  updateCart();
}

function removeFromCart(uid){
  cart=cart.filter(e=>e.uid!==uid);
  updateCart();
  showToast('🗑 Mahsulot o\'chirildi');
}

function clearCart(){
  cart=[];
  updateCart();
  showToast('🗑 Savat tozalandi');
}

function totalQty(){return cart.reduce((s,e)=>s+e.qty,0);}
function totalPrice(){return cart.reduce((s,e)=>s+e.item.p*e.qty,0);}

function bumpCount(){
  const el=document.getElementById('cartCount');
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
}

function updateCart(){
  /* nav badge */
  document.getElementById('cartCount').textContent=cart.length;
  document.getElementById('sbItemLabel').textContent=cart.length+' ta buyurtma';

  const list=document.getElementById('cartItems');

  if(!cart.length){
    list.innerHTML=`<div class="empty-cart"><i class="fas fa-bag-shopping"></i><h3>Bo'sh</h3><p>Menyudan taom tanlang</p></div>`;
    document.getElementById('sbSummary').style.display='none';
    return;
  }

  list.innerHTML='';
  cart.forEach(({uid,item,qty:q})=>{
    const subtotal=(item.p*q).toLocaleString();
    const div=document.createElement('div');
    div.className='ci';
    div.id='ci-'+uid;
    div.innerHTML=`
      <div class="ci-top">
        <img class="ci-thumb" src="${item.img}" alt="${item.n}">
        <div class="ci-info">
          <h4>${item.n}</h4>
          <div class="ci-unit">${item.p.toLocaleString()} UZS / dona</div>
        </div>
        <div class="ci-subtotal">${subtotal} UZS</div>
      </div>
      <div class="ci-bottom">
        <div class="qty-ctrl">
          <button class="qty-btn minus" onclick="changeQty(${uid},-1)" title="Kamaytirish">
            ${q===1?'<i class="fas fa-trash" style="font-size:11px;"></i>':'<i class="fas fa-minus"></i>'}
          </button>
          <div class="qty-num">${q}</div>
          <button class="qty-btn plus" onclick="changeQty(${uid},1)" title="Ko\'paytirish">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <button class="ci-del" onclick="removeFromCart(${uid})">
          <i class="fas fa-trash"></i> O'chirish
        </button>
      </div>`;
    list.appendChild(div);
  });

  /* summary */
  const total=totalPrice();
  document.getElementById('sbSummary').style.display='block';
  document.getElementById('sbQtyTotal').textContent=totalQty();
  document.getElementById('sbSubtotal').textContent=total.toLocaleString();
  document.getElementById('totalSum').textContent=total.toLocaleString();
}

/* ── SIDEBAR OPEN/CLOSE ── */
document.getElementById('openCart').addEventListener('click',openCart);
document.getElementById('closeCart').addEventListener('click',closeCart);
document.getElementById('overlay').addEventListener('click',closeCart);
document.getElementById('clearCart').addEventListener('click',()=>{clearCart();});
document.getElementById('backToMenu').addEventListener('click',()=>{
  closeCart();
  document.getElementById('menu').scrollIntoView({behavior:'smooth'});
});

function openCart(){
  document.getElementById('cartSidebar').classList.add('on');
  document.getElementById('overlay').classList.add('on');
}
function closeCart(){
  document.getElementById('cartSidebar').classList.remove('on');
  document.getElementById('overlay').classList.remove('on');
}

/* ── TELEGRAM ── */
document.getElementById('tgForm').addEventListener('submit',async e=>{
  e.preventDefault();
  if(!cart.length){showToast('❗ Avval savatga taom qo\'shing!');return;}

  const TOKEN="8710725514:AAFCslfp-BjDu177Fz-ATw4KtMrO-Ftm6xY";
  const CHAT="SIZNING_ID_RAQAMINGIZ";
  const name=document.getElementById('custName').value;
  const phone=document.getElementById('custPhone').value;
  const addr=document.getElementById('custAddress').value||"Ko'rsatilmagan";

  let msg=`🍔 YANGI BUYURTMA — SmashBurger!\n\n`;
  msg+=`👤 Ism: ${name}\n📞 Tel: ${phone}\n📍 Manzil: ${addr}\n\n`;
  msg+=`📋 Buyurtma ro'yxati:\n`;
  cart.forEach(({item,qty:q},i)=>{
    msg+=`  ${i+1}. ${item.n} × ${q} = ${(item.p*q).toLocaleString()} UZS\n`;
  });
  msg+=`\n💰 JAMI: ${totalPrice().toLocaleString()} UZS`;
  msg+=`\n📦 Jami dona: ${totalQty()} ta`;
  msg+=`\n⏰ ${new Date().toLocaleString('uz')}`;

  const btn=document.getElementById('orderBtn');
  btn.disabled=true;
  btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';

  try{
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({chat_id:CHAT,text:msg})
    });
    showToast('✅ Buyurtmangiz qabul qilindi!');
    cart=[];
    updateCart();
    e.target.reset();
    closeCart();
  }catch{
    showToast('❌ Xatolik! Qayta urinib ko\'ring.');
  }finally{
    btn.disabled=false;
    btn.innerHTML='<i class="fab fa-telegram"></i> BUYURTMA BERISH';
  }
});

/* ── TOAST ── */
let tt;
function showToast(msg){
  const t=document.getElementById('toast');
  t.innerHTML=msg;
  t.classList.add('on');
  clearTimeout(tt);
  tt=setTimeout(()=>t.classList.remove('on'),3200);
}

/* ── INIT ── */
renderMenu();
