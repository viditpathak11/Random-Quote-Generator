var quotes=[
   'The way get started is to quit talking and begin doing. -Walt Disney',
  'The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty. -Winston Churchill',
  'People who are crazy enough to think they can change the world, are the ones who do.- Rob Siltanen',
  'Failure will never overtake me if my determination to succeed is strong enough.- Og Mandino',
  'We may encounter many defeats but we must not be defeated.- Maya Angelou',
  'Knowing is not enough; we must apply. Wishing is not enough; we must do.- Johann Wolfgang Von Goethe',
  'Imagine your life is perfect in every respect; what would it look like?- Brian Tracy',
  'We generate fears while we sit. We overcome them by action.- Dr. Henry Link',
  'Security is mostly a superstition. Life is either a daring adventure or nothing.- Helen Keller',
  'The man who has confidence in himself gains the confidence of others.- Hasidic Proverb'
];


function newQuote(){
  var randomNumber=Math.floor(Math.random()*(quotes.length));
  document.getElementById("text").innerHTML=quotes[randomNumber];
}