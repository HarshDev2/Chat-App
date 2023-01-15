<script>
    import supabase from '@supabase/supabase-js'
    
    // Create a single supabase client for interacting with your database
    const client = supabase.createClient('https://qpwqpaddpxmhqqqemrir.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwd3FwYWRkcHhtaHFxcWVtcmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM3MDM2MTYsImV4cCI6MTk4OTI3OTYxNn0.YKulK5MO3bsQUCEDK54Io49W6xVfZgrzio74Gr6UfS8')

    let email = '';
    let password = '';
    let passwordagain = '';

    function handleSignUp() {
        client.auth.signUp({
            email: email,
            password: password,
        })
        alert(`Logining with email - ${email}, password - ${password}, passwordagain - ${passwordagain}`);
    }
    function handleLogin() {
        alert(`Logining with email - ${email}, password - ${password}`);
    }
</script>

<h1>SignUp</h1>
<div>
    
    <form on:submit|preventDefault={handleSignUp}>
        <input type="email" bind:value={email} placeholder="Email"/>
        <input type="text" placeholder="Password" bind:value={password}/>
        <input type="text" placeholder="Password Again" bind:value={passwordagain}/>
        <button type="submit">SignUp</button>
    </form>
</div>

<h1>Login</h1>
<div>
    <form on:submit|preventDefault={handleLogin}>
        <input type="email" bind:value={email} placeholder="Email" />
        <input type="text" bind:value={password} placeholder="Password">
        <button type="submit">Login</button>
    </form>
</div>