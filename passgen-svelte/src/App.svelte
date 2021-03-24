<script>
    import Form from './components/Form.svelte'
    import Result from './components/Result.svelte'

    let passwords = []
    const setPasswords = (array) => passwords = array
    $: console.log(passwords)
</script>

<main>
    <h1>Password Generator</h1>
    <Form setPasswords={setPasswords}/>
    <Result passwords={passwords}/>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>