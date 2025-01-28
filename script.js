function verificarNome() {
    const nomeInput = document.getElementById('nomeMae');
    const mensagemErro = document.querySelector('.mensagem-erro');
    const nome = nomeInput.value.trim();
    
    if(nome.toLowerCase() === 'andreia') {
        // Mostrar tela de homenagem
        document.getElementById('formScreen').classList.add('hidden');
        document.getElementById('homenagemScreen').classList.remove('hidden');
    } else if(nome === '') {
        // Campo vazio
        mensagemErro.textContent = 'Por favor, digite um nome';
        mensagemErro.style.display = 'block';
    } else {
        // Nome incorreto
        mensagemErro.textContent = 'Esta não é a melhor mãe do mundo. Tente novamente!';
        mensagemErro.style.display = 'block';
        nomeInput.value = '';
        nomeInput.focus();
    }
          }
