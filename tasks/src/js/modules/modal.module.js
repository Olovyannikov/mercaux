const modals = () => {
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const scroll = calcScroll();
        const form = document.getElementById('form');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    item.remove();
                }

                modal.classList.add('modal--visible');
                document.body.classList.add('overlay');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        })

        close.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('modal--visible');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            document.body.classList.remove('overlay');

            form.querySelectorAll('.form__control').forEach(item => item.classList.remove('hidden'));
            form.querySelector('.form__submit').classList.remove('hidden');
            form.querySelector('.form__success-message')?.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });

        function calcScroll() {
            let div = document.createElement('div');

            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';

            document.body.appendChild(div);

            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();

            return scrollWidth;
        }

        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('overlay')) {
                modal.classList.remove('modal--visible');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                document.body.classList.remove('overlay');
                form.querySelectorAll('.form__control').forEach(item => item.classList.remove('hidden'));
                form.querySelector('.form__submit').classList.remove('hidden');
                form.querySelector('.form__success-message')?.remove();
            }
        })
    }


    bindModal('.modal__trigger', '.modal', '.form__close');
}

export default modals;
