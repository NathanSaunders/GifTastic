//create buttons
$(document).ready(function () {

    //create topics in an array variable per homework instructions
    var topics = ["The Hulk", "Superman", "Batman", "Ironman", "Aquaman", "Black Panther", "Wonder Woman", "Thor", "Captain America", "The Green Lantern", "Spiderman", "Guardians of the Galaxy", "Wolverine", "Deadpool", "Mystery Men", "Antman", "X-men", "The Avengers", "The Fantastic Four"];

    function getTopicButton(topic) {
        // Todo: use jQuery to make a return HTML button
        var topicButton = $("<button>" + topic + "</button>");
        topicButton.attr("data-value",topic);
        topicButton.addClass("topic-button")
        return topicButton
    }

    var myVar = getTopicButton(topics[2])
    $("#buttons").append(myVar);
    $("#buttons").append(getTopicButton(topics[0]))

    //pull additional variable to test
    //create for loop to pull array into

    // NO CODE BELOW THIS LINE
});