# README
MixedMessages Codecademy Project

## Description
A light generator based on 5e for those needing a bit of inspiration or a quick 'something to do' for their intrepid party. The script generates a random enocunter from a set of 3 tables and outputs it to the console.

## Technology 
Javascript

## Function List - all functions are Global Scope
- **roller(x)**: Generates a random from 1 with upper bound x (inclusive). Returns result as number.
- **XdXRoller(x,y)**: Rolls x number of dice with y sides. Returns result as number.
- **encounter()**: Outputs random encounter to console. Returns Undefined
- **creatures()**: Generates creature from object list. Returns creature as string.
- **locations()**: Generates Location from object list. Returns location as string.
- **reactions()**: Generates the creatures initial demeanor from if table. Returns demeanor as string.

## Global Variables
- Includes no global variables.

## Appendix - Tables
Creature types from 5e SRD rules - http://5e.d20srd.org/srd/monsters/intro.htm
Note - Beasts, plants and oozes were cut from the list.
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
2. Temple - Good, Evil, Pantheon
3. Other - Dungeon Fortress, Tavern, Forest Grove

Reaction Roll Table from Basic Fantasy Roleplay - https://www.basicfantasy.org/srd/#reaction_roll_table
Adjusted Die Roll	Result
2 or less	Immediate Attack
3-7	        Unfavorable
8-11	    Favorable
12 or more	Very Favorably