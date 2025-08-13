import Resume from "./jsonresume.interface";

const render = (resume: Resume): string => {
    // TODO: implement proper validation
    if (!resume.basics?.name || !resume.basics?.summary) {
        throw new Error("Missing required fields in resume");
    }

    return `
        <h1>${resume.basics.name}</h1>
        <p>${resume.basics.summary}</p>
    `
}

export {render}