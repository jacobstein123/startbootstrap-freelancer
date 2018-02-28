var json = {
    questions: [
        {
            type: "matrix",
            name: "Quality",
            title: "Please indicate if you agree or disagree with the following statements",
            columns: [
                {
                    value: 1,
                    text: "Strongly Disagree"
                }, {
                    value: 2,
                    text: "Disagree"
                }, {
                    value: 3,
                    text: "Neutral"
                }, {
                    value: 4,
                    text: "Agree"
                }, {
                    value: 5,
                    text: "Strongly Agree"
                }
            ],
            rows: [
                {
                    value: "affordable",
                    text: "Product is affordable"
                }, {
                    value: "does what it claims",
                    text: "Product does what it claims"
                }, {
                    value: "better then others",
                    text: "Product is better than other products on the market"
                }, {
                    value: "easy to use",
                    text: "Product is easy to use"
                }
            ]
        }
    ]
};

Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap";

var model = new Survey.Model(json);
model
    .onComplete
    .add(function (result) {
        console.log("result: " + JSON.stringify(result.data));
    });

$("#surveyElement").Survey({model:model});
