let previsto = 0;
let efetivado = 0;
let salario = 0;

function atualizar() {
  const saldo = salario - (previsto + efetivado);
  document.getElementById('verSalario').innerText = salario
    .toFixed(2)
    .replace('.', ',');
  document.getElementById('previsto').innerText = previsto
    .toFixed(2)
    .replace('.', ',');
  document.getElementById('pago').innerText = efetivado
    .toFixed(2)
    .replace('.', ',');
  document.getElementById('saldo').innerText = saldo
    .toFixed(2)
    .replace('.', ',');
}

function salvarSalario() {
  const input = parseFloat(document.getElementById('salario').value);
  salario = isNaN(input) ? 0 : input;
  atualizar();
}

function adicionar() {
  const data = document.getElementById('data').value;
  const cat = document.getElementById('categoria').value;
  const val = parseFloat(document.getElementById('valor').value);
  if (!data || !cat || isNaN(val)) return;

  const tabela = document.getElementById('tabela');
  const linha = tabela.insertRow();
  linha.insertCell(0).innerText = data;
  linha.insertCell(1).innerText = cat;
  linha.insertCell(2).innerText = val.toFixed(2).replace('.', ',');

  const celAcao = linha.insertCell(3);
  const btn = document.createElement('button');
  btn.innerText = 'Pagar';
  btn.onclick = () => {
    efetivado += val;
    previsto -= val;
    linha.remove();
    atualizar();
  };
  celAcao.appendChild(btn);

  previsto += val;
  atualizar();

  document.getElementById('data').value = '';
  document.getElementById('categoria').value = '';
  document.getElementById('valor').value = '';
}

function mostrar() {
  const lista = document.getElementById('listaWrapper');
  const botao = document.getElementById('toggleLista');
  const aberta = lista.style.display === 'block';
  lista.style.display = aberta ? 'none' : 'block';
  botao.innerText = aberta ? 'Mostrar Lista ▼' : 'Ocultar Lista ▲';
}
