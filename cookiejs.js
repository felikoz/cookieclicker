
class Game {
    constructor() {
        this.cookies = new Big(0);
        this.cookiesPerSecond = new Big(0);
        this.upgrade1Count = new Big(0);
        this.upgrade1Price = new Big(10);
        this.upgrade2Count =  new Big(0);
        this.upgrade2Price = new Big(100);
        this.interval = null;
        this.upgrademultiplyer = 1;
    }
    
    click() {
        let cookieClick = document.querySelector(".cookieimg");
        document.querySelector('.cookieimg').style.transform = 'scale(1)';
        document.querySelector('.cookieimg').style.animation = 'scale 0.2s ease 0s 1 normal forwards running';
        this.cookies = this.cookies.plus(1);
        let text = `${this.cookies} cookies`;
        document.querySelector(".txt").innerHTML = text;
      }

    updateCookiesPerSecond() {
        this.cookiesPerSecond = this.upgrade1Count.times(0.1).plus(this.upgrade2Count);
        let cpsText = `${this.cookiesPerSecond.toFixed(1)} cookies per second`;
        document.querySelector(".cps").innerHTML = cpsText;
    }

    buyUpgrade1() {
        if (this.cookies.gte(this.upgrade1Price)) {
          this.cookies = this.cookies.minus(this.upgrade1Price);
          this.upgrade1Count = this.upgrade1Count.plus(1);
          this.upgrade1Price = this.upgrade1Price.plus(this.upgrade1Count).times(0.1);
          let upgrade1Text = `Upgrade 1 (${this.upgrade1Count}) - ${this.upgrade1Price.toFixed(2)} cookies`;
          document.querySelector(".up1").innerHTML = upgrade1Text;
          let upgrade2Text = `Upgrade 2 (${this.upgrade2Count}) - ${this.upgrade2Price.toFixed(2)} cookies`;
          document.querySelector(".up2").innerHTML = upgrade2Text;
          this.updateCookiesPerSecond();
          let text = `${this.cookies} cookies`;
            document.querySelector(".txt").innerHTML = text;
        } else {
          window.alert("you don't have enough cookies");
        }
      }
      
      
      
      
      
      
      
      
    
    buyUpgrade2() {
        if (this.cookies.gte(this.upgrade2Price)) {
            this.cookies = this.cookies.minus(this.upgrade2Price);
            this.upgrade2Count = this.upgrade2Count.plus(1);
            this.upgrade2Price = this.upgrade2Price.plus(this.upgrade2Count);
            let upgrade2Text = `Upgrade 2 (${this.upgrade2Count}) - ${this.upgrade2Price.toFixed(2)} cookies`;
            document.querySelector(".up2").innerHTML = upgrade2Text;
            let upgrade1Text = `Upgrade 1 (${this.upgrade1Count}) - ${this.upgrade1Price.toFixed(2)} cookies`;
            document.querySelector(".up1").innerHTML = upgrade1Text;
            this.updateCookiesPerSecond();
            let text = `${this.cookies} cookies`;
            document.querySelector(".txt").innerHTML = text;
        }
        else{
            window.alert("you don't have enough cookies");
        }
    }

    startCookieLoop() {
            this.interval = setInterval(() => {
            this.cookies = this.cookies.plus(this.cookiesPerSecond);
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
let clickUpgrade = document.querySelector(".catupgrade");
let cpsUpgrade = document.querySelector(".rexupgrade");

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
