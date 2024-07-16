export default (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'method',
        message: 'Type the HTTP method'
      },
      {
        type: 'input',
        name: 'service',
        message: 'Type the service name'
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Type the service folder'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/services/{{folder}}/{{service}}.service.ts',
        templateFile: 'templates/service.{{method}}.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/hooks/request-hooks/{{folder}}/use{{pascalCase service}}.tsx',
        templateFile: 'templates/hook.{{method}}.tsx.hbs'
      }
    ]
  });
};
