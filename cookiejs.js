class Game {
    constructor() {
        this.cookies = 10000000;
        this.cookiesPerSecond = 0;
        this.upgrade1Count = 0;
        this.upgrade1Price = 10;
        this.upgrade2Count = 0;
        this.upgrade2Price = 100;
        this.interval = null;
        this.upgrademultiplyer = 1;
    }
    
    click() {
        let cookieClick = document.querySelector(".cookieimg");
        cookieClick.style.animation = 'scale 0.2s forwards';
        this.cookies += 1;
        let text = `${this.cookies} cookies`;
        document.querySelector(".txt").innerHTML = text;    
    }

    updateCookiesPerSecond() {
        this.cookiesPerSecond += this.upgrade1Count * 0.1;
        this.cookiesPerSecond += this.upgrade2Count ;
        let cpsText = `${this.cookiesPerSecond.toFixed(1)} cookies per second`;
        document.querySelector(".cps").innerHTML = cpsText;
    }

    buyUpgrade1() {
        if (this.cookies >= this.upgrade1Price) {
            this.cookies -= this.upgrade1Price;
            this.upgrade1Count += 1;
            let upgrade1Text = `Upgrade 1 (${this.upgrade1Count}) - ${this.upgrade1Price.toFixed(2)} cookies`;
            document.querySelector(".up1").innerHTML = upgrade1Text;
            this.upgrade1Price += 10 + this.upgrade1Count * 0.1;
            let upgrade2Text = `Upgrade 2 (${this.upgrade2Count}) - ${this.upgrade2Price.toFixed(2)} cookies`;
            document.querySelector(".up2").innerHTML = upgrade2Text;
            this.updateCookiesPerSecond();
        }
        else{
           window.alert("you don't have enougt cookies")
        }
    }

    buyUpgrade2() {
        if (this.cookies >= this.upgrade2Price) {
            this.cookies -= this.upgrade2Price;
            this.upgrade2Count += 1;
            let upgrade2Text = `Upgrade 2 (${this.upgrade2Count}) - ${this.upgrade2Price.toFixed(2)} cookies`;
            document.querySelector(".up2").innerHTML = upgrade2Text;
            this.upgrade2Price += 100 + this.upgrade2Count * 0.2; 
            let upgrade1Text = `Upgrade 1 (${this.upgrade1Count}) - ${this.upgrade1Price.toFixed(2)} cookies`;
            document.querySelector(".up1").innerHTML = upgrade1Text;
            this.upgrademultiplyer += 0.1;
            this.updateCookiesPerSecond();
        }
        else{
            window.alert("you don't have enougt cookies")
         }
    }

    startCookieLoop() {
            this.interval = setInterval(() => {
            this.cookies += this.cookiesPerSecond
            let text = `${this.cookies} cookies`;
            document.querySelector(".txt").innerHTML = text;
        }, 1000);
    }

    stopCookieLoop() {
        clearInterval(this.interval);
        this.interval = null;
    }
}

let newGame = new Game();
let clickUpgrade = document.querySelector(".click-upgrade");
let cpsUpgrade = document.querySelector(".cps-upgrade");

let cookieClick = document.querySelector(".cookieimg");
cookieClick.addEventListener("click", function() {
    newGame.click();   
});

clickUpgrade.addEventListener("click", function() {
    newGame.buyUpgrade1();
});

cpsUpgrade.addEventListener("click", function() {
    newGame.buyUpgrade2();
});

cookieClick.addEventListener('animationend', function() {
    this.style.animation = '';
});



newGame.startCookieLoop();
