// PROJECT: Mixed Message
// PURPOSE: Randomly generate a mad libs style message by making a few ways that the message can play out then randomly selecting the words. 
// GOAL: To have this produce understandable random text for a funny result. Then run this code on git and github to better understand the workflow of git hub and how it is recorded. 

// generating a random number method that takes the scope of randomness
const ranNumGenerator = (range) => {
    return Math.floor(Math.random() * range)
  }
  
  // crating the arrays of various types of words to be used for the sentences. Try to make them as unusual as possible. Try to use 
  
  const noun = ['hammer', 'nailgun', 'wheelchair', 'can of beans', 'staircase', 'individualism', 'antidisestablishmentarianism', 'a guitar', 'board games', 'sunglasses', 'civic duties', 'the idea of marriage', 'a big old fur coat', 'a too small T shirt', 'nightmare feul', '2019 nissan rouge', 'hand sanitizer', 'glue', 'christmas trees', 'a hole in the wall', 'washing machine', 'pair of shoes', 'big red candel'];
  const people = ['Taylor Swift', 'my Mom', 'your mom', 'David from work', 'Jeff', 'Santa', 'Jesus himself', 'The President of the time', 'Men with big hands', 'Jaden Smith from Karate Kid', 'me and my wife', 'Queen Latifa', 'Micheal Jackson', 'Joel Miller', 'a waiter that didn\'t see it coming', 'Zoo keepers', 'my least favorite One Direction', 'Jackson Polic', 'a woman on the go', 'Chriss family guy', 'my Therapist', 'Mickey Mouse', 'big joe', 'tommy two hand McDanny'];
  const locations = ['hospital', 'soda fountain', 'my Mom\'s house', 'Florida', 'Alaska', 'nowhere perticular', 'my neighbor\'s house', 'around the block', 'down the street to the left  right there. no not there, There', 'The White House', 'the worst dive bar in town', 'under a highway', 'a boat in the ocean', 'the good part of town', 'an average Cracker Barrel', 'somewhere I shouldn\'t be', 'wherever crime is', 'the motel', 'public restroom', 'a crowded elevator', 'the bottom of a trashcan', 'a kitchen', 'the front desk of a hostle', 'half burnt down building', 'rush hour traffic '];
  const adjectives = [];
  const adverbs = [];
  const verbs = ['parallel parking'];
  
  
  // naming the methods of the structures that could be chosen at random. 
  
  
  // method for identifying which sentences will make the message. 
  
  