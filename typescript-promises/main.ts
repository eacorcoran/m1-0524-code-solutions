import { takeAChance } from './take-a-chance.js';

takeAChance('Erin Corcoran')
  .then((message) => console.log(message))
  .catch((error) => console.error(`Error: ${error.message}`));
