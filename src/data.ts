//@ts-nocheck

type Runeword = {
    runeword: string;
    runes: string[];
    effects: string;
    item: string;
    level: number;
    ladderOnly: boolean;
};

const data: Runeword[] = [
    {
        "runeword": "Doom Rune Word",
        "runes": [
            "Hel",
            "Ohm",
            "Um",
            "Lo",
            "Cham"
        ],
        "effects": "5% Chance To Cast Level 18 Volcano On Striking\nLevel 12 Holy Freeze Aura When Equipped\n+2 To All Skills\n+45% Increased Attack Speed\n+330-370% Enhanced Damage\n-(40-60)% To Enemy Cold Resist\n20% Deadly Strike\n25% Chance of Open Wounds\nPrevent Monster Heal\nFreezes Target +3\nRequirements -20%",
        "item": "nonmagic axes, polearms, hammers with exactly 5 sockets",
        "level": 67,
        "ladderOnly": false
    },
    {
        "runeword": "Ancient's Pledge Rune Word",
        "runes": [
            "Ral",
            "Ort",
            "Tal"
        ],
        "effects": "+50% Enhanced Defense\nCold Resist +43%\nFire Resist +13% (48% Total)\nLightning Resist +13% (48% Total)\nPoison Resist +13% (48% Total)\n10% Damage Goes To Mana",
        "item": "nonmagic off-hand armor (shields, shrunken heads, paladin shields) with exactly 3 sockets",
        "level": 21,
        "ladderOnly": false
    },
    {
        "runeword": "Memory Rune Word",
        "runes": [
            "Lum",
            "Io",
            "Sol",
            "Eth"
        ],
        "effects": "+3 to Sorceress Skill Levels\n33% Faster Cast Rate\nIncrease Maximum Mana 20%\n+3 Energy Shield (Sorceress Only)\n+2 Static Field (Sorceress Only)\n+10 To Energy\n+10 To Vitality\n+9 To Minimum Damage\n-25% Target Defense\nMagic Damage Reduced By 7\n+50% Enhanced Defense",
        "item": "nonmagic staves with exactly 4 sockets",
        "level": 37,
        "ladderOnly": false
    },
    {
        "runeword": "King's Grace Rune Word",
        "runes": [
            "Amn",
            "Ral",
            "Thul"
        ],
        "effects": "+100% Enhanced Damage\n+100% Damage against Demons\n+50% Damage against Undead\nAdds 5-30 Fire Damage\nAdds 3-14 Cold Damage for 3 seconds\n+150 to Attack Rating\n+100 to Attack Rating against Demons\n+100 to Attack Rating against Undead\n7% Life Stolen per hit",
        "item": "nonmagic swords, scepters with exactly 3 sockets",
        "level": 25,
        "ladderOnly": false
    },
    {
        "runeword": "Ice Rune Word",
        "runes": [
            "Amn",
            "Shael",
            "Jah",
            "Lo"
        ],
        "effects": "100% Chance To Cast Level 40 Blizzard When You Level-up\n25% Chance To Cast Level 22 Frost Nova On Striking\nLevel 18 Holy Freeze Aura When Equipped\n+20% Increased Attack Speed\n+140-210% Enhanced Damage\nIgnore Target's Defense\n+25-30% To Cold Skill Damage\n-20% To Enemy Cold Resist\n7% Life Stolen Per Hit\n20% Deadly Strike\n3.125-309.375% Extra Gold From Monsters (Based on Character Level)",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 4 sockets",
        "level": 65,
        "ladderOnly": true
    },
    {
        "runeword": "Black Rune Word",
        "runes": [
            "Thul",
            "Io",
            "Nef"
        ],
        "effects": "+120% Enhanced Damage\n40% Chance of Crushing Blow\n+200 to Attack Rating\nAdds 3-14 Cold Damage for 3 seconds\n+10 to Vitality\n15% increased Attack Speed\nMagic Damage Reduced by 2\nLevel 4 Corpse Explosion (12 charges)\nKnockback",
        "item": "nonmagic clubs, hammers, maces with exactly 3 sockets",
        "level": 35,
        "ladderOnly": false
    },
    {
        "runeword": "Death Rune Word",
        "runes": [
            "Hel",
            "El",
            "Vex",
            "Ort",
            "Gul"
        ],
        "effects": "100% Chance To Cast Level 44 Chain Lightning When You Die\n25% Chance To Cast Level 18 Glacial Spike On Attack\nIndestructible\n+300-385% Enhanced Damage\n20% Bonus To Attack Rating\n+50 To Attack Rating\nAdds 1-50 Lightning Damage\n7% Mana Stolen Per Hit\n50% Chance of Crushing Blow\n+(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)\n+1 To Light Radius\nLevel 22 Blood Golem (15 Charges)\nRequirements -20%",
        "item": "nonmagic swords, axes with exactly 5 sockets",
        "level": 55,
        "ladderOnly": true
    },
    {
        "runeword": "Crescent Moon Rune Word",
        "runes": [
            "Shael",
            "Um",
            "Tir"
        ],
        "effects": "10% Chance To Cast Level 17 Chain Lightning On Striking\n7% Chance To Cast Level 13 Static Field On Striking\n+20% Increased Attack Speed\n+180-220% Enhanced Damage\nIgnore Target's Defense\n-35% To Enemy Lightning Resist\n25% Chance of Open Wounds\n+9-11 Magic Absorb \n+2 To Mana After Each Kill\nLevel 18 Summon Spirit Wolf (30 Charges)",
        "item": "nonmagic axes, swords, polearms with exactly 3 sockets",
        "level": 47,
        "ladderOnly": false
    },
    {
        "runeword": "Brand Rune Word",
        "runes": [
            "Jah",
            "Lo",
            "Mal",
            "Gul"
        ],
        "effects": "35% Chance To Cast Level 14 Amplify Damage When Struck\n100% Chance To Cast Level 18 Bone Spear On Striking\n+260-340% Enhanced Damage\nIgnores Target's Defense\n20% Bonus to Attack Rating\n+280-330% Damage To Demons\n20% Deadly Strike\nPrevent Monster Heal\nKnockback\nFires Explosive Arrows or Bolts [level 15]",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 4 sockets",
        "level": 65,
        "ladderOnly": true
    },
    {
        "runeword": "Hand of Justice Rune Word",
        "runes": [
            "Sur",
            "Cham",
            "Amn",
            "Lo"
        ],
        "effects": "100% Chance To Cast Level 36 Blaze When You Level-Up\n100% Chance To Cast Level 48 Meteor When You Die\nLevel 16 Holy Fire Aura When Equipped\n+33% Increased Attack Speed\n+280-330% Enhanced Damage\nIgnore Target's Defense\n7% Life Stolen Per Hit\n-20% To Enemy Fire Resist\n20% Deadly Strike\nHit Blinds Target\nFreezes Target +3",
        "item": "nonmagic weapons with exactly 4 sockets",
        "level": 67,
        "ladderOnly": false
    },
    {
        "runeword": "Enlightenment Rune Word",
        "runes": [
            "Pul",
            "Ral",
            "Sol"
        ],
        "effects": "5% Chance To Cast Level 15 Blaze When Struck\n5% Chance To Cast level 15 Fire Ball On Striking\n+2 To Sorceress Skill Levels\n+1 To Warmth\n+30% Enhanced Defense\nFire Resist +30%\nDamage Reduced By 7",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 45,
        "ladderOnly": false
    },
    {
        "runeword": "Dragon Rune Word",
        "runes": [
            "Sur",
            "Lo",
            "Sol"
        ],
        "effects": "20% Chance to Cast Level 18 Venom When Struck\n12% Chance To Cast Level 15 Hydra On Striking\nLevel 14 Holy Fire Aura When Equipped\n+360 Defense\n+230 Defense vs. Missile\n+3-5 To All Attributes (varies)\n+0.375-37.125 To Strength (Based on Character Level)\nIncrease Maximum Mana 5% (Armor Only)\n+50 To Mana (Shields Only) \n+5% To Maximum Lightning Resist\nDamage Reduced by 7",
        "item": "nonmagic body armor, off-hand armor (shields, shrunken heads, paladin shields) with exactly 3 sockets",
        "level": 61,
        "ladderOnly": true
    },
    {
        "runeword": "Grief Rune Word",
        "runes": [
            "Eth",
            "Tir",
            "Lo",
            "Mal",
            "Ral"
        ],
        "effects": "35% Chance To Cast Level 15 Venom On Striking\n+30-40% Increased Attack Speed\nDamage +340-400\nIgnore Target's Defense\n-25% Target Defense\n+(1.875 per character level) 1.875-185.625% Damage To Demons (Based on Character Level)\nAdds 5-30 Fire Damage\n-20-25% To Enemy Poison Resist\n20% Deadly Strike\nPrevent Monster Heal\n+2 To Mana After Each Kill\n+10-15 Life After Each Kill",
        "item": "nonmagic swords, axes with exactly 5 sockets",
        "level": 59,
        "ladderOnly": true
    },
    {
        "runeword": "Enigma Rune Word",
        "runes": [
            "Jah",
            "Ith",
            "Ber"
        ],
        "effects": "+2 To All Skills\n+45% Faster Run/Walk\n+1 To Teleport\n+750-775 Defense\n+ (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)\nIncrease Maximum Life 5%\nDamage Reduced By 8%\n+14 Life After Each Kill\n15% Damage Taken Goes To Mana\n+ (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 65,
        "ladderOnly": false
    },
    {
        "runeword": "Call to Arms Rune Word",
        "runes": [
            "Amn",
            "Ral",
            "Mal",
            "Ist",
            "Ohm"
        ],
        "effects": "+1 To All Skills\n+40% Increased Attack Speed\n+250-290% Enhanced Damage\nAdds 5-30 Fire Damage\n7% Life Stolen Per Hit\n+2-6 To Battle Command \n+1-6 To Battle Orders \n+1-4 To Battle Cry\nPrevent Monster Heal\nReplenish Life +12\n30% Better Chance of Getting Magic Items",
        "item": "nonmagic weapons with exactly 5 sockets",
        "level": 57,
        "ladderOnly": false
    },
    {
        "runeword": "Breath of the Dying Rune Word",
        "runes": [
            "Vex",
            "Hel",
            "El",
            "Eld",
            "Zod",
            "Eth"
        ],
        "effects": "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy\nIndestructible\n+60% Increased Attack Speed\n+350-400% Enhanced Damage (varies)\n+200% Damage To Undead\n-25% Target Defense\n+50 To Attack Rating\n+50 To Attack Rating Against Undead\n7% Mana Stolen per Hit\n12-15% Life Stolen per Hit \nPrevent Monster Heal\n+30 To All Attributes\n+1 To Light Radius\nRequirements -20%",
        "item": "nonmagic weapons with exactly 6 sockets",
        "level": 69,
        "ladderOnly": false
    },
    {
        "runeword": "Bramble Rune Word",
        "runes": [
            "Ral",
            "Ohm",
            "Sur",
            "Eth"
        ],
        "effects": "Level 15-21 Thorns Aura When Equipped\n+50% Faster Hit Recovery\n+25-50% To Poison Skill Damage\n+300 Defense\nIncrease Maximum Mana 5%\nRegenerate Mana 15%\n+5% To Maximum Cold Resist\nFire Resist +30%\nPoison Resist +100%\n+13 Life After Each Kill\nLevel 13 Spirit of Barbs (33 Charges)",
        "item": "nonmagic body armor with exactly 4 sockets",
        "level": 61,
        "ladderOnly": false
    },
    {
        "runeword": "Fury Rune Word",
        "runes": [
            "Jah",
            "Gul",
            "Eth"
        ],
        "effects": "+209% Enhanced Damage\n40% Increased Attack Speed\nPrevent Monster Heal\n66% Chance of Open Wounds\n33% Chance of Deadly Strike\n-25% Target Defense\n20% to Attack Rating\n6% Life Stolen Per Hit\nIgnores Target Defense\n+5 to Frenzy (Barbarian only)",
        "item": "nonmagic melee weapons with exactly 3 sockets",
        "level": 65,
        "ladderOnly": false
    },
    {
        "runeword": "Beast Rune Word",
        "runes": [
            "Ber",
            "Tir",
            "Um",
            "Mal",
            "Lum"
        ],
        "effects": "Level 9 Fanaticism Aura When Equipped\n+40% Increased Attack Speed\n+240-270% Enhanced Damage\n20% Chance of Crushing Blow\n25% Chance of Open Wounds\n+3 To Werebear\n+3 To Lycanthropy\nPrevent Monster Heal\n+25-40 To Strength\n+10 To Energy\n+2 To Mana After Each Kill\nLevel 13 Summon Grizzly (5 Charges)",
        "item": "nonmagic axes, scepters, hammers with exactly 5 sockets",
        "level": 63,
        "ladderOnly": false
    },
    {
        "runeword": "Holy Thunder Rune Word",
        "runes": [
            "Eth",
            "Ral",
            "Ort",
            "Tal"
        ],
        "effects": "+60% Enhanced Damage\n-25% Target Defense\n5-30 Fire Damage\n21-110 Lightning Damage\n+75 Poison Damage for 5 seconds\n+10 to Maximum Damage\n+60% Lightning Resist\n+5 to Maximum Lightning Resist\n+3 to Holy Shock (Paladin only)\nLevel 7 Chain Lightning (60 charges)",
        "item": "nonmagic scepters with exactly 4 sockets",
        "level": 24,
        "ladderOnly": false
    },
    {
        "runeword": "Bone Rune Word",
        "runes": [
            "Sol",
            "Um",
            "Um"
        ],
        "effects": "15% Chance To Cast level 10 Bone Armor When Struck\n15% Chance To Cast level 10 Bone Spear On Striking\n+2 To Necromancer Skill Levels\n+100-150 To Mana (varies)\nAll Resistances +30\nDamage Reduced By 7",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 47,
        "ladderOnly": false
    },
    {
        "runeword": "Chains of Honor Rune Word",
        "runes": [
            "Dol",
            "Um",
            "Ber",
            "Ist"
        ],
        "effects": "+2 To All Skills\n+200% Damage To Demons\n+100% Damage To Undead\n8% Life Stolen Per Hit\n+70% Enhanced Defense\n+20 To Strength\nReplenish Life +7\nAll Resistances +65\nDamage Reduced By 8%\n25% Better Chance of Getting Magic Items",
        "item": "nonmagic body armor with exactly 4 sockets",
        "level": 63,
        "ladderOnly": false
    },
    {
        "runeword": "Delirium Rune Word",
        "runes": [
            "Lem",
            "Ist",
            "Io"
        ],
        "effects": "1% Chance To Cast Level 50 Delirium When Struck (morph)\n6% Chance To Cast Level 14 Mind Blast When Struck\n14% Chance To Cast Level 13 Terror When Struck\n11% Chance To Cast Level 18 Confuse On Striking\n+2 To All Skills\n+261 Defense\n+10 To Vitality\n50% Extra Gold From Monsters\n25% Better Chance of Getting Magic Items\nLevel 17 Attract (60 Charges)",
        "item": "nonmagic helms (including barbarian helms, druid pelts, circlets) with exactly 3 sockets",
        "level": 51,
        "ladderOnly": false
    },
    {
        "runeword": "Harmony Rune Word",
        "runes": [
            "Tir",
            "Ith",
            "Sol",
            "Ko"
        ],
        "effects": "Level 10 Vigor Aura When Equipped\n+200-275% Enhanced Damage\n+9 To Minimum Damage\n+9 To Maximum Damage\nAdds 55-160 Lightning Damage\nAdds 55-160 Fire Damage\nAdds 55-160 Cold Damage\n+2-6 To Valkyrie\n+10 To Dexterity\nRegenerate Mana 20%\n+2 To Mana After Each Kill\n+2 To Light Radius\nLevel 20 Revive (25 Charges)",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 4 sockets",
        "level": 39,
        "ladderOnly": true
    },
    {
        "runeword": "Eternity Rune Word",
        "runes": [
            "Amn",
            "Ber",
            "Ist",
            "Sol",
            "Sur"
        ],
        "effects": "Indestructible\n+260-310% Enhanced Damage \n+9 To Minimum Damage\n7% Life Stolen Per Hit\n20% Chance of Crushing Blow\nHit Blinds Target\nSlows Target By 33%\nRegenerate Mana 16%\nReplenish Life +16\nCannot Be Frozen\n30% Better Chance Of Getting Magic Items\nLevel 8 Revive (88 Charges)",
        "item": "nonmagic melee weapons with exactly 5 sockets",
        "level": 63,
        "ladderOnly": false
    },
    {
        "runeword": "Dream Rune Word",
        "runes": [
            "Io",
            "Jah",
            "Pul"
        ],
        "effects": "10% Chance To Cast Level 15 Confuse When Struck\nLevel 15 Holy Shock Aura When Equipped\n+20-30% Faster Hit Recovery\n+30% Enhanced Defense\n+150-220 Defense\n+10 To Vitality\nIncrease Maximum Life 5% (Helms Only)\n+50 To Life (Shields Only)\n+0.625-61.875 To Mana (Based On Character Level)\nAll Resistances +5-20\n12-25% Better Chance of Getting Magic Items",
        "item": "nonmagic helms (including barbarian helms, druid pelts, circlets), off-hand armor (shields, shrunken heads, paladin shields) with exactly 3 sockets",
        "level": 65,
        "ladderOnly": true
    },
    {
        "runeword": "Wind Rune Word",
        "runes": [
            "Sur",
            "El"
        ],
        "effects": "10% Chance To Cast Level 9 Tornado On Striking\n+20% Faster Run/Walk\n+40% Increased Attack Speed\n+15% Faster Hit Recovery\n+120-160% Enhanced Damage\n-50% Target Defense\n+50 To Attack Rating\nHit Blinds Target\n+1 To Light Radius\nLevel 13 Twister (127 Charges) ",
        "item": "nonmagic melee weapons with exactly 2 sockets",
        "level": 61,
        "ladderOnly": false
    },
    {
        "runeword": "Obedience Rune Word",
        "runes": [
            "Hel",
            "Ko",
            "Thul",
            "Eth",
            "Fal"
        ],
        "effects": "30% Chance To Cast Level 21 Enchant When You Kill An Enemy\n40% Faster Hit Recovery\n+370% Enhanced Damage\n-25% Target Defense\nAdds 3-14 Cold Damage 3 Second Duration (Normal)\n-25% To Enemy Fire Resist\n40% Chance of Crushing Blow\n+200-300 Defense\n+10 To Strength\n+10 To Dexterity\nAll Resistances +20-30\nRequirements -20% ",
        "item": "nonmagic polearms with exactly 5 sockets",
        "level": 41,
        "ladderOnly": true
    },
    {
        "runeword": "Splendor Rune Word",
        "runes": [
            "Eth",
            "Lum"
        ],
        "effects": "+1 To All Skills\n+10% Faster Cast Rate\n+20% Faster Block Rate\n+60-100% Enhanced Defense\n+10 To Energy\nRegenerate Mana 15%\n50% Extra Gold From Monsters\n20% Better Chance of Getting Magic Items\n+3 To Light Radius",
        "item": "nonmagic off-hand armor (shields, shrunken heads, paladin shields) with exactly 2 sockets",
        "level": 37,
        "ladderOnly": false
    },
    {
        "runeword": "Pride Rune Word",
        "runes": [
            "Cham",
            "Sur",
            "Io",
            "Lo"
        ],
        "effects": "25% Chance To Cast Level 17 Fire Wall When Struck\nLevel 16-20  Concentration Aura When Equipped \n260-300% Bonus To Attack Rating \n+1-99% Damage To Demons (Based on Character Level)\nAdds 50-280 Lightning Damage\n20% Deadly Strike\nHit Blinds Target\nFreezes Target +3\n+10 To Vitality\nReplenish Life +8\n1.875-185.625% Extra Gold From Monsters (Based on Character Level)",
        "item": "nonmagic polearms with exactly 4 sockets",
        "level": 67,
        "ladderOnly": true
    },
    {
        "runeword": "Heart of the Oak Rune Word",
        "runes": [
            "Ko",
            "Vex",
            "Pul",
            "Thul"
        ],
        "effects": "+3 To All Skills\n+40% Faster Cast Rate\n+75% Damage To Demons\n+100 To Attack Rating Against Demons\nAdds 3-14 Cold Damage, 3 sec. Duration (Normal)\n7% Mana Stolen Per Hit\n+10 To Dexterity\nReplenish Life +20\nIncrease Maximum Mana 15%\nAll Resistances +30-40\nLevel 4 Oak Sage (25 Charges)\nLevel 14 Raven (60 Charges)",
        "item": "nonmagic staves, maces with exactly 4 sockets",
        "level": 55,
        "ladderOnly": false
    },
    {
        "runeword": "Smoke Rune Word",
        "runes": [
            "Nef",
            "Lum"
        ],
        "effects": "+75% Enhanced Defense\n+280 Defense vs. Missiles\nAll Resistances +50\n20% Faster Hit Recovery\nLevel 6 Weaken (18 Charges)\n+10 To Energy\n-1 To Light Radius",
        "item": "nonmagic body armor with exactly 2 sockets",
        "level": 37,
        "ladderOnly": false
    },
    {
        "runeword": "Melody Rune Word",
        "runes": [
            "Shael",
            "Ko",
            "Nef"
        ],
        "effects": "+50% Enhanced Damage\n+300% Damage To Undead\n+3 To Bow and Crossbow Skills (Amazon Only)\n+3 To Critical Strike (Amazon Only)\n+3 To Dodge (Amazon Only)\n+3 To Slow Missiles (Amazon Only)\n20% Increased Attack Speed\n+10 To Dexterity\nKnockback",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 3 sockets",
        "level": 39,
        "ladderOnly": false
    },
    {
        "runeword": "Malice Rune Word",
        "runes": [
            "Ith",
            "El",
            "Eth"
        ],
        "effects": "+33% Enhanced Damage\n+9 To Maximum Damage\n100% Chance Of Open Wounds\n-25% Target Defense\n-100 To Monster Defense per Hit\nPrevent Monster Heal\n+50 To Attack Rating\nDrain Life -5",
        "item": "nonmagic melee weapons with exactly 3 sockets",
        "level": 15,
        "ladderOnly": false
    },
    {
        "runeword": "Prudence Rune Word",
        "runes": [
            "Mal",
            "Tir"
        ],
        "effects": "+25% Faster Hit Recovery\n+140-170% Enhanced Defense\nAll Resistances +25-35\nDamage Reduced by 3\nMagic Damage Reduced by 17\n+2 To Mana After Each Kill\n+1 To Light Radius\nRepairs Durability 1 In 4 Seconds",
        "item": "nonmagic body armor with exactly 2 sockets",
        "level": 49,
        "ladderOnly": false
    },
    {
        "runeword": "Zephyr Rune Word",
        "runes": [
            "Ort",
            "Eth"
        ],
        "effects": "+33% Enhanced Damage\n+66 To Attack Rating\nAdds 1-50 Lightning Damage\n-25% Target Defense\n+25 Defense\n25% Faster Run/Walk\n25% Increased Attack Speed\n7% Chance To Cast Level 1 Twister When Struck",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 2 sockets",
        "level": 21,
        "ladderOnly": false
    },
    {
        "runeword": "Peace Rune Word",
        "runes": [
            "Shael",
            "Thul",
            "Amn"
        ],
        "effects": "4% Chance To Cast Level 5 Slow Missiles When Struck\n2% Chance To Cast level 15 Valkyrie On Striking\n+2 To Amazon Skill Levels\n+20% Faster Hit Recovery\n+2 To Critical Strike\nCold Resist +30%\nAttacker Takes Damage of 14",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 29,
        "ladderOnly": false
    },
    {
        "runeword": "Sanctuary Rune Word",
        "runes": [
            "Ko",
            "Ko",
            "Mal"
        ],
        "effects": "+20% Faster Hit Recovery\n+20% Faster Block Rate\n20% Increased Chance of Blocking\n+130-160% Enhanced Defense \n+250 Defense vs. Missile\n+20 To Dexterity\nAll Resistances +50-70\nMagic Damage Reduced By 7\nLevel 12 Slow Missiles (60 Charges)",
        "item": "nonmagic off-hand armor (shields, shrunken heads, paladin shields) with exactly 3 sockets",
        "level": 49,
        "ladderOnly": false
    },
    {
        "runeword": "Principle Rune Word",
        "runes": [
            "Ral",
            "Gul",
            "Eld"
        ],
        "effects": "100% Chance To Cast Level 5 Holy Bolt On Striking\n+2 To Paladin Skill Levels\n+50% Damage to Undead\n+100-150 To Life (varies)\n15% Slower Stamina Drain\n+5% To Maximum Poison Resist\nFire Resist +30% ",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 53,
        "ladderOnly": false
    },
    {
        "runeword": "Leaf Rune Word",
        "runes": [
            "Tir",
            "Ral"
        ],
        "effects": "Adds 5-30 Fire Damage\n+3 To Fire Skills\n+3 To Fire Bolt (Sorceress Only)\n+3 To Inferno (Sorceress Only)\n+3 To Warmth (Sorceress Only)\n+2 To Mana After Each Kill\n+ (2 Per Character Level) +2-198 To Defense (Based On Character Level)\nCold Resist +33%",
        "item": "nonmagic staves with exactly 2 sockets",
        "level": 19,
        "ladderOnly": false
    },
    {
        "runeword": "Radiance Rune Word",
        "runes": [
            "Nef",
            "Sol",
            "Ith"
        ],
        "effects": "+75% Enhanced Defense\n+30 Defense Vs. Missile\n+10 To Energy\n+10 To Vitality\n15% Damage Goes To Mana\nMagic Damage Reduced By 3\n+33 To Mana\nDamage Reduced By 7\n+5 To Light Radius",
        "item": "nonmagic helms (including barbarian helms, druid pelts, circlets) with exactly 3 sockets",
        "level": 27,
        "ladderOnly": false
    },
    {
        "runeword": "Venom Rune Word",
        "runes": [
            "Tal",
            "Dol",
            "Mal"
        ],
        "effects": "Hit Causes Monster To Flee 25%\nPrevent Monster Heal\nIgnore Target's Defense\n7% Mana Stolen Per Hit\nLevel 15 Poison Explosion (27 Charges)\nLevel 13 Poison Nova (11 Charges)\n+273 Poison Damage Over 6 seconds",
        "item": "nonmagic weapons with exactly 3 sockets",
        "level": 49,
        "ladderOnly": false
    },
    {
        "runeword": "Nadir Rune Word",
        "runes": [
            "Nef",
            "Tir"
        ],
        "effects": "+50% Enhanced Defense\n+10 Defense\n+30 Defense vs. Missile\nLevel 13 Cloak of Shadows (9 Charges)\n+2 To Mana After Each Kill\n+5 To Strength\n-33% Extra Gold From Monsters\n-3 To Light Radius",
        "item": "nonmagic helms (including barbarian helms, druid pelts, circlets) with exactly 2 sockets",
        "level": 13,
        "ladderOnly": false
    },
    {
        "runeword": "Famine Rune Word",
        "runes": [
            "Fal",
            "Ohm",
            "Ort",
            "Jah"
        ],
        "effects": "30% Increased Attack Speed\n+320-370% Enhanced Damage\nIgnore Target's Defense\nAdds 180-200 Magic Damage\nAdds 50-200 Fire Damage\nAdds 51-250 Lightning Damage\nAdds 50-200 Cold Damage\n12% Life Stolen Per Hit\nPrevent Monster Heal\n+10 To Strength",
        "item": "nonmagic axes, hammers with exactly 4 sockets",
        "level": 65,
        "ladderOnly": false
    },
    {
        "runeword": "Lionheart Rune Word",
        "runes": [
            "Hel",
            "Lum",
            "Fal"
        ],
        "effects": "+20% Enhanced Damage\nRequirements -15%\n+25 To Strength\n+10 To Energy\n+20 To Vitality\n+15 To Dexterity\n+50 To Life\nAll Resistances +30",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 41,
        "ladderOnly": false
    },
    {
        "runeword": "Lawbringer Rune Word",
        "runes": [
            "Amn",
            "Lem",
            "Ko"
        ],
        "effects": "20% Chance To Cast Level 15 Decrepify On Striking\nLevel 16-18 Sanctuary Aura When Equipped (varies)\n-50% Target Defense\nAdds 150-210 Fire Damage\nAdds 130-180 Cold Damage\n7% Life Stolen Per Hit\nSlain Monsters Rest in Peace\n+200-250 Defense vs. Missiles \n+10 To Dexterity\n75% Extra Gold From Monsters",
        "item": "nonmagic swords, hammers, scepters with exactly 3 sockets",
        "level": 43,
        "ladderOnly": true
    },
    {
        "runeword": "Last Wish Rune Word",
        "runes": [
            "Jah",
            "Mal",
            "Jah",
            "Sur",
            "Jah",
            "Ber"
        ],
        "effects": "6% Chance To Cast Level 11 Fade When Struck\n10% Chance To Cast Level 18 Life Tap On Striking\n20% Chance To Cast Level 20 Charged Bolt On Attack\nLevel 17 Might Aura When Equipped\n+330-375% Enhanced Damage \nIgnore Target's Defense\n60-70% Chance of Crushing Blow\nPrevent Monster Heal\nHit Blinds Target\n+(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level)",
        "item": "nonmagic swords, hammers, axes with exactly 6 sockets",
        "level": 65,
        "ladderOnly": true
    },
    {
        "runeword": "Spirit Rune Word",
        "runes": [
            "Tal",
            "Thul",
            "Ort",
            "Amn"
        ],
        "effects": "Sword\n+2 To All Skills\n+25-35% Faster Cast Rate (varies)\n+55% Faster Hit Recovery\nAdds 1-50 Lightning Damage\nAdds 3-14 Cold Damage 3 Second Duration (Normal)\n+75 Poison Damage Over 5 Seconds\n7% Life Stolen Per Hit\n+250 Defense vs. Missiles\n+22 To Vitality\n+89-112 To Mana (varies)\n+3-8 Magic Absorb (varies)",
        "item": "nonmagic swords, off-hand armor (shields, shrunken heads, paladin shields) with exactly 4 sockets",
        "level": 25,
        "ladderOnly": true
    },
    {
        "runeword": "Faith Rune Word",
        "runes": [
            "Ohm",
            "Jah",
            "Lem",
            "Eld"
        ],
        "effects": "Level 12-15 Fanaticism Aura When Equipped\n+1-2 To All Skills\n+330% Enhanced Damage\nIgnore Target's Defense\n300% Bonus To Attack Rating\n+75% Damage To Undead\n+50 To Attack Rating Against Undead\n+120 Fire Damage\nAll Resistances +15\n10% Reanimate As: Returned\n75% Extra Gold From Monsters ",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 4 sockets",
        "level": 65,
        "ladderOnly": true
    },
    {
        "runeword": "Insight Rune Word",
        "runes": [
            "Ral",
            "Tir",
            "Tal",
            "Sol"
        ],
        "effects": "Level 12-17 Meditation Aura When Equipped\n+35% Faster Cast Rate\n+200-260% Enhanced Damage (varies)\n+9 To Minimum Damage\n180-250% Bonus to Attack Rating\nAdds 5-30 Fire Damage\n+75 Poison Damage Over 5 Seconds\n+1-6 To Critical Strike\n+5 To All Attributes\n+2 To Mana After Each Kill\n23% Better Chance of Getting Magic Items",
        "item": "nonmagic polearms, staves with exactly 4 sockets",
        "level": 27,
        "ladderOnly": true
    },
    {
        "runeword": "Steel Rune Word",
        "runes": [
            "Tir",
            "El"
        ],
        "effects": "20% Enhanced Damage\n+3 To Minimum Damage\n+3 To Maximum Damage\n+50 To Attack Rating\n50% Chance Of Open Wounds\n25% Increased Attack Speed\n+2 To Mana After Each Kill\n+1 To Light Radius",
        "item": "nonmagic swords, axes, maces with exactly 2 sockets",
        "level": 13,
        "ladderOnly": false
    },
    {
        "runeword": "Voice of Reason Rune Word",
        "runes": [
            "Lem",
            "Ko",
            "El",
            "Eld"
        ],
        "effects": "15% Chance To Cast Level 13 Frozen Orb On Striking\n18% Chance To Cast Level 20 Ice Blast On Striking\n+50 To Attack Rating\n+220-350% Damage To Demons\n+355-375% Damage To Undead\n+50 To Attack Rating Against Undead\nAdds 100-220 Cold Damage\n-24% To Enemy Cold Resistance\n+10 To Dexterity\nCannot Be Frozen\n75% Extra Gold From Monsters\n+1 To Light Radius",
        "item": "nonmagic swords, maces with exactly 4 sockets",
        "level": 43,
        "ladderOnly": true
    },
    {
        "runeword": "Strength Rune Word",
        "runes": [
            "Amn",
            "Tir"
        ],
        "effects": "35% Enhanced Damage\n25% Chance Of Crushing Blow\n7% Life Stolen Per Hit\n+2 To Mana After Each Kill\n+20 To Strength\n+10 To Vitality",
        "item": "nonmagic melee weapons with exactly 2 sockets",
        "level": 25,
        "ladderOnly": false
    },
    {
        "runeword": "Myth Rune Word",
        "runes": [
            "Hel",
            "Amn",
            "Nef"
        ],
        "effects": "3% Chance To Cast Level 1 Howl When Struck\n10% Chance To Cast Level 1 Taunt On Striking\n+2 To Barbarian Skill Levels\n+30 Defense vs. Missile\nReplenish Life +10\nAttacker Takes Damage of 14\nRequirements -15%",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 25,
        "ladderOnly": false
    },
    {
        "runeword": "Stealth Rune Word",
        "runes": [
            "Tal",
            "Eth"
        ],
        "effects": "Magic Damage Reduced By 3\n+6 To Dexterity\n+15 To Maximum Stamina\nPoison Resist +30%\nRegenerate Mana 15%\n25% Faster Run/Walk\n25% Faster Cast Rate\n25% Faster Hit Recovery",
        "item": "nonmagic body armor with exactly 2 sockets",
        "level": 17,
        "ladderOnly": false
    },
    {
        "runeword": "Destruction Rune Word",
        "runes": [
            "Vex",
            "Lo",
            "Ber",
            "Jah",
            "Ko"
        ],
        "effects": "23% Chance To Cast Level 12 Volcano On Striking\n5% Chance To Cast Level 23 Molten Boulder On Striking\n100% Chance To Cast level 45 Meteor When You Die\n15% Chance To Cast Level 22 Nova On Attack\n+350% Enhanced Damage\nIgnore Target's Defense\nAdds 100-180 Magic Damage\n7% Mana Stolen Per Hit\n20% Chance Of Crushing Blow\n20% Deadly Strike\nPrevent Monster Heal\n+10 To Dexterity",
        "item": "nonmagic polearms, swords with exactly 5 sockets",
        "level": 65,
        "ladderOnly": true
    },
    {
        "runeword": "Honor Rune Word",
        "runes": [
            "Amn",
            "El",
            "Ith",
            "Tir",
            "Sol"
        ],
        "effects": "+160% Enhanced Damage\n+9 to Minimum Damage\n+9 to Maximum Damage\n25% Deadly Strike\n+250 to Attack Rating\n+1 to All Skills \n7% Life Stolen per Hit \n+10 Replenish Life\n+10 to Strength\n+1 to Light Radius\n+2 to Mana per Kill",
        "item": "nonmagic melee weapons with exactly 5 sockets",
        "level": 27,
        "ladderOnly": false
    },
    {
        "runeword": "Wrath Rune Word",
        "runes": [
            "Pul",
            "Lum",
            "Ber",
            "Mal"
        ],
        "effects": "30% Chance To Cast Level 1 Decrepify On Striking\n5% Chance To Cast Level 10 Life Tap On Striking\n+375% Damage To Demons\n+100 To Attack Rating Against Demons\n+250-300% Damage To Undead\nAdds 85-120 Magic Damage\nAdds 41-240 Lightning Damage\n20% Chance of Crushing Blow\nPrevent Monster Heal\n+10 To Energy\nCannot Be Frozen",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 4 sockets",
        "level": 63,
        "ladderOnly": true
    },
    {
        "runeword": "Kingslayer Rune Word",
        "runes": [
            "Mal",
            "Um",
            "Gul",
            "Fal"
        ],
        "effects": "+30% Increased Attack Speed\n+230-270% Enhanced Damage\n-25% Target Defense\n20% Bonus To Attack Rating\n33% Chance of Crushing Blow\n50% Chance of Open Wounds\n+1 To Vengeance\nPrevent Monster Heal\n+10 To Strength\n40% Extra Gold From Monsters",
        "item": "nonmagic swords, axes with exactly 4 sockets",
        "level": 53,
        "ladderOnly": false
    },
    {
        "runeword": "Duress Rune Word",
        "runes": [
            "Shael",
            "Um",
            "Thul"
        ],
        "effects": "+40% Faster Hit Recovery\n+10-20% Enhanced Damage\nAdds 37-133 Cold Damage 2 sec. Duration (Normal)\n15% Chance of Crushing Blow\n33% Chance of Open Wounds\n+150-200% Enhanced Defense\n-20% Slower Stamina Drain\nCold Resist +45%\nLightning Resist +15%\nFire Resist +15%\nPoison Resist +15%",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 47,
        "ladderOnly": false
    },
    {
        "runeword": "Passion Rune Word",
        "runes": [
            "Dol",
            "Ort",
            "Eld",
            "Lem"
        ],
        "effects": "+25% Increased Attack Speed\n+160-210% Enhanced Damage\n50-80% Bonus To Attack Rating\n+75% Damage To Undead\n+50 To Attack Rating Against Undead\nAdds 1-50 Lightning Damage\n+1 To Berserk\n+1 To Zeal\nHit Blinds Target +10\nHit Causes Monster To Flee 25%\n75% Extra Gold From Monsters\nLevel 3 Heart of Wolverine (12 Charges)",
        "item": "nonmagic weapons with exactly 4 sockets",
        "level": 43,
        "ladderOnly": false
    },
    {
        "runeword": "Lore Rune Word",
        "runes": [
            "Ort",
            "Sol"
        ],
        "effects": "+1 To All Skill Levels\n+10 To Energy\n+2 To Mana After Each Kill\nLightning Resist +30%\nDamage Reduced By 7\n+2 To Light Radius",
        "item": "nonmagic helms (including barbarian helms, druid pelts, circlets) with exactly 2 sockets",
        "level": 27,
        "ladderOnly": false
    },
    {
        "runeword": "Oath Rune Word",
        "runes": [
            "Shael",
            "Pul",
            "Mal",
            "Lum"
        ],
        "effects": "30% Chance To Cast Level 20 Bone Spirit On Striking\nIndestructible\n+50% Increased Attack Speed\n+210-340% Enhanced Damage\n+75% Damage To Demons\n+100 To Attack Rating Against Demons\nPrevent Monster Heal\n+10 To Energy\n+10-15 Magic Absorb \nLevel 16 Heart of Wolverine (20 Charges)\nLevel 17 Iron Golem (14 Charges)",
        "item": "nonmagic swords, axes, maces with exactly 4 sockets",
        "level": 49,
        "ladderOnly": true
    },
    {
        "runeword": "Gloom Rune Word",
        "runes": [
            "Fal",
            "Um",
            "Pul"
        ],
        "effects": "15% Chance To Cast Level 3 Dim Vision When Struck\n+10% Faster Hit Recovery\n+200-260% Enhanced Defense\n+10 To Strength\nAll Resistances +45\nHalf Freeze Duration\n5% Damage Taken Goes To Mana\n-3 To Light Radius",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 47,
        "ladderOnly": false
    },
    {
        "runeword": "Edge Rune Word",
        "runes": [
            "Tir",
            "Tal",
            "Amn"
        ],
        "effects": "Level 15 Thorns Aura When Equipped\n+35% Increased Attack Speed\n+320-380% Damage To Demons\n+280% Damage To Undead\n+75 Poison Damage Over 5 Seconds\n7% Life Stolen Per Hit\nPrevent Monster Heal\n+5-10 To All Attributes\n+2 To Mana After Each Kill\nReduces All Vendor Prices 15%",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 3 sockets",
        "level": 25,
        "ladderOnly": true
    },
    {
        "runeword": "Rain Rune Word",
        "runes": [
            "Ort",
            "Mal",
            "Ith"
        ],
        "effects": "5% Chance To Cast Level 15 Cyclone Armor When Struck\n5% Chance To Cast Level 15 Twister On Striking\n+2 To Druid Skills\n+100-150 To Mana\nLightning Resist +30%\nMagic Damage Reduced By 7\n15% Damage Taken Goes to Mana ",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 49,
        "ladderOnly": false
    },
    {
        "runeword": "Exile Rune Word",
        "runes": [
            "Vex",
            "Ohm",
            "Ist",
            "Dol"
        ],
        "effects": "15% Chance To Cast Level 5 Life Tap On Striking\nLevel 13-16 Defiance Aura When Equipped \n+2 To Offensive Auras (Paladin Only)\n+30% Faster Block Rate\nFreezes Target\n+220-260% Enhanced Defense (varies)\nReplenish Life +7\n+5% To Maximum Cold Resist\n+5% To Maximum Fire Resist\n25% Better Chance Of Getting Magic Items\nRepairs 1 Durability in 4 Seconds\n",
        "item": "nonmagic paladin-only items (paladin shields) with exactly 4 sockets",
        "level": 57,
        "ladderOnly": false
    },
    {
        "runeword": "Chaos Rune Word",
        "runes": [
            "Fal",
            "Ohm",
            "Um"
        ],
        "effects": "9% Chance To Cast Level 11 Frozen Orb On Striking\n11% Chance To Cast Level 9 Charged Bolt On Striking\n+35% Increased Attack Speed\n+290-340% Enhanced Damage\nAdds 216-471 Magic Damage\n25% Chance of Open Wounds\n+1 To Whirlwind\n+10 To Strength\n+15 Life After Each Demon Kill",
        "item": "nonmagic katars with exactly 3 sockets",
        "level": 57,
        "ladderOnly": false
    },
    {
        "runeword": "Fortitude Rune Word",
        "runes": [
            "El",
            "Sol",
            "Dol",
            "Lo"
        ],
        "effects": "Body Armor\n20% Chance To Cast Level 15 Chilling Armor when Struck\n+25% Faster Cast Rate\n+300% Enhanced Damage\n+200% Enhanced Defense\n+15 Defense\n+X To Life (Based on Character Level)\nReplenish Life +7\n+5% To Maximum Lightning Resist\nAll Resistances +25-30\nDamage Reduced By 7\n12% Damage Taken Goes To Mana\n+1 To Light Radius",
        "item": "nonmagic weapons, body armor with exactly 4 sockets",
        "level": 59,
        "ladderOnly": true
    },
    {
        "runeword": "Infinity Rune Word",
        "runes": [
            "Ber",
            "Mal",
            "Ber",
            "Ist"
        ],
        "effects": "50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy\nLevel 12 Conviction Aura When Equipped\n+35% Faster Run/Walk\n+255-325% Enhanced Damage\n-(45-55)% To Enemy Lightning Resist\n40% Chance of Crushing Blow\nPrevent Monster Heal\n0.5-49.5 To Vitality (Based on Character Level)\n30% Better Chance of Getting Magic Items\nLevel 21 Cyclone Armor (30 Charges)",
        "item": "nonmagic polearms with exactly 4 sockets",
        "level": 63,
        "ladderOnly": true
    },
    {
        "runeword": "Treachery Rune Word",
        "runes": [
            "Shael",
            "Thul",
            "Lem"
        ],
        "effects": "5% Chance To Cast Level 15 Fade When Struck\n25% Chance To Cast level 15 Venom On Striking\n+2 To Assassin Skills\n+45% Increased Attack Speed\n+20% Faster Hit Recovery\nCold Resist +30%\n50% Extra Gold From Monsters",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 43,
        "ladderOnly": false
    },
    {
        "runeword": "Rift Rune Word",
        "runes": [
            "Hel",
            "Ko",
            "Lem",
            "Gul"
        ],
        "effects": "20% Chance To Cast Level 16 Tornado On Striking\n16% Chance To Cast Level 21 Frozen Orb On Attack\n20% Bonus To Attack Rating\nAdds 160-250 Magic Damage\nAdds 60-180 Fire Damage\n+5-10 To All Stats (varies)\n+10 To Dexterity\n38% Damage Taken Goes To Mana\n75% Extra Gold From Monsters\nLevel 15 Iron Maiden (40 Charges)\nRequirements -20%",
        "item": "nonmagic polearms, scepters with exactly 4 sockets",
        "level": 53,
        "ladderOnly": true
    },
    {
        "runeword": "Phoenix Rune Word",
        "runes": [
            "Vex",
            "Vex",
            "Lo",
            "Jah"
        ],
        "effects": "Weapon\n100% Chance To Cast level 40 Blaze When You Level-up\n40% Chance To Cast Level 22 Firestorm On Striking\nLevel 10-15 Redemption Aura When Equipped\n+350-400% Enhanced Damage\nIgnores Target's Defense\n14% Mana Stolen Per Hit\n-28% To Enemy Fire Resist\n20% Deadly Strike\n+350-400 Defense vs. Missile\n+15-21 Fire Absorb",
        "item": "nonmagic weapons, off-hand armor (shields, shrunken heads, paladin shields) with exactly 4 sockets",
        "level": 65,
        "ladderOnly": true
    },
    {
        "runeword": "Stone Rune Word",
        "runes": [
            "Shael",
            "Um",
            "Pul",
            "Lum"
        ],
        "effects": "+60% Faster Hit Recovery\n+250-290% Enhanced Defense\n+300 Defense vs. Missile\n+16 To Strength\n+16 To Vitality\n+10 To Energy\nAll Resistances +15\nLevel 16 Molten Boulder (80 Charges)\nLevel 16 Clay Golem (16 Charges)",
        "item": "nonmagic body armor with exactly 4 sockets",
        "level": 47,
        "ladderOnly": false
    },
    {
        "runeword": "White Rune Word",
        "runes": [
            "Dol",
            "Io"
        ],
        "effects": "Hit Causes Monster To Flee 25%\n+10 To Vitality\n+3 To Poison and Bone Spells (Necromancer Only)\n+3 To Bone Armor (Necromancer Only)\n+2 To Bone Spear (Necromancer Only)\n+4 To Skeleton Mastery (Necromancer Only)\nMagic Damage Reduced By 4\n20% Faster Cast Rate\n+13 To Mana",
        "item": "nonmagic wands with exactly 2 sockets",
        "level": 35,
        "ladderOnly": false
    },
    {
        "runeword": "Silence Rune Word",
        "runes": [
            "Dol",
            "Eld",
            "Hel",
            "Ist",
            "Tir",
            "Vex"
        ],
        "effects": "200% Enhanced Damage\n+75% Damage To Undead\nRequirements -20%\n20% Increased Attack Speed\n+50 To Attack Rating Against Undead\n+2 To All Skills\nAll Resistances +75\n20% Faster Hit Recovery\n11% Mana Stolen Per Hit\nHit Causes Monster To Flee 25%\nHit Blinds Target +33\n+2 To Mana After Each Kill\n30% Better Chance Of Getting Magic Items",
        "item": "nonmagic weapons with exactly 6 sockets",
        "level": 55,
        "ladderOnly": false
    },
    {
        "runeword": "Rhyme Rune Word",
        "runes": [
            "Shael",
            "Eth"
        ],
        "effects": "20% Increased Chance of Blocking\n40% Faster Block Rate\n+25 to All Resistances\nRegenerate Mana 15%\nCannot Be Frozen\n50% Extra Gold From Monsters\n25% Better Chance Of Getting Magic Items",
        "item": "nonmagic off-hand armor (shields, shrunken heads, paladin shields) with exactly 2 sockets",
        "level": 29,
        "ladderOnly": false
    },
    {
        "runeword": "Wealth Rune Word",
        "runes": [
            "Lem",
            "Ko",
            "Tir"
        ],
        "effects": "300% Extra Gold From Monsters\n100% Better Chance Of Getting Magic Items\n+2 To Mana After Each Kill\n+10 To Dexterity",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 43,
        "ladderOnly": false
    }
];

const runewords = [
    "Ancient's Pledge Rune Word",
    "Beast Rune Word",
    "Black Rune Word",
    "Bone Rune Word",
    "Bramble Rune Word",
    "Brand Rune Word",
    "Breath of the Dying Rune Word",
    "Call to Arms Rune Word",
    "Chains of Honor Rune Word",
    "Chaos Rune Word",
    "Crescent Moon Rune Word",
    "Death Rune Word",
    "Delirium Rune Word",
    "Destruction Rune Word",
    "Doom Rune Word",
    "Dragon Rune Word",
    "Dream Rune Word",
    "Duress Rune Word",
    "Edge Rune Word",
    "Enigma Rune Word",
    "Enlightenment Rune Word",
    "Eternity Rune Word",
    "Exile Rune Word",
    "Faith Rune Word",
    "Famine Rune Word",
    "Fortitude Rune Word",
    "Fury Rune Word",
    "Gloom Rune Word",
    "Grief Rune Word",
    "Hand of Justice Rune Word",
    "Harmony Rune Word",
    "Heart of the Oak Rune Word",
    "Holy Thunder Rune Word",
    "Honor Rune Word",
    "Ice Rune Word",
    "Infinity Rune Word",
    "Insight Rune Word",
    "King's Grace Rune Word",
    "Kingslayer Rune Word",
    "Last Wish Rune Word",
    "Lawbringer Rune Word",
    "Leaf Rune Word",
    "Lionheart Rune Word",
    "List of Armor Rune Words",
    "List of Helm Rune Words",
    "List of Shield Rune Words",
    "List of Weapon Rune Words",
    "Lore Rune Word",
    "Malice Rune Word",
    "Melody Rune Word",
    "Memory Rune Word",
    "Myth Rune Word",
    "Nadir Rune Word",
    "Oath Rune Word",
    "Obedience Rune Word",
    "Passion Rune Word",
    "Peace Rune Word",
    "Phoenix Rune Word",
    "Pride Rune Word",
    "Principle Rune Word",
    "Prudence Rune Word",
    "Radiance Rune Word",
    "Rain Rune Word",
    "Rhyme Rune Word",
    "Rift Rune Word",
    "Rune Words",
    "Sanctuary Rune Word",
    "Silence Rune Word",
    "Smoke Rune Word",
    "Spirit Rune Word",
    "Splendor Rune Word",
    "Stealth Rune Word",
    "Steel Rune Word",
    "Stone Rune Word",
    "Strength Rune Word",
    "Treachery Rune Word",
    "Venom Rune Word",
    "Voice of Reason Rune Word",
    "Wealth Rune Word",
    "White Rune Word",
    "Wind Rune Word",
    "Wrath Rune Word",
    "Zephyr Rune Word"
];

// Scraper code
// make sure that runewords is defined, run the code below and eventually
// allOfTheThings will be populated with the data
// I've run this in the web dev tools console on https://diablo.fandom.com/wiki/Ancient%27s_Pledge_Rune_Word

function scrape() {
    const allOfTheThings = [];

    async function fetchRuneWordData(runeword) {
        const runewordURI = runeword.replace(" ", "_");
        const res = await fetch("https://diablo.fandom.com/wiki/" + runewordURI);
        if (res.ok) {
            const body = await res.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(body, "text/html");

            const magic = doc.querySelector("b[class='dw-color-magic']").innerText;
            const items = doc.querySelector("div[data-source='itypes'] div").innerText;
            const level = parseInt(doc.querySelector("div[data-source='level'] div").innerText);
            const ladderOnlyText = doc.querySelector("div[data-source='ladder'] div").innerText;
            const ladderOnly = ladderOnlyText == "no" ? false : true;

            const runes = [];
            const runesA = doc.querySelectorAll("h2[class='pi-item pi-item-spacing pi-title pi-secondary-background'] div[style='font-variant:small-caps;'] > a");
            runesA.forEach((rune) => runes.push(rune.innerHTML));

            return { runeword: runeword, runes: runes, effects: magic, item: items, level: level, ladderOnly: ladderOnly };
        } else {
            throw Error("unsuccessful");
        }
    }

    runewords.forEach(async (runeword) => {
        let data = await fetchRuneWordData(runeword);
        allOfTheThings.push(data);
    });

    return allOfTheThings;
}

export { data, Runeword };