const questions = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'how can you implement a Blockchain Web API?',
  'what is Test Driven Development Workflow?',
  'What is NaN and how can we check for it?',
  'What is the difference between stopPropagation and preventDefault?',
  'should you use immutable state and pure functions?',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let capitalize = questions.map(function(question){
 return question[0].toUpperCase() + question.slice(1)
});

let capitalize = questoins.map( (question) => questions.charAt(0).toUpperCase() + question.slice(1) )

const capitalizeSentence = () => {
  return questions.map(function(sentence){
    let firstLetter = sentence[0]
    let restOfTheSentence = sentence.slice(1)
    return firstLetter.toUpperCase90 + restOfTheSentence
  })
}

const capitalizeSentence1 = () => {
  return questions.map(sentence => sentence[0].toUpperCase() + sentence.slice(1))
}

// function capitalizeFirstLetter(question){
//   return question.charAt(0).toUpperCase() + question.slice(1)
// }

// let firstLetterSentences = questions.map(capitalizeFirstLetter)







