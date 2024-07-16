document.addEventListener('DOMContentLoaded', function() {
    
    // Cargar el libro (supongo que tienes un archivo 'romeo_and_juliet.txt')
    //const fs = require('fs');
    //const data = fs.readFileSync('romeo_and_juliet.txt', 'utf-8');

    // Crear una lista de caracteres únicos
    const chars = ['G', '\ufeff', 'i', '#', 's', 'n', 'O', 'T', 'Z', 'x', '.', '”', 'Y', '‘', ';', 'W', '~', 
                    'P', 'h', '/', 'K', 'J', ':', '9', 'I', '<', 'z', 'N', 'u', '"', '[', 'm', ')', '“', 'C', 
                    ' ', 'a', '%', 'L', 'f', 'M', 'q', 'E', ',', '>', 'B', '5', 'R', '(', 'd', 'p', 'b', '’', 
                    'j', 'Q', 'r', 'y', 'v', 'g', '—', 't', 'H', 'e', '=', '-', "'", 'V', 'o', 'S', '$', '0', 
                    'X', 'F', '_', 'D', 'l', '!', '?', '™', 'k', 'A', '7', 'w', 'U', '•', '3', 'c', '*', '6', 
                    '\n', '2', ']', '4', '8', '@', '1'];

    // Longitud máxima del texto
    const textLength = 50;

    // Modelo aleatorio
    function randomModel(chars, textLength) {
        let generateText = '';
        
        for (let i = 0; i < textLength; i++) {
            // Muestra aleatoria
            const charIndex = Math.floor(Math.random() * (chars.length - 1));
            const generateChar = chars[charIndex];
            
            // Concatenar caracteres
            generateText += generateChar;
        }
        
        return generateText;
    }

    // Imprimir el texto generado
    const generatedText = randomModel(chars, textLength);
    console.log(generatedText);

    // Escribe en la pagina web
    document.getElementById('ModelOutput').innerHTML = generatedText;

});
