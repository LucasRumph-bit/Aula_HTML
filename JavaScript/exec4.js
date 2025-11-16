const btn = document.querySelector("#btnCalcular");
const tabela = document.querySelector("#tabela tbody");

btn.addEventListener('click', () => {
    let numero1= Number(document.querySelector("#numero1").value);
    let numero2= Number(document.querySelector("#numero2").value);

    if (!numero1 || !numero2 || numero2 === 0) {
        alert("Valores invalidos");
        return;
    }

    let soma = numero1 + numero2;
    let multiplica = numero1 * numero2;
    let divisao = numero1 / numero2;
    let resto = numero1 % numero2;
    
    tabela.innerHTML = "";
    //Cria uma nova linha
    const SomaLinha = document.createElement('tr');
    SomaLinha.innerHTML = ` 
        <td>Soma</td>
        <td>${soma}</td>
    `;
    tabela.appendChild(SomaLinha);
       const MultiplicaLinha = document.createElement('tr');
    MultiplicaLinha.innerHTML = ` 
        <td>Multiplicação</td>
        <td>${multiplica}</td>
    `;
    tabela.appendChild(MultiplicaLinha);
       const DivisaoLinha = document.createElement('tr');
    DivisaoLinha.innerHTML = ` 
        <td>Divisao</td>
        <td>${divisao}</td>
    `;
    tabela.appendChild(DivisaoLinha);
       const RestoLinha = document.createElement('tr');
    RestoLinha.innerHTML = ` 
        <td>Resto</td>
        <td>${resto}</td>
    `;
    tabela.appendChild(RestoLinha);
})