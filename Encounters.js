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


const roller = (x) => Math.floor(Math.random() * x + 1);


//Determine Encounter


//Determine Creature
const Creature = () => {
    let roll = roller(11);
    let subRoll = undefined;


    switch (roll) {
        case 1:
            subRoll = roller(oCreatures.Abberations.length - 1)
            return oCreatures.Aberrations[subRoll]
            break;
        case 2:
            subRoll = roller(oCreatures.Abberations.length - 1)
            return oCreatures.Celestials[subRoll]
            break;
        case 3:
            subRoll = roller(oCreatures.Abberations.length - 1)
            return oCreatures.Constructs[subRoll]
            break;
        case 4:
            subRoll = roller(oCreatures.Abberations.length - 1)
            return oCreatures.Dragons[subRoll]
           break;
        case 5:
            subRoll = roller(oCreatures.Abberations.length - 1)
            return oCreatures.Elementals[subRoll]
            break;
        case 6:
            subRoll = roller(oCreatures.Abberations.length - 1)
            return oCreatures.Fey[subRoll]
            break;
        case 7:
            subRoll = roller(oCreatures.Abberations.length - 1)
            return oCreatures.Fiends[subRoll]
            break;
        case 8:
            subRoll = roller(oCreatures.Abberations.length - 1)
            return oCreatures.Giants[subRoll]
            break;
        case 9:
            subRoll = roller(oCreatures.Abberations.length - 1)
            return oCreatures.Humanoid[subRoll]    
            break;
        case 10:
            subRoll = roller(oCreatures.Abberations.length - 1)
            return oCreatures.Monstrosities[subRoll]
            break;
        case 11:
            subRoll = roller(oCreatures.Abberations.length - 1)
            return oCreatures.Undead[subRoll]
            break;
        default:
            console.log('Default case of Creature function.')
            break;
    }
}

//Determine Location
const Location = () => {
    let roll = roller(3)
    let subRoll = undefined;

    switch (roll) {
        case 1:
            subRoll = roller(oCreatures.Settlement.length - 1)
            return oLocations.Settlement[subRoll]
            break;
        case 2:
            subRoll = roller(oCreatures.Temple.length - 1)
            return oCreatures.Temple[subRoll]
            break;
        case 3:
            subRoll = roller(oCreatures.Other.length - 1)
            return oCreatures.Other[subRoll]
            break;
        default:
            console.log('default case of location function')
            break;
    }
}

const reaction = () => {


}


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




