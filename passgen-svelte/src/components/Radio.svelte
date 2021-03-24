<script>
    export let radio
</script>

<p>
    <label>
        <input type="radio"
               name="pass-length"
                value={radio.value}
                checked={radio.checked}>
        <span>{radio.info}</span>
    </label>
</p>