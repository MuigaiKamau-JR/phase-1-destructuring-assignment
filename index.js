const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1.  based on the sounds 
const [ moo, neigh, baa, oink, cluck ] = farmAnimals.split(" ");

// 2. Asign them names i.e jolly, molly, bolly, and dolly.
const [ jolly , molly, bolly, dolly] = farmAnimals.split(" ");

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [blackAndWhite, , black, pink ] = farmAnimals.split(" ");

// Arrays
const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [r, o, y, g, b, , v] = colors;
const [, , , , , indg] = colors;
// objects
const { muppetName, color, song, job, partner } = muppet;

// Check if this is right ???

const { nestedJob, nestedPartner } = nestedMuppet;
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
