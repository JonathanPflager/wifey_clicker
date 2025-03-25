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
  int_coffee_increment:number = 1;
 
  int_coffee_upgrade_cost:number = 10;
  int_coffee_upgrade_mult:number = 1.25
  int_coffee_upgrade_cost_mult: number = 2;
  
  int_nap_increment:number = 5;


  
  

  //game values

  //coffee values
  game_total = this.int_total;
  game_coffee_increment:number = this.int_coffee_increment;
  
  game_coffee_upgrade_cost = this.int_coffee_upgrade_cost;
  game_coffee_upgrade_mult = this.int_coffee_upgrade_mult;
  game_coffee_upgrade_cost_mult = this.int_coffee_upgrade_cost_mult;

  //nap values
  game_nap_increment:number = this.int_nap_increment;

  //bed values
 

  //shopping values
  
  //say yes day values
  
  //wedding values
  

  drink_coffee() {
     this.game_total = this.game_total + this.game_coffee_increment;
    
  }  

button_nap(){
    this.game_total = this.game_total + this.game_nap_increment;
  }

  button_bed(){
    
  }

  button_shopping(){
    
  }

  button_say_yes_day(){
    
  }

  button_wedding_day(){
    
  }

  //reset game, gives bonus to increment
    reset() {
      
        //reset nap values

        //reset bed day values
       
        //reset shopping values
       
        //reset say yes day values
       
        //reset wedding values
       
        //increase reset cost
        
      }
    

    coffee_up(activity_cost:number, mulitplier:number, cost_mult:number) {
      if(this.game_total >= activity_cost) {
        this.game_total = this.game_total - activity_cost;
        this.game_coffee_increment = this.game_coffee_increment * mulitplier;
        this.game_coffee_upgrade_cost = (activity_cost * cost_mult);
      }
    }

    nap_up(){
      
      }
    

    bed_up(){
      
    }

    shopping_up(){
     
    }

    say_yes_day_up(){
      
    }

    wedding_day_up(){
      
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
      game_coffee_increment: this.game_coffee_increment,
      
      game_coffee_upgrade_cost: this.game_coffee_upgrade_cost,
      game_coffee_upgrade_mult: this.game_coffee_upgrade_mult,
      game_coffee_upgrade_cost_mult: this.game_coffee_upgrade_cost_mult,
  
    };
  
    localStorage.setItem('wifey_clicker_save', JSON.stringify(gameState));
  }

  loadGame() {
    const savedGame = localStorage.getItem('wifey_clicker_save');
  
    if (savedGame) {
      const gameState = JSON.parse(savedGame);
  
      this.game_total = gameState.game_total;
      this.game_coffee_increment = gameState.game_coffee_increment;
      
      this.game_coffee_upgrade_cost = gameState.game_coffee_upgrade_cost;
      this.game_coffee_upgrade_mult = gameState.game_coffee_upgrade_mult;
      this.game_coffee_upgrade_cost_mult = gameState.game_coffee_upgrade_cost_mult;
  
    }
  }
  resetGame() {
    localStorage.removeItem('wifey_clicker_save');
    location.reload(); // Refresh to reset the game
}
}

