(function DeLibertate(){
    const resolver = {
    resolve: function resolve(options, callback) {
        const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
        const combinedOptions = Object.assign({}, options, {resolveString: resolveString});

        function getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        function randomCharacter(characters) {
            return characters[getRandomInteger(0, characters.length - 1)];
        }
        function doRandomiserEffect(options, callback) {
            const characters = options.characters;
            const timeout = options.timeout;
            const element = options.element;
            const partialString = options.partialString;
            let iterations = options.iterations;
            setTimeout(() => {
                if (iterations >= 0) {
                    const nextOptions = Object.assign({}, options, {iterations: iterations - 1});
                    if (iterations === 0) {
                        element.textContent = partialString;
                    } else {
                        element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
                    }

                    doRandomiserEffect(nextOptions, callback)
                } else if (typeof callback === "function") {
                    callback();
                }
            }, options.timeout);
        }

        function doResolverEffect(options, callback) {
            const resolveString = options.resolveString;
            const characters = options.characters;
            const offset = options.offset;
            const partialString = resolveString.substring(0, offset);
            const combinedOptions = Object.assign({}, options, {partialString: partialString});

            doRandomiserEffect(combinedOptions, () => {
                const nextOptions = Object.assign({}, options, {offset: offset + 1});

                if (offset <= resolveString.length) {
                    doResolverEffect(nextOptions, callback);
                } else if (typeof callback === "function") {
                    callback();
                }
            });
        }

        doResolverEffect(combinedOptions, callback);
    }
}

const strings = [
    'Хеллоу) Як справи ?',
    'Не знав я, що додавати, да і часу дуже не багато було',
    'Тож вирішив, зробити щось таке...',
    'Виглядає наче норм',
    'Якщо встигну зроблю якусь приколюху, але ваніла js то є дичка',
    'Тут якби мисив циклиться',
    'Тож почитайте вірші пана Сковороди)))',
    'De libertate',
    'Що є свобода? Добро в ній якеє?',
    'Кажуть, неначе воно золотеє?',
    'Ні ж бо, не злотне: зрівняши все злото.',
    'Проти свободи воно — лиш болото.',
    'О, якби в дурні мені не пошитись,',
    'Щоб без свободи не міг я лишитись.',
    'Слава навіки буде з тобою,',
    'Вольності отче, Богдане-герою!',
    'Ага шрифт не тяне \'є\' \'ї\' \'і\'',
    'Але нічого надіюсь не кидається в очі',
];

let counter = 0;

const options = {
    offset: 0,
    timeout: 5,
    iterations: 10,
    characters: ['а', 'б', 'в', 'г', 'д', 'є','путін х*йло', 'і', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'є', 'ю', 'я','ї','пісюн', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
    resolveString: strings[counter],
    element: document.querySelector('[data-target-resolver]')
}

function callback() {
    setTimeout(() => {
        counter ++;
        if (counter >= strings.length) {
            counter = 0;
        }
        let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
        resolver.resolve(nextOptions, callback);
    }, 1000);
}
resolver.resolve(options, callback);
})()

function Circle(){
    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");

    let progressValue = 0;
    let progressEndValue = 77;
    let speed = 30;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
      #dd4b25 ${progressValue * 3.6}deg,
      #F8DBD3 ${progressValue * 3.6}deg
  )`;
        if (progressValue === progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}
Circle()

function CircleNumTwo(){
    let progressBarNumTwo = document.querySelector(".circular-progress-num-two");
    let valueContainerNumTwo = document.querySelector(".value-container-num-two");

    let progressValueNumTwo = 0;
    let progressEndValueNumTwo = 68;
    let speedNumTwo = 50;

    let progress = setInterval(() => {
        progressValueNumTwo++;
        valueContainerNumTwo.textContent = `${progressValueNumTwo}%`;
        progressBarNumTwo.style.background = `conic-gradient(
      #254bdd ${progressValueNumTwo * 3.6}deg,
      #DEE4F9 ${progressValueNumTwo * 3.6}deg
  )`;
        if (progressValueNumTwo === progressEndValueNumTwo) {
            clearInterval(progress);
        }
    }, speedNumTwo);
}
CircleNumTwo()

function CircleNumThree(){
    let progressBarNumThree = document.querySelector(".circular-progress-num-three");
    let valueContainerNumTwo = document.querySelector(".value-container-num-three");

    let progressValueNumThree = 0;
    let progressEndValueNumThree = 59;
    let speedNumThree = 10;

    let progress = setInterval(() => {
        progressValueNumThree++;
        valueContainerNumTwo.textContent = `Норм`;
        progressBarNumThree.style.background = `conic-gradient(
      #efd81d ${progressValueNumThree * 3.6}deg,
      #fcfae3 ${progressValueNumThree * 3.6}deg
  )`;
        if (progressValueNumThree === progressEndValueNumThree) {
            clearInterval(progress);
        }
    }, speedNumThree);
}
CircleNumThree()