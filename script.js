//Объявление переменных
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');

let selectFirst = document.querySelector('#selectFirst');
let selectSecond = document.querySelector('#selectSecond');

const result = document.querySelector('.result');

const form = document.querySelector('form');

//Получение массива методом пост из файла sendArray.php
fetch('sendArray.php', {
    method: 'POST'
})
.then((response) => {
    return response.json()
})
.then((data) => {
   //Добавление значений в селекты
    data[0].forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item;
        selectFirst.appendChild(option);
    })
    data[1].forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item;
        selectSecond.appendChild(option);
    })
});

//Меняем второй селект и первый при выборе одного из двух
selectFirst.addEventListener('change', () => {
    selectSecond.value = selectFirst.value;
    inp1.value = selectFirst.options[selectFirst.selectedIndex].textContent;
    inp2.value = selectSecond.options[selectSecond.selectedIndex].textContent;
});

selectSecond.addEventListener('change', () => {
    selectFirst.value = selectSecond.value;
    inp1.value = selectFirst.options[selectFirst.selectedIndex].textContent;
    inp2.value = selectSecond.options[selectSecond.selectedIndex].textContent;
});

//Отправка данных в файл arrive.php без перезагрузки
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let body = new FormData(form)

    fetch('arrive.php', {
        method: 'POST',
        body: body
    })

    .then((response) => response.text())
    .then((request) => console.log(request))

    result.innerHTML = `Значение 1: ${inp1.value}<br>Значение 2: ${inp2.value}`;
});
