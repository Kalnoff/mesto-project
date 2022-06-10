//Открытие и закрытие модального окна

//Открытие
const profile = document.querySelector('.profile-top');
const editProfile = profile.querySelector('#profile-top__edit');

const userPopup = document.querySelector('.pop-up');
const editUserPopup = userPopup.querySelector('#userPopup');

//Закрытие
const closingPopup = document.querySelector('.pop-up__close');
const closePopup = closingPopup.querySelector('#closingPopup');

const userProf = document.querySelector('.profile-top__title');
const popupNaming = document.querySelector('#popup-name')

const subProfile = document.querySelector('.profile-top__subline');
const popupProf = document.querySelector('#popup-profession')


 //Попап открытой карточки
 const openCardPopup = document.querySelector('#cardPopup');
 const openCardToggle = openCardPopup.querySelector('#closingCard');
 const openCardImage = openCardPopup.querySelector('.popup__mesto_image');
 const openCardTitle = openCardPopup.querySelector('#MestoOpenSubline');

//Взаимодействие пользователя для открытия-закрытия

function showPopup() {
  userPopup.classList.add('pop-up_active');
}

function unshowPopup() {
  userPopup.classList.remove('pop-up_active');
}

editProfile.addEventListener('click', showPopup);
closingPopup.addEventListener('click', unshowPopup);

//Открытие

const addCard = document.querySelector('#profile-top__add-btn');
const mestoUp = document.querySelector('#mestoPopup');

function showMesto() {
  mestoUp.classList.add('pop-up_active');
}

addCard.addEventListener('click', showMesto);

function showCardPopup() {
 openCardPopup.classList.add('pop-up__mesto');
}

function unshowCardPopup() {
  openCardPopup.classList.remove('pop-up__mesto');
}

openCardToggle.addEventListener('click', unshowCardPopup);


//Закрытие
const closeMesto = document.querySelector('#closingMesto');

function unshowMesto() {
  mestoUp.classList.remove('pop-up_active');
}

closeMesto.addEventListener('click', unshowMesto);

// Находим форму в DOM
// const formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
// const popupNaming = // Воспользуйтесь инструментом .querySelector()
// const popupProf = // Воспользуйтесь инструментом .querySelector()
// popupNaming.value = userProf.textContent;
// popupProf.value = subProfile.textContent;
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
// function formSubmitHandler (evt) {
  //   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
// }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler);


//Добавление карточки в контейнер
const cardsContainer = document.querySelector('.grid-gallery__container');

//Первоначальные карточки

function createCard (object) {
  const cardTemplate = cardsContainer.querySelector('.card-template').content;
  const cardElement = cardTemplate.querySelector('.grid-gallery__item').cloneNode(true);
  cardElement.querySelector('.grid-gallery__image').src = object.link;
  cardElement.querySelector('.grid-gallery__image').alt = object.name;
  cardElement.querySelector('.grid-gallery__text').textContent = object.name;

  cardElement.querySelector('.grid-gallery__like').addEventListener('click', activeLike);
  
  cardElement.querySelector('.grid-gallery__delete').addEventListener('click', trashCard);

  cardElement.querySelector('.grid-gallery__image').addEventListener('click', () => handleCardClick(object.link, object.name));

  return cardElement;
}

//Добавление карточки в контейнер
function startCard (newCard) {
  cardsContainer.prepend(newCard);
}

//Загрузка карточек из массива(бд)
initialCards.forEach(card => {
  startCard(createCard(card));
});


//Удаление карточки

function trashCard(evt) {
  const item = evt.target.closest('.grid-gallery__item');
  item.remove();
}


//Like
function activeLike(evt) {
  evt.target.classList.toggle('grid-gallery__like_active');
}

//Открытие карточки
function handleCardClick(image, name) {
  openCardImage.src = image;
  openCardImage.alt = name;
  openCardTitle.textContent = name;
  showCardPopup(openCardPopup);
}














console.log();