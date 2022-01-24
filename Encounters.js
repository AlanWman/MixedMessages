/*Calls Encounter.*/
Encounter();

/*FUNCTIONS*/
/*Roll singular die of side 'upperbound'*/
const roller = (upperbound) => Math.floor(Math.random() * x + 1);

/* Simulate roll of any homogenous set of dice*/
const XdXRoller = (numOfDice, numOfSides) => {
    
    let result = 0;

    for(let i=0; i <= numOfDice; i++){
        result+= roller(numOfSides);
    }
    return result;
}

/*Determine Encounter*/
const Encounter = () => {
    const creature = creatures();
    const location = locations();
    const reaction = reactions();

    console.log(`The party encounters ${creature}(s) ${location}. Their demeanor is: ${reaction}.`);

    return undefined;
}

/*Determine Creature*/
const creatures = () => {
    let roll = roller(11);

    /*Used in switch cases to determine array listing used*/
    let subRoll = undefined;

    /*Creature List Object*/
    const oCreatures = {
        Aberrations: ['Slaad', 'Otyugh', 'Gibbering Mouther', 'Aboleth'],
        Celestials: ['Pegasus', 'Coutl', 'Angel', 'Empyrean', 'Unicorn'],
        Constructs: ['Golem', 'Homunculus', 'Animated Objects', 'Shield Guardian'],
        Dragons: ['Red Dragon', 'Blue Dragon', 'Green Dragon', 'Black Dragon', 'White Dragon', 'Gold Dragon', 'Silver Dragon', 'Bronze Dragon', 'Brass Dragon', 'Copper Dragon'],
        Elementals: ['Earth Elemental', 'Air Elemental', 'Fire Elemental', 'Water Elemental'],
        Fey: ['Lord', 'Hag', 'Dryad', 'Sprite/Pixie'],
        Fiends: ['Demon', 'Devil', 'Cambion', 'Night Hag'],
        Giants: ['Frost Giant', 'Fire Giant', 'Stone Giant', 'Storm Giant', 'Hill Giant'],
        Humanoid: ['goblinoids', 'orcs', 'gnolls', 'lizardfolk', 'kobolds'],
        Monstrosities: ['Winter Wolf', 'Bulette', 'Roc', 'Medusa'],
        Undead: ['Zombies', 'Wight', 'Vampire', 'Lich']
    }
    switch (roll) {
        case 1:
            subRoll = roller(oCreatures.Aberrations.length - 1)
            return oCreatures.Aberrations[subRoll]
            break;
        case 2:
            subRoll = roller(oCreatures.Aberrations.length - 1)
            return oCreatures.Celestials[subRoll]
            break;
        case 3:
            subRoll = roller(oCreatures.Aberrations.length - 1)
            return oCreatures.Constructs[subRoll]
            break;
        case 4:
            subRoll = roller(oCreatures.Aberrations.length - 1)
            return oCreatures.Dragons[subRoll]
           break;
        case 5:
            subRoll = roller(oCreatures.Aberrations.length - 1)
            return oCreatures.Elementals[subRoll]
            break;
        case 6:
            subRoll = roller(oCreatures.Aberrations.length - 1)
            return oCreatures.Fey[subRoll]
            break;
        case 7:
            subRoll = roller(oCreatures.Aberrations.length - 1)
            return oCreatures.Fiends[subRoll]
            break;
        case 8:
            subRoll = roller(oCreatures.Aberrations.length - 1)
            return oCreatures.Giants[subRoll]
            break;
        case 9:
            subRoll = roller(oCreatures.Aberrations.length - 1)
            return oCreatures.Humanoid[subRoll]    
            break;
        case 10:
            subRoll = roller(oCreatures.Aberrations.length - 1)
            return oCreatures.Monstrosities[subRoll]
            break;
        case 11:
            subRoll = roller(oCreatures.Aberrations.length - 1)
            return oCreatures.Undead[subRoll]
            break;
        default:
            console.log('Default case of Creature function.')
            break;
    }
}

/*Determine Location*/
const locations = () => {
    let roll = roller(3)
    let subRoll = undefined;

    const oLocations = {
        Settlement: ['a City', 'a Town', 'a Village', 'a Outpost'],
        Temple: ['a Temple of Good', 'a Temple of Evil', 'a Temple of a Pantheon'],
        Other: ['in a Dungeon', 'at a Fortress', 'at a Tavern', 'in a Forest Grove']
    }

    switch (roll) {
        case 1:
            subRoll = roller(oLocations.Settlement.length - 1)
            return oLocations.Settlement[subRoll]
            break;
        case 2:
            subRoll = roller(oLocations.Temple.length - 1)
            return oLocations.Temple[subRoll]
            break;
        case 3:
            subRoll = roller(oLocations.Other.length - 1)
            return oLocations.Other[subRoll]
            break;
        default:
            console.log('default case of location function')
            break;
    }
}
/*Initial demeanor*/
const reactions = () => {
    let roll = XdXRoller(2,6);
  
    let aReaction = ['Immediately Hostile', 'Unfavorable','Favorable','Very Favorable']

    if(roll <= 2){
        return aReaction[0];
    }else if(roll >= 3 && roll <= 7){
        return aReaction[1];
    }else if(roll >= 8 && roll <= 11){
        return aReaction[2];
    }else if(roll >= 12){
        return aReaction[3];
    }else {
        return 'Something went wrong'
    }
}
/* tests
console.log(creatures());
console.log(locations());
console.log(reactions());
*/

