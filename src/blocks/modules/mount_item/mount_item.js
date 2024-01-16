const bikesData = [{
        type: "Горный велосипед",
        title: "Finsteraarhorn",
        id: "Finsteraarhorn",
        description: "Сбалансированный хардтейл, собранный на раме с современной геометрией Alpinebike Alpstein alloy стандарта BOOST. Компоненты подобраны под интенсивное катание: вилка с регулировкой скорости отскока, 10 скоростная трансмиссия с манеткой версии PRO, обода готовы к бескамерному использованию, втулки на промышленных подшипниках и гидравлические тормоза. Рама позволяет установить накладные крылья увеличенного размера."
    },
    {
        type: "Городской велосипед",
        title: "Tödi",
        id: "Tödi",
        description: "Сбалансированный хардтейл, собранный на раме с современной геометрией Alpinebike Alpstein alloy стандарта BOOST. Компоненты подобраны под интенсивное катание: вилка с регулировкой скорости отскока, 10 скоростная трансмиссия с манеткой версии PRO, обода готовы к бескамерному использованию, втулки на промышленных подшипниках и гидравлические тормоза. Рама позволяет установить накладные крылья увеличенного размера."
    },
    {
        type: "Горный велосипед",
        title: "Dammastock",
        id: "Dammastock",
        description: "Сбалансированный хардтейл, собранный на раме с современной геометрией Alpinebike Alpstein alloy стандарта BOOST. Компоненты подобраны под интенсивное катание: вилка с регулировкой скорости отскока, 10 скоростная трансмиссия с манеткой версии PRO, обода готовы к бескамерному использованию, втулки на промышленных подшипниках и гидравлические тормоза. Рама позволяет установить накладные крылья увеличенного размера."
    },
    {
        type: "Хардтейл",
        title: "Alpstein-Altmann",
        id: "Alpstein-Altmann",
        description: "Сбалансированный хардтейл, собранный на раме с современной геометрией Alpinebike Alpstein alloy стандарта BOOST. Компоненты подобраны под интенсивное катание: вилка с регулировкой скорости отскока, 10 скоростная трансмиссия с манеткой версии PRO, обода готовы к бескамерному использованию, втулки на промышленных подшипниках и гидравлические тормоза. Рама позволяет установить накладные крылья увеличенного размера."
    },
    {
        type: "Хардтейл",
        title: "Alpstein-Säntis",
        id: "Alpstein-Säntis",
        description: "Сбалансированный хардтейл, собранный на раме с современной геометрией Alpinebike Alpstein alloy стандарта BOOST. Компоненты подобраны под интенсивное катание: вилка с регулировкой скорости отскока, 10 скоростная трансмиссия с манеткой версии PRO, обода готовы к бескамерному использованию, втулки на промышленных подшипниках и гидравлические тормоза. Рама позволяет установить накладные крылья увеличенного размера."
    },
    {
        type: "Детский велосипед",
        title: "Rigi",
        id: "Rigi",
        description: "Сбалансированный хардтейл, собранный на раме с современной геометрией Alpinebike Alpstein alloy стандарта BOOST. Компоненты подобраны под интенсивное катание: вилка с регулировкой скорости отскока, 10 скоростная трансмиссия с манеткой версии PRO, обода готовы к бескамерному использованию, втулки на промышленных подшипниках и гидравлические тормоза. Рама позволяет установить накладные крылья увеличенного размера."
    },
    {
        type: "Складной велосипед",
        title: "F1HD",
        id: "F1HD",
        description: "Сбалансированный хардтейл, собранный на раме с современной геометрией Alpinebike Alpstein alloy стандарта BOOST. Компоненты подобраны под интенсивное катание: вилка с регулировкой скорости отскока, 10 скоростная трансмиссия с манеткой версии PRO, обода готовы к бескамерному использованию, втулки на промышленных подшипниках и гидравлические тормоза. Рама позволяет установить накладные крылья увеличенного размера."
    },
    {
        type: "Гравийный велосипед",
        title: "Chasseral",
        id: "Chasseral",
        description: "Сбалансированный хардтейл, собранный на раме с современной геометрией Alpinebike Alpstein alloy стандарта BOOST. Компоненты подобраны под интенсивное катание: вилка с регулировкой скорости отскока, 10 скоростная трансмиссия с манеткой версии PRO, обода готовы к бескамерному использованию, втулки на промышленных подшипниках и гидравлические тормоза. Рама позволяет установить накладные крылья увеличенного размера."
    },
    {
        type: "Городской велосипед",
        title: "Costa",
        id: "Costa",
        description: "Сбалансированный хардтейл, собранный на раме с современной геометрией Alpinebike Alpstein alloy стандарта BOOST. Компоненты подобраны под интенсивное катание: вилка с регулировкой скорости отскока, 10 скоростная трансмиссия с манеткой версии PRO, обода готовы к бескамерному использованию, втулки на промышленных подшипниках и гидравлические тормоза. Рама позволяет установить накладные крылья увеличенного размера."
    },
];

Vue.component('bike-item', {
    props: ['bike'],
    template: `
    <div>
        <div class="mount_item mountItem" :class="'i' + bike.id">
            <div class="mount_item__boxitem">
                <div class="mount_item__box">
                    <p class="mount_item__text">{{ bike.type }}</p>
                    <p class="mount_item__title">{{ bike.title }}</p>
                </div>
                <img class="mount_item__arrow" loading="lazy" width="20" height="14" src="./img/content/arrow.webp" alt="arrow">
            </div>
        </div>
        <div class="mount_item-click mountItemClick" :class="'i' + bike.id">
            <div class="mount_item__box-click">
                <p class="mount_item__text-click">{{ bike.type }}</p>
                <p class="mount_item__title-click">{{ bike.title }}</p>
            </div>
            <div class="mount_item__description">
                <p class="mount_item__description__text">{{ bike.description }}</p>
                <a :href="'#' + bike.id" class="button_bike">
                    <div class="mount_item__description__button">
                        <p>перейти к модели</p>
                        <img loading="lazy" width="20" height="20" src="./img/content/arrow_right.webp" alt="arrow_right">
                    </div>
                </a>
            </div>
        </div>
    </div>
`
});

new Vue({
    el: '#mount_item',
    data: {
        bikes: bikesData
    },
    template: `
    <div>
        <bike-item v-for="bike in bikes" :key="bike.id" :bike="bike" />
    </div>
`
});

const mountItems = document.querySelectorAll('.mountItem');
const mountItemClicks = document.querySelectorAll('.mountItemClick');

mountItemClicks.forEach(item => {
    item.style.display = 'none';
});

mountItems.forEach((item, index) => {
    item.addEventListener('click', function () {
        mountItemClicks[index].style.display = 'flex';
        item.style.display = 'none';
    });
});

mountItemClicks.forEach((item, index) => {
    item.addEventListener('click', function () {
        mountItems[index].style.display = 'flex';
        item.style.display = 'none';
    });
});