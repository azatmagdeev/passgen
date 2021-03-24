<script>
    export let checkbox
</script>

<p>
    <label>
        <input type="checkbox"
               name={checkbox.name}
               bind:checked={checkbox.checked}>
        <span>{checkbox.info}</span>
    </label>
</p>