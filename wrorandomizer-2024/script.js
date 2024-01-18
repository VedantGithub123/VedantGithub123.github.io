currentSelection = 2; // 0: Elementary, 1: Junior, 2: Senior

function updateImg(self){
    var randomelements = document.getElementById("random-elements");
    randomelements.innerHTML = `<img id="map-image" src="https://github.com/VedantGithub123/VedantGithub123.github.io/blob/main/wrorandomizer-2024/images/mat-senior.png?raw=true">`
    var image = document.getElementById("map-image");
    currentSelection = self.value
    if (self.value==0){
        image.setAttribute("src", "https://github.com/VedantGithub123/VedantGithub123.github.io/blob/main/wrorandomizer-2024/images/mat-elementary.png?raw=true")
    }else if (self.value==1){
        image.setAttribute("src", "https://github.com/VedantGithub123/VedantGithub123.github.io/blob/main/wrorandomizer-2024/images/mat-junior.png?raw=true")
    }else{
        image.setAttribute("src", "https://github.com/VedantGithub123/VedantGithub123.github.io/blob/main/wrorandomizer-2024/images/mat-senior.png?raw=true")
    }
}

function randomSenior(){
    updateImg(document.getElementById("map-type"));
    var randomelements = document.getElementById("random-elements");
    startHTML = `
    <h6 id="start" style="top:80%;left:27.2%"> START
    `;
    startingPos = 0;
    if (Math.random()<0.5){
        startingPos = 1;
        startHTML = `
        <h6 id="start" style="top:13%;left:64.7%"> START
    `;
    }
    randomelements.innerHTML+=startHTML;

    var options = [0, 0, 0, 0, 1, 1, 1, 1] // 0 is green, 1 is blue
    var order = []
    for (var i = 0; i<8; i+=1){
        selection = Math.floor(Math.random() * (8-i));
        order.push(options[selection])
        options.splice(selection, 1)
    }

    var template = `<span class="dot" style="background-color:`
    var positions = [
        `top:27.8%;left:3.5%"`, 
        `top:19%;left:3.5%"`, 
        `top:19.4%;left:85.9%"`, 
        `top:10.8%;left:85.9%"`, 
        `top:81.7%;left:92.7%"`, 
        `top:72.9%;left:92.7%"`
    ]
    var colors = [`#00ff44`, `#0000ff`]
    for (var i = 0; i<6; i+=1){
        randomelements.innerHTML+=template+colors[order[i]]+";"+positions[i]+">";
        console.log(template+colors[order[i]]+";"+positions[i]+">")
    }

    if (startingPos){
        positions = [
            `top:27.8%;left:3.5%"`, 
            `top:19%;left:3.5%"`, 
            `top:19.4%;left:85.9%"`, 
            `top:10.8%;left:85.9%"`, 
            `top:81.7%;left:92.7%"`, 
            `top:72.9%;left:92.7%"`,
            `top:4.9%;left:36%"`, 
            `top:4.9%;left:40.1%"`
        ]
    }else{
        positions = [
            `top:27.8%;left:3.5%"`, 
            `top:19%;left:3.5%"`, 
            `top:19.4%;left:85.9%"`, 
            `top:10.8%;left:85.9%"`, 
            `top:81.7%;left:92.7%"`, 
            `top:72.9%;left:92.7%"`,
            `top:91.5%;left:57.8%"`, 
            `top:91.5%;left:61.9%"`
        ]
    }
    for (var i = 6; i<8; i+=1){
        randomelements.innerHTML+=template+colors[order[i]]+";"+positions[i]+">";
        console.log(template+colors[order[i]]+";"+positions[i]+">")
    }

}

function randomJunior(){
    updateImg(document.getElementById("map-type"));
    var randomelements = document.getElementById("random-elements");

    var options = [0, 0, 0, 0, 1, 1] // 0 is green, 1 is blue
    var order = []
    for (var i = 0; i<6; i+=1){
        selection = Math.floor(Math.random() * (6-i));
        order.push(options[selection])
        options.splice(selection, 1)
    }

    var template = `<span class="dot" style="background-color:`
    var positions = [
        `top:90.5%;left:22.5%"`, 
        `top:90.5%;left:26.05%"`, 
        `top:90.5%;left:29.6%"`, 
        `top:90.5%;left:33.15%"`, 
        `top:90.5%;left:36.7%"`, 
        `top:90.5%;left:40.25%"`
    ]
    var colors = [`#00ff44`, `#0000ff`]
    for (var i = 0; i<6; i+=1){
        randomelements.innerHTML+=template+colors[order[i]]+";"+positions[i]+">";
        console.log(template+colors[order[i]]+";"+positions[i]+">")
    }
    
}

function randomElementary(){
    updateImg(document.getElementById("map-type"));
    var randomelements = document.getElementById("random-elements");

    var options = [0, 0, 0, 1, 1, 1] // 0 is green, 1 is black
    var order = []
    for (var i = 0; i<6; i+=1){
        selection = Math.floor(Math.random() * (6-i));
        order.push(options[selection])
        options.splice(selection, 1)
    }

    var template = `<span class="dot" style="background-color:`
    var positions = [
        `top:88.5%;left:23.8%"`, 
        `top:88.5%;left:30.8%"`, 
        `top:88.5%;left:37.8%"`, 
        `top:88.5%;left:57%"`, 
        `top:88.5%;left:64%"`, 
        `top:88.5%;left:71%"`
    ]
    var colors = [`#00ff44`, `#000000`]
    for (var i = 0; i<6; i+=1){
        randomelements.innerHTML+=template+colors[order[i]]+";"+positions[i]+">";
        console.log(template+colors[order[i]]+";"+positions[i]+">")
    }


    options = [0, 0, 1, 1] // 0 is red, 1 is yellow
    order = []
    for (var i = 0; i<4; i+=1){
        selection = Math.floor(Math.random() * (4-i));
        order.push(options[selection])
        options.splice(selection, 1)
    }

    positions = [
        `top:44.3%;left:6.2%"`, 
        `top:48.7%;left:39.8%"`, 
        `top:10.3%;left:73.8%"`, 
        `top:10.3%;left:77.5%"`, 
    ]
    colors = [`#ff0000`, `#ffff00`]
    for (var i = 0; i<4; i+=1){
        randomelements.innerHTML+=template+colors[order[i]]+";"+positions[i]+">";
        console.log(template+colors[order[i]]+";"+positions[i]+">")
    }
}

function randomize(){
    if (currentSelection==0){
        randomElementary()
    }
    if (currentSelection==1){
        randomJunior()
    }
    if (currentSelection==2){
        randomSenior()
    }
}