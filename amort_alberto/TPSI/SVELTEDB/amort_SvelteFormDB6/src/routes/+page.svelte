<script>
export let data; // riceve i dati forniti dal backend durante il load della pagina 
export let form;
let nome, cognome, eta;
let error=false;

if(form?.form_error){
    error=true;
    nome=form.form_vals.nome;
    cognome=form.form_vals.cognome;
    eta=form.form_vals.eta;


}

</script>

<div class=container>
<h1>Welcome to SvelteKit FORM Example</h1>

<form method=POST action="?/create">
<div><label for="nome">Nome</label></div>
<div><input type=text id=nome name=nome size=40 bind:value={nome}/>
<p class={error && nome?.length==0? '': 'hidden'}>Nome invalido</p></div>

<div><label for="cognome">Cognome</label></div>
<div><input type=text id=cognome name=cognome size=40 bind:value={cognome}/>
<p class={error && cognome?.length==0? '': 'hidden'}>Cognome invalido</p></div>

<div><label for="eta">Età</label></div>
<div><input type=number id=eta name=eta min=15 bind:value={eta}/>
<p class={error && eta?.length==0? '': 'hidden'}>Eta invalido</p></div>

<div><input type=submit></div>
</form>


<table>
<thead>
<tr>
<td>ID</td>
<td>Nome</td>
<td>Cognome</td>
<td>Età</td>
<td>Edit</td>
<td>Remove</td>
</tr>
</thead>

<tbody>
{#each data.utenti as utente}
<tr>

<td>{utente.id}</td>
<td>{utente.nome}</td>
<td>{utente.cognome}</td>
<td>{utente.eta}</td>
<td><button class=edit>Edit</button></td>
<td><button class=remove>Remove</button></td>

</tr>
{/each}
</tbody>

</table>

</div>

<style>
form{
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    row-gap: 15px;
}

input, label{
    height: 25px;
    border-radius: 6px;
}

label{
    line-height: 25px
}

p{
    color: red;
    font-weight: bold;
}

.hidden{
    display:none;
}

.container{
    width: 45%;
    margin: auto;
}


table, td{
    border: 1px solid black;
    border-collapse: collapse;
    padding: 10px; 
    margin-top: 50px;
}


thead {
    font-size: 20px;
    font-weight: border;
}

.edit, .remove
{
    color: white;
    background-color: green; 
    border-color: green;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    font-weight: bolder;
}

.remove{
    background-color: red;
    border-color: red;
}

</style>