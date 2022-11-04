window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let info = this.document.querySelector('.info'),
        tabs = this.document.querySelectorAll('.info-header-tab'),
        tabsContent = this.document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabsContent.length; i++) {
            tabsContent[i].classList.remove('show');
            tabsContent[i].classList.add('hide');
        };
    };

    hideTabContent(1);

    function showTabContent(b) {
        if (tabsContent[b].classList.contains('hide')) {
            tabsContent[b].classList.remove('hide');
            tabsContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                };
            };
        };
    });
});