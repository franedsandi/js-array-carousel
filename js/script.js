/* 
1. with a cicle, print the pictures inside items-wrapper
2. pick the elements with the class "item" and safe each in array
3. take out the hide class on the first element
4. when next ( arrow down )
    a. add the class hide to the current element
    b. increase the counter
    c. remove the class hide to the current new elemnet 
5. when prev (4. upside down )
6. hide prev button in item 1 (in bonus conect to the last)
7. hide next element at the last class (in bonus conect to the first) 
**extra bonus**
8. add the thumbnails at the left of the image in css using active as previus homeworks
9.make each picture active when the picture is in use*/

/* elements */
const itemsWrapper = document.querySelector('.items-wrapper');
const btnBottom = document.querySelector('.bottom');
const btnTop = document.querySelector('.top');

const images = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp'];
  
let counterImg = 0;
itemsWrapper.innerHTML = '';

//1.
for(let i = 0; i < images.length; i++){
  const image = images[i];
  itemsWrapper.innerHTML += '<img src="' + images[i] +  '" class="item hide">';
}
//2.
const itemsCollection = document.getElementsByClassName('item');
//3. 
itemsCollection [counterImg].classList.remove('hide');