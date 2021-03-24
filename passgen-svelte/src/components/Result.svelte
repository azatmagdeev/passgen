<script>
    export let passwords

    let copySrc = "copy.png"
    const okSrc = "ok--v4.gif"

    async function handleCopyIconClick(e) {
        const resultEl = document.querySelector('#result')
        const okIcon = resultEl.querySelector(`img[src='${okSrc}']`)
        okIcon && (okIcon.src = copySrc)
        await navigator.clipboard.writeText(this.dataset.password)
        this.src = okSrc
    }
</script>

<div id="result">
    {#each passwords as password}
        <p>
            <span>{password}</span>
            <img src={copySrc}
                 alt="copy"
                 on:click={handleCopyIconClick}
                 data-password={password}>
        </p>
    {/each}
</div>

<style>
    img {
        height: 1.5em;
    }

    img:hover {
        transform: rotate(360deg);
        transition: transform .5s;
    }

    p {
        font-family: monospace;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }
</style>