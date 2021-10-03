const { spawn } = require('child_process');

let images = [
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/5/5a/Amn_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184552",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/7/7e/Ber_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185513",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/8/8c/Cham_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185549",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/5/53/Dol_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184836",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/9/92/El_Rune.png/revision/latest/scale-to-width-down/120?cb=20110914105706",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/6/64/Eld_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184148",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/9/9e/Eth_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184336",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/d/da/Fal_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185117",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/a/ad/Gul_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185338",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/5/56/Hel_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184855",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/d/de/Io_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184920",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/3/37/Ist_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185320",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/7/77/Ith_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184356",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/3/3f/Jah_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185531",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/f/ff/Ko_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185057",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/c/c1/Lem_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185141",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/c/cd/Lo_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185434",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/d/d7/Lum_Rune.png/revision/latest/scale-to-width-down/120?cb=20120120162414",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/3/39/Mal_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185258",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/c/cb/Nef_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184314",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/c/c7/Ohm_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185415",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/4/40/Ort_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184509",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/2/24/Pul_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185219",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/4/47/Ral_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184435",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/5/53/Shael_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184633",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/d/de/Sol_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184614",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/b/b3/Sur_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185451",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/3/35/Tal_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184416",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/d/df/Thul_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184533",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/3/33/Tir_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926184258",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/4/4c/Um_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185238",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/e/e1/Vex_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185356",
    "https://static.wikia.nocookie.net/diablo_gamepedia/images/e/e0/Zod_Rune.png/revision/latest/scale-to-width-down/120?cb=20110926185604"
];


images.forEach(async (image) => {
    let filename = image.match("/([A-z]*_Rune.png)")[1];
    const child = spawn('wget', [image, '-O', filename]);
    console.log("Downloaded " + filename);
    child.stdout.on('data', (chunk) => {
        console.log(chunk);
    });
});