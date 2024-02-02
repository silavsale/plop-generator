const config = (plop) => {
  plop.setGenerator('post', {
    desciption: 'Generate a blog post.',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Whant do you want to title this post?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is this post about?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'content/blog/{{title}}/index.md',
        templateFile: 'templates/post.hbs',
      },
    ],
  });
};

module.exports = config;
