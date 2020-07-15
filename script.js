const recipePuppy = function  () {

    let form = document.querySelector('.inputSearch'), 
        recipe_result = document.querySelector('.recipe_response');

    if(!form || !recipe_result) return;

    let button = form.querySelector('.searchBut'),
        i = form.querySelector('[name="i"]');

    if(!button || !i) return;

    const recipeResult = function(results){
        if (!results) return;
    };

    const searchRecipe = async function (){
        const url = `http://recipepuppyproxy.herokuapp.com/api/?q=` + i.value;
        await fetch(url, {
            headers: {
                "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
                "x-rapidapi-key": "f9871e9028mshc949b36dd6ede42p19eea8jsnfe9903109b31"
            }
            
        })
        .then(function(response){
            return response.json();
            

        })
        .then(function(data) {
            recipeResult(data.results);

            data.results.forEach(function(item){
                let pElem = document.createElement('li');
                
                let elemItems = `${item.title}. Here you can find the recipe: ${item.href}.  These are the ingredients: ${item.ingredients}`;

                let wholeList =  document.createTextNode(elemItems);

                pElem.appendChild(wholeList);

                recipe_result.appendChild(pElem);
                let element = document.getElementById('body');
                element.appendChild(recipe_result);
            });
        })
    
    }
    

    button.addEventListener('click', function(event) {
        event.preventDefault();

        if(!i.value) return;
        searchRecipe(i.value);
    });

    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#8c8f71';
    });

    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#d9d9d9';
    });
    
};


window.addEventListener('load', function(){
    recipePuppy();
});
