console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'Sue', hand: 'right' },
  { name: 'Joe', hand: 'left' },
  { name: 'Karen', hand: 'right' },
  { name: 'Steve', hand: 'right' },
];

const suitlist = ['Diamond', 'Spade', 'Club', 'Heart'];
const ranklist = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King',
];

function createdeck(suitarray, rankarray) {
  var deckofcards = [];
  for (let i = 0; i < rankarray.length; i++) {
    for (let y = 0; y < suitarray.length; y++) {
      deckofcards.push({ rank: rankarray[i], suit: suitarray[y] });
    }
  }
  return deckofcards;
}

var full_deck = createdeck(suitlist, ranklist);

function dealcards(players, full_deck, numberofcards) {
  var shuffled_deck = _.shuffle(full_deck);
  var count = 0;
  for (let i = 0; i < players.length; i++) {
    var card = 0;
    var score = 0;
    for (let y = 0; y < numberofcards; y++) {
      card = shuffled_deck[count].rank;
      if (card === 'Ace') {
        score += 11;
      } else if (card === 'Jack' || card === 'Queen' || card === 'King') {
        score += 10;
      } else {
        score += Number(card);
      }
      count++;
      players[i][`Card #${y + 1}`] = card;
    }
    players[i].score = score;
  }
  var tiebreakercount = 0;
  while (winner !== 1) {
    var max_record = _.maxBy(players, 'score');
    var max_score = max_record.score;
    var winner = 0;
    var winner_index = [];
    for (let i = 0; i < players.length; i++) {
      if (players[i].score === max_score) {
        winner_index.push(i);
      }
    }
    tiebreakercount++;
    for (let y = 0; y < winner_index.length; y++) {
      if (y === 0 && winner_index.length === 1) {
        console.log(`${max_record.name} is the winner!`);
        winner = 1;
        break;
      } else {
        var newcard = shuffled_deck[count].rank;
        if (newcard === 'Ace') {
          players[winner_index[y]].score += 11;
        } else if (
          newcard === 'Jack' ||
          newcard === 'Queen' ||
          newcard === 'King'
        ) {
          players[winner_index[y]].score += 10;
        } else {
          players[winner_index[y]].score += Number(newcard);
        }
        players[winner_index[y]][`New Card #${tiebreakercount}`] = newcard;
        count++;
      }
    }
  }
  return players;
}

dealcards(players, full_deck, 2);
