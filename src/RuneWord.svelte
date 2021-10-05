<script lang="ts">
    import type { Runeword } from "./data";
    export let runeword: Runeword;
    export let highlight: string;

    let { runeword: name, effects, level, item, ladderOnly } = runeword;

    if (highlight.length !== 0) {
        const search = new RegExp(escapeRegExp(highlight), "gi");
        const replace = "<span class='highlight'>$&</span>";

        name = name.replace(search, replace);
        effects = effects.replace(search, replace);
        item = item.replace(search, replace);
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
    }
</script>

<div class="runeword">
    <h1>{@html name}</h1>

    <div class="runes">
        {#each runeword.runes as rune}
            <div class="runeimages">
                <img src={"./img/" + rune + "_Rune.png"} alt={rune} />
                {rune.toLocaleUpperCase() + " "}
            </div>
        {/each}
    </div>

    <div class="stats">
        <p><b>Effects:</b> {@html effects}</p>
        <p><b>Level:</b> {level}</p>
        <p><b>Item:</b> {@html item}</p>
        <p><b>Ladder only? </b>{ladderOnly ? "Yes" : "No"}</p>
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

    :global(.highlight) {
        color: yellow;
    }
</style>
