'use strict';

//Directory121
// Declare app level module which depends on filters, and services
var kioskApp=angular.module('kioskApp', [
  //'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]);

kioskApp.controller('SwitchEm', function($scope){
    $scope.currentURL= "touchDirectory";
    //$scope.currentURL= "buildingDirectory";
    $scope.urls={ "touchDirectory": "partials/touchdirectory.html",
                "buildingDirectory": "partials/buildingdirectory.html",
                "neighborhoodGuide": "partials/neighborhoodguide.html"};
    $scope.changeView= function(name){
      $scope.currentURL=name;
    };
$scope.data={
    "companies": [
        {"cname": "1 - 800 POSTCARDS", "floor": 4, "suite": ""},
        {"cname": "1 - 800 POSTCARDS Accounting", "floor": 4, "suite": ""},
        {"cname": "Active Process Supply", "floor": 2, "suite": ""},
        {"cname": "AGI Media Group", "floor": 3, "suite": "301"},
        {"cname": "Allied Reproductions", "floor": 9, "suite": ""},
        {"cname": "Arclight Design", "floor": 5, "suite": ""},
        {"cname": "Atlantic Metro Communications", "floor": 6, "suite": ""},
        {"cname": "Bell Imaging Inc", "floor": 2, "suite": ""},
        {"cname": "Bella Graphics", "floor": 2, "suite": ""},
        {"cname": "Brand New School", "floor": 11, "suite": ""},
        {"cname": "Brody Digital Graphics Inc.", "floor": 2, "suite": ""},
        {"cname": "Cementex Latex Corp", "floor": 2, "suite": ""},
        {"cname": "Charles Henricks, Inc.", "floor": 9, "suite": ""},
        {"cname": "Circle Press", "floor": 4, "suite": ""},
        {"cname": "Colorfast NYC", "floor": 9, "suite": ""},
        {"cname": "Conkur Printing", "floor": 2, "suite": ""},
        {"cname": "Creative Printing", "floor": 9, "suite": ""},
        {"cname": "Crown Printing", "floor": 2, "suite": ""},
        {"cname": "D&L Lithography", "floor": 2, "suite": ""},
        {"cname": "DeJay Lithographers, Inc.", "floor": 10, "suite": ""},
        {"cname": "Depicture Corp.", "floor": 3, "suite": ""},
        {"cname": "Dotcom Hotel", "floor": 2, "suite": ""},
        {"cname": "Draper Associates Inc.", "floor": 2, "suite": ""},
        {"cname": "Dune Studios", "floor": 8, "suite": "Left Suite"},
        {"cname": "Dune Studios", "floor": 12, "suite": ""},
        {"cname": "Dune Studios", "floor": 7, "suite": ""},
        {"cname": "Eagle Fine Papers Inc.", "floor": 10, "suite": ""},
        {"cname": "Fairmount Press", "floor": 9, "suite": ""},
        {"cname": "Flemington Electric.", "floor": 8, "suite": ""},
        {"cname": "G3 Graphix", "floor": 3, "suite": ""},
        {"cname": "Graphic Consulting Inc.", "floor": 12, "suite": ""},
        {"cname": "Guaranteed Printing Service Co, Inc.", "floor": 10, "suite": ""},
        {"cname": "Holdens Latex Corp.", "floor": 2, "suite": ""},
        {"cname": "Holdens Screen Supply Corp.", "floor": 2, "suite": ""},
        {"cname": "Irene David Realty Inc.", "floor": 2, "suite": ""},
        {"cname": "JLF Print Graphics Inc.", "floor": 3, "suite": ""},
        {"cname": "MC Squared", "floor": 2, "suite": ""},
        {"cname": "MetroClick NY", "floor": 3, "suite": "301"},
        {"cname": "Nasco Printing", "floor": 2, "suite": ""},
        {"cname": "New York Digital Color Lithographers", "floor": 10, "suite": ""},
        {"cname": "Newport Graphics Inc.", "floor": 2, "suite": ""},
        {"cname": "Next Magazine", "floor": 4, "suite": ""},
        {"cname": "NYC Printers", "floor": 3, "suite": ""},
        {"cname": "O'Sullivan Digital Communications", "floor": 9, "suite": ""},
        {"cname": "Overnight Press Leap", "floor": 4, "suite": ""},
        {"cname": "PitaPrinting", "floor": 2, "suite": ""},
        {"cname": "Positive Print Litho Offset", "floor": 2, "suite": ""},
        {"cname": "Proof 7", "floor": 3, "suite": "301"},
        {"cname": "Quantum Printing Co. Inc.", "floor": 10, "suite": ""},
        {"cname": "R&M Graphics", "floor": 9, "suite": ""},
        {"cname": "Rainbow Printing Inc.", "floor": 10, "suite": ""},
        {"cname": "RMI Printing", "floor": 3, "suite": ""},
        {"cname": "Rochambeau", "floor": 3, "suite": "301"},
        {"cname": "Sandbox Studio", "floor": 10, "suite": ""},
        {"cname": "Standard Screen Supply Corp.", "floor": 2, "suite": ""},
        {"cname": "Starkey & Henricks", "floor": 9, "suite": ""},
        {"cname": "The Thomas Group", "floor": 8, "suite": ""},
        {"cname": "tonychi and associates", "floor": 5, "suite": ""},
        {"cname": "Totem (Entrance on Dominick Street)", "floor": 1, "suite": "Domnic Street"},
        {"cname": "Undergrind", "floor": 3, "suite": "301"},
        {"cname": "Varick Street Litho", "floor": 3, "suite": "301"},
        {"cname": "West End Graphics", "floor": 12, "suite": ""},
        {"cname": "Windsor Graphics Inc.", "floor": 2, "suite": ""},
        {"cname": "XL Graphics", "floor": 10, "suite": ""},
        {"cname": "Zenith Color Communications Group, Inc.", "floor": 10, "suite": ""}


    ],
    "individuals": [
        {"cname": "1 - 800 POSTCARDS", "floor": 4, "name": "Hafer, Keith"},
        {"cname": "1 - 800 POSTCARDS", "floor": 4, "name": "Hou, Tan"},
        {"cname": "1 - 800 POSTCARDS", "floor": 4, "name": "Johnson, Lou"},
        {"cname": "1 - 800 POSTCARDS", "floor": 4, "name": "Moyal, David"},
        {"cname": "1 - 800 POSTCARDS", "floor": 4, "name": "Occhiogrosso, Michael"},
        {"cname": "Bell Imaging Inc", "floor": 4, "name": "Bell, Terence"},
        {"cname": "Brody Digital Graphics Inc.", "floor": 2, "name": "Brody, David"},
        {"cname": "Circle Press", "floor": 4, "name": "Gherman, Nicu"},
        {"cname": "Circle Press", "floor": 4, "name": "Jin, Dayu"},
        {"cname": "Circle Press", "floor": 4, "name": "Lawrence, Gregory"},
        {"cname": "Circle Press", "floor": 4, "name": "Velasquez, Margarita"},
        {"cname": "Colorfast NYC", "floor": 9, "name": "Doktori, Lani"},
        {"cname": "JLF Print Graphics Inc.", "floor": 3, "name": "Adams, Mary"},
        {"cname": "Next Magazine", "floor": 4, "name": "Buckley, Roberto"},
        {"cname": "Next Magazine", "floor": 8, "name": "Piazza, Charlie"},
        {"cname": "Next Magazine", "floor": 4, "name": "Robinder, Don"},
        {"cname": "Next Magazine", "floor": 8, "name": "Eikson, Alex"},
        {"cname": "NYC Printers", "floor": 3, "name": "Amit, Haim"},
        {"cname": "NYC Printers", "floor": 10, "name": "Haim, Amit"},
        {"cname": "PitaPrinting", "floor": 4, "name": "Kelman, Danny"},
        {"cname": "RMI Printing", "floor": 3, "name": "Altman, Harvey"},
        {"cname": "RMI Printing", "floor": 3, "name": "Aquila, Rick"},
        {"cname": "RMI Printing", "floor": 3, "name": "Kufel, Jay"},
        {"cname": "RMI Printing", "floor": 3, "name": "Visoky, Steve"},
        {"cname": "Standard Screen Supply Corp.", "floor": 2, "name": "Gononsky, Arthur"},
        {"cname": "Standard Screen Supply Corp.", "floor": 2, "name": "Gononsky, Jeffrey"},
        {"cname": "Standard Screen Supply Corp.", "floor": 2, "name": "Rodriguez, Lillian"},
        {"cname": "Starkey & Henricks", "floor": 9, "name": "Bird, P. Douglas"},
        {"cname": "Starkey & Henricks", "floor": 9, "name": "Bird, G. Peter"},
        {"cname": "The Thomas Group", "floor": 8, "name": "Thomas, Glen"},
        {"cname": "The Thomas Group", "floor": 8, "name": "Thomas, Jamie"},
        {"cname": "tonychi and associates", "floor": 5, "name": "Bicol, Nelson"},
        {"cname": "tonychi and associates", "floor": 5, "name": "Chi, Tony"},
        {"cname": "tonychi and associates", "floor": 5, "name": "Chou, Tammy"},
        {"cname": "tonychi and associates", "floor": 5, "name": "Marsh, Johnny"},
        {"cname": "tonychi and associates", "floor": 5, "name": "Paley, William"},
        {"cname": "tonychi and associates", "floor": 5, "name": "Singer, David"},
        {"cname": "Varick Street Litho", "floor": 3, "name": "Last, David"},
        {"cname": "Windsor Graphics Inc.", "floor": 4, "name": "Diesa, Michael"},
        {"cname": "Windsor Graphics Inc.", "floor": 4, "name": "Lubetsky, Steve"},
        {"cname": "XL Graphics", "floor": 10, "name": "Baltimore, Jeff"},
        {"cname": "XL Graphics", "floor": 10, "name": "Lemieux, Michele"}


    ]
};
    $scope.compName=[ {cName: "MetroClick", ind: "Paul"},
                      {cName: "Acme", ind: "Bob"},
                      {cName: "Acme", ind: "Jerry"},
                      {cName: "Acme", ind: "James"},
                      {cName: "MetroClick", ind : "Alex"},
                      {cName: "MetroClick", ind: "Numero 2"},
                      {cName: "MetroClick", ind: "Numero 1"},
                      {cName: "MetroClick", ind: "Employee 4"},
                      {cName: "PublishingInc", ind: "Employee 1"},
                      {cName: "PublishingInc", ind: "Boss 1"},
                      {cName: "Clickster", ind: "Chris"},
                      {cName: "Acme", ind: "Rafael"},
                      {cName: "MetroClick", ind : "Nate"},
                      {cName: "Clickster", ind: "Larry"},
                      {cName: "Clickster", ind: "Jefe"},
                      {cName: "Acme", ind: "Harry"},
                      {cName: "Acme", ind: "James"},
                      {cName: "Fixer", ind : "Dylan"},
                      {cName: "Fixer", ind: "Peter"},
                      {cName: "Fixer", ind: "Kyle"}
                    ];
                    
                   
    $scope.chars=[{ch: "A"},{ch: "B"},{ch: "C"},{ch: "D"},{ch: "E"},
                  {ch: "F"},{ch: "G"},{ch: "H"},{ch: "I"},{ch: "J"},
                  {ch: "K"},{ch: "L"},{ch: "M"},{ch: "N"},{ch: "O"},
                  {ch: "P"},{ch: "Q"},{ch: "R"},{ch: "S"},{ch: "T"},
                  {ch: "U"},{ch: "V"},{ch: "W"},{ch: "X"},{ch: "Y"},
                  {ch: "Z"}];
    $scope.searching={searchIt:""}; //""; //for searching through list and ngmodel
    $scope.ordering='cname'; //for ordering through list
    $scope.letter="";
    $scope.byCompName=true;////for styling green button around indi or company
    $scope.sortSet=function(){ //toggle to compname or ind list
        $scope.byCompName=!$scope.byCompName;
        $scope.ordering= $scope.byCompName? 'cname' : 'name';
    };
    $scope.setsearchChar=function(char){
        $scope.searching.searchIt=char.ch;
        $scope.letter=char.ch;
        console.log($scope.ordering);
    };
    
    
    $scope.filterLetter= "\w*"; //"a-z";
    $scope.setFilterLetter=function(character){
        //use tis forfiltering by first letter
        //for now just link to search field
        //$scope.filterLetter=letter;
        //console.log($scope.filterLetter);
        
        //$scope.letter=character;
       
        if($scope.byCompName){
            $scope.letter={cName : character};            
        }
        else{
            $scope.letter={ind : character};   
        }
        
       //below filters by letter for everything
        //$scope.ordering=letter;
    };
    

    $scope.filterByLetter=function(){
       return function(Name) {
           if($scope.byCompName){
               return Name.cName.charAt(0)===$scope.filterLetter;
                       //match(/$scope.filterLetter/i); //filter by cName here
           }
           else{
               return /[^($scope.filterLetter)]/i.test(Name.ind);
                //return Name.ind.match(/($scope.filterLetter)/i); //filter by cName here
           }
       };
    };
    

    
});


kioskApp.filter("byFirstLetter", function(){
  return function(input, expected) {
    console.log(input.charAt(0));
    return input.charAt(0)==expected;
    
  };
});

//http://gmap-tutorial-101.appspot.com/mapsapi101/3

/*
var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);
var acOptions = {
  types: ['establishment']
};
var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
autocomplete.bindTo('bounds',map);
var infoWindow = new google.maps.InfoWindow();
var marker = new google.maps.Marker({
  map: map
});

google.maps.event.addListener(autocomplete, 'place_changed', function() {
  infoWindow.close();
  var place = autocomplete.getPlace();
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }
  marker.setPosition(place.geometry.location);
  infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
  infoWindow.open(map, marker);
  google.maps.event.addListener(marker,'click',function(e){

    infoWindow.open(map, marker);

  });
});
*/