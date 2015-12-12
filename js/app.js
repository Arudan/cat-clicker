var ViewModel = function () {
  this.name = ko.observable('Pino');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.clickCount = ko.observable(0);
  this.imgAuthor = ko.observable();
  this.level = ko.computed(function(){
    if (this.clickCount() <= 10) {return 'infant';}
    else if (10 < this.clickCount() && this.clickCount() <= 20) {return 'young';}
    else if (this.clickCount() > 20){return 'adult';}
  }, this);

  this.incrementCounter = function(){
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
