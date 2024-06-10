let btnFire = document.getElementById('btn-neon');

btnFire.addEventListener('click', function() {
   let ilya = document.getElementById('ilya');
   let maks = document.getElementById('maks');
   let fire = document.getElementById('fire');
   let btnNeon = document.getElementById('btn-neon');


   ilya.classList.toggle('none');
   maks.classList.toggle('none')
   fire.classList.toggle('none'); 
})


document.getElementById('alertButton').addEventListener('click', function() {
   var userInput = document.getElementById('exampleFormControlTextarea1').value
   var modalMessage = document.getElementById('modalMessage');
   var modalImage = document.getElementById('modalImage');

   if (userInput === 'Зигмунд Фрейд') {
       modalImage.src = './img/yes.gif'; // Укажите путь к изображению для "ок"
       modalImage.style.display = 'block';
   }
      else if (userInput === 'Фрейд')  {
         modalImage.src = './img/soso.gif'; // Укажите путь к изображению для "ок"
         modalImage.style.display = 'block';
      }
      else if (userInput === 'Гей')  {
         modalImage.src = './img/gay.gif'; // Укажите путь к изображению для "ок"
         modalImage.style.display = 'block';
      }
   else {
       modalImage.src = './img/govno.gif'; // Укажите путь к изображению для "не ок"
       modalImage.style.display = 'block';
   }
});
