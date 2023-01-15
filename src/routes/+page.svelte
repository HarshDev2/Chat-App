<script>

    import Filter from 'bad-words';
    import io from 'socket.io-client'
    
    let inputValue = '';
    const filter = new Filter();
    
    // @ts-ignore
    /**
	 * @type {any[]}
	 */
    let messages = [];

    function handleSubmit() {
        const filter = new Filter();
        console.log(inputValue)
    }
</script>

<h1>Chat Room</h1>
<div>

    <scroller style="height: 400px; overflow: scroll;">
        {#each messages as message}
        <div>
            <p><strong>{message}</p>
        </div>
        {/each}
    </scroller>

    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" bind:value={inputValue} />
        <button type="submit">Send</button>
    </form>

</div>