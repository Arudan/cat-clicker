var initialCats = [
  {
    name: 'Pino',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    clickCount: 0,
    imgAuthor: 'ciao',
    nicknames:['Bert', 'Pinuccio', 'Gatto', 'Felino']
  },
  {
    name: 'Gimmy',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    clickCount: 0,
    imgAuthor: 'ciao',
    nicknames:['Gimmy', 'Gimmyic', 'Gatto', 'Felino']
  },
  {
    name: 'Lucaz',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    clickCount: 0,
    imgAuthor: 'ciao',
    nicknames:['Lucazino', 'Acul', 'Princess of Ibiza']
  },
  {
    name: 'Igor',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    clickCount: 0,
    imgAuthor: 'ciao',
    nicknames:['Igorino', 'Aigor']
  },
  {
    name: 'Iperbole',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    clickCount: 0,
    imgAuthor: 'ciao',
    nicknames:['Parabola', 'Curva']
  }
];

var Cat = function (data){
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.clickCount = ko.observable(data.clickCount);
  this.imgAuthor = ko.observable(data.imgAuthor);
  this.nicknames = ko.observableArray(data.nicknames);
  this.level = ko.computed(function(){
    if (this.clickCount() <= 10) {return 'infant';}
    else if (10 < this.clickCount() && this.clickCount() <= 20) {return 'young';}
    else if (this.clickCount() > 20){return 'adult';}
  }, this);
};

var ViewModel = function () {
  var self = this;

  self.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  self.currentCat = ko.observable(self.catList()[0]);

  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  self.changeCurrentCat = function(clickedCat, event){
    var context = ko.contextFor(event.target);
    var index = context.$index();
    self.currentCat(self.catList()[index]);
  };
};

ko.applyBindings(new ViewModel());
