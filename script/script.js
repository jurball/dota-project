//Инициализация данных
let dataHero = [] //двумерный массив [имя, класс]
let button = document.getElementById('button__accept');

function displayHeroes() { // отобразить героев
  //Инициализация DOM
  let card = document.getElementById("cards"); // добавляем в содержимое
  card.innerHTML = '';
  //Алгоритм: для каждого элемента массива создаем новый элемент div
  for (let i = 0; i < dataHero.length; i++) {
    let newHero = document.createElement('div'); // создаем новый элемент

    newHero.className = 'card__block'; //даем ему класс для стилей
    newHero.innerHTML = `<div class="card__display">
        <div class="card__text">
            Имя героя
        </div>
        <div class="card__text">
            ${dataHero[i][0]}
        </div>
    </div>
    <div class="card__display">
        <div class="card__text">
            Класс героя
        </div>
        <div class="card__text">
            ${dataHero[i][1]}
        </div>
    </div>`; // заполняем содержимое

    card.appendChild(newHero); // отобразить новый элемент
  }
}

function addHero() {
  //Инициализация пользовательских данных
  let nameHero = document.getElementById('nameHero');
  let classHero = document.getElementById('classHero');

  //тут должна была проверка if

  let inputHero = [nameHero.value, classHero.value];
  dataHero.push(inputHero); //добавляем в массив данных

  nameHero.value = ''; classHero.value = '';

  displayHeroes(); // показать героев
}

//Проверяем событие. Если нажата кнопка, то добавим героя
button.addEventListener('click', addHero);
