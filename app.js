/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Foxes by behaviour are closest to?',
      answers: [
        'dogs',
        'squirrels',
        'bears',
        'cats'
      ],
      correctAnswer: 'cats',
      img: 'images/leaping-fox.jpg',
      alt: 'A jumpy fox'
    },
    {
      question: 'The smallest species of fox weighs approximately how much?',
      answers: [
        '20 .lbs',
        '12 .lbs',
        '6 .lbs',
        '3 .lbs'
      ],
      correctAnswer: '3 .lbs',
      img: 'images/fennec-fox.jpg',
      alt: 'A fennec fox'
    },
    {
      question: 'How cold does it have to be for an arctic fox to shiver?',
      answers: [
        '15 degrees celsius',
        '0 degrees celsius',
        '-20 degrees celsius',
        '-70 degrees celsius'
      ],
      correctAnswer: '-70 degrees celsius',
      img: 'images/arctic-fox.jpg',
      alt: 'An arctic fox'
    },
    {
      question: 'A unique sense foxes have allow them to use what to judge distance and direction?',
      answers: [
        "the position of the sun",
        "elevation above sea level",
        "Earth's magnetic field",
        "ecolocation"
      ],
      correctAnswer: "Earth's magnetic field",
      img: 'images/a-fox-hunting-voles-in.jpg',
      alt: 'Fox using their special skills'
    },
    {
      question: 'As far as diet is concerned foxes are:',
      answers: [
        'carnivorous (meat only)',
        'herbivorous (plants only)',
        'Omnivorous (both/either)',
        'Nothing at all'
      ],
      correctAnswer: 'Omnivorous (both/either)',
      img: 'images/snif-fox.jpg',
      alt: 'a fox looking for a snack'
    },
    {
      question: 'Fox bones weigh __ bones of a dog roughly the same size.',
      answers: [
        '30% less than',
        'the same as',
        '30% more than',
        'twice as much as'
      ],
      correctAnswer: '30% less than',
      img: 'images/fox-hound.jpg',
      alt: 'A fox and a dog'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
// this should generate the start page, because it's only a string with no variable I don't know if i need
//to use a generate string function as well.
let message = "";

function generateStartPage(){
  return `
  <div data-item-id="0">
  <div class="imgContainer"><img src="images/wildlife_fox.jpg" alt="Majestic fox"/></div>
  <form id="js-question-start-form">
    <h2>Welcome to the fun fox facts quiz!</h2>
    <p>When you are ready, click the start button to begin.</p>
    <div class="navigation-buttons">
      <button class="startQuiz" type="submit">Start Quiz</button>
    </div>
  </form>
  </div>
  `
}

function generateFinalPage(){
  return `
  <div data-item-id="0">
  <div class="imgContainer"><img src="images/wildlife_fox.jpg" alt="Majestic fox"/></div>
  <form id="js-question-start-form">
    <h2>You have completed the quiz!</h2>
    <p>You got ${store.score} correct, and ${6-store.score} incorrect. Click the restart button if you'd like to try again.</p>
    <div class="navigation-buttons">
      <button class="startQuiz" type="submit">Restart Quiz</button>
    </div>
  </form>
  </div>
  `
}
//this function loads from store the info into a string that will eventually be rendered on page.
//I may need to have this also store the correct answer for the question somewhere, so it can be compared.

function generateItemElement(item) {
  return `
  <div data-item-id="${item.id}">
  <div class = "imgContainer"><img src="${item.img}" alt="${item.alt}"/></div>
  <p>${message}</p>
  <form id="js-question-submit-form">
    <h2 class = question>${item.question}</h2>
      <div class="group">
        <div class="item">
          <input name="answer" type="radio" value="${item.answers[0]}">
            <label for="${item.answers[0]}">${item.answers[0]}</label><br>
        </div>
        <div class="item">
          <input name="answer" type="radio" value="${item.answers[1]}">
            <label for="${item.answers[1]}">${item.answers[1]}</label><br>
        </div>
        <div class="item">
          <input name="answer" type="radio" value="${item.answers[2]}">
            <label for="${item.answers[2]}">${item.answers[2]}</label><br>
        </div>
        <div class="item">
          <input name="answer" type="radio" value="${item.answers[3]}">
            <label for="${item.answers[3]}">${item.answers[3]}</label><br>
        </div>
      </div>
      <div class="navigation-buttons">
        <button class="submitAnswer" type="submit">Submit</button>
      </div>
  </form>
  <footer><p>You are currently on question ${store.questionNumber+1} out of 6. You have ${store.score} correct, and ${store.questionNumber-store.score} incorrect so far.</p></footer>
  </div>`;
}

//this function generates the next quiz question page to be rendered as a string
//currently this takes all questions and strings them together, need to change to only call one at a time.
 function generateQuizQuestionString(item) {
  return generateItemElement(store.questions[store.questionNumber]);
//  return items.join("");
}


//I'm not sure if I need this or not, perhaps I dont.

/*
function generateStartPageString() {
  console.log("Generating Start Page Element");
  const 
  return
}
*/

//I also need to create a template for the page when the quiz is finished.

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
//this function simply renders the page based on teh quiz question string.

function render() {
  if (store.questionNumber===6){
    const finalPageString = generateFinalPage();
    $('main').html(finalPageString);
  } else if (store.quizStarted === false) {
    const startPageString = generateStartPage();
    $('main').html(startPageString);
  } else if (store.quizStarted === true) {
    const quizQuestionString = generateQuizQuestionString();
    $('main').html(quizQuestionString);
  }
}

//Honestly I'm not sure how much of this I need, I effectively worked of of the framework for the shopping
//list, which is not the same style that I need.


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//this function is made to submit the answer chosen on the radial buttons when submit is clicked

function submitAnswer() {
  $('body').on('submit', '#js-question-submit-form', function (event){
    event.preventDefault();
    var quizAnswer = $("input[name='answer']:checked").val();
    if (quizAnswer === undefined) {
      message = "Please select an answer."
      render();
    } else if (quizAnswer === store.questions[store.questionNumber].correctAnswer) {
      store.score ++;
      store.questionNumber ++;
      message = "You chose the correct answer!";
      render();
    } else {
      message = `That was incorrect, the correct answer was ${store.questions[store.questionNumber].correctAnswer}.`;
      store.questionNumber ++;
      render();
    }
  });
}

//this function should listen for the user to click on the start button on the opening screen, 

function startQuiz() {
  $('#js-question-start-form').submit(function(event) {
    event.preventDefault();
    store.quizStarted = true;
    render();
  });
}


/* I'm going to make this section for bits of code/pseudocode I know I need but am not sure how to categorize
or implement yet */

/* I need to write some code that will load the starting page as soon as the page is first loaded */
//I need it to listen for page load, then use the start page string to generate the opening page.

// this function is just here to call all the needed functions. I need to verify which functions need to be here
/*
$(function() {
  render ();
})
*/
function handleQuizQuestions(){
  render();
  submitAnswer();
  startQuiz();
}

$(handleQuizQuestions);
/* More issues, I still don't have the load initial page working, I don't have a way to load the quiz 
questions in sequence, I don't have a way to display the current question out of total, nor the number
of correct answers. I may implement a final page after to display answers and stats as well. */