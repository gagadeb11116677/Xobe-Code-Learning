// ===== DATA MATERI LENGKAP 30 TOPIK =====
const learningData = {
    /* ---------- HTML ---------- */
    'html-basics': {
        title: '1. HTML Dasar',
        content: `<p>HTML (HyperText Markup Language) adalah kerangka dasar web. Dokumen HTML minimal memiliki struktur:</p>
                 <ul>
                   <li><code>&lt;!DOCTYPE html&gt;</code> – deklarasi HTML5</li>
                   <li><code>&lt;html&gt;</code> – elemen root</li>
                   <li><code>&lt;head&gt;</code> – meta, judul, link eksternal</li>
                   <li><code>&lt;body&gt;</code> – semua konten yang terlihat</li>
                 </ul>`,
        code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Judul Halaman</title>
</head>
<body>
  <h1>Halo Dunia!</h1>
  <p>Selamat datang di HTML.</p>
</body>
</html>`
    },
    'html-headings': {
        title: '2. Headings & Paragraf',
        content: `<p>Heading (&lt;h1&gt; sampai &lt;h6&gt;) menentukan hierarki judul. Semakin kecil angkanya semakin besar font-nya. Paragraf menggunakan &lt;p&gt;.</p>`,
        code: `<h1>Ini Heading 1</h1>
<h2>Ini Heading 2</h2>
<p>Ini paragraf biasa dengan <strong>tebal</strong> dan <em>miring</em>.</p>`
    },
    'html-links': {
        title: '3. Link & Anchor',
        content: `<p>Tag &lt;a&gt; (anchor) membuat hyperlink. Atribut <code>href</code> menentukan tujuan, <code>target="_blank"</code> membuka di tab baru.</p>`,
        code: `<a href="https://xobe.id" target="_blank">Kunjungi Xobe</a>
<a href="#footer">Loncat ke Footer</a>`
    },
    'html-images': {
        title: '4. Gambar & Figure',
        content: `<p>Tag &lt;img&gt; menampilkan gambar dengan atribut <code>src</code> (URL), <code>alt</code> (teks alternatif), dan <code>width/height</code>.</p>`,
        code: `<img src="cat.jpg" alt="Kucing lucu" width="300">
<figure>
  <img src="sunset.jpg" alt="Matahari terbenam">
  <figcaption>Gambar matahari terbenam di pantai</figcaption>
</figure>`
    },
    'html-lists': {
        title: '5. List (ul/ol/dl)',
        content: `<p>Tiga jenis daftar: unordered (&lt;ul&gt;), ordered (&lt;ol&gt;), dan description list (&lt;dl&gt;).</p>`,
        code: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ol>
  <li>Pertama</li>
  <li>Kedua</li>
</ol>
<dl>
  <dt>HTML</dt><dd>HyperText Markup Language</dd>
</dl>`
    },
    'html-tables': {
        title: '6. Tabel',
        content: `<p>Tabel dibuat dengan &lt;table&gt;, baris &lt;tr&gt;, heading &lt;th&gt;, dan data &lt;td&gt;. Gunakan &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt; untuk struktur.</p>`,
        code: `<table border="1">
  <thead>
    <tr><th>Nama</th><th>Usia</th></tr>
  </thead>
  <tbody>
    <tr><td>Budi</td><td>25</td></tr>
    <tr><td>Ani</td><td>23</td></tr>
  </tbody>
</table>`
    },
    'html-forms': {
        title: '7. Form & Input',
        content: `<p>Form (&lt;form&gt;) mengumpulkan data user. Input punya banyak tipe: text, email, number, date, radio, checkbox, dll.</p>`,
        code: `<form>
  <label>Nama: <input type="text" name="nama" required></label><br>
  <label>Email: <input type="email" name="email"></label><br>
  <label>Password: <input type="password" name="pwd"></label><br>
  <button type="submit">Kirim</button>
</form>`
    },
    'html-media': {
        title: '8. Audio & Video',
        content: `<p>Tag &lt;audio&gt; dan &lt;video&gt; menanamkan media. Gunakan atribut <code>controls</code> agar muncul tombol play.</p>`,
        code: `<audio controls>
  <source src="lagu.mp3" type="audio/mpeg">
  Browser tidak mendukung audio.
</audio>
<video controls width="400">
  <source src="trailer.mp4" type="video/mp4">
</video>`
    },
    'html-semantic': {
        title: '9. Semantic Tags',
        content: `<p>Tag semantik menjelaskan makna konten: <code>&lt;header&gt;&lt;nav&gt;&lt;main&gt;&lt;article&gt;&lt;section&gt;&lt;aside&gt;&lt;footer&gt;</code>. Lebih SEO-friendly.</p>`,
        code: `<header><h1>Judul Situs</h1></header>
<nav><a href="/">Home</a></nav>
<main>
 <section><h2>Berita</h2><article>...</article></section>
</main>
<footer>&copy; 2024</footer>`
    },
    'html-accessibility': {
        title: '10. Aksesibilitas',
        content: `<p>Gunakan atribut <code>alt</code>, label, kontras warna, dan ARIA roles agar web ramah disabilitas.</p>`,
        code: `<img src="logo.png" alt="Logo Perusahaan">
<label for="search">Cari:</label>
<input id="search" type="search" aria-label="Kotak pencarian">
<button aria-pressed="false">Suka</button>`
    },

    /* ---------- CSS ---------- */
    'css-basics': {
        title: '1. CSS Dasar',
        content: `<p>CSS (Cascading Style Sheets) memberi gaya pada HTML melalui selector, property, dan value. Penulisan bisa inline, internal, atau eksternal.</p>`,
        code: `/* Cara eksternal */
body{
  font-family:Arial, sans-serif;
  background:#f5f5f5;
  color:#333;
}
h1{color:var(--primary-blue);text-align:center;}`
    },
    'css-selectors': {
        title: '2. Selector Lanjut',
        content: `<p>Selector tingkat lanjut: class (.), id (#), kombinator (>, +, ~), pseudo-class (:hover, :nth-child), attribute selector ([type="text"].</p>`,
        code: `/* Hover effect */
.btn:hover{background:#00d4ff;color:#fff;}
/* Child selector */
ul > li{list-style:none;}
/* Attribute */
input[type="checkbox"]{accent-color:#8b5cf6;}`
    },
    'css-boxmodel': {
        title: '3. Box Model',
        content: `<p>Setiap elemen adalah kotak. Urutan: content → padding → border → margin. Atur dengan <code>padding</code>, <code>border</code>, <code>margin</code>.</p>`,
        code: `.box{
  width:200px;
  padding:20px;
  border:2px solid var(--primary-blue);
  margin:10px auto;
}`
    },
    'css-flexbox': {
        title: '4. Flexbox',
        content: `<p>Flexbox membuat layout satu dimensi (baris atau kolom) mudah. Container: <code>display:flex</code>. Item: <code>justify-content align-items flex</code>.</p>`,
        code: `.flex-container{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:1rem;
}
.flex-item{flex:1 1 100px;padding:1rem;background:#8b5cf6;color:#fff;}`
    },
    'css-grid': {
        title: '5. CSS Grid',
        content: `<p>Grid untuk layout dua dimensi. Definisikan kolom/ baris dengan <code>grid-template-columns</code> dan <code>grid-template-rows</code>.</p>`,
        code: `.grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:1rem;
}
.grid div{background:#00d4ff;color:#fff;padding:1rem;text-align:center;}`
    },
    'css-position': {
        title: '6. Position & Z-index',
        content: `<p>Position: static | relative | absolute | fixed | sticky. Atur tumpukan dengan <code>z-index</code>.</p>`,
        code: `.tooltip{
  position:absolute;
  top:-40px;
  left:50%;
  transform:translateX(-50%);
  z-index:10;
  background:#000;color:#fff;padding:.5rem 1rem;border-radius:4px;
}`
    },
    'css-animations': {
        title: '7. Animasi & Transisi',
        content: `<p>Buat gerakan dengan <code>@keyframes</code> atau transisi sederhana <code>transition:all .3s</code>.</p>`,
        code: `@keyframes fadeIn{
  from{opacity:0;transform:translateY(-20px);}
  to{opacity:1;transform:translateY(0);}
}
.fade{animation:fadeIn 1s ease forwards;}`
    },
    'css-transform': {
        title: '8. Transform 2D/3D',
        content: `<p>Transform: translate, rotate, scale, skew, dan 3D (rotateX, rotateY).</p>`,
        code: `.card:hover{transform:rotateY(15deg) scale(1.05);}
.box3d{transform:perspective(400px) rotateX(30deg);}`
    },
    'css-responsive': {
        title: '9. Responsive Design',
        content: `<p>Gunakan media queries agar tampil cantik di semua layar. Mobile-first approach.</p>`,
        code: `/* Mobile first */
.container{padding:1rem;}
@media (min-width:600px){.container{padding:2rem;}}
@media (min-width:900px){.container{max-width:1200px;margin:auto;}}`
    },
    'css-variables': {
        title: '10. CSS Variables',
        content: `<p>Custom properties (--variabel) memudahkan tema dinamis.</p>`,
        code: `:root{--main-color:#00d4ff;}
.btn{background:var(--main-color);}
.dark{--main-color:#8b5cf6;}`
    },

    /* ---------- JavaScript ---------- */
    'js-basics': {
        title: '1. Sintaks Dasar',
        content: `<p>JavaScript menambah interaktivitas. Variabel bisa <code>var let const</code>, statement diakhiri titik-koma.</p>`,
        code: `let nama='Xobe';
const tahun=2024;
console.log('Selamat datang, ' + nama + ' di ' + tahun);`
    },
    'js-datatypes': {
        title: '2. Tipe Data',
        content: `<p>Tipe primitif: string, number, boolean, null, undefined, symbol, bigint. Objek: array, object, function.</p>`,
        code: `const angka=42;
const text='JS';
const aktif=true;
const orang={nama:'Budi',umur:25};
const angkaArr=[1,2,3];`
    },
    'js-functions': {
        title: '3. Function & Arrow',
        content: `<p>Buat fungsi dengan <code>function</code>, expression, atau arrow (<code>()=>{}</code>).</p>`,
        code: `// Declaration
function tambah(a,b){return a+b;}
// Arrow
const kali=(a,b)=>a*b;
console.log(tambah(2,3),kali(2,3));`
    },
    'js-dom': {
        title: '4. DOM Manipulation',
        content: `<p>Akses elemen: <code>getElementById querySelector</code>. Ubah konten & style, tambah/hapus node.</p>`,
        code: `const judul=document.querySelector('#judul');
judul.textContent='Hai, DOM!';
judul.style.color='#00d4ff';
const btn=document.createElement('button');
btn.textContent='Klik';
document.body.appendChild(btn);`
    },
    'js-events': {
        title: '5. Event Handling',
        content: `<p>Tangkap interaksi user: click, keyup, submit, dsb. Gunakan <code>addEventListener</code>.</p>`,
        code: `document.getElementById('btn').addEventListener('click',()=>{
  alert('Button diklik!');
});
window.addEventListener('scroll',()=>console.log(window.scrollY));`
    },
    'js-array': {
        title: '6. Array Methods',
        content: `<p>Array punya map, filter, reduce, find, forEach, sort. Praktis untuk data.</p>`,
        code: `const nums=[3,4,1,6];
const doubled=nums.map(n=>n*2);
const total=nums.reduce((a,b)=>a+b);
console.log(doubled,total); // [6,8,2,12] 14`
    },
    'js-object': {
        title: '7. Object & JSON',
        content: `<p>Object literal, destructuring, JSON stringify/parse.</p>`,
        code: `const user={name:'Ani',age:20};
const {name}=user;
console.log(name); // Ani
const str=JSON.stringify(user);
console.log(JSON.parse(str));`
    },
    'js-async': {
        title: '8. Async/Await',
        content: `<p>Async/await membuat kode asynchronous terlihat synchronous. Lebih mudah dibanding callback.</p>`,
        code: `async function ambilData(){
  const res=await fetch('https://api.github.com/users/xobe');
  const data=await res.json();
  console.log(data.login);
}
ambilData();`
    },
    'js-fetch': {
        title: '9. Fetch API',
        content: `<p>Fetch modern untuk HTTP request. Mendukung promise dan async/await.</p>`,
        code: `fetch('https://jsonplaceholder.typicode.com/posts')
  .then(r=>r.json())
  .then(data=>console.log(data[0].title));`
    },
    'js-storage': {
        title: '10. Local Storage',
        content: `<p>Simpan data di browser tanpa batas waktu. <code>setItem getItem removeItem</code>.</p>`,
        code: `localStorage.setItem('nama','Budi');
const nm=localStorage.getItem('nama');
console.log(nm); // Budi
localStorage.removeItem('nama');`
    }
};

/* ===== NAVIGASI ===== */
function showSection(id){
    document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    localStorage.setItem('currentSection',id);
}
function toggleTheme(){
    const b=document.body,i=document.getElementById('theme-icon');
    b.classList.toggle('light-mode');
    b.classList.toggle('dark-mode');
    i.textContent=b.classList.contains('light-mode')?'☀️':'🌙';
    localStorage.setItem('theme',b.classList.contains('light-mode')?'light':'dark');
}
function showLearning(topic){
    const data=learningData[topic];
    if(!data) return;
    document.getElementById('learning-title').textContent=data.title;
    document.getElementById('learning-content').innerHTML=data.content;
    document.getElementById('code-example').textContent=data.code;
    showSection('learning');
}
function switchTab(tab){
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.editor').forEach(e=>e.style.display='none');
    event.target.classList.add('active');
    document.getElementById(tab+'-editor').style.display='block';
}
function runCode(){
    const h=document.getElementById('html-editor').value,
          c=document.getElementById('css-editor').value,
          j=document.getElementById('js-editor').value,
          f=document.getElementById('output-frame'),
          d=f.contentDocument||f.contentWindow.document;
    d.open();
    d.write(`<html><head><style>${c}</style></head><body>${h}<script>${j}<\/script></body></html>`);
    d.close();
    saveCode();
}
function loadToPlayground(){
    const ex=document.getElementById('code-example').textContent;
    document.getElementById('html-editor').value=ex;
    document.getElementById('css-editor').value='';
    document.getElementById('js-editor').value='';
    showSection('playground');
    runCode();
}
function resetCode(){
    ['html','css','js'].forEach(t=>document.getElementById(t+'-editor').value='');
    runCode();
    ['html','css','js'].forEach(t=>localStorage.removeItem('playground-'+t));
}
function saveCode(){
    ['html','css','js'].forEach(t=>localStorage.setItem('playground-'+t,document.getElementById(t+'-editor').value));
}
window.addEventListener('load',()=>{
    // tema
    const t=localStorage.getItem('theme')||'dark';
    if(t==='light'){toggleTheme();}
    // section
    showSection(localStorage.getItem('currentSection')||'home');
    // kode
    ['html','css','js'].forEach(k=>{
        document.getElementById(k+'-editor').value=localStorage.getItem('playground-'+k)||'';
    });
    runCode();
});
document.querySelectorAll('.editor').forEach(e=>e.addEventListener('input',saveCode));
