function getNomeMes(mes) {
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 
      'Maio', 'Junho', 'Julho', 'Agosto', 
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return meses[mes];
  }
  
  function renderCalendario() {
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth();
    const anoAtual = dataAtual.getFullYear();
    const diaAtual = dataAtual.getDate();
  
    const headerElement = document.getElementById('mes-ano');
    headerElement.textContent = `${getNomeMes(mesAtual)} ${anoAtual}`;

    const primeiroDiaDoMes = new Date(anoAtual, mesAtual, 1).getDay();
    const ultimoDiaDoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
  
    const tbody = document.getElementById('dias-corpo');
    tbody.innerHTML = '';
  
    let linha = document.createElement('tr');
    let diaContador = 1;
  
    for (let i = 0; i < primeiroDiaDoMes; i++) {
      const celulaVazia = document.createElement('td');
      linha.appendChild(celulaVazia);
    }
  
    while (diaContador <= ultimoDiaDoMes) {
      if (linha.children.length === 7) {
        tbody.appendChild(linha);
        linha = document.createElement('tr');
      }
  
      const coluna = document.createElement('td');
      coluna.textContent = diaContador;
  
      if (diaContador === diaAtual && mesAtual === dataAtual.getMonth()) {
        coluna.classList.add('dia-atual');
      }

      const diaSemana = new Date(anoAtual, mesAtual, diaContador).getDay();
      if (diaSemana === 0 || diaSemana === 6) {
        coluna.classList.add('fim-de-semana');
      }
  
      linha.appendChild(coluna);
      diaContador++;
    }
    if (linha.children.length > 0) {
      tbody.appendChild(linha);
    }
  }
  document.addEventListener('DOMContentLoaded', renderCalendario);