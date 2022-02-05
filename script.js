let id1 = document.querySelector('.root');
let phpArr = JSON.parse(id1.textContent)

let arr = Array.from(phpArr);
let doneArr = [];

let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');

let selectFirst = document.querySelector('#selectFirst');
let selectSecond = document.querySelector('#selectSecond');

arr.forEach(item => {
    item.forEach((elem, index) => {
        elem[index] = elem[index].trim();
    });
});

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

selectFirst.addEventListener('change', () => {
    //selectFirst.options[selectFirst.selectedIndex].textContent
    selectSecond.value = selectFirst.value;
    console.log(selectFirst.options[selectFirst.selectedIndex].textContent);
    console.log(selectSecond.options[selectSecond.selectedIndex].textContent)
    inp1.value = selectFirst.options[selectFirst.selectedIndex].textContent;
    inp2.value = selectSecond.options[selectSecond.selectedIndex].textContent;
});

selectSecond.addEventListener('change', () => {
    selectFirst.value = selectSecond.value;
    console.log(selectSecond.options[selectSecond.selectedIndex].textContent)
    inp1.value = selectFirst.options[selectFirst.selectedIndex].textContent;
    inp2.value = selectSecond.options[selectSecond.selectedIndex].textContent;
});


const form = document.querySelector('form');
/*
const sendData = async (data) => {
    const res = await fetch('http://test-work/arrive.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "aplication/json"
        }
    });
    return await res.json();
};


const submitForm = () => {   
    formBody = {
        select1: "hello",//`${selectFirst.options[selectFirst.selectedIndex].textContent}`,
        select2: "buy"//`${selectSecond.options[selectSecond.selectedIndex].textContent}`
    }

        sendData(formBody).then(data => {
            //window.location = 'http://test-work/arrive.php'
        })
        .catch(err => {
            console.log('Ошибка отправки');
        });
};
*/

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendForm();
})


const sendForm = () => {
    let data={
        select1: inp1.value, 
        select2: inp2.value
    }
    const xhr=new XMLHttpRequest();
    xhr.onload=function(){
        console.log(this.responseText);
    }
    xhr.open('POST', 'http://test-work/arrivee.php', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(data));
};
