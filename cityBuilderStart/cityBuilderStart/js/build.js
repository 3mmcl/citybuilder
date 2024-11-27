//console log just to test that your JS is linked properly
console.log("Log Test"); 

//create a variable for the number of buildings in the city and start it at zero
let buildingamount = 0;   

//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads 
document.getElementById("result").innerText = buildingamount;

//Functions -- 
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
    //-- Print a message to teh console
    //--Add one to the variable that is tracking the number of buildings
    //---Print a message with the number of buildings
    //---Place an image graphic into the other div 
    

addone.addEventListener("click",function(e){

    console.log("Button one pressed"); 
    buildingamount++; 
    document.getElementById("result").innerText = buildingamount; 

    
    let img = document.getElementById('img');
    let newImg = document.createElement('img');
    newImg.src = "resources/FreeSample/Advertising5.png";
    img.appendChild(newImg);

});


//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building
addtwo.addEventListener("click",function(e){

    console.log("Button two pressed"); 
    buildingamount += 2;
    document.getElementById("result").innerText = buildingamount;

    
    let img = document.getElementById('img');
    let newImg = document.createElement('img');
    newImg.src = "resources/FreeSample/Advertising6.png";
    img.appendChild(newImg);

});   

//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building
addthree.addEventListener("click",function(e){

    console.log("Button three pressed"); 
    buildingamount += 3;
    document.getElementById("result").innerText = buildingamount;

    
    let img = document.getElementById('img');
    let newImg = document.createElement('img');
    newImg.src = "resources/FreeSample/Advertising7.png";
    img.appendChild(newImg);

});


addfour.addEventListener("click",function(e){

    console.log("Button three pressed"); 
    buildingamount += 3;
    document.getElementById("result").innerText = buildingamount;

    
    let img = document.getElementById('img');
    let newImg = document.createElement('img');
    newImg.src = "resources/FreeSample/Sidewalk_Chunk2.png";
    img.appendChild(newImg);

});