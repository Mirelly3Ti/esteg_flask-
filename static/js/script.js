// Função para mostrar o spinner enquanto o formulário está sendo mostrado
document.getElementById('decode-form').addEventListener('submit',
    function() {
        // Mostrar spinner
        document.getElementById('loading_spinner').style.display = 'block';

        //Esconder resultado
        document.getElementById('result').style.display = 'none';
    }
)