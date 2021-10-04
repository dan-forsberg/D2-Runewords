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

<label>
    Search term(s):
    <input type="text" bind:value={searchString} on:input={search} /> <br />
    Prefix terms with ' for, eg
    <code><em>'fire 'cold 'resist</em></code>
    will find words that includes "fire", "cold" and "resist" in the effects
    <a href="https://fusejs.io/examples.html#extended-search">more info</a>
</label>
<hr />
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
