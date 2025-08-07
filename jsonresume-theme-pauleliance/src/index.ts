import Handlebars = require("handlebars");
import Resume from "./jsonresume.interface";

const render = (resume: Resume): string => {
    const template = Handlebars.compile(`
        <h1>{{basics.name}}</h1>
        <p>{{basics.summary}}</p>
    `);

    return template(resume);
}


export { render }