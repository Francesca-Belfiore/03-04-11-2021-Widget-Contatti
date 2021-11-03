/* JSdoc, si scrive come il commento multilinea /**/ 
/* ma con un asterisco in più all'apertura */

/**per evitare la ripetizione di querySelector dopo*/
const q = (selector) => document.querySelector(selector); 

const render = (container, items) => {
    const elements = items.map((element) =>
        //element.name + ", " + element.phone + ", " + element.email;
        `<li>
            <fieldset>
                <legend><h2>${element.name}</h2></legend>
                <p><b>Phone:</b> <a href="tel:${element.phone}">${element.phone}</a></p>
                <p><b>Email:</b> <a href="mailto:${element.email}">${element.email}</a></p>
            </fieldset>
        </li>` //template string, stringa racchiusa da `` (alt+96)
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
});