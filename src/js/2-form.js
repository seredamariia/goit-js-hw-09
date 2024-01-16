const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', event => {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
});

form.addEventListener('input', () => {
  const storageData = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
});

function populateStorageData() {
  const savedStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedStorageData) {
    const savedEmail = savedStorageData.email;
    const savedMessage = savedStorageData.message;
    if (savedEmail && savedMessage) {
      input.value = savedEmail;
      textarea.value = savedMessage;
    }
  }
}

populateStorageData();
