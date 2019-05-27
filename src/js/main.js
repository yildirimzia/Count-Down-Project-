import '../scss/app.scss';

class CountDown {
    constructor() {
        this.container = document.querySelector('.date-time');
    }
    setCount(value) {
        this.count = value;

    }

    start() {
        if (this.intVal) {
            this.stop();
        }

        this.intVal = setInterval(() => {
            if (!this.count) {
                this.onFinish();
                this.stop();
                return;
            }

            this.render();
            this.count--;
        }, 1000);
    }

    stop() {
        if (this.intVal) {
            clearInterval(this.intVal);
            this.intVal = null;
            this.count = 0;
            this.render();
        }
    }

    render() {
        const hours   = Math.floor(this.count / 3600);
        const minutes = Math.floor((this.count - (hours * 3600)) / 60);
        const seconds = this.count - (hours * 3600) - (minutes * 60);
        
        const countDown = `
        <ul>
            <li>
                <span>${hours < 10 ? `0${hours}` : hours}</span>
                <p>Hours</p>
            </li>
            <li>:</li>
            <li>
                <span>${minutes < 10 ? `0${minutes}` : minutes}</span>
                <p>Minutes</p>
            </li>
            <li>:</li>
            <li>
                <span>${seconds < 10 ? `0${seconds}` : seconds}</span>
                <p>Seconds</p>
            </li>
        </ul>`;

        this.container.innerHTML = countDown
    }

    onFinish() {
        console.log('done');
    }
}

const countDown = new CountDown();

countDown.onFinish = () => {
    console.log('Hello');
}

document.querySelectorAll('.start').forEach((button) => {
    button.addEventListener('click', (e) => {
        countDown.stop();
        countDown.setCount(e.target.dataset.mins * 60);
        countDown.start();
    });
})
