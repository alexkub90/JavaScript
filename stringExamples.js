//Функция делает первый символ строки заглавным
function ucFirst(str) {
    if (str != '') {
      return str[0].toUpperCase() + str.slice(1);
    }

    return '';
}

ucFirst('hello')
