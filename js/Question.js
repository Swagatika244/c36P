class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter Your Name Here....")
   //Create a input box to enter the number
    this.input2 = createInput("").attribute("placeholder","Enter the your number....")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h2', 'Where you would like to live???')
    this.option1 = createElement('h3', '1:-) Future');
    this.option2 = createElement('h3', '2:-) Illusion');
    this.option3 = createElement('h3', '3:-) Present');
    this.option4 = createElement('h3', '4:-) Past');

    this.greeting = createElement("h2");


    //this.message = createElement("h2")
  }position (){

    this.title.position(350, 10);

    this.input1.position(150, 280);
    this.input2.position(550, 280 );

    this.button.position(400, 320);

    this.question.position(250,70)

    this.option1.position(250,110);
    this.option2.position(250,140);
    this.option3.position(250,170);
    this.option4.position(250,200);


  }

  hide(){
    //this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();

    //this.message.hide();
    //Add hide() for questions, options & input box
    
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();





  }

  display(){
    this.title.html("MyQuiz Game");


    //Create html() and position() for each question, input and answers.
    this.position();




    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
     this.hide();
     this.message = createElement('h1','Thank You '+this.input1.value());
     this.message.position(300, 100)
     this.message1 = createElement('h2','Your Answer Has Been Submitted ;-)<br> Have a Great Day :-)');
     this.message1.position(300, 150)

    })

  }
}
