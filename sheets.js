const sheetID = '1PI3SkLrCR1MisAQzxutGbWIiIu8GgVhMPjXUJd11QRI';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'tamu';
const query = encodeURIComponent('Select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];

document.addEventListener('DOMContentLoaded', init);

const output = document.querySelector('.output');
 
function init() {
    console.log('ready');
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //console.log(rep);
            const jsData = JSON.parse(rep.substr(47).slice(0, -2));
            // console.log(jsData);
            const colz = [];
                            
            const propName = jsData.table.rows[0].c;
            propName.forEach(el => {
                namaKolom = el.v.toLowerCase();
                // console.log(namaKolom) 
                colz.push(namaKolom)
                
            });

            const isiTabel = jsData.table.rows;
            const isiTabelAll = isiTabel.slice(1);
            isiTabelAll.forEach((main) =>{
           
                const row = {};
               
                colz.forEach((ele, ind)=>{
                  
                    row[ele] = (main.c[ind].v != null) ? main.c[ind].v : '';
                })
                data.push(row);
            })
            maker(data);
        });
    
}

function maker(json){

    json.forEach((el)=>{
        const div = document.createElement('div');
        div.classList.add('card');
        // div.classList.add('container');
        div.classList.add('mt-3');
        div.classList.add('mx-auto');
        output.append(div);
        const keys = Object.keys(el);
        console.log(keys)
        keys.forEach(
            (key) => {
                if (key == 'nama'){
                    const ele = document.createElement('p');
                    ele.classList.add('card-header');
                    ele.classList.add('tebal');
                    ele.textContent = el[key];
                    div.append(ele);
                }else{
                    const komen = document.createElement('div');
                    komen.classList.add('card-body')
                    const komenAnak = document.createElement('p');
                    komenAnak.classList.add('miring');
                    komenAnak.textContent = el[key];
                    komen.append(komenAnak);
                    div.append(komen);
                }

            }
        )
    })
}
// console.log(data);

// data.forEach(
//     (ele) => {
//         const eleSatu = document.createElement('div');
//         eleSatu.classList.add('card');
//         eleSatu.classList.add('container');
//         eleSatu.classList.add('mt-3');
//         eleSatu.classList.add('mx-auto');

//         const nama = document.createElement('p');
//         nama.classList.add('card-header');
//         nama.textContent = ele.nama;

//         const komentarParent = document.createElement('div');
//         komentarParent.add('card-body');

//         const komentar = document.createElement('p');
//         komentar.classList.add('miring');
//         komentar.textContent = ele.komentar;

//         eleSatu.appendChild(nama);
//         eleSatu.appendChild(komentarParent);
//         komentarParent.appendChild(komentar);

//         output.appendChild(eleSatu)
        
//     }
// )

// function maker(json){
//     const div= document.createElement('div');
//     output.append(div);
//     json.forEach((ele)=>{
//         // console.log(ele);
//         const keys = Object.keys(ele);
//         // console.log(keys)
//         keys.forEach((key)=>{
//             const eleSatu = document.createElement('div');
//             eleSatu.classList.add('card');
//             eleSatu.classList.add('container');
//             eleSatu.classList.add('mt-3');
//             eleSatu.classList.add('mx-auto');

//             eleSatu.textContent = ele[key];

//         })
//         console.log(keys)
//     })
// }
 
// function maker(json) {
//     const div = document.createElement('div');
//     div.style.display = 'grid';
//     div.style.gridTemplateColumns = '100px 100px 100px 100px';
//     output.append(div);
//     let first = true;
//     json.forEach((el) => {
//         console.log(el);
//         const keys = Object.keys(el);
//         if (first) {
//             first = false;
//             keys.forEach((heading) => {
//                 const ele = document.createElement('div');
//                 ele.textContent = heading.toUpperCase();
//                 ele.style.background = 'black';
//                 ele.style.color = 'white';
//                 div.append(ele);
//             })
 
//         }
//         keys.forEach((key) => {
//             const ele = document.createElement('div');
//             ele.style.border = '1px solid #ddd';
//             ele.textContent = el[key];
//             div.append(ele);
//         })
//         console.log(keys);
//     })
 
// }
 