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



//Открытие и закрытие модального окна
//Открытие попапа для редактирования имени и профессии


//Сама форма
const popupUserEdit = document.querySelector('#userPopup');


//Данные на странице
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');

const nameUser = document.querySelector('.profile__title');
const profUser = document.querySelector('.profile__subline');

//Закрытие
const popupClosing = document.querySelector('.popup__close');

//Форма отправки данных профиля в форме
const formProfile = document.querySelector('#pop-up__form-name');

//Инпуты формы отправки данных профиля в форме
const nameInput = formProfile.querySelector('#popupnme');
const inputProfession = document.querySelector('#popup-profession')


//Открытие формы попапа для добавления места

//Данные на странице 
const popupAddCard = document.querySelector('.profile__add');
const popupCard = document.querySelector('#AddCard');

//Вызов самой формы добавления нового места
const mestoUp = document.querySelector('#mestoPopup');

//Открытие

const formCard = mestoUp.querySelector('#add-card-form');
const inputCardName = mestoUp.querySelector('#mestoName');
const inputCardImage = mestoUp.querySelector('#mestoId');

//Закрытие
const closeMesto = document.querySelector('#closingMesto');

//Добавление карточки в контейнер
const cardsContainer = document.querySelector('.grid-gallery__container');

 //Попап открытой карточки
 const openCardPopup = document.querySelector('#cardPopup');
 const openCardToggle = openCardPopup.querySelector('#closingCard');
 const openCardImage = openCardPopup.querySelector('.popup__mesto_image');
 const openCardTitle = openCardPopup.querySelector('#MestoOpenSubline');

//Универсальные попапы
function openPopup (popup) {
  popup.classList.add('popup_active', 'popup__anime');
}

function closePopup (popup) {
  popup.classList.remove('popup_active');
}

//Сохранение обновления Попап редактирования профиля

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); 
  
  nameUser.textContent = nameInput.value;
  profUser.textContent = inputProfession.value;
  closePopup(popupUserEdit);
}

formProfile.addEventListener('submit', handleProfileFormSubmit);



//Like
function activeLike(evt) {
  evt.target.classList.toggle('grid-gallery__like_active');
}

//Удаление карточки

function trashCard(evt) {
  const item = evt.target.closest('.grid-gallery__item');
  item.remove();
}

function showCardPopup() {
  openCardPopup.classList.add('popup__mesto');
 }
 
 function unshowCardPopup() {
   openCardPopup.classList.remove('popup__mesto');
 }
 
 openCardToggle.addEventListener('click', unshowCardPopup);

 //Открытие карточки
function handleCardClick(image, name) {
  openCardImage.src = image;
  openCardImage.alt = name;
  openCardTitle.textContent = name;
  openPopup(openCardPopup);
}


//Добавление карточки пользователем
function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); 
  
  const addedUserCard = {};
  addedUserCard.name = inputCardName.value;
  addedUserCard.link = inputCardImage.value;
  addCard(createCard(addedUserCard));
  closePopup(mestoUp);
}
 
formCard.addEventListener('submit', handleAddCardFormSubmit);

//Загрузка карточек из массива(бд)
initialCards.forEach(card => {
  addCard(createCard(card));
});

//Добавление карточки в контейнер
function addCard (newCard) {
  cardsContainer.prepend(newCard);
}

// Открыть редактирование профиля
function openEditProfile () {
  nameInput.value = nameUser.textContent;
  inputProfession.value = profUser.textContent;
  openPopup(popupUserEdit);
}

profileEditButton.addEventListener('click', openEditProfile);

// Закрыть редактирование профиля
function closeEditProfile() {
  closePopup(popupUserEdit);
}

popupClosing.addEventListener('click', closeEditProfile);


//Открыть добавление карточки
function addUserCard() {
  openPopup(mestoUp);
}

popupCard.addEventListener('click', addUserCard);

//Закрыть добавление карточки
function closeUserAdd() {
  closePopup(mestoUp);
}

closeMesto.addEventListener('click', closeUserAdd);

//Закрыть открытую карточку
function closeOpenCard() {
  closePopup(openCardPopup);
}

openCardToggle.addEventListener('click', closeOpenCard);