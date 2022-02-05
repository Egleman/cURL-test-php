//Получение значений и объявление переменных
//Перевод обратно в массив из json
let id1 = document.querySelector('.root');
let phpArr = JSON.parse(id1.textContent)

let arr = Array.from(phpArr);
let doneArr = [];

let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');

let selectFirst = document.querySelector('#selectFirst');
let selectSecond = document.querySelector('#selectSecond');

let result = document.querySelector('.result');

const form = document.querySelector('form');

//Порезал пробелы
arr.forEach(item => {
     item.forEach((elem, index) => {
         elem[index] = elem[index].trim();
     });
});

//Добавление значений в селекты
arr[0].forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item;
        selectFirst.appendChild(option);
})
arr[1].forEach((item, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = item;
    selectSecond.appendChild(option);
})
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



//Отправка данных без перезагрузки
document.querySelector('.btn').onclick = e => {
    
    e.preventDefault();
    let body = new FormData(form)

    fetch('arrivee.php', {
        method: 'POST',
        body: body
    })

    .then((response) => response.text())
    .then((request) => console.log(request))

    result.innerHTML = `Значение 1: ${inp1.value}<br>Значение 2: ${inp2.value}`;

}
