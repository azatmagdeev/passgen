<script>
    import Checkbox from './Checkbox.svelte'
    import Radio from './Radio.svelte'
    import {checkboxes, count, radios} from "../form-config"

    export let setPasswords
    let string
    let length

    const handleFormSubmit = e => {
        e.preventDefault()
        handleFormChange()
        setPasswords(
            new Array(count)
                .fill('')
                .map(() => generatePassword(string, length))
        )
    }

    const handleFormChange = () => {
        const form = document.querySelector('#form')
        length = form['pass-length'].value
        string = checkboxes.map(ch => {
            return ch.checked ? ch.string : null
        }).join('')
        !string
            ? form.querySelector('button').disabled = true
            : form.querySelector('button').disabled = false
    }

    function generatePassword(string, length) {
        let password = '';
        for (let i = 0; i < length; i++) {
            const position = Math.floor(Math.random() * string.length);
            password += string[position]
        }
        return password
    }

</script>

<form id="form" on:change={handleFormChange} on:submit={handleFormSubmit}>
    <div class="flex">
        <div>
            {#each checkboxes as checkbox}
                <Checkbox checkbox={checkbox}/>
            {/each}
        </div>
        <div>
            {#each radios as radio}
                <Radio radio={radio}/>
            {/each}
        </div>
    </div>
    <button>Generate!</button>
</form>

<style>
    div.flex {
        display: flex;
        justify-content: center;
        gap: 3em;
        text-align: left;
    }
</style>

