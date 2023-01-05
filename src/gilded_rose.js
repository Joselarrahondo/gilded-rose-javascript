class Item {
  constructor(name, sell_in, quality){
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
  }
}

class CheeseItem extends Item {
  updateQuality(){
    this.sell_in--
    if(this.quality < 50){
      this.quality++;
    }
  }
}
class BackStagePass extends Item{
  updateQuality(){
    
    if(this.sell_in <= 10 && this.sell_in > 5) {
      this.quality += 2;
    } else if(this.sell_in <= 5 && this.sell_in > 0) {
      this.quality +=3
    } else if(this.sell_in < 0) {
      this.quality = 0;
    }else {
      this.quality++;
    }
    this.sell_in--;
  }
}
class Legendary extends Item{
  updateQuality(){}
    

  }
class BasicItem extends Item {
  updateQuality() {
    if(this.quality > 0){
    if(this.sell_in < 0){
      this.quality -= 2
    } else{
      this.quality--
    }
  }
      this.sell_in--;
  }
}

class Twiceasfast extends Item {
  updateQuality(){
    if(this.sell_in > 1){
      this.quality -= 2
    };
    if(this.sell_in <= 1){
      this.quality = 0 
    };
      this.sell_in--;
  };
};

var items = []

items.push(new BasicItem('+5 Dexterity Vest', 10, 20));
items.push(new CheeseItem('Aged Brie', 2, 0));
items.push(new BasicItem('Elixir of the Mongoose', 5, 7));
items.push(new Legendary('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new BackStagePass('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Twiceasfast('Conjured Mana Cake', 3, 6));

function update_quality() {
for (let item of items) {
  item.updateQuality(); 
}
}



