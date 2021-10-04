<script lang="ts">
    import { data, Runeword } from "./data";
    import RuneWord from "./RuneWord.svelte";
    import Fuse from "fuse.js";

    let searchString = "";
    let results: Runeword[] = data.sort((a, b) => a.level - b.level);
    const fuse = new Fuse(data, {
        keys: ["runeword", "effects", "item", "runes"],
        threshold: 0.5,
        useExtendedSearch: true,
        shouldSort: true,
    });

    function search() {
        if (searchString.length == 0) results = data.sort((a, b) => a.level - b.level);
        else results = fuse.search(searchString).map((res) => res.item);
    }
</script>

<input type="text" bind:value={searchString} on:input={search} />
<div id="results">
    {#each results as runeword}
        <RuneWord {runeword} />
    {/each}
</div>

<style>
    #results {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
