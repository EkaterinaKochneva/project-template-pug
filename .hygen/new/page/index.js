module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Введите название страницы'
      },
    ];

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { name } = answers;
        const path = `pages/${name}`;
        const absPath = `src/${path}`;

        return { ...answers, path, absPath, name }
      });
  },
};