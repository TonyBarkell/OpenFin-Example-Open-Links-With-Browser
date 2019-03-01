// Section 1
var section1Paragraph;
var section1Code;
var button1                     = buildButton("Button 1", "This is button 1, and her's some space for some text", "button1Id");


//Section 2
var checkbox1                   = buildCheckboxInput("Check Box Text:", "checkbox1Id", "checkbox1Value", false);

//var layoutServiceInput          = buildCheckboxInput("Layout Service:", "servicesLayouts", "servicesLayouts", false);
//var opacityInput                = buildNumberInput("Opacity:", "opacity", 0.0, 1.0, 0.1, 1.0);

async function buildContent(){

    await buildCodeExampleFromFile("./app/text/section1Code.html", "section1Code").then(function(element){
        section1Code = element;
    });
    await buildParagraphFromFile("./app/text/section1ParagraphText.html", "section1Paragraph").then(function(element){
        section1Paragraph = element;
    });
    //buildSection("Section 1", "Section1", [section1Paragraph, button1, section1CodeExample]);
    buildSection("Section 1", "Section1", [section1Paragraph, button1, section1Code]);
    buildSectionFromFile("./app/sections/section2.html", "Section 2", "Section2");
}