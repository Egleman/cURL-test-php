//Объявление переменных
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');

let selectFirst = document.querySelector('#selectFirst');
let selectSecond = document.querySelector('#selectSecond');

const result = document.querySelector('.result');

const form = document.querySelector('form');

let arrSelectSecond = [];

//Получение массива методом пост из файла sendArray.php
fetch('sendArray.php', {
    method: 'POST'
})
.then((response) => {
    return response.json()
})
.then((data) => {
   //Добавление значений в первый селект
    let arrSelectFirst = [];

    data.forEach(item => {
        let shifted = item.shift();
        arrSelectFirst.push(shifted);
        arrSelectSecond.push(item);
    })

    arrSelectFirst.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item;
        selectFirst.appendChild(option);
    });

});

//Меняем второй селект в зависимости от первого
selectFirst.addEventListener('change', () => {
    console.log(selectFirst.value);

    if(selectFirst.value == 'sel') {
        selectSecond.textContent = '';
        const opt = document.createElement('option');
        opt.value = 'sel';
        opt.textContent = 'Выберите значение';
        selectSecond.append(opt);
    } else if (selectFirst.value == 0) {
        selectSecond.textContent = '';
        arrSelectSecond[0].forEach((item, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = item;
            selectSecond.appendChild(option);
        });
    } else if (selectFirst.value == 1) {
        selectSecond.textContent = '';
        arrSelectSecond[1].forEach((item, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = item;
            selectSecond.appendChild(option);
        });
    } else if (selectFirst.value == 2) {
        selectSecond.textContent = '';
        arrSelectSecond[2].forEach((item, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = item;
            selectSecond.appendChild(option);
        });
    }

    inp1.value = selectFirst.options[selectFirst.selectedIndex].textContent;
    inp2.value = selectSecond.options[selectSecond.selectedIndex].textContent;
});


selectSecond.addEventListener('change', () => {
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
});