const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Введите цифру от 0 до 7: ', (input) => {
    const numericInput = parseInt(input);

switch (numericInput) {
    case 0:
    console.log('Соотвествует уровню прав: нет прав(---)');
    break;
  case 1:
    console.log('Соотвествует уровню прав: выполнение(--x)');
    break;
  case 2:
    console.log('Соотвествует уровню прав: выполнение(-w-)');
    break;
  case 3:
    console.log('Соотвествует уровню прав: выполнение(-wx)');
    break;
  case 4:
    console.log('Соотвествует уровню прав: выполнение(r--)');
    break;
  case 5:
    console.log('Соотвествует уровню прав: выполнение(r-x)');
    break;
  case 6:
    console.log('Соотвествует уровню прав: выполнение(rw-)');
    break;
  case 7:
    console.log('Соотвествует уровню прав: выполнение(rwx)');
    break;
    default:
        console.log('Некорректный ввод значения. Введите цифру от 0 до 7.');
}

rl.close();
});
