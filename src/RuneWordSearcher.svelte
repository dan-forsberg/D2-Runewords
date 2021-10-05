<script lang="ts">
    import { data, Runeword, types } from "./data";
    import RuneWord from "./RuneWord.svelte";
    import Fuse from "fuse.js";

    let results: Runeword[] = data.sort((a, b) => a.level - b.level);
    let lastResults = results;
    let searchString = "";
    let groups = [];

    const fuse = new Fuse(data, {
        keys: ["effects", "item", "runeword", "runes"],
        threshold: 0.2,
        useExtendedSearch: true,
        distance: 100000, // required to find matches in effects because it's so long
        shouldSort: false,
    });

    function search() {
        if (searchString.length === 0) {
            results = data;
            lastResults = data;
        } else {
            let resultsNow = searchString;
            setTimeout(() => {
                if (resultsNow === searchString) {
                    results = data;
                    doSearch();
                    regroup();
                    sort();
                }
            }, 200);
        }
    }

    function doSearch() {
        results = fuse.search(searchString).map((res) => res.item);
        lastResults = results;
    }

    function sort() {
        results = results.sort((a, b) => a.level - b.level);
    }

    function regroup() {
        if (groups.length === 0 || groups[0] === "none") results = lastResults;
        results = lastResults.filter((rw) => {
            for (let type of groups) if (rw.item.includes(type)) return false;
            return true;
        });
    }
</script>

<h1>xXx_RuneWordHelper_xXx</h1>
<header>
    <div id="search">
        <label>
            Search term(s):
            <input type="text" bind:value={searchString} on:input={search} />
        </label>
        <p>
            Prefix terms with ' for, eg
            <code><em>'fire 'cold 'resist</em></code>
            will find words <br />that includes "fire", "cold" and "resist" in the effects
            <a href="https://fusejs.io/examples.html#extended-search">more info</a>
        </p>
    </div>

    <div id="types">
        <label>
            Ignore types:<br />

            <select multiple bind:value={groups} on:change={regroup}>
                <option value="none" selected>none</option>
                {#each types as type}
                    <option value={type}>
                        {type}
                    </option>
                {/each}
            </select>
        </label>
    </div>
</header>

<main>
    {#key results}
        {#each results as runeword}
            <RuneWord {runeword} highlight={searchString} />
        {/each}
    {/key}
</main>

<style>
    h1 {
        text-align: center;
    }

    header {
        font-family: "Courier New", Courier, monospace;
        font-size: 14px;
        display: flex;
    }

    #search,
    #types {
        flex: 1;
    }

    main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        clear: both;
    }

    label {
        margin-top: 0px;
    }

    select {
        background-color: black;
        color: green;
    }

    option:checked {
        background: #444 -webkit-linear-gradient(bottom, #444 0%, #444 100%);
    }
</style>
