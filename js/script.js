/* 
1. with a cicle, print the pictures inside items-wrapper y
2. pick the elements with the class "item" and safe each in array y
3. take out the hide class on the first element y
4. when next ( arrow down ) y
    a. add the class hide to the current element y
    b. increase the counter y
    c. remove the class hide to the current new elemnet  y
5. when prev (4. upside down ) y
6. hide prev button in item 1 (in bonus conect to the last) y
7. hide next element at the last class (in bonus conect to the first) y 
**extra bonus**
8. add the thumbnails at the left of the image in css using active as previus homeworks
9.make each picture active when the picture is in use*/

/* elements */
const itemsWrapper = document.querySelector('.items-wrapper');
const smallPicsContainer = document.querySelector('.smallpics');
/* buttons */
const btnBottom = document.querySelector('.bottom');
const btnTop = document.querySelector('.top');
/* images */
const images = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp'];
/* reset */
let counterImg = 0;
let counterSmall= 0;
let smallPicsHTML = '';
itemsWrapper.innerHTML = '';

//1.
for(let i = 0; i < images.length; i++){
  const image = images[i]
  itemsWrapper.innerHTML += `<img src="${image}" class="item hide">`;
  /* 8 */
  smallPicsHTML += `<div class="smallpic inactive"><img src="${image}"/></div>`;
}
//2.
const itemsCollection = document.getElementsByClassName('item');
const smallpicCollection = document.getElementsByClassName('smallpic');
smallPicsContainer.innerHTML = smallPicsHTML;
//3. 
itemsCollection [counterImg].classList.remove('hide');
smallpicCollection[0].classList.add('active');
//4.
btnBottom.addEventListener('click',function(){
  //a 
  itemsCollection[counterImg].classList.add('hide');
  /* 9a */
  smallpicCollection[counterImg].classList.remove('active');
  //b
  counterImg++;
    //6
    if (counterImg === images.length) {counterImg = 0;}
  //c
  itemsCollection[counterImg].classList.remove('hide');
  /* 9b */
  smallpicCollection[counterImg].classList.add('active');
})
//5.
btnTop.addEventListener('click',function(){
  //a 
  itemsCollection[counterImg].classList.add('hide');
  /* 9a */
  smallpicCollection[counterImg].classList.remove('active');
  //b
  counterImg--;
    //7
    if (counterImg < 0) {counterImg = images.length - 1;}
  //c
  itemsCollection[counterImg].classList.remove('hide');
  /* 9b */
  smallpicCollection[counterImg].classList.add('active');
});


