import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  
  constructor() {
    this.loadGame();
    this.testNap();
    this.testBed();
    this.testShop();
    this.testYes();
    this.testWedding();
  }
  
  ngOnInit() {
    this.loadGame();
    setInterval(() => this.saveGame(), 100);
    setInterval(() => this.bulkTest(), 100);
  }
  title:string = 'wifey_clicker';

  bulkTest(){
    this.testNap();
    this.testBed();
    this.testShop();
    this.testYes();
    this.testWedding();
  }

  //game values

  total = 0;
  reset_cost:number = 50000;
  pMult = 1;

  //game increments
  coffee_inc:number = 1;
  nap_inc:number = 5;
  bed_inc:number = 25;
  shop_inc:number = 100;
  yes_inc:number = 500;
  wedding_inc:number = 2500;

  
  //upgrade values
  coffee_up_cost:number = 10;
  coffee_up_mult:number = 1.25;
  coffee_up_cost_mult:number = 2;

  nap_up_cost:number = 100;
  nap_up_mult:number = 1.25;
  nap_up_cost_mult:number = 2;

  bed_up_cost:number = 1000;
  bed_up_mult:number = 1.25;
  bed_up_cost_mult:number = 2;

  shop_up_cost:number = 10000;
  shop_up_mult:number = 1.25;
  shop_up_cost_mult:number = 2;

  yes_up_cost:number = 100000;
  yes_up_mult:number = 1.25;
  yes_up_cost_mult:number = 2;

  wedding_up_cost:number = 1000000;
  wedding_up_mult:number = 1.25;
  wedding_up_cost_mult:number = 2;

  drink_coffee() {
     this.total = this.total + (this.coffee_inc * this.pMult);
     console.log(this.total, this.coffee_inc);
  }  

    isNapDisabled:boolean = true;
    napString:string = "Take a Nap (Cost 100)";
    napTimer:number = 5;
    napInterval: any;
    napCountdown:any;
    
    testNap() {
    if(this.total >= 100)
      this.isNapDisabled = false;
    }

    after_nap_button(){
      this.napTimer = 5;
      if(this.napCountdown){
        clearInterval(this.napCountdown);
      }

      this.napCountdown = setInterval(() => {
        this.napTimer--;
        this.napString = `Take a nap + ${this.nap_inc * this.pMult} happiness (${this.napTimer + 1} seconds)`;

        if (this.napTimer <= 0) {
          this.napTimer = 5;
        }
      }, 1000);

      if (!this.napInterval) {
        this.napInterval = setInterval(() => {
          this.total += this.nap_inc * this.pMult;
        }, 5000);
      }
    }

    button_nap(){
        this.total = this.total - 100;   
        this.isNapDisabled = true;      
        this.after_nap_button();    
  }

  testBed(){
    if(this.total >= 1000)
      this.isBedDisabled = false;
  }
  isBedDisabled:boolean = true;

  bedString:string = "Bed Day (Cost 1000)";

  button_bed(){
    this.total = this.total + (this.bed_inc * this.pMult);          
        this.bedString = ("Bed Day + " + (this.bed_inc * this.pMult) + " happiness (10 seconds)");
        setTimeout(() => {
          this.button_bed();
        }, 10000);
  }

  testShop(){
    if(this.total >= 10000)
      this.isShopDisabled = false;
  }
  isShopDisabled:boolean = true;

  shopString:string = "Shopping (Cost 10000)";

  button_shopping(){
    this.total = this.total + (this.shop_inc * this.pMult);          
        this.bedString = ("Bed Day + " + (this.bed_inc * this.pMult) + " happiness (25 seconds)");
        setTimeout(() => {
          this.button_shopping();
        }, 25000);
  }

  testYes(){
    if(this.total >= 100000)
      this.isYesDisabled = false;
  }
  isYesDisabled:boolean = true;

  yesString:string = "Say Yes Day (Cost 100,000)";

  button_say_yes_day(){
    this.total = this.total + (this.yes_inc * this.pMult);          
        this.yesString = ("Say Yes Day + " + (this.yes_inc * this.pMult) + " happiness (50 seconds)");
        setTimeout(() => {
          this.button_say_yes_day();
        }, 50000);
  }

  testWedding(){
    if(this.total >= 1000000)
      this.isWeddingDisabled = false;
  }
  isWeddingDisabled:boolean = true;
  weddingString:string = "Wedding Day (Cost 100000)";

  button_wedding_day(){
    this.total = this.total + (this.wedding_inc * this.pMult);          
        this.weddingString = ("Wedding Day + " + (this.wedding_inc * this.pMult) + " happiness (120 seconds)");
        setTimeout(() => {
          this.button_wedding_day();
        }, 120000);
  }

  //reset game, gives bonus to increment
    reset() {
        if(this.total >=this.reset_cost){
          this.reset_cost = (this.reset_cost * 5);
          this.pMult = (this.pMult * 2);

          //reset happines level
          this.total = 0;

          //reset increments
          this.coffee_inc = 1;
          this.nap_inc = 5;
          this.bed_inc = 25;
          this.shop_inc = 100;
          this.yes_inc = 500;
          this.wedding_inc = 2500;

          
         //reset upgrade values
          this.coffee_up_cost = 10;
          this.coffee_up_mult = 1.25;
          this.coffee_up_cost_mult = 2;

          this.nap_up_cost = 100;
          this.nap_up_mult = 1.25;
          this.nap_up_cost_mult = 2;

          this.bed_up_cost = 1000;
          this.bed_up_mult = 1.25;
          this.bed_up_cost_mult = 2;

          this.shop_up_cost = 10000;
          this.shop_up_mult = 1.25;
          this.shop_up_cost_mult = 2;

          this.yes_up_cost = 100000;
          this.yes_up_mult = 1.25;
          this.yes_up_cost_mult = 2;

          this.wedding_up_cost = 1000000;
          this.wedding_up_mult = 1.25;
          this.wedding_up_cost_mult = 2;
        }
      }
    

    coffee_up() {
      if(this.total >= this.coffee_up_cost) {
        this.total = (this.total - this.coffee_up_cost);
        this.coffee_inc = (this.coffee_inc * this.coffee_up_mult);
        this.coffee_up_cost = (this.coffee_up_cost * this.coffee_up_cost_mult);
      }
    }

    nap_up(){
      if(this.total >= this.nap_up_cost) {
        this.total = (this.total = this.nap_up_cost);
        this.nap_inc = (this.nap_inc * this.nap_up_mult);
        this.nap_up_cost = (this.nap_up_cost * this.nap_up_cost_mult)
      }
      }
    

    bed_up(){
      if(this.total >= this.bed_up_cost) {
        this.total = (this.total = this.bed_up_cost);
        this.bed_inc = (this.bed_inc * this.bed_up_mult);
        this.bed_up_cost = (this.bed_up_cost * this.bed_up_cost_mult)
      }
    }

    shopping_up(){
      if(this.total >= this.shop_up_cost) {
        this.total = (this.total = this.shop_up_cost);
        this.shop_inc = (this.shop_inc * this.shop_up_mult);
        this.shop_up_cost = (this.shop_up_cost * this.shop_up_cost_mult)
      }
    }

    say_yes_day_up(){
      if(this.total >= this.yes_up_cost) {
        this.total = (this.total = this.yes_up_cost);
        this.yes_inc = (this.yes_inc * this.yes_up_mult);
        this.yes_up_cost = (this.yes_up_cost * this.yes_up_cost_mult)
      }
      
    }

    wedding_day_up(){
      if(this.total >= this.wedding_up_cost) {
        this.total = (this.total = this.wedding_up_cost);
        this.wedding_inc = (this.wedding_inc * this.wedding_up_mult);
        this.wedding_up_cost = (this.wedding_up_cost * this.wedding_up_cost_mult)
      }
    }


    get_random():number {
      return Math.random() * (5-1) + 1;
    }

    secret_num: number = 0;
    display:string = "🥰";
  

    hearts(){
      this.secret_num = Math.round(this.get_random());

      switch (this.secret_num){

      case 1:
        this.display = "🥰";
        break;
      case 2:
        this.display = "💝";
        break;
      case 3:
        this.display = "💞";
        break;
      
      case 4:
        this.display = "😘";
        break;

      case 5:
        this.display = "😍";
        break;

      default:
        this.display = "🥰";
    }
  } 

  saveGame() {
    const gameState = {
       total: this.total,
      
       coffee_inc: this.coffee_inc,
       nap_inc: this.nap_inc,
       bed_inc: this.bed_inc,
       ship_inc: this.shop_inc,
       ues_inc: this.yes_inc,
       wedding_inc: this.wedding_inc,

       coffee_up_cost: this.coffee_up_cost,
       coffee_up_mult: this.coffee_up_mult,
       coffee_up_cost_mult: this.coffee_up_cost_mult,

       nap_up_cost: this.nap_up_cost,
       nap_up_mult: this.nap_up_mult,
       nap_up_cost_mult: this.nap_up_cost_mult,

       bed_up_cost: this.bed_up_cost,
       bed_up_mult: this.bed_up_mult,
       bed_up_cost_mult: this.bed_up_cost_mult,

       shop_up_cost: this.shop_up_cost,
       shop_up_mult: this.shop_up_mult,
       shop_up_cost_mult: this.shop_up_cost_mult,

       yes_up_cost: this.yes_up_cost,
       yes_up_mult: this.yes_up_mult,
       yes_up_cost_mult: this.yes_up_cost_mult,

       wedding_up_cost: this.wedding_up_cost,
       wedding_up_mult: this.wedding_up_mult,
       wedding_up_cost_mult: this.wedding_up_cost_mult,
  
    };
  
    localStorage.setItem('wifey_clicker_save', JSON.stringify(gameState));
  }

  loadGame() {
    const savedGame = localStorage.getItem('wifey_clicker_save');
  
    if (savedGame) {
      const gameState = JSON.parse(savedGame);
  
      this.total = gameState.total;
     

       this.coffee_inc = gameState.coffee_inc;
       this.nap_inc = gameState.nap_inc;
       this.bed_inc = gameState.bed_inc;
       this.shop_inc = gameState.shop_inc;
       this.yes_inc = gameState.yes_inc;
       this.wedding_inc = gameState.wedding_inc;

       this.coffee_up_cost = gameState.coffee_up_cost;
       this.coffee_up_mult = gameState.coffee_up_mult;
       this.coffee_up_cost_mult = gameState.coffee_up_cost_mult;

       this.nap_up_cost = gameState.nap_up_cost;
       this.nap_up_mult = gameState.nap_up_mult;
       this.nap_up_cost_mult = gameState.nap_up_cost_mult;

       this.bed_up_cost = gameState.bed_up_cost;
       this.bed_up_mult = gameState.bed_up_mult;
       this.bed_up_cost_mult = gameState.bed_up_cost_mult;

       this.shop_up_cost = gameState.shop_up_cost;
       this.shop_up_mult = gameState.shop_up_mult;
       this.shop_up_cost_mult = gameState.shop_up_cost_mult;

       this.yes_up_cost = gameState.yes_up_cost;
       this.yes_up_mult = gameState.yes_up_mult;
       this.yes_up_cost_mult = gameState.yes_up_cost_mult;

       this.wedding_up_cost = gameState.wedding_up_cost;
       this.wedding_up_mult = gameState.wedding_up_mult;
       this.wedding_up_cost_mult = gameState.wedding_up_cost_mult;
    }
  }
  resetGame() {
    localStorage.removeItem('wifey_clicker_save');
    location.reload(); // Refresh to reset the game
}
}

