// header

// hum-menu
const icon_hum = document.querySelector(".icon-hum");
const icon_hum_close = document.querySelector(".icon-hum-close");
const nav_menu = document.querySelector(".nav-menu");
const nav_menu_list = document.querySelectorAll(".nav-menu-list a");

icon_hum.addEventListener("click", () => {
  nav_menu.classList.add("visible");
});

icon_hum_close.addEventListener("click", () => {
  nav_menu.classList.remove("visible");
});

let length_list = nav_menu_list.length;
for (let x = 0; x < length_list; x++) {
  nav_menu_list[x].addEventListener("click", () => {
    nav_menu.classList.remove("visible");
  });
}

// phone-menu
const icon_phone = document.querySelector('.icon-phone');
const icon_phone_close = document.querySelector('.icon-phone-close');
const header_contact = document.querySelector('.header__contact');

icon_phone.addEventListener('click', ()=>{
    header_contact.classList.add('visible')
});

icon_phone_close.addEventListener('click', ()=> {
    header_contact.classList.remove('visible')
})

// modal free lesson
const btn_freeles = document.querySelector('.btn-freeles');
const modal_close = document.querySelector('.header__modal-close');
const modal_container = document.querySelector('.header__modal-container');

btn_freeles.addEventListener('click', ()=>{
  modal_container.classList.add('visible-modal')
})

modal_close.addEventListener('click', ()=>{
  modal_container.classList.remove('visible-modal')
})

btn_freeles.addEventListener('click', ()=>{
  header_contact.classList.remove('visible')
})

// button phone
const btnCall = document.querySelector('.btn-call');

btnCall.addEventListener('click', ()=>{
  modal_container.classList.add('visible-modal')
})

// telegram message
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  // Замените <YOUR_BOT_TOKEN> и <YOUR_CHAT_ID> на соответствующие значения
  const botToken = '6328452974:AAEIl5KA2WNvjhTuifCTPhdtRt59UyBVYiw';
  const chatId = '806656207';
  const formData = new FormData(event.target);

  let input  = document.querySelectorAll('.form__input');

  let message = '';
  formData.forEach((value, key) => {
    message += `${key}: ${value}\n`;
  });

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const data = {
    chat_id: chatId,
    text: message,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');

      }
      return response.json();
    })
    .then((result) => {
      console.log('Сообщение успешно отправлено в Telegram!', result);
      // Дополнительные действия после успешной отправки
    })
    .catch((error) => {
      console.error('Произошла ошибка при отправке сообщения в Telegram:', error);
    });
    input.forEach(item =>{
      (item) = '';
    })
   
     for (let index = 0; index < input.length; index++) {
      const element = input[index];
      element.value='';
      
     }
});

// scrollll menu anim
let lastScrollTop = 0;
menu = document.querySelector('.header__container');
window.addEventListener('scroll', function(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    menu.style.top='-200px'
  }
  else{
    menu.style.top='0'
  }
  lastScrollTop = scrollTop;
})


