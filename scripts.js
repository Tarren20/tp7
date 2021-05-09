window.onload = function() {
  document.getElementById('header_s').style.fontSize = '50px'
};

Click = document.querySelector("#header h1");
Click.onclick = function() {
  Click.classList.toggle("click");
};

list_0 = document.querySelector("div#ingredients");
list_0.onclick = function() {
  list_0.classList.toggle("hide");
};

list_1 = document.querySelector("div#equipment");
list_1.onclick = function() {
  list_1.classList.toggle("hide");
};

list_2 = document.querySelector("div#directions");
list_2.onclick = function() {
  list_2.classList.toggle("hide");
};


// JavaScript for TP6

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // prepares code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) {
      document.getElementById(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange

  // now that everything is set, initiate request
  ajax.send();

}


function Recipe(recipeName, imageURL, contributorName, ingredientFilename, equipmentFilename, directionsFilename) {
  this.name = recipeName;
  this.imgsrc = imageURL;
  this.contributor = contributorName;
  this.ingFile = ingredientFilename;
  this.equipFile = equipmentFilename;
  this.dirFile = directionsFilename;
  
  this.displayRecipe = function() {
    document.querySelector("#header h1").innerHTML = this.name;
    document.querySelector("#header h3").innerHTML = "contributed by: " + this.contributor;
    document.querySelector("#image img").src = this.imgsrc;
    loadFileInto(this.ingFile, "ingredients");
    loadFileInto(this.equipFile, "equipment");
    loadFileInto(this.dirFile, "directions");
    
    
  }
}

SlowCookingSalsaChicken = new Recipe(
  "Slow Cooking Salsa Chicken", 
  "https://www.theseasonedmom.com/wp-content/uploads/2018/03/Zero-Point-Dump-and-Bake-Salsa-Chicken-6.jpg",
  "Tarren McDaniel",
  "ingredients.html",
  "equipment.html",
  "directions.html"
);

RighteousRaspberryBrownies = new Recipe(
  "Righteous Raspberry Brownies", 
  "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "Khrystine Raymond ",
  "R_ingredients.html",
  "R_equipment.html",
  "R_directions.html"
);

BreadedFriedSoftlySpicedTofu = new Recipe(
  "Breaded, Fried, Softly Spiced Tofu", 
  "https://github.com/raekolke/tp4/blob/main/tp4-image.jpg?raw=true",
  "Rae Kolke ",
  "B_ingredients.html",
  "B_equipment.html",
  "B_directions.html"
);



