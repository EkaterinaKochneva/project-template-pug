module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Введите название компонента'
      },
      {
        type: 'select',
        name: 'category',
        message: 'Выберите папку компонента',
        choices: ['ui', 'components'],
      },
    ];

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { name, category } = answers;
        const path = `${category}/${name}`;
        const absPath = `src/${path}`;

        return { ...answers, path, absPath, name }
      });
  },
};