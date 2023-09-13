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
const btnBottom = document.querySelector('.bottom');
const btnTop = document.querySelector('.top');
const smallPicsContainer = document.querySelector('.smallpics');


const images = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp'];
  
let counterImg = 0;
itemsWrapper.innerHTML = '';

for (let i = 0; i < images.length; i++) {
  const smallPic = document.createElement('div');
  smallPic.classList.add('smallpic');
  
  // Crea una imagen y establece su atributo src
  const img = document.createElement('img');
  img.src = images[i];
  
  // Agrega la imagen al div .smallpic
  smallPic.appendChild(img);
  
  smallPicsContainer.appendChild(smallPic);
}
//1.
for(let i = 0; i < images.length; i++){
  itemsWrapper.innerHTML += '<img src="' + images[i] +  '" class="item hide">';
}
//2.
const itemsCollection = document.getElementsByClassName('item');
//3. 
itemsCollection [counterImg].classList.remove('hide');
//4.
btnBottom.addEventListener('click',function(){
  //a 
  itemsCollection[counterImg].classList.add('hide');
  //b
  counterImg++;
    //6
    if (counterImg >= images.length) {
      counterImg = 0;}
  //c
  itemsCollection[counterImg].classList.remove('hide');
})
//5.
btnTop.addEventListener('click',function(){
  //a 
  itemsCollection[counterImg].classList.add('hide');
  //b
  counterImg--;
    //7
    if (counterImg < 0) {
      counterImg = images.length - 1;
  }
  //c
  itemsCollection[counterImg].classList.remove('hide');
});
