function buildSection(buttonText, optionsId, inputs){
    var container = document.createElement("div");
    var button = buildOptionButton(buttonText);
    container.appendChild(button);
    button.addEventListener("click", function(){
        setActiveControl(optionsId);
    });
    var options = buildOptionsContainer(optionsId, inputs);
    container.appendChild(options);
    document.getElementById("Options-Container").appendChild(container);
}

async function buildSectionFromFile(sectionHtmlFilePath, sectionName, sectionId){
    var container = document.createElement("div");

    var sectionHeadder = buildSectionHeadder(sectionName);
    container.appendChild(sectionHeadder);
    sectionHeadder.addEventListener("click", function(){
        setActiveControl(sectionId);
    });
    var sectionContent;
    await getSectionFromFile(sectionHtmlFilePath).then(function(section){
        sectionContent = section;
    });
    sectionContent.id = sectionId;
    sectionContent.classList.add("Hidden");
    sectionContent.classList.add("Option-Area");
    container.appendChild(sectionContent);
    document.getElementById("Options-Container").appendChild(container);
}

function buildOptionsContainer(id, inputs){
    optionContainer = document.createElement("div");
    optionContainer.id = id;
    optionContainer.classList.add("Hidden");
    optionContainer.classList.add("Option-Area");
    inputs.forEach(function(element){
        optionContainer.appendChild(element);
    });
    return optionContainer;
};

function setActiveControl(controlDiv){
    var classes = document.getElementById(controlDiv).classList;
    var hidden = false;
    classes.forEach(function(item){
        if(item === "Hidden"){
            hidden = true;
        };
    });
    if(hidden === true){
        classes.remove("Hidden");
    }else{
        classes.add("Hidden");
    };
}

function buildOptionButton(text){
    container = document.createElement("div");
    container.classList.add("Option-Button");
    label = document.createElement("p").appendChild(document.createTextNode("+ " + text));
    container.appendChild(label);

    return container;
};

function buildSectionHeadder(text){
    container = document.createElement("div");
    container.classList.add("section-headder");
    label = document.createElement("p").appendChild(document.createTextNode("+ " + text));
    container.appendChild(label);
    return container;
};



function buildCheckboxInput(text, id, value, checked){
    thisOptionContainer = document.createElement("div");
    label = document.createElement("p").appendChild(document.createTextNode(text));
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("Input-Option");
    checkbox.id = id;
    checkbox.value = value;
    if(checked){
        checkbox.checked = true;
    }
    thisOptionContainer.appendChild(label);
    thisOptionContainer.appendChild(checkbox);
    return thisOptionContainer;
};

function buildNumberInput(text, id, min, max, step, value){
    thisOptionContainer = document.createElement("div");
    label = document.createElement("p").appendChild(document.createTextNode(text));
    var numberbox = document.createElement("input");
    numberbox.type = "number";
    numberbox.id = id;
    numberbox.min = min;
    numberbox.max = max;
    numberbox.step = step;
    numberbox.value = value;
    thisOptionContainer.appendChild(label);
    thisOptionContainer.appendChild(numberbox);
    return thisOptionContainer;
};

function buildButton(buttonText, id){
    thisOptionContainer = document.createElement("div");
    thisOptionContainer.classList.add( "menuButtonContainer" );
    var button = document.createElement("div");
    var buttonText = document.createElement("p").appendChild(document.createTextNode(buttonText));;
    button.appendChild(buttonText);
    button.type = "button";
    button.classList.add( "menuButton" );
    button.id = id;
    thisOptionContainer.appendChild(button);
    return thisOptionContainer;
}

function buildParagraph(text, id){
    thisOptionContainer = document.createElement("div");
    thisOptionContainer.classList.add( "paragraphContainer" );
    var paragraph = document.createElement("p").appendChild(document.createTextNode(text));
    paragraph.id = id;
    thisOptionContainer.appendChild(paragraph);
    return thisOptionContainer;
}

function buildParagraphFromFile(textFilePath, id){
    /*
    thisOptionContainer = document.createElement("div");
    thisOptionContainer.classList.add( "paragraphContainer" );
    var paragraph = document.createElement("p").appendChild(document.createTextNode(text));
    paragraph.id = id;
    thisOptionContainer.appendChild(paragraph);
    return thisOptionContainer;
    */

    return getTextFromFile(textFilePath, "paragraphContainer");
}

function buildCodeExample(text, id){
    thisOptionContainer = document.createElement("div");
    thisOptionContainer.classList.add( "codeExampleContainer" );
    var paragraph = document.createElement("p").appendChild(document.createTextNode(text));
    paragraph.id = id;
    thisOptionContainer.appendChild(paragraph);
    return thisOptionContainer;
}

async function buildCodeExampleFromFile(filePath, id){
    return new Promise(function(resolve, reject) {
        var thisOptionContainer;
        xhr = new XMLHttpRequest();
        xhr.open('GET', filePath, true);
        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return;
            html = this.responseText;
            thisOptionContainer = document.createElement("div");
            thisOptionContainer.classList.add( "codeExampleContainer" );
            thisOptionContainer.innerHTML = html;
            resolve(thisOptionContainer);
        };
        xhr.send();
    })
;}

function getTextFromFile(filePath, className){
    return new Promise(function(resolve, reject) {
        var thisOptionContainer;
        xhr = new XMLHttpRequest();
        xhr.open('GET', filePath, true);
        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return;
            html = this.responseText;
            thisOptionContainer = document.createElement("div");
            thisOptionContainer.classList.add( className );
            thisOptionContainer.innerHTML = html;
            resolve(thisOptionContainer);
        };
        xhr.send();
    })
}

function getSectionFromFile(filePath){
    return new Promise(function(resolve, reject) {
        var section;
        xhr = new XMLHttpRequest();
        xhr.open('GET', filePath, true);
        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return;
            html = this.responseText;
            section = document.createElement("div");
            section.classList.add( "section" );
            section.innerHTML = html;
            resolve(section);
        };
        xhr.send();
    })
}