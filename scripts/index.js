//Добавление карточки в контейнер
const cardsContainer = document.querySelector('.grid-gallery__container');
const cardTemplate = cardsContainer.querySelector('.card-template').content;




function createCard (object) {
  cardTemplate.content;
  const cardElement = cardTemplate.querySelector('.grid-gallery__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.grid-gallery__image');
  cardImage.src = object.link;
  cardImage.alt = object.name;
  cardElement.querySelector('.grid-gallery__text').textContent = object.name;
  cardElement.querySelector('.grid-gallery__like').addEventListener('click', activeLike);
  cardElement.querySelector('.grid-gallery__delete').addEventListener('click', trashCard);
  cardImage.addEventListener('click', () => handleCardClick(object.link, object.name));

  return cardElement;
}


//Открытие и закрытие модального окна
//Открытие попапа для редактирования имени и профессии

//Сама форма
const popupProfileEdit = document.querySelector('#userPopup');


//Данные на странице
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');

const nameUser = document.querySelector('.profile__title');
const professionUser = document.querySelector('.profile__subline');

//Закрытие
const popupClose = document.querySelector('.popup__close');
const popupCloseProfile = document.querySelector('#closeProfile')

const popupNewMestoClose = document.querySelector('#closingMesto');

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
const popupMesto = document.querySelector('#mestoPopup');

//Открытие

const formCard = popupMesto.querySelector('#add-card-form');
const cardInputName = popupMesto.querySelector('#mestoName');
const cardInputImage = popupMesto.querySelector('#mestoId');





 //Попап открытой карточки
 const cardOpenPopup = document.querySelector('#cardPopup');
 const cardOpenToggle = cardOpenPopup.querySelector('#closingCard');
 const cardOpenImage = cardOpenPopup.querySelector('.popup__mesto_image');
 const cardOpenTitle = cardOpenPopup.querySelector('#MestoOpenSubline');

//Универсальные попапы
function openPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

//Сохранение обновления Попап редактирования профиля

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); 
  
  nameUser.textContent = nameInput.value;
  professionUser.textContent = inputProfession.value;
  closePopup(popupProfileEdit);
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
 
 cardOpenToggle.addEventListener('click', closePopup);

 //Открытие карточки
function handleCardClick(image, name) {
  cardOpenImage.src = image;
  cardOpenImage.alt = name;
  cardOpenTitle.textContent = name;
  openPopup(cardOpenPopup);
}


//Добавление карточки пользователем
function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); 
  
  const addedUserCard = {};
  addedUserCard.name = cardInputName.value;
  addedUserCard.link = cardInputImage.value;
  addCard(createCard(addedUserCard));
  closePopup(popupMesto);
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
  inputProfession.value = professionUser.textContent;
  openPopup(popupProfileEdit);
}

profileEditButton.addEventListener('click', openEditProfile);

// Закрыть редактирование профиля
function closeEditProfile() {
  closePopup(popupProfileEdit);
}

popupCloseProfile.addEventListener('click', closeEditProfile);


//Открыть добавление карточки
function addUserCard() {
  openPopup(popupMesto);
}

popupCard.addEventListener('click', addUserCard);

//Закрыть добавление карточки
function closeUserAdd() {
  closePopup(popupMesto);
}

popupNewMestoClose.addEventListener('click', closeUserAdd);

//Закрыть открытую карточку
function closeOpenCard() {
  closePopup(cardOpenPopup);
}

cardOpenToggle.addEventListener('click', closeOpenCard);