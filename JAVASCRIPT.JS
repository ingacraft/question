
    const corretas = [
      1, 2, 2, 2, 2,
      2, 2, 1, 1, 2,
      0, 2, 1, 1, 0,
      2, 1, 3, 1, 2
    ];

    let pontuacao = 0;
    const pontuacaoSpan = document.getElementById('pontuacao');
    const perguntas = document.querySelectorAll('main h3');

    perguntas.forEach((pergunta, index) => {
      const botoes = [];
      let el = pergunta.nextElementSibling;

      while (el && el.tagName === 'BUTTON') {
        botoes.push(el);
        el = el.nextElementSibling;
      }

      botoes.forEach((btn, i) => {
        btn.addEventListener('click', () => {
          if (botoes.some(b => b.disabled)) return;

          botoes.forEach(b => b.disabled = true);

          if (i === corretas[index]) {
            btn.classList.add('correct');
            pontuacao += 0.5;
            pontuacaoSpan.textContent = pontuacao.toFixed(1);
          } else {
            btn.classList.add('incorrect');
            
          }
        });
      });
    });

