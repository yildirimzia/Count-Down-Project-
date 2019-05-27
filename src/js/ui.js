// const dateTime = document.querySelector('.date-time');

// let count;
// let intVal;

// function startCountdown() {
//     intVal = setInterval(() => {
//         if (count > 0) {
//             toHHMMSS(count);
//             count--;
//         } else {
//             clearInterval(intVal);
//             intVal = null;
//             alert()
//         }
//     }, 1000);
// }

// // const intVal = setInterval(() => {
// //     if (!count) {
// //         clearInterval(intVal);
// //         return;
// //     }
// //     toHHMMSS(count);
// //     count--;
// // }, 1000);

// document.querySelectorAll('.start').forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (intVal) {
//             clearInterval(intVal);
//         }
    
//         count = e.target.dataset.mins * 60;
//         startCountdown();
//     });
// })


// function toHHMMSS(sec_num) {
//     var hours   = Math.floor(sec_num / 3600);
//     var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
//     var seconds = sec_num - (hours * 3600) - (minutes * 60);
  
//     if (hours   < 10) {hours   = "0"+hours;}
//     if (minutes < 10) {minutes = "0"+minutes;}
//     if (seconds < 10) {seconds = "0"+seconds;}

    
//     const countDown = 
//     `   <ul>
//           <li>
//               <span>${hours}</span>
//               <p>Hours</p>
//           </li>
//           <li>:</li>
//           <li>
//               <span> ${minutes} </span>
//               <p>Minutes</p>
//           </li>
//           <li>:</li>
//           <li>
//               <span>${seconds}</span>
//               <p>Seconds</p>
//           </li>
//       </ul>
//     `
//     dateTime.innerHTML = countDown
// }



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
}