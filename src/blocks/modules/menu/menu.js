document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.menu__item');
    const buttons = document.querySelectorAll('.button_bike');
    const bikeboxes = document.querySelectorAll('.bikebox');

    // Скрываем все bikebox
    bikeboxes.forEach(box => {
        box.style.display = 'none';
    });

    function handleItemClick(selectedModel) {
        // Убираем выделение со всех элементов меню
        menuItems.forEach(item => {
            item.style.color = 'black';
            item.style.backgroundColor = window.innerWidth < 1000 ? '#F4F4F4' : 'white';
        });

        // Выделяем выбранный элемент меню
        const selectedMenuItem = document.querySelector(`.menu__item[data-target="${selectedModel}"]`);
        if (selectedMenuItem) {
            selectedMenuItem.style.color = 'white';
            selectedMenuItem.style.backgroundColor = '#EA2B2A';
        }

        // Скрываем все bikebox
        bikeboxes.forEach(box => {
            box.style.display = 'none';
        });

        // Отображаем нужный bikebox в зависимости от выбранной модели
        const selectedBikebox = document.getElementById(selectedModel);
        if (selectedBikebox) {
            selectedBikebox.style.display = 'flex';
        }

        // Обновляем изображения
        updateImages(selectedModel);
        // Вызываем функцию для установки выделения первого цвета
        setInitialColorSelection(selectedModel);
    }

    function setInitialColorSelection(selectedModel) {
        const colorItems = document.querySelectorAll('.bike__left__colors > div');
        colorItems.forEach(otherItem => {
            otherItem.classList.remove('bike__left__colors-itemselected');
        });

        // Изменяем изображение байка в зависимости от выбранного цвета
        const newSrc = `./img/content/${selectedModel}-1.webp`;
        document.getElementById(`${selectedModel}_img`).setAttribute('src', newSrc);
        // Если ширина экрана меньше 1000px
        const newSrcset = `./img/content/${selectedModel}-1-xs.webp`;
        document.getElementById(`${selectedModel}_imgmob`).setAttribute('srcset', newSrcset);
        
        const firstColorItem = document.querySelector(`#${selectedModel} .bike__left__colors > div:first-child`);
        if (firstColorItem) {
            firstColorItem.classList.add('bike__left__colors-itemselected');
        }
    }

    function updateImages(selectedModel) {
        const colorItems = document.querySelectorAll('.bike__left__colors > div');
        const bikeImage = document.getElementById(`${selectedModel}_img`);

        colorItems.forEach(item => {
            item.addEventListener('click', function () {
                // Убираем обводку у всех элементов
                colorItems.forEach(otherItem => {
                    otherItem.classList.remove('bike__left__colors-itemselected');
                });

                // Добавляем обводку к выбранному элементу
                item.classList.add('bike__left__colors-itemselected');

                const selectedColor = item.getAttribute('data-color');
                // Изменяем изображение байка в зависимости от выбранного цвета
                const newSrc = `./img/content/${selectedModel}-${selectedColor}.webp`;
                bikeImage.setAttribute('src', newSrc);
                // Если ширина экрана меньше 1000px
                const source = document.getElementById(`${selectedModel}_imgmob`);
                const newSrcset = `./img/content/${selectedModel}-${selectedColor}-xs.webp`;
                source.setAttribute('srcset', newSrcset);
            });
        });
    }

    // Вызываем функцию для дефолтного элемента
    handleItemClick('Alpstein-Altmann');

    // Добавляем обработчик события ко всем элементам меню
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const selectedModel = item.getAttribute('data-target');
            handleItemClick(selectedModel);
        });
    });

    // Добавляем обработчик события ко всем кнопкам велосипеда
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const mountItemClick = button.closest('.mountItemClick');
            const titleElement = mountItemClick.querySelector('.mount_item__title-click');
            const selectedModel = titleElement.textContent.trim();
            handleItemClick(selectedModel);
        });
    });
});