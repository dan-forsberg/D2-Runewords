<script lang="ts">
    import type { Runeword } from "./data";
    export let runeword: Runeword;
</script>

<div class="runeword">
    <h1>{runeword.runeword}</h1>

    <div class="runes">
        {#each runeword.runes as rune}
            <div class="runeimages">
                <img src={"./img/" + rune + "_Rune.png"} alt={rune} />
                {rune.toLocaleUpperCase() + " "}
            </div>
        {/each}
    </div>

    <div class="stats">
        <p><b>Effects:</b> {@html runeword.effects}</p>
        <p><b>Level:</b> {runeword.level}</p>
        <p><b>Item:</b> {runeword.item}</p>
        <p><b>Ladder only? </b>{runeword.ladderOnly}</p>
    </div>
</div>

<style>
    .runeword {
        width: 374px;
    }

    .runes,
    .stats {
        display: block;
        clear: both;
    }

    .runeimages {
        float: left;
        text-align: center;
    }

    img {
        display: block;
    }

    h1 {
        font-size: 24px;
    }
</style>
