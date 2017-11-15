$( document ).ready(function() {
  romanianLanguage();
});

 var i = 1;
function changeLanguage(){
    if (i % 2 != 0) {
        englishLanguage();
    } else {
        romanianLanguage();
    }
    i++;
};

function romanianLanguage() {
    $.getJSON( "languages/romana.json", function( json ) {
        $("#logo-span").text(json.logo);
        $("#change_language").text(json.language);
        $("#subtitle_span").text(json.subtitle);
        $("#first_describe_box1").text(json.first_describe_box[0]);
        $("#first_describe_box2").text(json.first_describe_box[1]);
        $("#second_describe_box1").text(json.second_describe_box[0]);
        $("#second_describe_box2").text(json.second_describe_box[1]);
        $("#third_describe_box1").text(json.third_describe_box[0]);
        $("#third_describe_box2").text(json.third_describe_box[1]);
        $("#fourth_describe_box1").text(json.fourth_describe_box[0]);
        $("#fourth_describe_box2").text(json.fourth_describe_box[1]);
        $("#fifth_describe_box1").text(json.fifth_describe_box[0]);
        $("#fifth_describe_box2").text(json.fifth_describe_box[1]);
        $("#services_content").text(json.services_content);
        $("#art_box_1").text(json.art_box1);
        $("#art_box_2").text(json.art_box2);
        $("#art_box_3").text(json.art_box3);
        $("#footer_span").text(json.footer);
    });
}

function englishLanguage() {
    $.getJSON( "languages/english.json", function( json ) {
        $("#logo-span").text(json.logo);
        $("#change_language").text(json.language);
        $("#subtitle_span").text(json.subtitle);
        $("#first_describe_box1").text(json.first_describe_box[0]);           $("#first_describe_box2").text(json.first_describe_box[1]);
        $("#second_describe_box1").text(json.second_describe_box[0]);
        $("#second_describe_box2").text(json.second_describe_box[1]);
        $("#third_describe_box1").text(json.third_describe_box[0]);
        $("#third_describe_box2").text(json.third_describe_box[1]);
        $("#fourth_describe_box1").text(json.fourth_describe_box[0]);
        $("#fourth_describe_box2").text(json.fourth_describe_box[1]);
        $("#fifth_describe_box1").text(json.fifth_describe_box[0]);
        $("#fifth_describe_box2").text(json.fifth_describe_box[1]);
        $("#services_content").text(json.services_content);
        $("#art_box_1").text(json.art_box1);
        $("#art_box_2").text(json.art_box2);
        $("#art_box_3").text(json.art_box3);
        $("#footer_span").text(json.footer);
    });
}