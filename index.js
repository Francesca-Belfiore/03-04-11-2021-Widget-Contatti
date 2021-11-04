/* JSdoc, si scrive come il commento multilinea /**/ 
/* ma con un asterisco in più all'apertura */

/**per evitare la ripetizione di querySelector 3 volte dopo nella funzione*/
const q = (selector) => document.querySelector(selector); 

const render = (container, items) => { //(container) funziona
    const elements = items.map((element) => //data.map funziona
        //element.name + ", " + element.phone + ", " + element.email;
        `<li>
            <fieldset>
                <legend><h2>${element.name}</h2></legend>
                <p><b>Phone:</b> <a href="tel:${element.phone}">${element.phone}</a></p>
                <p><b>Email:</b> <a href="mailto:${element.email}">${element.email}</a></p>
            </fieldset>
        </li>` //template string, con `` alt+96
    );

    const content = elements.join("");
    container.innerHTML = content;
}

//inizializza gli elementi al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => { 
    const form = q("form");
    const input = q("form input");
    const list = q("ul");

    render(list, data);

    // VERSIONE ORIGINAL CON SUBMIT:

    // form.addEventListener("submit", (event) => {
    //    event.preventDefault();
    //    console.log("ok");
    //    const value = input.value.toLowerCase();

    //    const results = data.filter((element) => {
    //         return element.name.toLowerCase().search(value) > -1
    //     }); //le funzioni con ritorno si possono concatenare

    //     console.log(results);

    //     render(list,results);
    // });


    //RICERCA MENTRE SI DIGITA:

    input.addEventListener("keyup", (event) => {
        const value = input.value.toLowerCase().trim();
 
        const results = data.filter((element) => 
            element.name.toLowerCase().search(value) > -1 ||
            element.email.toLowerCase().search(value) > -1
        ); //le funzioni con ritorno si possono concatenare
 
        render(list,results);
    });
});