1
// index.js
const inquirer = require('inquirer');
const fs = require('fs');

// မေးခွန်းများ
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Project Title',
  },
  {
    type: 'input',
    name: 'description',
    message: 'about Project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Project contributors',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test case',
  },
  {
    type: 'list',
    name: 'license',
    message: ' choice Project License',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'GitHub (username)',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email',
  },
];

// README Template
function generateREADME(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} license.

## Questions
If you have any questions, you can reach me at:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}


// မေးခွန်းများကို ရှာဖွေခြင်းနှင့် README.md ဖိုင်ထဲသို့ ရေးထည့်ခြင်း
inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateREADME(answers);
  fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('README.md file done!')
  );
});


// 2
// index.js
// const inquirer = require('inquirer');
// const fs = require('fs');

// // မေးခွန်းများ
// const questions = [
//   {
//     type: 'input',
//     name: 'title',
//     message: 'Project Title',
//   },
//   {
//     type: 'input',
//     name: 'description',
//     message: 'About Project',
//   },
//   {
//     type: 'input',
//     name: 'installation',
//     message: 'Installation Steps',
//   },
//   {
//     type: 'input',
//     name: 'usage',
//     message: 'Usage Information',
//   },
//   {
//     type: 'input',
//     name: 'contributing',
//     message: 'Project Contributors',
//   },
//   {
//     type: 'input',
//     name: 'tests',
//     message: 'Test Instructions',
//   },
//   {
//     type: 'list',
//     name: 'license',
//     message: 'Choose Project License',
//     choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
//   },
//   {
//     type: 'input',
//     name: 'github',
//     message: 'GitHub Username',
//   },
//   {
//     type: 'input',
//     name: 'email',
//     message: 'Email Address',
//   },
// ];

// // HTML Template
// function generateHTML(data) {
//   return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>${data.title}</title>
//   <style>
//     body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
//     h1, h2 { color: #333; }
//     .section { margin-bottom: 20px; }
//   </style>
// </head>
// <body>
//   <h1>${data.title}</h1>

//   <div class="section">
//     <h2>Description</h2>
//     <p>${data.description}</p>
//   </div>

//   <div class="section">
//     <h2>Installation</h2>
//     <p>${data.installation}</p>
//   </div>

//   <div class="section">
//     <h2>Usage</h2>
//     <p>${data.usage}</p>
//   </div>

//   <div class="section">
//     <h2>Contributing</h2>
//     <p>${data.contributing}</p>
//   </div>

//   <div class="section">
//     <h2>Tests</h2>
//     <p>${data.tests}</p>
//   </div>

//   <div class="section">
//     <h2>License</h2>
//     <p>This project is licensed under the ${data.license} license.</p>
//   </div>

//   <div class="section">
//     <h2>Questions</h2>
//     <p>If you have any questions, you can reach me at:</p>
//     <ul>
//       <li>GitHub: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></li>
//       <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
//     </ul>
//   </div>
// </body>
// </html>
// `;
// }

// // မေးခွန်းများကို ရှာဖွေခြင်းနှင့် index.html ဖိုင်ထဲသို့ ရေးထည့်ခြင်း
// inquirer.prompt(questions).then((answers) => {
//   const htmlContent = generateHTML(answers);
//   fs.writeFile('index.html', htmlContent, (err) =>
//     err ? console.log(err) : console.log('index.html ဖိုင်ကို အောင်မြင်စွာ ဖန်တီးပြီးပါပြီ!')
//   );
// });


// 3
