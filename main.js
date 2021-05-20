//Ex1

let btn1 = document.querySelector('input');
let ul1 = document.querySelectorAll('ul')[0];
let lis = Array.from(ul1.children)
//1.1
btn1.addEventListener('click',()=>{
ul1.removeChild(ul1.firstElementChild) //ou lis[0]
});
//Qd on met remove firstChild et qu'on clique, il supprime premierement le noeud, puis il faut encore cliquer pour qu'il supprime l'element

//1-ul1.removeChild 
//2- (ul1.firstElementChild) veut dire 1-Dans les enfants de ul1, supprime le 2-premier enfant de l'ul1

//1.2
let btn2 = document.getElementsByTagName('input')[1];
btn2.addEventListener('click',()=>{
    ul1.removeChild(ul1.lastElementChild) //ou lis[5]
    }); 

//1.3

let btn3 = document.getElementsByTagName('input')[2]
btn3.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*lis.length);
    ul1.removeChild(lis[random])
})

//1.4
let ul2 = document.querySelectorAll('ul')[1];
let leLi = document.createElement('li');
leLi.innerText ='caca'
let lis2 = Array.from (ul2.children)
//ul2.appendChild(leLi) Pas besoin de le placer au préalablement qqpart pour le remplacement. Il vient de nul part et remplace la valeur qu'on veut
let btn4 =document.getElementsByTagName('input')[3]
btn4.addEventListener('click',()=>{
ul2.replaceChild(leLi,lis2[1])
})
//Remplacement (1er param = le nouveau, 2e = l'ancien). Le nouveau remplace l'ancien

//1.5 
let input = document.getElementsByTagName('input')[4];
let btn5 = document.getElementsByTagName('input')[5];

btn5.addEventListener('click',()=>{
    let val =input.value;
    let leLi2 =document.createElement('li');
    leLi2.innerText = val;
    ul2.replaceChild(leLi2,lis2[2]) 
})
//lis2[2] represente le 3e li de l'exo 1.4

//Certaines valeurs sont déclarés dans la fonction du addEventListener car:

// le val doit prendre la valeur du input quand on clique et non avant qu'on clique car La valeur avant qu'on clique sera Toujours vide.

//leLi2 se crée au clique et non avant. Ensuite tout ce qui est forcement lié à leLi2 doit aussi se trouver dans la fonction !
