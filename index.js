const fs = require(`fs`);

const inquirer = require(`inquirer`);

const generateMarkdown = require(`./Develop/utils/generateMarkdown.js`);


const promptUser = () => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `title`,
            message: `What is the title of your project?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter your project name!`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `description`,
            message: `Enter a description of your project:`,
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log(`Please describe your project!`);
                    return false;
                }
            }
        },
        {
            type: `confirm`,
            name: `confirmInstructions`,
            message: `Would you like to include installation instructions for your project?`,
            default: true
        },
        {
            type: `input`,
            name: `installInstructions`,
            message: `Enter your installation instructions:`,
            when: ({ confirmInstructions }) => {
                if (confirmInstructions) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: installInfo => {
                if (installInfo) {
                    return true;
                } else {
                    console.log(`Please enter installation instructions!`);
                    return false;
                }
            }
        },
        {
            type: `confirm`,
            name: `usageConfirm`,
            message: `Would you like to include usage information for your application?`,
            default: true
        },
        {
            type: `input`,
            name: `usageInfo`,
            message: `Enter usage information for your application:`,
            when: ({ usageConfirm }) => {
                if (usageConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log(`Please enter your usage info!`);
                    return false;
                }
            }
        },
        {
            type: `confirm`,
            name: `contConfirm`,
            message: `Would you like to include how to contribute to your project?`,
            default: true
        },
        {
            type: `input`,
            name: `contribution`,
            message: `Describe how to contribute to your project:`,
            when: ({ contConfirm }) => {
                if (contConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: contInput => {
                if (contInput) {
                    return true;
                } else {
                    console.log(`Please describe how to contribute.`);
                    return false;
                }
            }
        },
        {
            type: `confirm`,
            name: `testConfirm`,
            message: `Would you like to include testing instructions?`,
            default: true
        },
        {
            type: `input`,
            name: `testInstructions`,
            message: `Enter instructions for testing your application:`,
            when: ({ testConfirm }) => {
                if (testConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log(`Please enter testing instructions!`);
                    return false;
                }
            }
        },
        {
            type: `checkbox`,
            name: `license`,
            message: `What kind of license does your project have?`,
            choices: [`MIT`, `APACHE 2.0`, `GPL 3.0`, `BSD 3`, `None`],
            validate: license => {
                if (license[0]) {
                    return true;
                } else {
                    console.log(`Please select one.`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `github`,
            message: `What is your GitHub username?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter your GitHub username!`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `What is your email?`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`Please enter your email!`);
                    return false;
                }
            }
        }
    ])
}

function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/README.md`, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: `README Created!`
            });
        })
    });
};

promptUser()
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(markdown => {
        return writeToFile(markdown);
    })
    .catch(err => {
        console.log(err);
    });
