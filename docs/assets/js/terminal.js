const commands = {
  whoami: (instance) => {
    instance.output('you're a <b>Human<b>.')
  },

  ping: (instance, parameters) => {
    instance.output('Pinging <u>${parameters[0]}</u>...');
  },

};

const terminal = new VanillaTerminal({ commands });

terminal.setPrompt('user@<u>localhost</u>: $ ');
terminal.prompt('Type your name', (name) => {
  terminal.output(`Hey, ${name}!`);
});
