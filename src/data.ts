//@ts-nocheck

type Runeword = {
    runeword: string;
    runes: string[];
    effects: string;
    item: string;
    level: number;
    ladderOnly: boolean;
};

// Scraper code
// make sure that runewords is defined, run the code below
// I've run this in the web dev tools console on https://diablo.fandom.com/wiki/Ancient%27s_Pledge_Rune_Word

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

function scrape() {
    const allOfTheThings = [];

    async function fetchRuneWordData(runeword) {
        const runewordURI = runeword.replace(" ", "_");
        const res = await fetch("https://diablo.fandom.com/wiki/" + runewordURI);
        try {
            console.log("Fetched " + runewordURI);
            const body = await res.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(body, "text/html");

            const magic = doc.querySelector("b[class='dw-color-magic']")?.innerText.replace(/\n/g, "<br/>");
            const items = doc.querySelector("div[data-source='itypes'] div")?.innerText;
            const level = parseInt(doc.querySelector("div[data-source='level'] div")?.innerText);
            const ladderOnlyText = doc.querySelector("div[data-source='ladder'] div")?.innerText;
            const ladderOnly = ladderOnlyText == "no" ? false : true;

            const runes = [];
            const runesA = doc.querySelectorAll("h2[class='pi-item pi-item-spacing pi-title pi-secondary-background'] div[style='font-variant:small-caps;'] > a");
            runesA.forEach((rune) => runes.push(rune.innerHTML));

            return { runeword: runeword, runes: runes, effects: magic, item: items, level: level, ladderOnly: ladderOnly };
        } catch (err) {
            console.error("Error on " + runeword);
            console.error(err);
        }
    }

    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
    let count = 0;

    runewords.forEach(async (runeword) => {
        let data = await fetchRuneWordData(runeword);
        allOfTheThings.push(data);
        //await sleep(200);

        console.log(`Fetched ${count++}/${runewords.length}`);
    });

    return allOfTheThings;
}

/// end of scraper

const data: Runeword[] = [
    {
        "runeword": "Ancient's Pledge Rune Word",
        "runes": [
            "Ral",
            "Ort",
            "Tal"
        ],
        "effects": "+50% Enhanced Defense<br />Cold Resist +43%<br />Fire Resist +13% (48% Total)<br />Lightning Resist +13% (48% Total)<br />Poison Resist +13% (48% Total)<br />10% Damage Goes To Mana",
        "item": "nonmagic off-hand armor (shields, shrunken heads, paladin shields) with exactly 3 sockets",
        "level": 21,
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
        "effects": "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy<br />Indestructible<br />+60% Increased Attack Speed<br />+350-400% Enhanced Damage (varies)<br />+200% Damage To Undead<br />-25% Target Defense<br />+50 To Attack Rating<br />+50 To Attack Rating Against Undead<br />7% Mana Stolen per Hit<br />12-15% Life Stolen per Hit <br />Prevent Monster Heal<br />+30 To All Attributes<br />+1 To Light Radius<br />Requirements -20%",
        "item": "nonmagic weapons with exactly 6 sockets",
        "level": 69,
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
        "effects": "Level 9 Fanaticism Aura When Equipped<br />+40% Increased Attack Speed<br />+240-270% Enhanced Damage<br />20% Chance of Crushing Blow<br />25% Chance of Open Wounds<br />+3 To Werebear<br />+3 To Lycanthropy<br />Prevent Monster Heal<br />+25-40 To Strength<br />+10 To Energy<br />+2 To Mana After Each Kill<br />Level 13 Summon Grizzly (5 Charges)",
        "item": "nonmagic axes, scepters, hammers with exactly 5 sockets",
        "level": 63,
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
        "effects": "35% Chance To Cast Level 14 Amplify Damage When Struck<br />100% Chance To Cast Level 18 Bone Spear On Striking<br />+260-340% Enhanced Damage<br />Ignores Target's Defense<br />20% Bonus to Attack Rating<br />+280-330% Damage To Demons<br />20% Deadly Strike<br />Prevent Monster Heal<br />Knockback<br />Fires Explosive Arrows or Bolts [level 15]",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 4 sockets",
        "level": 65,
        "ladderOnly": true
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
        "effects": "23% Chance To Cast Level 12 Volcano On Striking<br />5% Chance To Cast Level 23 Molten Boulder On Striking<br />100% Chance To Cast level 45 Meteor When You Die<br />15% Chance To Cast Level 22 Nova On Attack<br />+350% Enhanced Damage<br />Ignore Target's Defense<br />Adds 100-180 Magic Damage<br />7% Mana Stolen Per Hit<br />20% Chance Of Crushing Blow<br />20% Deadly Strike<br />Prevent Monster Heal<br />+10 To Dexterity",
        "item": "nonmagic polearms, swords with exactly 5 sockets",
        "level": 65,
        "ladderOnly": true
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
        "effects": "100% Chance To Cast Level 44 Chain Lightning When You Die<br />25% Chance To Cast Level 18 Glacial Spike On Attack<br />Indestructible<br />+300-385% Enhanced Damage<br />20% Bonus To Attack Rating<br />+50 To Attack Rating<br />Adds 1-50 Lightning Damage<br />7% Mana Stolen Per Hit<br />50% Chance of Crushing Blow<br />+(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)<br />+1 To Light Radius<br />Level 22 Blood Golem (15 Charges)<br />Requirements -20%",
        "item": "nonmagic swords, axes with exactly 5 sockets",
        "level": 55,
        "ladderOnly": true
    },
    {
        "runeword": "Bramble Rune Word",
        "runes": [
            "Ral",
            "Ohm",
            "Sur",
            "Eth"
        ],
        "effects": "Level 15-21 Thorns Aura When Equipped<br />+50% Faster Hit Recovery<br />+25-50% To Poison Skill Damage<br />+300 Defense<br />Increase Maximum Mana 5%<br />Regenerate Mana 15%<br />+5% To Maximum Cold Resist<br />Fire Resist +30%<br />Poison Resist +100%<br />+13 Life After Each Kill<br />Level 13 Spirit of Barbs (33 Charges)",
        "item": "nonmagic body armor with exactly 4 sockets",
        "level": 61,
        "ladderOnly": false
    },
    {
        "runeword": "Bone Rune Word",
        "runes": [
            "Sol",
            "Um",
            "Um"
        ],
        "effects": "15% Chance To Cast level 10 Bone Armor When Struck<br />15% Chance To Cast level 10 Bone Spear On Striking<br />+2 To Necromancer Skill Levels<br />+100-150 To Mana (varies)<br />All Resistances +30<br />Damage Reduced By 7",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 47,
        "ladderOnly": false
    },
    {
        "runeword": "Black Rune Word",
        "runes": [
            "Thul",
            "Io",
            "Nef"
        ],
        "effects": "+120% Enhanced Damage<br />40% Chance of Crushing Blow<br />+200 to Attack Rating<br />Adds 3-14 Cold Damage for 3 seconds<br />+10 to Vitality<br />15% increased Attack Speed<br />Magic Damage Reduced by 2<br />Level 4 Corpse Explosion (12 charges)<br />Knockback",
        "item": "nonmagic clubs, hammers, maces with exactly 3 sockets",
        "level": 35,
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
        "effects": "+1 To All Skills<br />+40% Increased Attack Speed<br />+250-290% Enhanced Damage<br />Adds 5-30 Fire Damage<br />7% Life Stolen Per Hit<br />+2-6 To Battle Command <br />+1-6 To Battle Orders <br />+1-4 To Battle Cry<br />Prevent Monster Heal<br />Replenish Life +12<br />30% Better Chance of Getting Magic Items",
        "item": "nonmagic weapons with exactly 5 sockets",
        "level": 57,
        "ladderOnly": false
    },
    {
        "runeword": "Edge Rune Word",
        "runes": [
            "Tir",
            "Tal",
            "Amn"
        ],
        "effects": "Level 15 Thorns Aura When Equipped<br />+35% Increased Attack Speed<br />+320-380% Damage To Demons<br />+280% Damage To Undead<br />+75 Poison Damage Over 5 Seconds<br />7% Life Stolen Per Hit<br />Prevent Monster Heal<br />+5-10 To All Attributes<br />+2 To Mana After Each Kill<br />Reduces All Vendor Prices 15%",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 3 sockets",
        "level": 25,
        "ladderOnly": true
    },
    {
        "runeword": "Duress Rune Word",
        "runes": [
            "Shael",
            "Um",
            "Thul"
        ],
        "effects": "+40% Faster Hit Recovery<br />+10-20% Enhanced Damage<br />Adds 37-133 Cold Damage 2 sec. Duration (Normal)<br />15% Chance of Crushing Blow<br />33% Chance of Open Wounds<br />+150-200% Enhanced Defense<br />-20% Slower Stamina Drain<br />Cold Resist +45%<br />Lightning Resist +15%<br />Fire Resist +15%<br />Poison Resist +15%",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 47,
        "ladderOnly": false
    },
    {
        "runeword": "Chaos Rune Word",
        "runes": [
            "Fal",
            "Ohm",
            "Um"
        ],
        "effects": "9% Chance To Cast Level 11 Frozen Orb On Striking<br />11% Chance To Cast Level 9 Charged Bolt On Striking<br />+35% Increased Attack Speed<br />+290-340% Enhanced Damage<br />Adds 216-471 Magic Damage<br />25% Chance of Open Wounds<br />+1 To Whirlwind<br />+10 To Strength<br />+15 Life After Each Demon Kill",
        "item": "nonmagic katars with exactly 3 sockets",
        "level": 57,
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
        "effects": "30% Increased Attack Speed<br />+320-370% Enhanced Damage<br />Ignore Target's Defense<br />Adds 180-200 Magic Damage<br />Adds 50-200 Fire Damage<br />Adds 51-250 Lightning Damage<br />Adds 50-200 Cold Damage<br />12% Life Stolen Per Hit<br />Prevent Monster Heal<br />+10 To Strength",
        "item": "nonmagic axes, hammers with exactly 4 sockets",
        "level": 65,
        "ladderOnly": false
    },
    {
        "runeword": "Gloom Rune Word",
        "runes": [
            "Fal",
            "Um",
            "Pul"
        ],
        "effects": "15% Chance To Cast Level 3 Dim Vision When Struck<br />+10% Faster Hit Recovery<br />+200-260% Enhanced Defense<br />+10 To Strength<br />All Resistances +45<br />Half Freeze Duration<br />5% Damage Taken Goes To Mana<br />-3 To Light Radius",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 47,
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
        "effects": "Body Armor<br />20% Chance To Cast Level 15 Chilling Armor when Struck<br />+25% Faster Cast Rate<br />+300% Enhanced Damage<br />+200% Enhanced Defense<br />+15 Defense<br />+X To Life (Based on Character Level)<br />Replenish Life +7<br />+5% To Maximum Lightning Resist<br />All Resistances +25-30<br />Damage Reduced By 7<br />12% Damage Taken Goes To Mana<br />+1 To Light Radius",
        "item": "nonmagic weapons, body armor with exactly 4 sockets",
        "level": 59,
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
        "effects": "+160% Enhanced Damage<br />+9 to Minimum Damage<br />+9 to Maximum Damage<br />25% Deadly Strike<br />+250 to Attack Rating<br />+1 to All Skills <br />7% Life Stolen per Hit <br />+10 Replenish Life<br />+10 to Strength<br />+1 to Light Radius<br />+2 to Mana per Kill",
        "item": "nonmagic melee weapons with exactly 5 sockets",
        "level": 27,
        "ladderOnly": false
    },
    {
        "runeword": "Lore Rune Word",
        "runes": [
            "Ort",
            "Sol"
        ],
        "effects": "+1 To All Skill Levels<br />+10 To Energy<br />+2 To Mana After Each Kill<br />Lightning Resist +30%<br />Damage Reduced By 7<br />+2 To Light Radius",
        "item": "nonmagic helms (including barbarian helms, druid pelts, circlets) with exactly 2 sockets",
        "level": 27,
        "ladderOnly": false
    },
    {
        "runeword": "Rain Rune Word",
        "runes": [
            "Ort",
            "Mal",
            "Ith"
        ],
        "effects": "5% Chance To Cast Level 15 Cyclone Armor When Struck<br />5% Chance To Cast Level 15 Twister On Striking<br />+2 To Druid Skills<br />+100-150 To Mana<br />Lightning Resist +30%<br />Magic Damage Reduced By 7<br />15% Damage Taken Goes to Mana ",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 49,
        "ladderOnly": false
    },
    {
        "runeword": "Kingslayer Rune Word",
        "runes": [
            "Mal",
            "Um",
            "Gul",
            "Fal"
        ],
        "effects": "+30% Increased Attack Speed<br />+230-270% Enhanced Damage<br />-25% Target Defense<br />20% Bonus To Attack Rating<br />33% Chance of Crushing Blow<br />50% Chance of Open Wounds<br />+1 To Vengeance<br />Prevent Monster Heal<br />+10 To Strength<br />40% Extra Gold From Monsters",
        "item": "nonmagic swords, axes with exactly 4 sockets",
        "level": 53,
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
        "effects": "+2 To All Skills<br />+200% Damage To Demons<br />+100% Damage To Undead<br />8% Life Stolen Per Hit<br />+70% Enhanced Defense<br />+20 To Strength<br />Replenish Life +7<br />All Resistances +65<br />Damage Reduced By 8%<br />25% Better Chance of Getting Magic Items",
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
        "effects": "1% Chance To Cast Level 50 Delirium When Struck (morph)<br />6% Chance To Cast Level 14 Mind Blast When Struck<br />14% Chance To Cast Level 13 Terror When Struck<br />11% Chance To Cast Level 18 Confuse On Striking<br />+2 To All Skills<br />+261 Defense<br />+10 To Vitality<br />50% Extra Gold From Monsters<br />25% Better Chance of Getting Magic Items<br />Level 17 Attract (60 Charges)",
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
        "effects": "Level 10 Vigor Aura When Equipped<br />+200-275% Enhanced Damage<br />+9 To Minimum Damage<br />+9 To Maximum Damage<br />Adds 55-160 Lightning Damage<br />Adds 55-160 Fire Damage<br />Adds 55-160 Cold Damage<br />+2-6 To Valkyrie<br />+10 To Dexterity<br />Regenerate Mana 20%<br />+2 To Mana After Each Kill<br />+2 To Light Radius<br />Level 20 Revive (25 Charges)",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 4 sockets",
        "level": 39,
        "ladderOnly": true
    },
    {
        "runeword": "Dragon Rune Word",
        "runes": [
            "Sur",
            "Lo",
            "Sol"
        ],
        "effects": "20% Chance to Cast Level 18 Venom When Struck<br />12% Chance To Cast Level 15 Hydra On Striking<br />Level 14 Holy Fire Aura When Equipped<br />+360 Defense<br />+230 Defense vs. Missile<br />+3-5 To All Attributes (varies)<br />+0.375-37.125 To Strength (Based on Character Level)<br />Increase Maximum Mana 5% (Armor Only)<br />+50 To Mana (Shields Only) <br />+5% To Maximum Lightning Resist<br />Damage Reduced by 7",
        "item": "nonmagic body armor, off-hand armor (shields, shrunken heads, paladin shields) with exactly 3 sockets",
        "level": 61,
        "ladderOnly": true
    },
    {
        "runeword": "Holy Thunder Rune Word",
        "runes": [
            "Eth",
            "Ral",
            "Ort",
            "Tal"
        ],
        "effects": "+60% Enhanced Damage<br />-25% Target Defense<br />5-30 Fire Damage<br />21-110 Lightning Damage<br />+75 Poison Damage for 5 seconds<br />+10 to Maximum Damage<br />+60% Lightning Resist<br />+5 to Maximum Lightning Resist<br />+3 to Holy Shock (Paladin only)<br />Level 7 Chain Lightning (60 charges)",
        "item": "nonmagic scepters with exactly 4 sockets",
        "level": 24,
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
        "effects": "+3 to Sorceress Skill Levels<br />33% Faster Cast Rate<br />Increase Maximum Mana 20%<br />+3 Energy Shield (Sorceress Only)<br />+2 Static Field (Sorceress Only)<br />+10 To Energy<br />+10 To Vitality<br />+9 To Minimum Damage<br />-25% Target Defense<br />Magic Damage Reduced By 7<br />+50% Enhanced Defense",
        "item": "nonmagic staves with exactly 4 sockets",
        "level": 37,
        "ladderOnly": false
    },
    {
        "runeword": "Infinity Rune Word",
        "runes": [
            "Ber",
            "Mal",
            "Ber",
            "Ist"
        ],
        "effects": "50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy<br />Level 12 Conviction Aura When Equipped<br />+35% Faster Run/Walk<br />+255-325% Enhanced Damage<br />-(45-55)% To Enemy Lightning Resist<br />40% Chance of Crushing Blow<br />Prevent Monster Heal<br />0.5-49.5 To Vitality (Based on Character Level)<br />30% Better Chance of Getting Magic Items<br />Level 21 Cyclone Armor (30 Charges)",
        "item": "nonmagic polearms with exactly 4 sockets",
        "level": 63,
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
        "effects": "35% Chance To Cast Level 15 Venom On Striking<br />+30-40% Increased Attack Speed<br />Damage +340-400<br />Ignore Target's Defense<br />-25% Target Defense<br />+(1.875 per character level) 1.875-185.625% Damage To Demons (Based on Character Level)<br />Adds 5-30 Fire Damage<br />-20-25% To Enemy Poison Resist<br />20% Deadly Strike<br />Prevent Monster Heal<br />+2 To Mana After Each Kill<br />+10-15 Life After Each Kill",
        "item": "nonmagic swords, axes with exactly 5 sockets",
        "level": 59,
        "ladderOnly": true
    },
    {
        "runeword": "Peace Rune Word",
        "runes": [
            "Shael",
            "Thul",
            "Amn"
        ],
        "effects": "4% Chance To Cast Level 5 Slow Missiles When Struck<br />2% Chance To Cast level 15 Valkyrie On Striking<br />+2 To Amazon Skill Levels<br />+20% Faster Hit Recovery<br />+2 To Critical Strike<br />Cold Resist +30%<br />Attacker Takes Damage of 14",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 29,
        "ladderOnly": false
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
        "effects": "Indestructible<br />+260-310% Enhanced Damage <br />+9 To Minimum Damage<br />7% Life Stolen Per Hit<br />20% Chance of Crushing Blow<br />Hit Blinds Target<br />Slows Target By 33%<br />Regenerate Mana 16%<br />Replenish Life +16<br />Cannot Be Frozen<br />30% Better Chance Of Getting Magic Items<br />Level 8 Revive (88 Charges)",
        "item": "nonmagic melee weapons with exactly 5 sockets",
        "level": 63,
        "ladderOnly": false
    },
    {
        "runeword": "Melody Rune Word",
        "runes": [
            "Shael",
            "Ko",
            "Nef"
        ],
        "effects": "+50% Enhanced Damage<br />+300% Damage To Undead<br />+3 To Bow and Crossbow Skills (Amazon Only)<br />+3 To Critical Strike (Amazon Only)<br />+3 To Dodge (Amazon Only)<br />+3 To Slow Missiles (Amazon Only)<br />20% Increased Attack Speed<br />+10 To Dexterity<br />Knockback",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 3 sockets",
        "level": 39,
        "ladderOnly": false
    },
    {
        "runeword": "Radiance Rune Word",
        "runes": [
            "Nef",
            "Sol",
            "Ith"
        ],
        "effects": "+75% Enhanced Defense<br />+30 Defense Vs. Missile<br />+10 To Energy<br />+10 To Vitality<br />15% Damage Goes To Mana<br />Magic Damage Reduced By 3<br />+33 To Mana<br />Damage Reduced By 7<br />+5 To Light Radius",
        "item": "nonmagic helms (including barbarian helms, druid pelts, circlets) with exactly 3 sockets",
        "level": 27,
        "ladderOnly": false
    },
    {
        "runeword": "Heart of the Oak Rune Word",
        "runes": [
            "Ko",
            "Vex",
            "Pul",
            "Thul"
        ],
        "effects": "+3 To All Skills<br />+40% Faster Cast Rate<br />+75% Damage To Demons<br />+100 To Attack Rating Against Demons<br />Adds 3-14 Cold Damage, 3 sec. Duration (Normal)<br />7% Mana Stolen Per Hit<br />+10 To Dexterity<br />Replenish Life +20<br />Increase Maximum Mana 15%<br />All Resistances +30-40<br />Level 4 Oak Sage (25 Charges)<br />Level 14 Raven (60 Charges)",
        "item": "nonmagic staves, maces with exactly 4 sockets",
        "level": 55,
        "ladderOnly": false
    },
    {
        "runeword": "Lionheart Rune Word",
        "runes": [
            "Hel",
            "Lum",
            "Fal"
        ],
        "effects": "+20% Enhanced Damage<br />Requirements -15%<br />+25 To Strength<br />+10 To Energy<br />+20 To Vitality<br />+15 To Dexterity<br />+50 To Life<br />All Resistances +30",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 41,
        "ladderOnly": false
    },
    {
        "runeword": "Insight Rune Word",
        "runes": [
            "Ral",
            "Tir",
            "Tal",
            "Sol"
        ],
        "effects": "Level 12-17 Meditation Aura When Equipped<br />+35% Faster Cast Rate<br />+200-260% Enhanced Damage (varies)<br />+9 To Minimum Damage<br />180-250% Bonus to Attack Rating<br />Adds 5-30 Fire Damage<br />+75 Poison Damage Over 5 Seconds<br />+1-6 To Critical Strike<br />+5 To All Attributes<br />+2 To Mana After Each Kill<br />23% Better Chance of Getting Magic Items",
        "item": "nonmagic polearms, staves with exactly 4 sockets",
        "level": 27,
        "ladderOnly": true
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
        "effects": "30% Chance To Cast Level 21 Enchant When You Kill An Enemy<br />40% Faster Hit Recovery<br />+370% Enhanced Damage<br />-25% Target Defense<br />Adds 3-14 Cold Damage 3 Second Duration (Normal)<br />-25% To Enemy Fire Resist<br />40% Chance of Crushing Blow<br />+200-300 Defense<br />+10 To Strength<br />+10 To Dexterity<br />All Resistances +20-30<br />Requirements -20% ",
        "item": "nonmagic polearms with exactly 5 sockets",
        "level": 41,
        "ladderOnly": true
    },
    {
        "runeword": "Malice Rune Word",
        "runes": [
            "Ith",
            "El",
            "Eth"
        ],
        "effects": "+33% Enhanced Damage<br />+9 To Maximum Damage<br />100% Chance Of Open Wounds<br />-25% Target Defense<br />-100 To Monster Defense per Hit<br />Prevent Monster Heal<br />+50 To Attack Rating<br />Drain Life -5",
        "item": "nonmagic melee weapons with exactly 3 sockets",
        "level": 15,
        "ladderOnly": false
    },
    {
        "runeword": "King's Grace Rune Word",
        "runes": [
            "Amn",
            "Ral",
            "Thul"
        ],
        "effects": "+100% Enhanced Damage<br />+100% Damage against Demons<br />+50% Damage against Undead<br />Adds 5-30 Fire Damage<br />Adds 3-14 Cold Damage for 3 seconds<br />+150 to Attack Rating<br />+100 to Attack Rating against Demons<br />+100 to Attack Rating against Undead<br />7% Life Stolen per hit",
        "item": "nonmagic swords, scepters with exactly 3 sockets",
        "level": 25,
        "ladderOnly": false
    },
    {
        "runeword": "Principle Rune Word",
        "runes": [
            "Ral",
            "Gul",
            "Eld"
        ],
        "effects": "100% Chance To Cast Level 5 Holy Bolt On Striking<br />+2 To Paladin Skill Levels<br />+50% Damage to Undead<br />+100-150 To Life (varies)<br />15% Slower Stamina Drain<br />+5% To Maximum Poison Resist<br />Fire Resist +30% ",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 53,
        "ladderOnly": false
    },
    {
        "runeword": "Lawbringer Rune Word",
        "runes": [
            "Amn",
            "Lem",
            "Ko"
        ],
        "effects": "20% Chance To Cast Level 15 Decrepify On Striking<br />Level 16-18 Sanctuary Aura When Equipped (varies)<br />-50% Target Defense<br />Adds 150-210 Fire Damage<br />Adds 130-180 Cold Damage<br />7% Life Stolen Per Hit<br />Slain Monsters Rest in Peace<br />+200-250 Defense vs. Missiles <br />+10 To Dexterity<br />75% Extra Gold From Monsters",
        "item": "nonmagic swords, hammers, scepters with exactly 3 sockets",
        "level": 43,
        "ladderOnly": true
    },
    {
        "runeword": "Passion Rune Word",
        "runes": [
            "Dol",
            "Ort",
            "Eld",
            "Lem"
        ],
        "effects": "+25% Increased Attack Speed<br />+160-210% Enhanced Damage<br />50-80% Bonus To Attack Rating<br />+75% Damage To Undead<br />+50 To Attack Rating Against Undead<br />Adds 1-50 Lightning Damage<br />+1 To Berserk<br />+1 To Zeal<br />Hit Blinds Target +10<br />Hit Causes Monster To Flee 25%<br />75% Extra Gold From Monsters<br />Level 3 Heart of Wolverine (12 Charges)",
        "item": "nonmagic weapons with exactly 4 sockets",
        "level": 43,
        "ladderOnly": false
    },
    {
        "runeword": "Myth Rune Word",
        "runes": [
            "Hel",
            "Amn",
            "Nef"
        ],
        "effects": "3% Chance To Cast Level 1 Howl When Struck<br />10% Chance To Cast Level 1 Taunt On Striking<br />+2 To Barbarian Skill Levels<br />+30 Defense vs. Missile<br />Replenish Life +10<br />Attacker Takes Damage of 14<br />Requirements -15%",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 25,
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
        "effects": "30% Chance To Cast Level 20 Bone Spirit On Striking<br />Indestructible<br />+50% Increased Attack Speed<br />+210-340% Enhanced Damage<br />+75% Damage To Demons<br />+100 To Attack Rating Against Demons<br />Prevent Monster Heal<br />+10 To Energy<br />+10-15 Magic Absorb <br />Level 16 Heart of Wolverine (20 Charges)<br />Level 17 Iron Golem (14 Charges)",
        "item": "nonmagic swords, axes, maces with exactly 4 sockets",
        "level": 49,
        "ladderOnly": true
    },
    {
        "runeword": "Ice Rune Word",
        "runes": [
            "Amn",
            "Shael",
            "Jah",
            "Lo"
        ],
        "effects": "100% Chance To Cast Level 40 Blizzard When You Level-up<br />25% Chance To Cast Level 22 Frost Nova On Striking<br />Level 18 Holy Freeze Aura When Equipped<br />+20% Increased Attack Speed<br />+140-210% Enhanced Damage<br />Ignore Target's Defense<br />+25-30% To Cold Skill Damage<br />-20% To Enemy Cold Resist<br />7% Life Stolen Per Hit<br />20% Deadly Strike<br />3.125-309.375% Extra Gold From Monsters (Based on Character Level)",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 4 sockets",
        "level": 65,
        "ladderOnly": true
    },
    {
        "runeword": "Rift Rune Word",
        "runes": [
            "Hel",
            "Ko",
            "Lem",
            "Gul"
        ],
        "effects": "20% Chance To Cast Level 16 Tornado On Striking<br />16% Chance To Cast Level 21 Frozen Orb On Attack<br />20% Bonus To Attack Rating<br />Adds 160-250 Magic Damage<br />Adds 60-180 Fire Damage<br />+5-10 To All Stats (varies)<br />+10 To Dexterity<br />38% Damage Taken Goes To Mana<br />75% Extra Gold From Monsters<br />Level 15 Iron Maiden (40 Charges)<br />Requirements -20%",
        "item": "nonmagic polearms, scepters with exactly 4 sockets",
        "level": 53,
        "ladderOnly": true
    },
    {
        "runeword": "Steel Rune Word",
        "runes": [
            "Tir",
            "El"
        ],
        "effects": "20% Enhanced Damage<br />+3 To Minimum Damage<br />+3 To Maximum Damage<br />+50 To Attack Rating<br />50% Chance Of Open Wounds<br />25% Increased Attack Speed<br />+2 To Mana After Each Kill<br />+1 To Light Radius",
        "item": "nonmagic swords, axes, maces with exactly 2 sockets",
        "level": 13,
        "ladderOnly": false
    },
    {
        "runeword": "Hand of Justice Rune Word",
        "runes": [
            "Sur",
            "Cham",
            "Amn",
            "Lo"
        ],
        "effects": "100% Chance To Cast Level 36 Blaze When You Level-Up<br />100% Chance To Cast Level 48 Meteor When You Die<br />Level 16 Holy Fire Aura When Equipped<br />+33% Increased Attack Speed<br />+280-330% Enhanced Damage<br />Ignore Target's Defense<br />7% Life Stolen Per Hit<br />-20% To Enemy Fire Resist<br />20% Deadly Strike<br />Hit Blinds Target<br />Freezes Target +3",
        "item": "nonmagic weapons with exactly 4 sockets",
        "level": 67,
        "ladderOnly": false
    },
    {
        "runeword": "Crescent Moon Rune Word",
        "runes": [
            "Shael",
            "Um",
            "Tir"
        ],
        "effects": "10% Chance To Cast Level 17 Chain Lightning On Striking<br />7% Chance To Cast Level 13 Static Field On Striking<br />+20% Increased Attack Speed<br />+180-220% Enhanced Damage<br />Ignore Target's Defense<br />-35% To Enemy Lightning Resist<br />25% Chance of Open Wounds<br />+9-11 Magic Absorb <br />+2 To Mana After Each Kill<br />Level 18 Summon Spirit Wolf (30 Charges)",
        "item": "nonmagic axes, swords, polearms with exactly 3 sockets",
        "level": 47,
        "ladderOnly": false
    },
    {
        "runeword": "Enigma Rune Word",
        "runes": [
            "Jah",
            "Ith",
            "Ber"
        ],
        "effects": "+2 To All Skills<br />+45% Faster Run/Walk<br />+1 To Teleport<br />+750-775 Defense<br />+ (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)<br />Increase Maximum Life 5%<br />Damage Reduced By 8%<br />+14 Life After Each Kill<br />15% Damage Taken Goes To Mana<br />+ (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 65,
        "ladderOnly": false
    },
    {
        "runeword": "Dream Rune Word",
        "runes": [
            "Io",
            "Jah",
            "Pul"
        ],
        "effects": "10% Chance To Cast Level 15 Confuse When Struck<br />Level 15 Holy Shock Aura When Equipped<br />+20-30% Faster Hit Recovery<br />+30% Enhanced Defense<br />+150-220 Defense<br />+10 To Vitality<br />Increase Maximum Life 5% (Helms Only)<br />+50 To Life (Shields Only)<br />+0.625-61.875 To Mana (Based On Character Level)<br />All Resistances +5-20<br />12-25% Better Chance of Getting Magic Items",
        "item": "nonmagic helms (including barbarian helms, druid pelts, circlets), off-hand armor (shields, shrunken heads, paladin shields) with exactly 3 sockets",
        "level": 65,
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
        "effects": "Level 12-15 Fanaticism Aura When Equipped<br />+1-2 To All Skills<br />+330% Enhanced Damage<br />Ignore Target's Defense<br />300% Bonus To Attack Rating<br />+75% Damage To Undead<br />+50 To Attack Rating Against Undead<br />+120 Fire Damage<br />All Resistances +15<br />10% Reanimate As: Returned<br />75% Extra Gold From Monsters ",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 4 sockets",
        "level": 65,
        "ladderOnly": true
    },
    {
        "runeword": "Doom Rune Word",
        "runes": [
            "Hel",
            "Ohm",
            "Um",
            "Lo",
            "Cham"
        ],
        "effects": "5% Chance To Cast Level 18 Volcano On Striking<br />Level 12 Holy Freeze Aura When Equipped<br />+2 To All Skills<br />+45% Increased Attack Speed<br />+330-370% Enhanced Damage<br />-(40-60)% To Enemy Cold Resist<br />20% Deadly Strike<br />25% Chance of Open Wounds<br />Prevent Monster Heal<br />Freezes Target +3<br />Requirements -20%",
        "item": "nonmagic axes, polearms, hammers with exactly 5 sockets",
        "level": 67,
        "ladderOnly": false
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
        "effects": "6% Chance To Cast Level 11 Fade When Struck<br />10% Chance To Cast Level 18 Life Tap On Striking<br />20% Chance To Cast Level 20 Charged Bolt On Attack<br />Level 17 Might Aura When Equipped<br />+330-375% Enhanced Damage <br />Ignore Target's Defense<br />60-70% Chance of Crushing Blow<br />Prevent Monster Heal<br />Hit Blinds Target<br />+(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level)",
        "item": "nonmagic swords, hammers, axes with exactly 6 sockets",
        "level": 65,
        "ladderOnly": true
    },
    {
        "runeword": "Exile Rune Word",
        "runes": [
            "Vex",
            "Ohm",
            "Ist",
            "Dol"
        ],
        "effects": "15% Chance To Cast Level 5 Life Tap On Striking<br />Level 13-16 Defiance Aura When Equipped <br />+2 To Offensive Auras (Paladin Only)<br />+30% Faster Block Rate<br />Freezes Target<br />+220-260% Enhanced Defense (varies)<br />Replenish Life +7<br />+5% To Maximum Cold Resist<br />+5% To Maximum Fire Resist<br />25% Better Chance Of Getting Magic Items<br />Repairs 1 Durability in 4 Seconds<br />",
        "item": "nonmagic paladin-only items (paladin shields) with exactly 4 sockets",
        "level": 57,
        "ladderOnly": false
    },
    {
        "runeword": "Enlightenment Rune Word",
        "runes": [
            "Pul",
            "Ral",
            "Sol"
        ],
        "effects": "5% Chance To Cast Level 15 Blaze When Struck<br />5% Chance To Cast level 15 Fire Ball On Striking<br />+2 To Sorceress Skill Levels<br />+1 To Warmth<br />+30% Enhanced Defense<br />Fire Resist +30%<br />Damage Reduced By 7",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 45,
        "ladderOnly": false
    },
    {
        "runeword": "Phoenix Rune Word",
        "runes": [
            "Vex",
            "Vex",
            "Lo",
            "Jah"
        ],
        "effects": "Weapon<br />100% Chance To Cast level 40 Blaze When You Level-up<br />40% Chance To Cast Level 22 Firestorm On Striking<br />Level 10-15 Redemption Aura When Equipped<br />+350-400% Enhanced Damage<br />Ignores Target's Defense<br />14% Mana Stolen Per Hit<br />-28% To Enemy Fire Resist<br />20% Deadly Strike<br />+350-400 Defense vs. Missile<br />+15-21 Fire Absorb",
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
        "effects": "+60% Faster Hit Recovery<br />+250-290% Enhanced Defense<br />+300 Defense vs. Missile<br />+16 To Strength<br />+16 To Vitality<br />+10 To Energy<br />All Resistances +15<br />Level 16 Molten Boulder (80 Charges)<br />Level 16 Clay Golem (16 Charges)",
        "item": "nonmagic body armor with exactly 4 sockets",
        "level": 47,
        "ladderOnly": false
    },
    {
        "runeword": "Strength Rune Word",
        "runes": [
            "Amn",
            "Tir"
        ],
        "effects": "35% Enhanced Damage<br />25% Chance Of Crushing Blow<br />7% Life Stolen Per Hit<br />+2 To Mana After Each Kill<br />+20 To Strength<br />+10 To Vitality",
        "item": "nonmagic melee weapons with exactly 2 sockets",
        "level": 25,
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
        "effects": "25% Chance To Cast Level 17 Fire Wall When Struck<br />Level 16-20  Concentration Aura When Equipped <br />260-300% Bonus To Attack Rating <br />+1-99% Damage To Demons (Based on Character Level)<br />Adds 50-280 Lightning Damage<br />20% Deadly Strike<br />Hit Blinds Target<br />Freezes Target +3<br />+10 To Vitality<br />Replenish Life +8<br />1.875-185.625% Extra Gold From Monsters (Based on Character Level)",
        "item": "nonmagic polearms with exactly 4 sockets",
        "level": 67,
        "ladderOnly": true
    },
    {
        "runeword": "Prudence Rune Word",
        "runes": [
            "Mal",
            "Tir"
        ],
        "effects": "+25% Faster Hit Recovery<br />+140-170% Enhanced Defense<br />All Resistances +25-35<br />Damage Reduced by 3<br />Magic Damage Reduced by 17<br />+2 To Mana After Each Kill<br />+1 To Light Radius<br />Repairs Durability 1 In 4 Seconds",
        "item": "nonmagic body armor with exactly 2 sockets",
        "level": 49,
        "ladderOnly": false
    },
    {
        "runeword": "Rhyme Rune Word",
        "runes": [
            "Shael",
            "Eth"
        ],
        "effects": "20% Increased Chance of Blocking<br />40% Faster Block Rate<br />+25 to All Resistances<br />Regenerate Mana 15%<br />Cannot Be Frozen<br />50% Extra Gold From Monsters<br />25% Better Chance Of Getting Magic Items",
        "item": "nonmagic off-hand armor (shields, shrunken heads, paladin shields) with exactly 2 sockets",
        "level": 29,
        "ladderOnly": false
    },
    {
        "runeword": "Leaf Rune Word",
        "runes": [
            "Tir",
            "Ral"
        ],
        "effects": "Adds 5-30 Fire Damage<br />+3 To Fire Skills<br />+3 To Fire Bolt (Sorceress Only)<br />+3 To Inferno (Sorceress Only)<br />+3 To Warmth (Sorceress Only)<br />+2 To Mana After Each Kill<br />+ (2 Per Character Level) +2-198 To Defense (Based On Character Level)<br />Cold Resist +33%",
        "item": "nonmagic staves with exactly 2 sockets",
        "level": 19,
        "ladderOnly": false
    },
    {
        "runeword": "Nadir Rune Word",
        "runes": [
            "Nef",
            "Tir"
        ],
        "effects": "+50% Enhanced Defense<br />+10 Defense<br />+30 Defense vs. Missile<br />Level 13 Cloak of Shadows (9 Charges)<br />+2 To Mana After Each Kill<br />+5 To Strength<br />-33% Extra Gold From Monsters<br />-3 To Light Radius",
        "item": "nonmagic helms (including barbarian helms, druid pelts, circlets) with exactly 2 sockets",
        "level": 13,
        "ladderOnly": false
    },
    {
        "runeword": "Spirit Rune Word",
        "runes": [
            "Tal",
            "Thul",
            "Ort",
            "Amn"
        ],
        "effects": "Sword<br />+2 To All Skills<br />+25-35% Faster Cast Rate (varies)<br />+55% Faster Hit Recovery<br />Adds 1-50 Lightning Damage<br />Adds 3-14 Cold Damage 3 Second Duration (Normal)<br />+75 Poison Damage Over 5 Seconds<br />7% Life Stolen Per Hit<br />+250 Defense vs. Missiles<br />+22 To Vitality<br />+89-112 To Mana (varies)<br />+3-8 Magic Absorb (varies)",
        "item": "nonmagic swords, off-hand armor (shields, shrunken heads, paladin shields) with exactly 4 sockets",
        "level": 25,
        "ladderOnly": true
    },
    {
        "runeword": "Stealth Rune Word",
        "runes": [
            "Tal",
            "Eth"
        ],
        "effects": "Magic Damage Reduced By 3<br />+6 To Dexterity<br />+15 To Maximum Stamina<br />Poison Resist +30%<br />Regenerate Mana 15%<br />25% Faster Run/Walk<br />25% Faster Cast Rate<br />25% Faster Hit Recovery",
        "item": "nonmagic body armor with exactly 2 sockets",
        "level": 17,
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
        "effects": "200% Enhanced Damage<br />+75% Damage To Undead<br />Requirements -20%<br />20% Increased Attack Speed<br />+50 To Attack Rating Against Undead<br />+2 To All Skills<br />All Resistances +75<br />20% Faster Hit Recovery<br />11% Mana Stolen Per Hit<br />Hit Causes Monster To Flee 25%<br />Hit Blinds Target +33<br />+2 To Mana After Each Kill<br />30% Better Chance Of Getting Magic Items",
        "item": "nonmagic weapons with exactly 6 sockets",
        "level": 55,
        "ladderOnly": false
    },
    {
        "runeword": "Sanctuary Rune Word",
        "runes": [
            "Ko",
            "Ko",
            "Mal"
        ],
        "effects": "+20% Faster Hit Recovery<br />+20% Faster Block Rate<br />20% Increased Chance of Blocking<br />+130-160% Enhanced Defense <br />+250 Defense vs. Missile<br />+20 To Dexterity<br />All Resistances +50-70<br />Magic Damage Reduced By 7<br />Level 12 Slow Missiles (60 Charges)",
        "item": "nonmagic off-hand armor (shields, shrunken heads, paladin shields) with exactly 3 sockets",
        "level": 49,
        "ladderOnly": false
    },
    {
        "runeword": "Splendor Rune Word",
        "runes": [
            "Eth",
            "Lum"
        ],
        "effects": "+1 To All Skills<br />+10% Faster Cast Rate<br />+20% Faster Block Rate<br />+60-100% Enhanced Defense<br />+10 To Energy<br />Regenerate Mana 15%<br />50% Extra Gold From Monsters<br />20% Better Chance of Getting Magic Items<br />+3 To Light Radius",
        "item": "nonmagic off-hand armor (shields, shrunken heads, paladin shields) with exactly 2 sockets",
        "level": 37,
        "ladderOnly": false
    },
    {
        "runeword": "Fury Rune Word",
        "runes": [
            "Jah",
            "Gul",
            "Eth"
        ],
        "effects": "+209% Enhanced Damage<br />40% Increased Attack Speed<br />Prevent Monster Heal<br />66% Chance of Open Wounds<br />33% Chance of Deadly Strike<br />-25% Target Defense<br />20% to Attack Rating<br />6% Life Stolen Per Hit<br />Ignores Target Defense<br />+5 to Frenzy (Barbarian only)",
        "item": "nonmagic melee weapons with exactly 3 sockets",
        "level": 65,
        "ladderOnly": false
    },
    {
        "runeword": "Treachery Rune Word",
        "runes": [
            "Shael",
            "Thul",
            "Lem"
        ],
        "effects": "5% Chance To Cast Level 15 Fade When Struck<br />25% Chance To Cast level 15 Venom On Striking<br />+2 To Assassin Skills<br />+45% Increased Attack Speed<br />+20% Faster Hit Recovery<br />Cold Resist +30%<br />50% Extra Gold From Monsters",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 43,
        "ladderOnly": false
    },
    {
        "runeword": "Venom Rune Word",
        "runes": [
            "Tal",
            "Dol",
            "Mal"
        ],
        "effects": "Hit Causes Monster To Flee 25%<br />Prevent Monster Heal<br />Ignore Target's Defense<br />7% Mana Stolen Per Hit<br />Level 15 Poison Explosion (27 Charges)<br />Level 13 Poison Nova (11 Charges)<br />+273 Poison Damage Over 6 seconds",
        "item": "nonmagic weapons with exactly 3 sockets",
        "level": 49,
        "ladderOnly": false
    },
    {
        "runeword": "White Rune Word",
        "runes": [
            "Dol",
            "Io"
        ],
        "effects": "Hit Causes Monster To Flee 25%<br />+10 To Vitality<br />+3 To Poison and Bone Spells (Necromancer Only)<br />+3 To Bone Armor (Necromancer Only)<br />+2 To Bone Spear (Necromancer Only)<br />+4 To Skeleton Mastery (Necromancer Only)<br />Magic Damage Reduced By 4<br />20% Faster Cast Rate<br />+13 To Mana",
        "item": "nonmagic wands with exactly 2 sockets",
        "level": 35,
        "ladderOnly": false
    },
    {
        "runeword": "Smoke Rune Word",
        "runes": [
            "Nef",
            "Lum"
        ],
        "effects": "+75% Enhanced Defense<br />+280 Defense vs. Missiles<br />All Resistances +50<br />20% Faster Hit Recovery<br />Level 6 Weaken (18 Charges)<br />+10 To Energy<br />-1 To Light Radius",
        "item": "nonmagic body armor with exactly 2 sockets",
        "level": 37,
        "ladderOnly": false
    },
    {
        "runeword": "Zephyr Rune Word",
        "runes": [
            "Ort",
            "Eth"
        ],
        "effects": "+33% Enhanced Damage<br />+66 To Attack Rating<br />Adds 1-50 Lightning Damage<br />-25% Target Defense<br />+25 Defense<br />25% Faster Run/Walk<br />25% Increased Attack Speed<br />7% Chance To Cast Level 1 Twister When Struck",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 2 sockets",
        "level": 21,
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
        "effects": "15% Chance To Cast Level 13 Frozen Orb On Striking<br />18% Chance To Cast Level 20 Ice Blast On Striking<br />+50 To Attack Rating<br />+220-350% Damage To Demons<br />+355-375% Damage To Undead<br />+50 To Attack Rating Against Undead<br />Adds 100-220 Cold Damage<br />-24% To Enemy Cold Resistance<br />+10 To Dexterity<br />Cannot Be Frozen<br />75% Extra Gold From Monsters<br />+1 To Light Radius",
        "item": "nonmagic swords, maces with exactly 4 sockets",
        "level": 43,
        "ladderOnly": true
    },
    {
        "runeword": "Wind Rune Word",
        "runes": [
            "Sur",
            "El"
        ],
        "effects": "10% Chance To Cast Level 9 Tornado On Striking<br />+20% Faster Run/Walk<br />+40% Increased Attack Speed<br />+15% Faster Hit Recovery<br />+120-160% Enhanced Damage<br />-50% Target Defense<br />+50 To Attack Rating<br />Hit Blinds Target<br />+1 To Light Radius<br />Level 13 Twister (127 Charges) ",
        "item": "nonmagic melee weapons with exactly 2 sockets",
        "level": 61,
        "ladderOnly": false
    },
    {
        "runeword": "Wealth Rune Word",
        "runes": [
            "Lem",
            "Ko",
            "Tir"
        ],
        "effects": "300% Extra Gold From Monsters<br />100% Better Chance Of Getting Magic Items<br />+2 To Mana After Each Kill<br />+10 To Dexterity",
        "item": "nonmagic body armor with exactly 3 sockets",
        "level": 43,
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
        "effects": "30% Chance To Cast Level 1 Decrepify On Striking<br />5% Chance To Cast Level 10 Life Tap On Striking<br />+375% Damage To Demons<br />+100 To Attack Rating Against Demons<br />+250-300% Damage To Undead<br />Adds 85-120 Magic Damage<br />Adds 41-240 Lightning Damage<br />20% Chance of Crushing Blow<br />Prevent Monster Heal<br />+10 To Energy<br />Cannot Be Frozen",
        "item": "nonmagic missile weapons (bows, crossbows, amazon bows) with exactly 4 sockets",
        "level": 63,
        "ladderOnly": true
    }
];

const types: string[] = [
    "off-hand armor shields",
    "shrunken heads",
    "paladin shields",
    "weapons",
    "axes",
    "scepters",
    "hammers",
    "missile weapons bows",
    "crossbows",
    "amazon bows",
    "polearms",
    "swords",
    "body armor",
    "clubs",
    "maces",
    "katars",
    "melee weapons",
    "helms including barbarian helms",
    "druid pelts",
    "circlets",
    "staves",
    "paladin-only items paladin shields",
    "wands"
];


export { data, Runeword, types };