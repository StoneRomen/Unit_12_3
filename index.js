// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

// Покроковий план:

// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.



document.getElementById('addTask').addEventListener('click', function () {
    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.className = 'delete-button';

        newTask.append(taskContent);
        newTask.append(deleteButton);
        taskList.append(newTask);

        taskInput.value = '';
    }
});

document.getElementById('taskList').addEventListener('click', function (event) {
    if (event.target.className === 'delete-button') {
        event.target.parentElement.remove();
    }
});


