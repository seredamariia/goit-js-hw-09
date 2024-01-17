const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', event => {
  event.preventDefault();

  if (input.value.trim() === '' || textarea.value.trim() === '') {
    alert('Будь ласка, заповніть всі поля форми перед відправленням.');
    return;
  }

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
});

form.addEventListener('input', () => {
  const storageData = {
    email: input.value.trim(),
    message: textarea.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
});

function populateStorageData() {
  const savedStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedStorageData) {
    const savedEmail = savedStorageData.email;
    const savedMessage = savedStorageData.message;
    if (savedStorageData.email) {
      input.value = savedEmail;
    }
    if (savedStorageData.message) {
      textarea.value = savedMessage;
    }
  }
}

populateStorageData();
