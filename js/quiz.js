var indentifier = Math.floor(Math.random() * 10000000);
var ID = "ID: "+indentifier;
console.log(ID);

var json = {
    questions: [
        {
            type: "matrix",
            name: "Quality",
            title: "Please rate the following statements to the best of your ability",
            isAllRowRequired: "true",
            columns: [
                {
                    value: 1,
                    text: "Never"
                }, {
                    value: 2,
                    text: "Rarely"
                }, {
                    value: 3,
                    text: "Sometimes"
                }, {
                    value: 4,
                    text: "Often"
                }, {
                    value: 5,
                    text: "Always"
                }
            ],
            rows: [
                {
                    value: "1",
                    text: "I correct my professor.",
                }, {
                    value: "2",
                    text: "I speak more frequently than my peers."
                }, {
                    value: "3",
                    text: "My peers make meaningful contributions to discussions."
                }, {
                    value: "4",
                    text: "I make meaningful contributions to discussions."
                }, {
                    value: "5",
                    text: "Professors stop me while I am speaking in class."
                }, {
                    value: "6",
                    text: "Professors ask me to speak and participate in discussions because I am too quiet."
                }, {
                    value: "7",
                    text: "I interrupt my professor."
                }, {
                    value: "8",
                    text: "I speak without raising my hand, even when others do not."
                }, {
                    value: "9",
                    text: "I have underqualified professors."
                }, {
                    value: "10",
                    text: "I answer my peers' questions before my professor does."
                }, {
                    value: "11",
                    text: "I refer to texts that were not assigned for class."
                }, {
                    value: "12",
                    text: "I discuss assigned readings even when I did not do the readings because I can make\
                            a meaningful contribution without having read it."
                }
            ],
        }
    ],
    completedHtml:" "
};

Survey.defaultBootstrapCss.navigationButton = "btn btn-primary btn-xl";
Survey.Survey.cssType = "bootstrap";

var result1;
var result2;

var model = new Survey.Model(json);
model
    .onComplete
    .add(function (result) {
        result1 = result;
        document.getElementById("intro2_div").style.display = "block";
        document.getElementById('portfolio').scrollIntoView(true);
    });

$("#surveyElement").Survey({model:model});

function continueFunc() {
    document.getElementById("intro1").innerHTML = "";
    document.getElementById("surveyElement").style.display = "inline-block";
    document.getElementById("continueButton").style.display = "none";
}

var json2 = {
    questions: [
        {
            type: "matrix",
            name: "Quality",
            title: "Please answer as accurately as possible. (1: completetely disagree, 7: completely agree)",
            isAllRowRequired: "true",
            columns: [
                {
                    value: 1,
                    text: "1"
                }, {
                    value: 2,
                    text: "2"
                }, {
                    value: 3,
                    text: "3"
                }, {
                    value: 4,
                    text: "4"
                }, {
                    value: 5,
                    text: "5"
                }, {
                    value: 6,
                    text: "6"
                }, {
                    value: 7,
                    text: "7"
                }
            ],
            rows: [
                {
                    value: "1",
                    text: "My peers overestimate my intelligence."
                }, {
                    value: "2",
                    text: "I am comfortable speaking in class."
                }, {
                    value: "3",
                    text: "You do not have to raise your hand in class to speak."
                }, {
                    value: "4",
                    text: "My professors underestimate my intelligence."
                }, {
                    value: "5",
                    text: "My essays deserve better grades."
                }, {
                    value: "6",
                    text: "It is okay to interrupt my peers when they are speaking if I have a very good point."
                }, {
                    value: "7",
                    text: "My peers underestimate my intelligence."
                }, {
                    value: "8",
                    text: "It is okay to interrupt the professor when they are speaking if I have a very good point."
                }, {
                    value: "9",
                    text: "I have great ideas in class."
                }, {
                    value: "10",
                    text: "My professors overestimate my intelligence."
                }, {
                    value: "11",
                    text: "Peers and professors do not seem to understand my point right away, so I have to elaborate for a long time."
                }, {
                    value: "12",
                    text: "I am intelligent."
                }, {
                    value: "13",
                    text: "I am a that kid."
                }
            ],
        }
    ],
    completedHtml:" "
};


var model2 = new Survey.Model(json2);
model2
    .onComplete
    .add(function (result) {
        result2 = result;
        console.log("result1: " + JSON.stringify(result1.data));
        console.log("result2: " + JSON.stringify(result2.data));

        var results_string = JSON.stringify(result1.data) + " " + JSON.stringify(result2.data);

        var tkness = 0.0;
        var tkness_count = 0;

        var hostility = 0.0;
        var hostility_count = 0;

        var faculty = 0.0;
        var faculty_count = 0;

        var peer = 0.0;
        var peer_count = 0;

        var intelligence = 0.0;
        var intelligence_count = 0;

        result1 = result1.data["Quality"];
        result2 = result2.data["Quality"];

        function parseInt2(a) {
        	return parseInt(a) - 1;
        }

        //result1:
        tkness += parseInt2(result1["1"])/4.0;
        tkness_count++;
        hostility += parseInt2(result1["1"]) / 4.0;
        hostility_count++;
        faculty += parseInt2(result1["1"]) / 4.0;
        faculty_count++;

        tkness += parseInt2(result1["2"]) / 4.0;
        tkness_count++;
        peer += parseInt2(result1["2"]) / 4.0;
        peer_count++;

        tkness += (5 - parseInt2(result1["3"])) / 4.0;
        tkness_count++;
        peer += (5 - parseInt2(result1["3"])) / 4.0;
        peer_count++;
        hostility += (5 - parseInt2(result1["3"])) / 4.0;
        hostility_count++;

        tkness += parseInt2(result1["4"]) / 4.0;
        tkness_count++;

        tkness += parseInt2(result1["5"]) / 4.0;
        tkness_count++;
        faculty += parseInt2(result1["5"]) / 4.0;
        faculty_count++;

        tkness += (5 - parseInt2(result1["6"])) / 4.0;
        tkness_count++;
        peer += (5 - parseInt2(result1["6"])) / 4.0;
        peer_count++;
        faculty += (5 - parseInt2(result1["6"])) / 4.0;
        faculty_count++;

        tkness += parseInt2(result1["7"]) / 4.0;
        tkness_count++;
        hostility += parseInt2(result1["7"]) / 4.0;
        hostility_count++;
        faculty += parseInt2(result1["7"]) / 4.0;
        faculty_count++;

        tkness += parseInt2(result1["8"]) / 4.0;
        tkness_count++;
        hostility += parseInt2(result1["8"]) / 4.0;
        hostility_count++;
        faculty += parseInt2(result1["8"]) / 4.0;
        faculty_count++;
        peer += parseInt2(result1["8"]) / 4.0;
        peer_count++;

        tkness += parseInt2(result1["9"]) / 4.0;
        tkness_count++;
        hostility += parseInt2(result1["9"]) / 4.0;
        hostility_count++
        faculty += parseInt2(result1["9"]) / 4.0;
        faculty_count++;

        tkness += parseInt2(result1["10"]) / 4.0;
        tkness_count++;
        peer += parseInt2(result1["10"]) / 4.0;
        peer_count++;

        tkness += parseInt2(result1["11"]) / 4.0;
        tkness_count++;

        tkness += parseInt2(result1["12"]) / 4.0;
        tkness_count++;

        //result2:
        tkness += (7 - parseInt2(result2["1"])) / 6.0;
        tkness_count++;
        peer += (7 - parseInt2(result2["1"])) / 6.0;
        peer_count++;

        tkness += parseInt2(result2["2"]) / 6.0;
        tkness_count++;

        tkness += parseInt2(result2["3"]) / 6.0;
        tkness_count++;
        peer += parseInt2(result2["3"]) / 6.0;
        peer_count++;
        hostility += parseInt2(result2["3"]) / 6.0;
        hostility_count++;

        tkness += parseInt2(result2["4"]) / 6.0;
        tkness_count++;
        faculty += parseInt2(result2["4"]) / 6.0;
        faculty_count++;

        tkness += parseInt2(result2["5"]) / 6.0;
        tkness_count++;
        faculty += parseInt2(result2["5"]) / 6.0;
        faculty_count++;

        tkness += parseInt2(result2["6"]) / 6.0;
        tkness_count++;
        peer += parseInt2(result2["6"]) / 6.0;
        peer_count++;
        hostility += parseInt2(result2["3"]) / 6.0;
        hostility_count++;

        tkness += parseInt2(result2["7"]) / 6.0;
        tkness_count++;
        peer += parseInt2(result2["7"]) / 6.0;
        peer_count++;

        tkness += parseInt2(result2["8"]) / 6.0;
        tkness_count++;
        faculty += parseInt2(result2["8"]) / 6.0;
        faculty_count++;
        hostility += parseInt2(result2["3"]) / 6.0;
        hostility_count++;

        tkness += parseInt2(result2["9"]) / 6.0;
        tkness_count++;

        tkness += (7 - parseInt2(result2["10"])) / 6.0;
        tkness_count++;
        faculty += (7 - parseInt2(result2["10"])) / 6.0;
        faculty_count++;

        tkness += parseInt2(result2["11"]) / 6.0;
        tkness_count++;
        peer += parseInt2(result2["11"]) / 6.0;
        peer_count++;
        faculty += parseInt2(result2["11"]) / 6.0;
        faculty_count++;

        intelligence += parseInt2(result2["12"]) / 6.0;
        intelligence_count++;

        tkness += parseInt2(result2["13"]) / 6.0;
        tkness_count++;

        var tkness_percent = (tkness/tkness_count) - 0.08;
        if (tkness_percent <= 0)
        	tkness_percent = 0.01;
        var intelligence_percent = intelligence/intelligence_count;
        var hostility_percent = hostility/hostility_count;
        var peer_percent = peer/peer_count;
        var faculty_percent = faculty/faculty_count;

        console.log("tkness: "+ tkness + " count " + tkness_count +" TKNESS: " + tkness_percent
            + "\nHOSTILITY: " + hostility_percent
            + "\nPEER: " + peer_percent
            + "\nFACULTY: " + faculty_percent);

        var names = {
            "IHF":"The Critic",
     		"IHP":"The Asshole",
            "IHA":"The Asshole",
            "INP":"The Guest Lecturer",
            "INF":"The Disciple",
            "INA":"The Uninvited Philosopher",
            "UHF":"The Heckler",
            "UHP":"The Brute",
            "UHA":"The Flailer",
            "UNA":"The Rambler",
            "UNF":"The Tryhard"
        };

        var description = "";
        var tktype = "";
        if (intelligence_percent >= .5) {
            tktype += "I";
            description += " <b>I</b>ntelligent";
        }
        else {
            tktype += "U";
            description += " <b>U</b>nintelligent";
        }
        if (hostility_percent >= .5) {
            tktype += "H";
            description += " <b>H</b>ostile";
        }
        else{
            tktype += "N";
            description += " <b>N</b>on-hostile";
        }
        if ((tktype == "UN") || peer_percent > .5 && faculty_percent > .5) {
        	tktype += "A";
        	description += " <b>A</b>ll-inclusive";
        }
        else{
	        if (peer_percent > faculty_percent) {
	            tktype += "P";
	            description += " <b>P</b>eer-oriented";
	        }
	        else{
	            tktype += "F";
	            description += " <b>F</b>aculty-oriented";
	        }
	    }
        var tki_desc = "</br></br><font size=2>*That Kid Index (from 0 to 1)"
        if (tkness_percent < .5){
            document.getElementById("result").innerHTML = "You are not a That Kid!\
                TKI: "+(Math.round(100 * tkness_percent))/100. + 
                "*</br> But if you were, your TK type would be...</br>\
                <font size=8><b>"+ tktype+": "+names[tktype] + "</b></font></br>"+description+tki_desc;
        }
        else {
            document.getElementById("result").innerHTML = "You are a That Kid!\
                TKI: "+(Math.round(100 * tkness_percent))/100. + "*</br>\
                Your TK type is...</br><font size=8><b>" + tktype+": "+names[tktype] + "</b></font></br>"+description+tki_desc;
        }
        document.getElementById("intro1").innerHTML = "";

        document.getElementById("intro2_div").style.display = "none";
        document.getElementById('portfolio').scrollIntoView(true);

        var sendData = document.getElementById("sendData");
        sendData.style.display = "inline-block";
        document.getElementById("entry.1165881888").value = ID + " " + tktype + " " + results_string + " TK: " + tkness_percent + 
            " intel: " + intelligence_percent + " hostility: "+hostility_percent 
            + " peer: " + peer_percent + " faculty: "+faculty_percent;
        document.getElementById("submitData").click(); 
        sendData.style.display = "none";   
        completed = true;
        
    });

$("#surveyElement2").Survey({model:model2});

function continueFunc2() {
    document.getElementById("surveyElement2").style.display = "inline-block";
    document.getElementById("intro2_div").style.display = "none";
}