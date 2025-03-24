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
  }

  ngOnInit() {
    this.loadGame();
    setInterval(() => this.saveGame(), 100);
}
  title:string = 'wifey_clicker';

  //intial values
  int_total:number = 0;
  int_increment:number = 1;
 
  int_coffee_upgrade_cost:number = 10;
  int_coffee_upgrade_mult:number = 0.5
  int_coffee_upgrade_cost_mult: number = 1.5;
  
  int_nap_cost:number = 150;
  int_nap_cost_mult:number = 1.5;
  int_nap_upgrade_cost:number = 1000;
  int_nap_upgrade_mult:number = 0.20;
  int_nap_mult:number =1.10;
  int_nap_upgrade_cost_mult = 5;

  int_bed_cost:number = 1500;
  int_bed_cost_mult:number = 2;
  int_bed_upgrade_cost:number = 10000;
  int_bed_upgrade_mult:number = 0.25;
  int_bed_mult:number = 1.15;
  int_bed_upgrade_cost_mult = 5;

  int_shopping_cost:number = 15000;
  int_shopping_cost_mult:number = 2.5;
  int_shopping_upgrade_cost:number = 100000;
  int_shopping_upgrade_mult:number = 0.30;
  int_shopping_mult:number = 1.20;
  int_shopping_upgrade_cost_mult = 5;

  int_say_yes_day_cost:number = 150000;
  int_say_yes_day_cost_mult:number = 3;
  int_say_yes_day_upgrade_cost:number = 1000000;
  int_say_yes_day_upgrade_mult:number = 0.35;
  int_say_yes_day_mult:number = 1.25;
  int_say_yes_day_upgrade_cost_mult = 5;

  int_wedding_day_cost:number = 1500000;
  int_wedding_day_cost_mult:number = 3.5;
  int_wedding_day_upgrade_cost:number = 10000000;
  int_wedding_day_upgrade_mult:number = 0.40;
  int_wedding_day_mult:number = 1.30;
  int_wedding_day_upgrade_cost_mult = 5;


  int_wedding_day_count:number = 0;

  int_reset_limit:number = 10000;
  

  //game values

  //coffee values
  game_total = this.int_total;
  game_increment:number = this.int_increment;
  
  game_coffee_upgrade_cost = this.int_coffee_upgrade_cost;
  game_coffee_upgrade_mult = this.int_coffee_upgrade_mult;
  game_coffee_upgrade_cost_mult = this.int_coffee_upgrade_cost_mult;

  //nap values
  game_nap_cost:number = this.int_nap_cost;
  game_nap_mult:number = this.int_nap_mult;
  game_nap_cost_mult:number = this.int_nap_cost_mult;
  game_nap_upgrade_cost:number = this.int_nap_upgrade_cost; 
  game_nap_upgrade_mult = this.int_nap_upgrade_mult;
  game_nap_upgrade_cost_mult:number = this.int_nap_upgrade_cost_mult;

  //bed values
  game_bed_cost:number = this.int_bed_cost;
  game_bed_mult:number = this.int_bed_mult;
  game_bed_cost_mult:number = this.int_bed_cost_mult;
  game_bed_upgrade_cost:number = this.int_bed_upgrade_cost;
  game_bed_upgrade_mult = this.int_bed_upgrade_mult;
  game_bed_upgrade_cost_mult:number = this.int_bed_upgrade_cost_mult;

  //shopping values
  game_shopping_cost:number = this.int_shopping_cost;
  game_shopping_mult:number = this.int_shopping_mult;
  game_shopping_cost_mult:number = this.int_shopping_cost_mult;
  game_shopping_upgrade_cost:number = this.int_shopping_upgrade_cost;
  game_shopping_upgrade_mult = this.int_shopping_upgrade_mult;
  game_shopping_upgrade_cost_mult:number = this.int_shopping_upgrade_cost_mult;

  //say yes day values
  game_say_yes_day_cost:number = this.int_say_yes_day_cost;
  game_say_yes_day_mult:number = this.int_say_yes_day_mult;
  game_say_yes_day_cost_mult:number = this.int_say_yes_day_cost_mult;
  game_say_yes_day_upgrade_cost:number = this.int_say_yes_day_upgrade_cost;
  game_say_yes_day_upgrade_mult = this.int_say_yes_day_upgrade_mult;
  game_say_yes_day_upgrade_cost_mult:number = this.int_say_yes_day_upgrade_cost_mult;

  game_wedding_day_cost:number = this.int_wedding_day_cost;
  game_wedding_day_mult:number = this.int_wedding_day_mult;
  game_wedding_day_cost_mult:number = this.int_wedding_day_cost_mult;
  game_wedding_day_upgrade_cost:number = this.int_wedding_day_upgrade_cost;
  game_wedding_day_upgrade_mult = this.int_wedding_day_upgrade_mult;
  game_wedding_day_upgrade_cost_mult:number = this.int_wedding_day_upgrade_cost_mult;

  game_wedding_day_count:number = this.int_wedding_day_count;

  game_reset_limit:number = this.int_reset_limit;

  drink_coffee() {
     this.game_total = this.game_total + this.game_increment;
    
  }  

button_nap(activity:number, increment_mult:number, cost_mult:number){
    if(this.game_total >= activity) {
      this.game_total = this.game_total - activity;
      this.game_nap_cost = activity * cost_mult;
      this.game_increment = this.game_increment + increment_mult;
    }
  }

  button_bed(activity:number, increment_mult:number, cost_mult:number){
    if(this.game_total >= activity) {
      this.game_total = this.game_total - activity;
      this.game_bed_cost = activity * cost_mult;
      this.game_increment = this.game_increment + increment_mult;
    }
  }

  button_shopping(activity:number, increment_mult:number, cost_mult:number){
    if(this.game_total >= activity) {
      this.game_total = this.game_total - activity;
      this.game_shopping_cost = activity * cost_mult;
      this.game_increment = this.game_increment + increment_mult;
    }
  }

  button_say_yes_day(activity:number, increment_mult:number, cost_mult:number){
    if(this.game_total >= activity) {
      this.game_total = this.game_total - activity;
      this.game_say_yes_day_cost = activity * cost_mult;
      this.game_increment = this.game_increment + increment_mult;
    }
  }

  button_wedding_day(activity:number, increment_mult:number, cost_mult:number){
    if(this.game_total >= activity) {
      this.game_total = this.game_total - activity;
      this.game_wedding_day_cost = activity * cost_mult;
      this.game_increment = this.game_increment + increment_mult;
    }
  }

  //reset game, gives bonus to increment
    reset() {
      if(this.game_total >= this.game_reset_limit) {
        this.game_total = this.int_total;
        this.game_coffee_upgrade_cost = this.int_coffee_upgrade_cost
        this.game_increment= ((this.int_increment * 2) + 3);
        this.int_increment = this.game_increment;

        //reset nap values
        this.game_nap_cost = this.int_nap_cost;
        this.game_nap_cost = this.int_nap_cost;
        this.game_nap_mult = this.int_nap_mult;
        this.game_nap_cost_mult = this.int_nap_cost_mult;
        this.game_nap_upgrade_cost = this.int_nap_upgrade_cost;
        this.game_nap_upgrade_cost_mult = this.int_nap_upgrade_cost_mult;

        //reset bed day values
        this.game_bed_cost = this.int_bed_cost;
        this.game_bed_mult = this.int_bed_mult;
        this.game_bed_cost_mult = this.int_bed_cost_mult;
        this.game_bed_upgrade_cost = this.int_bed_upgrade_cost;
        this.game_bed_upgrade_cost_mult = this.int_bed_upgrade_cost_mult;


        //reset shopping values
        this.game_shopping_cost = this.int_shopping_cost;
        this.game_shopping_mult = this.int_shopping_mult;
        this.game_shopping_cost_mult = this.int_shopping_cost_mult;
        this.game_shopping_upgrade_cost = this.int_shopping_upgrade_cost;
        this.game_shopping_upgrade_cost_mult = this.int_shopping_upgrade_cost_mult;

        //reset say yes day values
        this.game_say_yes_day_cost = this.int_say_yes_day_cost;
        this.game_say_yes_day_mult = this.int_say_yes_day_mult;
        this.game_say_yes_day_cost_mult = this.int_say_yes_day_cost_mult;
        this.game_say_yes_day_upgrade_cost = this.int_say_yes_day_upgrade_cost;
        this.game_say_yes_day_upgrade_cost_mult = this.int_say_yes_day_upgrade_cost_mult;

        //reset wedding values
        this.game_wedding_day_cost = this.int_wedding_day_cost;
        this.game_wedding_day_mult = this.int_wedding_day_mult;
        this.game_wedding_day_cost_mult = this.int_wedding_day_cost_mult;
        this.game_wedding_day_upgrade_cost = this.int_wedding_day_upgrade_cost;
        this.game_wedding_day_upgrade_cost_mult = this.int_wedding_day_upgrade_cost_mult;
        this.game_wedding_day_count = this.int_wedding_day_count;
        
        //increase reset cost
        this.game_reset_limit = (this.game_reset_limit * 10);
      }
    }

    coffee_up(activity_cost:number, mulitplier:number, cost_mult:number) {
      if(this.game_total >= activity_cost) {
        this.game_total = this.game_total - activity_cost;
        this.game_increment = this.game_increment * mulitplier;
        this.game_coffee_upgrade_cost = (activity_cost * cost_mult);
      }
    }

    nap_up(activity_cost: number, mulitplier:number, cost_mult:number){
      if(this.game_total >= activity_cost) {
        this.game_total = this.game_total - activity_cost;
        this.game_nap_mult = this.game_nap_mult * mulitplier;
        this.game_nap_upgrade_cost = this.game_nap_upgrade_cost * cost_mult;
      }
    }

    bed_up(activity_cost: number, mulitplier:number, cost_mult:number){
      if(this.game_total >= activity_cost) {
        this.game_total = this.game_total - activity_cost;
        this.game_bed_mult = this.game_bed_mult * mulitplier;
        this.game_bed_upgrade_cost = this.game_bed_upgrade_cost * cost_mult;
      }
    }

    shopping_up(activity_cost: number, mulitplier:number, cost_mult:number){
      if(this.game_total >= activity_cost) {
        this.game_total = this.game_total - activity_cost;
        this.game_shopping_mult = this.game_shopping_mult * mulitplier;
        this.game_shopping_upgrade_cost = this.game_shopping_upgrade_cost * cost_mult;
      }
    }

    say_yes_day_up(activity_cost: number, mulitplier:number, cost_mult:number){
      if(this.game_total >= activity_cost) {
        this.game_total = this.game_total - activity_cost;
        this.game_say_yes_day_mult = this.game_say_yes_day_mult * mulitplier;
        this.game_say_yes_day_upgrade_cost = this.game_say_yes_day_upgrade_cost * cost_mult;
      }
    }

    wedding_day_up(activity_cost: number, mulitplier:number, cost_mult:number){
      if(this.game_total >= activity_cost) {
        this.game_total = this.game_total - activity_cost;
        this.game_wedding_day_mult = this.game_wedding_day_mult * mulitplier;
        this.game_wedding_day_upgrade_cost = this.game_wedding_day_upgrade_cost * cost_mult;
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
      game_total: this.game_total,
      game_increment: this.game_increment,
      
      game_coffee_upgrade_cost: this.game_coffee_upgrade_cost,
      game_coffee_upgrade_mult: this.game_coffee_upgrade_mult,
      game_coffee_upgrade_cost_mult: this.game_coffee_upgrade_cost_mult,
  
      game_nap_cost: this.game_nap_cost,
      game_nap_mult: this.game_nap_mult,
      game_nap_cost_mult: this.game_nap_cost_mult,
      game_nap_upgrade_cost: this.game_nap_upgrade_cost,
      game_nap_upgrade_mult: this.game_nap_upgrade_mult,
      game_nap_upgrade_cost_mult: this.game_nap_upgrade_cost_mult,
  
      game_bed_cost: this.game_bed_cost,
      game_bed_mult: this.game_bed_mult,
      game_bed_cost_mult: this.game_bed_cost_mult,
      game_bed_upgrade_cost: this.game_bed_upgrade_cost,
      game_bed_upgrade_mult: this.game_bed_upgrade_mult,
      game_bed_upgrade_cost_mult: this.game_bed_upgrade_cost_mult,
  
      game_shopping_cost: this.game_shopping_cost,
      game_shopping_mult: this.game_shopping_mult,
      game_shopping_cost_mult: this.game_shopping_cost_mult,
      game_shopping_upgrade_cost: this.game_shopping_upgrade_cost,
      game_shopping_upgrade_mult: this.game_shopping_upgrade_mult,
      game_shopping_upgrade_cost_mult: this.game_shopping_upgrade_cost_mult,
  
      game_say_yes_day_cost: this.game_say_yes_day_cost,
      game_say_yes_day_mult: this.game_say_yes_day_mult,
      game_say_yes_day_cost_mult: this.game_say_yes_day_cost_mult,
      game_say_yes_day_upgrade_cost: this.game_say_yes_day_upgrade_cost,
      game_say_yes_day_upgrade_mult: this.game_say_yes_day_upgrade_mult,
      game_say_yes_day_upgrade_cost_mult: this.game_say_yes_day_upgrade_cost_mult,
  
      game_wedding_day_cost: this.game_wedding_day_cost,
      game_wedding_day_mult: this.game_wedding_day_mult,
      game_wedding_day_cost_mult: this.game_wedding_day_cost_mult,
      game_wedding_day_upgrade_cost: this.game_wedding_day_upgrade_cost,
      game_wedding_day_upgrade_mult: this.game_wedding_day_upgrade_mult,
      game_wedding_day_upgrade_cost_mult: this.game_wedding_day_upgrade_cost_mult,
  
      game_wedding_day_count: this.game_wedding_day_count,
      game_reset_limit: this.game_reset_limit,
    };
  
    localStorage.setItem('wifey_clicker_save', JSON.stringify(gameState));
  }

  loadGame() {
    const savedGame = localStorage.getItem('wifey_clicker_save');
  
    if (savedGame) {
      const gameState = JSON.parse(savedGame);
  
      this.game_total = gameState.game_total;
      this.game_increment = gameState.game_increment;
      
      this.game_coffee_upgrade_cost = gameState.game_coffee_upgrade_cost;
      this.game_coffee_upgrade_mult = gameState.game_coffee_upgrade_mult;
      this.game_coffee_upgrade_cost_mult = gameState.game_coffee_upgrade_cost_mult;
  
      this.game_nap_cost = gameState.game_nap_cost;
      this.game_nap_mult = gameState.game_nap_mult;
      this.game_nap_cost_mult = gameState.game_nap_cost_mult;
      this.game_nap_upgrade_cost = gameState.game_nap_upgrade_cost;
      this.game_nap_upgrade_mult = gameState.game_nap_upgrade_mult;
      this.game_nap_upgrade_cost_mult = gameState.game_nap_upgrade_cost_mult;
  
      this.game_bed_cost = gameState.game_bed_cost;
      this.game_bed_mult = gameState.game_bed_mult;
      this.game_bed_cost_mult = gameState.game_bed_cost_mult;
      this.game_bed_upgrade_cost = gameState.game_bed_upgrade_cost;
      this.game_bed_upgrade_mult = gameState.game_bed_upgrade_mult;
      this.game_bed_upgrade_cost_mult = gameState.game_bed_upgrade_cost_mult;
  
      this.game_shopping_cost = gameState.game_shopping_cost;
      this.game_shopping_mult = gameState.game_shopping_mult;
      this.game_shopping_cost_mult = gameState.game_shopping_cost_mult;
      this.game_shopping_upgrade_cost = gameState.game_shopping_upgrade_cost;
      this.game_shopping_upgrade_mult = gameState.game_shopping_upgrade_mult;
      this.game_shopping_upgrade_cost_mult = gameState.game_shopping_upgrade_cost_mult;
  
      this.game_say_yes_day_cost = gameState.game_say_yes_day_cost;
      this.game_say_yes_day_mult = gameState.game_say_yes_day_mult;
      this.game_say_yes_day_cost_mult = gameState.game_say_yes_day_cost_mult;
      this.game_say_yes_day_upgrade_cost = gameState.game_say_yes_day_upgrade_cost;
      this.game_say_yes_day_upgrade_mult = gameState.game_say_yes_day_upgrade_mult;
      this.game_say_yes_day_upgrade_cost_mult = gameState.game_say_yes_day_upgrade_cost_mult;
  
      this.game_wedding_day_cost = gameState.game_wedding_day_cost;
      this.game_wedding_day_mult = gameState.game_wedding_day_mult;
      this.game_wedding_day_cost_mult = gameState.game_wedding_day_cost_mult;
      this.game_wedding_day_upgrade_cost = gameState.game_wedding_day_upgrade_cost;
      this.game_wedding_day_upgrade_mult = gameState.game_wedding_day_upgrade_mult;
      this.game_wedding_day_upgrade_cost_mult = gameState.game_wedding_day_upgrade_cost_mult;
  
      this.game_wedding_day_count = gameState.game_wedding_day_count;
      this.game_reset_limit = gameState.game_reset_limit;
    }
  }
  resetGame() {
    localStorage.removeItem('wifey_clicker_save');
    location.reload(); // Refresh to reset the game
}
}

