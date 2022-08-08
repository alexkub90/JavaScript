//Функция делает первый символ строки заглавным
function ucFirst(str) {
    if (str != '') {
      return str[0].toUpperCase() + str.slice(1);
    }

    return '';
}

ucFirst('hello')

//Функция проверки на спам (viagra, xxx)

function checkSpam(str) {
    let strLower = str.toLowerCase();

    if (strLower.includes('viagra') || strLower.includes('xxx')) {
        return true;
    }

    return false;
}

checkSpam('VIaGra XxxxX , XX')