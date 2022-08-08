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

//Функция усечения строки

function truncate(str, maxlength) {
    
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    }

    return str;
}

truncate('123456789012345678901234567890', 20)