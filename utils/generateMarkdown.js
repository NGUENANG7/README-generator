function generateMarkdown(data) {
  return `
  
  # ${data.title}

  [![GitHub](https://img.shields.io/github/license/NGUENANG7/README-Generator?logo=MIT&style=plastic)](https://github.com/BB/undefined)

  #no Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  
  # Description

  ${data.Description}

  # Installation 

  Dependencies must be installed to run the application properly: ${data.Installation}

  # Usage 

  ​This application is used for ${data.Usage}

  # License

  This project is license under the ${data.License}

  # Contributing

  Contributors${data.Contributors}

  # Test
  To run tests, you need to run the following command: ${data.Test}

  # Questions
  
  If you have any questions or suggestion, I am opened to any feedback.

  Or contact ${data.UserName} using this Email: ${data.Email}.
  
`;
}

module.exports = generateMarkdown;