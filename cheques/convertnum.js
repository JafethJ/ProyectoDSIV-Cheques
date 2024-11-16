// Función para convertir los números en letras
function numeroALetras(num) {
    if (num == 0) return 'cero';
    let entero = Math.floor(num); 
    let decimal = Math.round((num - entero) * 100);

    let letrasEntero = convertirNumero(entero);
    let letrasDecimal = decimal > 0 ? ` con ${convertirNumero(decimal)} centavos` : '';

    return letrasEntero + letrasDecimal;
}

function convertirNumero(num) {
    const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const decenas2 = ['veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    if (num < 10) return unidades[num];
    if (num < 20) return decenas[num - 10];
    if (num < 100) {
        if (num % 10 === 0) return decenas2[Math.floor(num / 10) - 2];
        return decenas2[Math.floor(num / 10) - 2] + ' y ' + unidades[num % 10];
    }
    if (num < 1000) {
        if (num === 100) return 'cien';
        if (num < 200) return 'ciento ' + convertirNumero(num % 100);
        if (num % 100 === 0) return centenas[Math.floor(num / 100) - 1];
        return centenas[Math.floor(num / 100) - 1] + ' ' + convertirNumero(num % 100);
    }
    if (num < 1000000) {
        if (num === 1000) return 'mil';
        if (num < 2000) return 'mil ' + convertirNumero(num % 1000);
        return convertirNumero(Math.floor(num / 1000)) + ' mil ' + (num % 1000 !== 0 ? convertirNumero(num % 1000) : '');
    }
    if (num < 1000000000) {
        if (num === 1000000) return 'un millón';
        return convertirNumero(Math.floor(num / 1000000)) + ' millones ' + (num % 1000000 !== 0 ? convertirNumero(num % 1000000) : '');
    }
    return '';
}

function convertirMontoALetras() {
    let monto = parseFloat(document.getElementById('amount').value);
    
    if (isNaN(monto)) {
        document.getElementById('amount-letters').value = '';
        return;
    }

    let entero = Math.floor(monto);
    let decimal = Math.round((monto - entero) * 100);
    let letrasMonto = numeroALetras(entero);

    let letrasCentavos = decimal > 0 ? ` con ${decimal.toString().padStart(2, '0')}/100` : '';

    document.getElementById('amount-letters').value = letrasMonto + letrasCentavos;
}
