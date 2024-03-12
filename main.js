var tspSelected = true;
var servings = 1;

function setServings()
{
    servings = document.getElementById("slider").value;

    document.getElementById("servings-subtitle").innerHTML = "Servings: " + servings;

    updateIngredients();
}

function selectML()
{
    document.getElementById("measurement-ml").style.backgroundColor = 'crimson';
    document.getElementById("measurement-ml").style.color = 'white';
    document.getElementById("measurement-tsp").style.backgroundColor = 'lightgray';
    document.getElementById("measurement-tsp").style.color = 'black';
    
    tspSelected = false;

    updateIngredients();
}

function selectTSP()
{
    document.getElementById("measurement-ml").style.backgroundColor = 'lightgray';
    document.getElementById("measurement-ml").style.color = 'black';
    document.getElementById("measurement-tsp").style.backgroundColor = 'crimson';
    document.getElementById("measurement-tsp").style.color = 'white';

    tspSelected = true;

    updateIngredients();
}

function updateIngredients()
{
    var butter = 2 * servings;
    var bread = 2 * servings;
    var jelly = 2 * servings;
    var pbj = 1 * servings;

    document.getElementById("bread").innerHTML = bread + " slices white bread";
    
    if(!tspSelected)
    {
        document.getElementById("butter").innerHTML = Math.round(butter * 4.92892) + " milliliters butter";
        document.getElementById("jelly").innerHTML = Math.round(jelly * 4.92892) + " milliliters any flavor fruit jelly";
        document.getElementById("pbj").innerHTML = Math.round(pbj * 4.92892) + " milliliters peanut butter";
    }
    else
    {
        document.getElementById("butter").innerHTML = butter + " teaspoons butter";
        document.getElementById("jelly").innerHTML = jelly + " teaspoons any flavor fruit jelly";
        document.getElementById("pbj").innerHTML = pbj + " teaspoon peanut butter";
    }
}