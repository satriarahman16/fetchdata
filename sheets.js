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
            console.log(jsData);
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
                // console.log(main);
                const row = {};
                // console.log(row)
                colz.forEach((ele, ind)=>{
                    // console.log(ele);
                    row[ele] = (main.c[ind] != null)? main.c[ind].v : '';
                })
                data.push(row);
            })
            console.log(data)
                
            });




            // jsData.table.rows.forEach((main)=>{
            //     console.log(main);
            //     const row ={};
            //     colz.forEach((ele, ind)=>{
            //         console.log(ele);
            //         row[ele] = main.c[ind].v;
            //     })
            //     data.push(row);
            // })
            // console.log(data)

            
                
    
}
 
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
 