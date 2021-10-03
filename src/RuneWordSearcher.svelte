<script lang="ts">
    import { data, Runeword } from "./data";
import RuneWord from "./RuneWord.svelte";

    let searchString = "";
    let results:Runeword[] = data;

    function search() {
        let term = searchString.toUpperCase();
        results = data.filter((runeword) =>
            runeword.runeword.toUpperCase().includes(term) ||
            runeword.effects.toUpperCase().includes(term) ||
            runeword.item.toUpperCase().includes(term)
        )
    }
</script>

<input type="text"
    bind:value={searchString}
    on:input={search}
/>
<div id="results">
    {#each results as runeword}
        <RuneWord runeword={runeword}/>
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
