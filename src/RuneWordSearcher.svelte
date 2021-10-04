<script lang="ts">
    import { data, Runeword } from "./data";
    import RuneWord from "./RuneWord.svelte";
    import Fuse from "fuse.js";

    let searchString = "";
    let results: Runeword[] = data.sort((a, b) => a.level - b.level);

    let sortBy = 0;

    const fuse = new Fuse(data, {
        keys: ["runeword", "effects", "item", "runes"],
        threshold: 0.5,
        useExtendedSearch: true,
        shouldSort: true,
    });

    function search() {
        if (searchString.length === 0) {
            results = data;
        } else {
            const searchStringNow = searchString;
            /* don't start filtering immediately and waste cpu-cycles */
            setTimeout(() => {
                if (searchStringNow === searchString) {
                    results = fuse.search(searchString).map((res) => res.item);
                }
            }, 150);
        }

        reorder();
    }

    function reorder() {
        if (sortBy == 1) {
            results = results.sort((a, b) => a.level - b.level);
        }
    }
</script>

<div id="lheader">
    <label>
        Search term(s):
        <input type="text" bind:value={searchString} on:input={search} />
    </label>
    <label>
        Sort by match
        <input type="radio" bind:group={sortBy} value={0} on:change={reorder} />
    </label>
    <label>
        Sort by level
        <input type="radio" bind:group={sortBy} value={1} on:change={reorder} />
    </label>
</div>
<div>
    Prefix terms with ' for, eg
    <code><em>'fire 'cold 'resist</em></code>
    will find words that includes "fire", "cold" and "resist" in the effects
    <a href="https://fusejs.io/examples.html#extended-search">more info</a>
</div>

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
        clear: both;
    }

    label {
        display: inline-block;
    }
</style>
