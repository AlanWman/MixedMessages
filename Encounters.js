/*
Creature types from 5e SRD rules - http://5e.d20srd.org/srd/monsters/intro.htm
1. Aberrations: Slaad, Otyugh, Gibbering Mouther, Aboleth
2. Celestials: Pegasus, Coutl, Angel, Empyrean, Unicorn
3. Constructs: Golem, Homunculus, Animated Objects, Shield Guardian
4. Dragons: Red, Blue, Green, Black, White, Gold, Silver, Bronze, Brass, Copper
5. Elementals: Earth, Air, Fire, Water
6. Fey: Lord, Hag, Dryad, Sprite/Pixie
7. Fiends: Demon, Devil, Cambion, Night Hag.
8. Giants:  Frost, Fire, Stone, Storm, Hill
9. Humanoid:  goblinoids, orcs, gnolls, lizardfolk, kobolds
10. Monstrosities: Winter Wolf, Bulette, Roc, Medusa
11. Undead: Zombies, Wight, Vampire, Lich

Locations
1. Settlement - City, town, village, outpost
2. Dungeon
3. Temple - Good, Evil, Pantheon
4. Fortress 
5. Tavern
6. Forest Grove

Reaction Roll Table from Basic Fantasy Roleplay - https://www.basicfantasy.org/srd/#reaction_roll_table
Adjusted Die Roll	Result
2 or less	Immediate Attack
3-7	        Unfavorable
8-11	    Favorable
12 or more	Very Favorably
*/


function roller = (x) => Math.floor(Math.random()*x);

//Determine Creature
const oCreatures = {
    Aberrations: ['Slaad', 'Otyugh', 'Gibbering Mouther', 'Aboleth'],
    Celestials: ['Pegasus', 'Coutl', 'Angel', 'Empyrean', 'Unicorn'],
    Constructs: ['Golem', 'Homunculus', 'Animated Objects', 'Shield Guardian'],
    Dragons: ['Red', 'Blue', 'Green', 'Black', 'White', 'Gold', 'Silver', 'Bronze', 'Brass', 'Copper'],
    Elementals: ['Earth', 'Air', 'Fire', 'Water'],
    Fey: ['Lord', 'Hag', 'Dryad', 'Sprite/Pixie'],
    Fiends: ['Demon', 'Devil', 'Cambion', 'Night Hag'],
    Giants: ['Frost Giant', 'Fire Giant', 'Stone Giant', 'Storm Giant', 'Hill Giant'],
    Humanoid: ['goblinoids', 'orcs', 'gnolls', 'lizardfolk', 'kobolds'],
    Monstrosities: ['Winter Wolf', 'Bulette', 'Roc', 'Medusa'],
    Undead: ['Zombies', 'Wight', 'Vampire', 'Lich']
    }

const oLocations = {
    Settlement: ['City', 'Town', 'village', 'outpost'],
    Temple: ['Good', 'Evil', 'Pantheon'],
    Other: ['Dungeon', 'Fortress', 'Tavern', 'Forest Grove']
}



