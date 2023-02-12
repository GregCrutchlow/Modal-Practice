'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
const subscribe = document.querySelector('.subscribe');
const btnCloseSub = document.querySelector('.close-sub');

// Functions to open/close the modal and adding/removing the blur effect
const openModal = () => {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

// Function to open the footer modal for subscribes
const subHere = () => {
	subscribe.classList.remove('hidden');
};

// Function to close the footer modal
const closeSub = () => {
    subscribe.classList.add('hidden');
    console.log('Close sub has been clicked');
};

// Closing the footer modal
btnCloseSub.addEventListener('click', closeSub);

// This loop goes through all the buttons
for (let i = 0; i < btnsShowModal.length; i++) btnsShowModal[i].addEventListener('click', openModal);

// Closing the Modal and removing the blur effect
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Closes the modal and removes blur effect with ESC keypress
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});

setTimeout(subHere, 2000);
