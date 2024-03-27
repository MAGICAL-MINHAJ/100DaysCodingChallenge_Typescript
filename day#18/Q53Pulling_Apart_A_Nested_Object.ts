interface ProgrammerSkills {
    codingLanguages: string[];
    tools: string[];
    frameworks: string[];
}

const programmerSkills: ProgrammerSkills = {
    codingLanguages: ["TypeScript", "Python", "Java", "C++"],
    tools: ["Visual Studio Code", "Git", "Docker", "Postman"],
    frameworks: ["React", "Node.js", "Django", "Spring"]
};


const { codingLanguages, tools, frameworks } = programmerSkills;
const [firstLanguage, secondTool, thirdFramework] = [codingLanguages[0], tools[1], frameworks[2]];


console.log("Three specific skills:");
console.log("1. Coding Language:", firstLanguage);
console.log("2. Tool:", secondTool);
console.log("3. Framework:", thirdFramework);
