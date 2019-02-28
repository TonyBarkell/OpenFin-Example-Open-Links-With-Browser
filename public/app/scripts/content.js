// Section 1
const section1ParagraphText       = "This is Paragraph text. This is Paragraph text. This is Paragraph text. This is Paragraph text. This is Paragraph text. This is Paragraph text. This is Paragraph text. This is Paragraph text. This is Paragraph text. This is Paragraph text. This is Paragraph text. This is Paragraph text. "
var section1Paragraph           = buildParagraph(section1ParagraphText, "section1ParagraphText");
var button1                     = buildButton("Button 1", "This is button 1, and her's some space for some text", "button1Id");


//Section 2
var checkbox1                   = buildCheckboxInput("Check Box Text:", "checkbox1Id", "checkbox1Value", false);

//var layoutServiceInput          = buildCheckboxInput("Layout Service:", "servicesLayouts", "servicesLayouts", false);
//var opacityInput                = buildNumberInput("Opacity:", "opacity", 0.0, 1.0, 0.1, 1.0);

function buildContent(){

    buildCodeExampleFromFile("./app/scripts/text.html").then(function(element){
        console.log("elm " + element);
        buildSection("Section 1", "Section1", [section1Paragraph, button1, element]);
    });
    //buildSection("Section 1", "Section1", [section1Paragraph, button1, section1CodeExample]);
    buildSection("Section 2", "Section2", [checkbox1]);
}