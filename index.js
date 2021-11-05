/* JSdoc, si scrive come il commento multilinea /**/
/* ma con un asterisco in più all'apertura */

/**per evitare la ripetizione di querySelector 3 volte dopo nella funzione*/
const q = (selector) => document.querySelector(selector);
const form = q("form");
const input = q("form input");
const list = q("ul");

const render = (container, items) => {
    const elements = items.map((element) =>
        `<li>
            <fieldset>
                <legend><h2>${element.name}</h2></legend>
                <p><b>Phone:</b> <a href="tel:${element.phone}">${element.phone}</a></p>
                <p style=display:inline-block><b>Email:</b> <a href="mailto:${element.email}">${element.email}</a></p>
                <button class="delete" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">🗑️</button>
            </fieldset>
        </li>` //template string, con `` alt+96
    );

    const content = elements.join("");
    container.innerHTML = content;

    //ORDINA CONTATTI
    const button = q("button.sortButton")
    button.addEventListener("click", () => {
        elements.sort();
        const content = elements.join("");
        container.innerHTML = content;
    });
}

//inizializza gli elementi al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {

    render(list, data);

    //RICERCA MENTRE SI DIGITA:

    input.addEventListener("keyup", (event) => {
        const value = input.value.toLowerCase().trim();

        const results = data.filter((element) =>
            element.name.toLowerCase().search(value) > -1 ||
            element.email.toLowerCase().search(value) > -1
        ); //le funzioni con ritorno si possono concatenare

        render(list, results);
    });

});

//AGGIUNGE UN CONTATTO:
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newContact = {
        name: event.target.newName.value, //event.target è uguale a scrivere q("#name")
        phone: event.target.newNumber.value, //cambia solo che si risale alla fonte dell'evento
        email: event.target.newEmail.value
    };
        
    data.push(newContact);

    render(list,data);
    event.target.reset();
});