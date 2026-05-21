//variavel para chamar o loop do propgrama inteiro
let menu = true;

// Variáveis para armazenar os saldos
// Valores iniciais (você pode ajustar)
let credito = 0; // Saldo em Kwanzas (Kz)
let saldoDadosMB = 0; // Saldo de dados em MB
let saldoSocializa = 0; // Saldo socializa
let saldoMinutos = 0; // Saldo de minutos
let saldoSMS = 0; // Saldo de SMS

//ativando o loop de toda função
while (menu) {

    // pegando  a variavel do menu principal do menu
    //menu completo
    let recarga = prompt('Bem vindo a Africell, 951090896\n\n 00-Recarregar o cartão\n 0- Melhor oferta\n 1- Dados\n 2- Minha conta\n 3- Socializa\n 4- Voz e SMS\n 5- Tudo e todos\n 6- Presentes\n 7- Afrimoney\n 8: Sair');

    //switch principal do menu recarga
    //Menu completo
    switch (recarga) {

        case "00":
            //variavel para armazenar os dados da recarga do cartao
            let codigoRecarga = prompt("Digite o código de 13 digítos");
            if (codigoRecarga && codigoRecarga.length == 13) {
                let valorRecarga = prompt("Digite o valor da recarga");
                valorRecarga = parseInt(valorRecarga);
                if (!isNaN(valorRecarga) && valorRecarga > 0) {
                    credito += valorRecarga;
                    alert(`Parabens,o seu carregamento de ${credito} Kz foi bem sucedido. Marque *123# para gerir o seu Credito e Saldo, quando e onde quiser.`);
                } else {
                    alert("Valor da recarga inválido!");
                }
            } else {
                alert("Código do cartão inválido!");
            }
            break;

        case "0":

            //pegando a variavel da opção oferta
            //abrindo uma nova janela
            let oferta = prompt("1: 500Mb+30min+30SMS, 200kz\n 2: Socializa 1Gb, 400kz\n 3: Afrinet 1Gb(3d), 800kz \n 4: Fale com todos 200min (7d), 1000kz\n 5: Afrinet 5Gb (7d), 1000kz\n *-Voltar ao Menu Principal\n\n # A seguir\n\n");

            //switch para a opção oferta
            //para a janela oferta
            switch (oferta) {
                case "1": // 500Mb+30min+30SMS, 200kz
                    if (credito >= 200) {
                        let confirmar = prompt("Vais subscrever ao 500Mb+30Min+30SMS por 200kz. Vais receber 250Mb+15Min+15SMS (7h-0h). 250Mb+15Min+15SMS (0h-7h)para todas as redes por 1 dia.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                        if (confirmar === "1" || confirmar === "2") {
                            credito -= 200;
                            saldoDadosMB += 500; // 500MB
                            saldoMinutos += 30; // 30 Minutos
                            saldoSMS += 30; // 30 SMS
                            alert(`Subscreveste ao 500Mb+30Min+30SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, SMS ${saldoSMS}.`);
                        } else {
                            alert("Ação cancelada");
                        }
                    } else {
                        alert("Crédito insuficiente para esta oferta.");
                    }
                    // menu = false; // Removido: Não deve encerrar o loop principal
                    break;

                case "2": // Socializa 1Gb, 400kz
                    if (credito >= 400) {
                        let confirmar2 = prompt("Vais subscrever ao Socializa 1GB a 400kz. Vais receber 1GB para Tiktok/FB/WA/TW/YT/Insta/Snapchat por 3 dias.\n Marca 1 para a ativacao automatica.\n Marque 2 para uma unica vez.");
                        if (confirmar2 === "1" || confirmar2 === "2") {
                            credito -= 400;
                            saldoDadosMB += 1024; // 1GB
                            alert(`Subscreveste ao Socializa 1GB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                        } else {
                            alert("Ação cancelada!")
                        }
                    } else {
                        alert("Crédito insuficiente para esta oferta.");
                    }
                    // menu = false; // Removido: Não deve encerrar o loop principal
                    break;

                case "3": // Afrinet 1Gb(3d), 800kz
                    if (credito >= 800) {
                        let confirmar3 = prompt("Vais subscrever ao Afrinet 1GB (3d) a 800kz. Vais receber 1GB por 3 dias.\n Marca 1 para renovacao automatica.\n Marca 2 para uma uma unica vez.");
                        if (confirmar3 === "1" || confirmar3 === "2") {
                            credito -= 800;
                            saldoDadosMB += 1024; // 1GB
                            alert(`Subscreveste ao Afrinet 1GB (3d). Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                        } else {
                            alert("Ação cancelada!");
                        }
                    } else {
                        alert("Crédito insuficiente para esta oferta.");
                    }
                    // menu = false; // Removido: Não deve encerrar o loop principal
                    break;

                case "4": // Fale com todos 200min (7d), 1000kz
                    if (credito >= 1000) {
                        let confirmar4 = prompt("Vais subscrever ao pacote fale com tudo e todos 200Min a 1000kz.\n Marque 1 para ativacao automatica\n Marque 2 para ativacao uma unica vez.");
                        if (confirmar4 === "1" || confirmar4 === "2") {
                            credito -= 1000;
                            saldoMinutos += 200; // 200 Minutos
                            alert(`Subscreveste ao Fale com tudo e todos 200Min. Novo Saldo: ${credito} Kz, Minutos: ${saldoMinutos}.`);
                        } else {
                            alert("Ação cancelada!");
                        }
                    } else {
                        alert("Crédito insuficiente para esta oferta.");
                    }
                    // menu = false; // Removido: Não deve encerrar o loop principal
                    break;

                case "5": // Afrinet 5Gb (7d), 1000kz
                    if (credito >= 1000) {
                        let confirmar5 = prompt("Vais subscrever ao Afrinet 5GB(7d) a 1000kz.\n Marque 1 para ativacao automatica\n Marque 2 para ativacao uma unica vez.");
                        if (confirmar5 === "1" || confirmar5 === "2") {
                            credito -= 1000;
                            saldoDadosMB += 5 * 1024; // 5GB
                            alert(`Subscreveste ao Afrinet 5GB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                        } else {
                            alert("Ação cancelada!");
                        }
                    } else {
                        alert("Crédito insuficiente para esta oferta.");
                    }
                    // menu = false; // Removido: Não deve encerrar o loop principal
                    break;

                case "*":
                    //aqui o menu=true; caso digitar ele voltará o loop do menu inicial
                    menu = true;
                    break;

                default:
                    alert("Opção não válida!");
                    // menu = false; // Removido: Não deve encerrar o loop principal
                    break;
            } //fechou o switch da opção oferta

            break; //quebra para o próximo caso

            //voltando no caso da janela principal (recarga)
        case "1":

            //pegando a variavel da opção menuDados
            let menuDados = prompt("1:Diario\n 2:3 dias\n 3:Semanal\n 4:Mensal\n 5:Bimensal\n *:Menu Principal");

            // switch para controlar a opção do menuDados
            //para abrir a janela da opção meuDados
            switch (menuDados) {
                case "1":

                    //pegando a variavel dados para escolher a recarga
                    //que se encontra dentro do menuDados
                    let dados = prompt("1:Afrinet 600MB, 200kz\n 2:Afrinet 400MB(24h), 300kz\n 3:Afrinet 800MB, 500kz\n 4:Afrinet 1GB(24h), 600kz\n 5:Afrinet 1.5GB, 1000kz\n *Voltar");

                    // switch para entrar na janela dados que está dentro da opção menuDados
                    switch (dados) {
                        case "1": // Afrinet 600MB, 200kz
                            if (credito >= 200) {
                                let aceitar = prompt("Vais subscrever ao Afrinet 600MB a 200kz. Vais receber 300MB(24h) + 300MB(23:00 às 7:00)\n Marca 1 para ativacao automatica\n Marca 2 para uma unica vez.");
                                if (aceitar === "1" || aceitar === "2") {
                                    credito -= 200;
                                    saldoDadosMB += 600; // 600MB
                                    alert(`Subscreveste ao Afrinet 600MB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "2": // Afrinet 400MB(24h), 300kz
                            if (credito >= 300) {
                                let aceitar1 = prompt("Vais subscrever a Afrinet 400MB a 300kz. Vais receber 400MB por 1 dia.\n Marque 1 para ativacacao automatica\n Marque 2 para uma unica vez.");
                                if (aceitar1 === "1" || aceitar1 === "2") {
                                    credito -= 300;
                                    saldoDadosMB += 400; // 400MB
                                    alert(`Subscreveste ao Afrinet 400MB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "3": // Afrinet 800MB, 500kz
                            if (credito >= 500) {
                                let aceitar2 = prompt("Vais subscrever ao Afrinet 800MB a 500kz. Vais receber 800MB por 1 dia.\n Marque 1 para ativacacao automatica\n Marque 2 para uma unica vez.");
                                if (aceitar2 === "1" || aceitar2 === "2") {
                                    credito -= 500;
                                    saldoDadosMB += 800; // 800MB
                                    alert(`Subscreveste ao Afrinet 800MB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "4": // Afrinet 1GB(24h), 600kz
                            if (credito >= 600) {
                                let aceitar3 = prompt("Vais subscrever ao Afrinet 1GB a 600kz. Vais receber 1GB por 1 dia.\n Marque 1 para ativacacao automatica\n Marque 2 para uma unica vez.");
                                if (aceitar3 === "1" || aceitar3 === "2") {
                                    credito -= 600;
                                    saldoDadosMB += 1024; // 1GB
                                    alert(`Subscreveste ao Afrinet 1GB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "5": // Afrinet 1.5GB, 1000kz
                            if (credito >= 1000) {
                                let aceitar4 = prompt("Vais subscrever ao Afrinet 1.5 a 1000kz. Vais receber 1.5GB por 1 dia.\n Marque 1 para ativacacao automatica\n Marque 2 para uma unica vez.");
                                if (aceitar4 === "1" || aceitar4 === "2") {
                                    credito -= 1000;
                                    saldoDadosMB += 1.5 * 1024; // 1.5GB
                                    alert(`Subscreveste ao Afrinet 1.5GB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "*":
                            menu = true; // Volta ao menu principal
                            break;

                        default:
                            alert("Opção não válida!.");
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                    } //fechou o switch dados

                    break; // quebrar a próxima linha

                case "2": //entrar na opção 2 da janela menuDados (3 dias)

                    //variavel para a janela dias
                    let dias = prompt("1:Afrinet 500MB (3d), 500kz\n 2:Afrinet 1GB (3d), 800kz\n *:Menu principal.");

                    //switch para a janela dias que se encontra dentro do menuDados
                    switch (dias) {
                        case "1": // Afrinet 500MB (3d), 500kz
                            if (credito >= 500) {
                                let entrar = prompt("Vais subscrever ao Afrinet 500MB (3d) a 500kz. Vais receber 500MB por 3 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *Menu principal.");
                                if (entrar === "1" || entrar === "2") {
                                    credito -= 500;
                                    saldoDadosMB += 500; // 500MB
                                    alert(`Subscreveste ao Afrinet 500MB (3d). Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (entrar === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "2": // Afrinet 1GB (3d), 800kz
                            if (credito >= 800) {
                                let entrar2 = prompt("Vais subscrever ao Afrinet 1GB (3d) a 800kz. Vais receber 1GB por 3 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *Menu principal.");
                                if (entrar2 === "1" || entrar2 === "2") {
                                    credito -= 800;
                                    saldoDadosMB += 1024; // 1GB
                                    alert(`Subscreveste ao Afrinet 1GB (3d). Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (entrar2 === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "*":
                            menu = true; // Volta ao menu principal
                            break;

                        default:
                            alert("Opção não válida!.");
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;
                    } //fechou o switch dias

                    break; //quebra para próxima linha

                case "3": // Semanal
                    //variavel da opção semanal que se encontra dentro do menuDados
                    let semanal = prompt("1:Afrinet 750MB (7d),500kz\n 2:Afrinet 2GB (7d), 1000kz\n 3:Afrinet 5GB (7d), 2000kz\n *:Menu principal.");

                    //switch para a opção semanal
                    switch (semanal) {
                        case "1": // Afrinet 750MB (7d), 500kz
                            if (credito >= 500) {
                                let click = prompt("Vais subscrever ao Afrinet 750MB (7d) a 500kz. Vais receber 750MB por 7 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal.");
                                if (click === "1" || click === "2") {
                                    credito -= 500;
                                    saldoDadosMB += 750; // 750MB
                                    alert(`Subscreveste ao Afrinet 750MB (7d). Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (click === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "2": // Afrinet 2GB (7d), 1000kz
                            if (credito >= 1000) {
                                let click1 = prompt("Vais subscrever ao Afrinet 2GB (7d) a 1000kz. Vais receber 2GB por 7 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal.");
                                if (click1 === "1" || click1 === "2") {
                                    credito -= 1000;
                                    saldoDadosMB += 2 * 1024; // 2GB
                                    alert(`Subscreveste ao Afrinet 2GB (7d). Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (click1 === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "3": // Afrinet 5GB (7d), 2000kz
                            if (credito >= 2000) {
                                let click2 = prompt("Vais subscrever ao Afrinet 5GB (7d) a 2000kz. Vais receber 5GB por 7 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal.");
                                if (click2 === "1" || click2 === "2") {
                                    credito -= 2000;
                                    saldoDadosMB += 5 * 1024; // 5GB
                                    alert(`Subscreveste ao Afrinet 5GB (7d). Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (click2 === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "*":
                            menu = true; // Volta ao menu principal
                            break;

                        default:
                            alert("Opção não válida!.");
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;
                    } //fechou o switch semanal

                    break; //para outro caso

                case "4": // Mensal
                    //pegando a variavel para a opção mensal
                    //que se encontra dentro do menuDados
                    let mensal = prompt("1:Afrinet 1.5GB (30d), 1500kz\n 2:Afrinet 2.5GB (30d), 2000kz\n 3:Afrinet 4GB (30d), 3000kz\n4:Afrinet 7GB (30d), 5000kz\n5:Afrinet 15GB (30d), 10000kz\n *:Menu principal.");

                    //switch para janela mensal que se encontra dentro do menuDados
                    switch (mensal) {
                        case "1": // Afrinet 1.5GB (30d), 1500kz
                            if (credito >= 1500) {
                                let enter = prompt("Vais subscrever ao Afrinet 1.5GB (30d) a 1500kz. Vais receber 1.5 por 30 dias.\n Marque 1 para ativacacao automatica\n Marque 2 para uma unica vez.\n *:Menu principal.");
                                if (enter === "1" || enter === "2") {
                                    credito -= 1500;
                                    saldoDadosMB += 1.5 * 1024; // 1.5GB
                                    alert(`Subscreveste ao Afrinet 1.5GB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (enter === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "2": // Afrinet 2.5GB (30d), 2000kz
                            if (credito >= 2000) {
                                let enter1 = prompt("Vais subscrever ao Afrinet 2.5GB (30d) a 2000kz. Vais receber 2.5GB por 30 dias.\n Marque 1 para ativacacao automatica\n Marque 2 para uma unica vez.\n *:Menu principal.");
                                if (enter1 === "1" || enter1 === "2") {
                                    credito -= 2000;
                                    saldoDadosMB += 2.5 * 1024; // 2.5GB
                                    alert(`Subscreveste ao Afrinet 2.5GB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (enter1 === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "3": // Afrinet 4GB (30d), 3000kz
                            if (credito >= 3000) {
                                let enter2 = prompt("Vais subscrever ao Afrinet 4GB (30d) a 3000kz. Vais receber 4GB por 30 dias.\n Marque 1 para ativacacao automatica\n Marque 2 para uma unica vez.\n *:Menu principal.");
                                if (enter2 === "1" || enter2 === "2") {
                                    credito -= 3000;
                                    saldoDadosMB += 4 * 1024; // 4GB
                                    alert(`Subscreveste ao Afrinet 4GB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (enter2 === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;
                        
                        case "4": // Afrinet 7GB (30d), 5000kz
                            if (credito >= 5000) {
                                let enter3 = prompt("Vais subscrever ao Afrinet 7GB (30d) a 5000kz. Vais receber 7GB por 30 dias.\n Marque 1 para ativacacao automatica\n Marque 2 para uma unica vez.\n *:Menu principal.");
                                if (enter3 === "1" || enter3 === "2") {
                                    credito -= 5000;
                                    saldoDadosMB += 7 * 1024; // 7GB
                                    alert(`Subscreveste ao Afrinet 7GB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (enter3 === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "5": // Afrinet 15GB (30d), 10000kz
                            if (credito >= 10000) {
                                let enter4 = prompt("Vais subscrever ao Afrinet 15GB (30d) a 10000kz. Vais receber 15GB por 30 dias.\n Marque 1 para ativacacao automatica\n Marque 2 para uma unica vez.\n *:Menu principal.");
                                if (enter4 === "1" || enter4 === "2") {
                                    credito -= 10000;
                                    saldoDadosMB += 15 * 1024; // 15GB
                                    alert(`Subscreveste ao Afrinet 15GB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (enter4 === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "*":
                            menu = true; // Volta ao menu principal
                            break;

                        default:
                            alert("Opção não válida!.");
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                    } //fim do switch mensal
                    break; //para outro caso

                case "5": // Bimensal

                    //variavel para pegar a opção bimensal que se encontra no menuDados
                    let bimensal = prompt("1:Afrinet 25GB, 15000kz\n 2:Afrinet 50GB, 25000kz\n *:Menu principal.");

                    //switch para caso bimensal que se encontra dentro da opção menuDados
                    switch (bimensal) {
                        case "1": // Afrinet 25GB, 15000kz
                            if (credito >= 15000) {
                                //variavel que usando para escolher as opções dentro da opção bimensal
                                let clicar1 = prompt("Vais subscrever ao Afrinet 25GB (60d) a 15000kz. Vais receber 25GB por 60 dias. \n Marca 1 para ativacao automatica\n Marca 2 para uma unica vez\n *:Menu principal. ");
                                if (clicar1 === "1" || clicar1 === "2") {
                                    credito -= 15000;
                                    saldoDadosMB += 25 * 1024; // 25GB
                                    alert(`Subscreveste ao Afrinet 25GB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (clicar1 === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "2": // Afrinet 50GB, 25000kz
                            if (credito >= 25000) {
                                let clicar2 = prompt("Vais subscrever ao Afrinet 50GB (60d) a 25000kz. Vais receber 50GB por 60 dias.Marca 1 para ativacao automatica\n Marca 2 para uma unica vez\n *:Menu principal. ");
                                if (clicar2 === "1" || clicar2 === "2") {
                                    credito -= 25000;
                                    saldoDadosMB += 50 * 1024; // 50GB
                                    alert(`Subscreveste ao Afrinet 50GB. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB.`);
                                } else if (clicar2 === "*") {
                                    menu = true;
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "*":
                            menu = true; // Volta ao menu principal
                            break;

                        default:
                            alert("Opção não válida!.");
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;
                    } //fim do switch bimensal
                    break; //para outro caso

                case "*":
                    menu = true; // Volta ao menu principal
                    break;

                default:
                    alert("Opção não válida no menu de Dados. Voltando ao menu principal.");
                    // menu = false; // Removido: Não deve encerrar o loop principal
                    break;
            } //fim do switch menuDados
            break; //para quebrar para outro caso da opção inicial recarga

        case "2": // Minha Conta
            //variavel minhaConta da segunda opção do menu recarga
            let minhaConta = prompt(` 1- Meu saldo\n 2- Meus pacotes\n 3- Meus servicos\n 4- Internet PayG\n 5- 5G Activation\n 6- Nao pertube\n *:Menu principal`);

            //switch para controlar as funcões dentro da opção minhaConta
            //que se encontra dentro da opção 2 da recarga
            switch (minhaConta) {
                case "1": // Meu Saldo
                    alert(`Meu Saldo Atual:\n Crédito: ${credito} Kz\n Dados: ${saldoDadosMB} MB\n Minutos: ${saldoMinutos} min\n SMS: ${saldoSMS} SMS`);
                    // menu = false; // Removido: Não deve encerrar o loop principal
                    break;

                case "2":
                    //variavel para entrar na opção pacotes que se encontra dentro da opção meu saldo
                    let pacotes = prompt('1:Ativar a autorenovacao\n 2:Desativar a autorevacao\n *Menu principal.');

                    //switch para entrar nos detalhes da opção pacotes
                    switch (pacotes) {
                        case "1":

                            //variavel para entrar nos detalhes de cada caso
                            let ativar = prompt('A ativavacao automatica foi ativada em todos pacotes. Marca *123# para adquirir outros pacotes\n *Menu principal.');
                            if (ativar === "*") {
                                menu = true
                            } else {
                                Alert('Ação cancelada');
                            }
                            break;

                        case "2":
                            let ativar1 = prompt('A ativavacao automatica foi desativada em todos os pacotes. Marca *123# para adquirir outros pacotes\n *:Menu principal.');
                            if (ativar1 === "*") {
                                menu = true;
                            } else {
                                alert('Ação cancelada');
                            }
                            break;

                        case "*":
                            menu = true;
                        break;
                        
                        default:
                            alert("Opção não válida!.");
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                    } //fim do switch pacotes

                    break; //para outro caso

                case "3":
                    let servicos = prompt("Meus servicos: Funcionalidade ainda não implementada.\n *:Menu principal");
                    if (servicos === "*") {
                        menu = true;
                    } else {
                        alert('Ação cancelada.');
                        // menu = false; // Removido: Não deve encerrar o loop principal
                    }
                    break;
                case "4":

                    let payG = prompt("Internet PayG: Funcionalidade ainda não implementada.\n *:Menu principal");
                    if (payG === "*") {
                        menu = true;
                    } else {
                        alert('Ação cancelada.');
                        // menu = false; // Removido: Não deve encerrar o loop principal
                    }
                    break;
                case "5":
                    let ativation = prompt("5G Activation: Funcionalidade ainda não implementada.\n *:Menu principal");
                    if (ativation === "*") {
                        menu = true;
                    } else {
                        alert('Ação cancelada.');
                        // menu = false; // Removido: Não deve encerrar o loop principal
                    }
                    break;
                case "6":
                    let naoPertube = prompt("1:Desativar publicidade\n 2:Ativar publicidade\n *:Menu principal.");
                    if (naoPertube === "1" || naoPertube === "2") {
                        alert('Sua solicitação está em progresso.');
                    } else {
                        menu = true;
                    }

                    break;
                case "*":
                    menu = true; // Volta ao menu principal
                    break;
                default:
                    alert("Opção não válida.");
                    // menu = false; // Removido: Não deve encerrar o loop principal
                    break;
            }
            break; // Quebra para o próximo caso do switch principal

        case "3":

            //pegando a variavel da 3 opção de recarga
            let socializa = prompt("1:Diário\n 2:3 Dias\n 3:Semanal\n 4:Mensalmente\n *:Menu principal.")

            //switch para escolher cada detalhes da opção socializa que se encontra dentro do menu recarga
            switch (socializa) {
                case "1":

                    //variavel da opção diário dentro da opção de recarga
                    let diario = prompt("1:Socializa 500MB, 200kz\n *:Menu principal.");

                    //switch para entrar no detalhes que se encontra na opção diario
                    switch (diario) {
                        case "1": //500MB
                            if (credito >= 200) {
                                let acess = prompt("Vais subscrever ao Socializa 500MB a 200kz. Vais receber 500MB para tiktok/FB/WA/TW/YT/Insta/Snapchat por 1 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Voltar");
                                if (acess === "1" || acess === "2") {
                                    credito -= 200; //valor retirado
                                    saldoSocializa += 500; //valor da recarga
                                    alert(`Subscreveste ao socializa 500MB. Novo saldo:${credito}, Socializa ${saldoSocializa}MB por 1 Dias. Marca *123# para voltar a subscrever.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "*":
                            menu = true;
                            break;
                        
                        default:
                            alert("Opção não válida!.");
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;
                    } //fecha o switch diario
                    break; //para outro caso

                case "2":
                    //pegando a variavel da segunda opção do socializa
                    let dias3 = prompt("1:Socializa 500MB, 300kz\n 2:Socializa 1GB, 400kz\n *:Menu principal");

                    //switch para escolher os detalhes da opção 3dias
                    switch (dias3) {
                        case "1": //500MB
                            if (credito >= 300) {
                                let acess2 = prompt("Vais subscrever ao Socializa 500MB a 300kz. Vais receber 500MB para tiktok/FB/WA/TW/YT/Insta/Snapchat por 3 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Voltar");
                                if (acess2 === "1" || acess2 === "2") {
                                    credito -= 300; //valor retirado
                                    saldoSocializa += 500; //valor da recarga
                                    alert(`Subscreveste ao socializa 500MB. Novo saldo${credito}, Socializa${saldoSocializa}MB por 3 dias`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Saldo insuficiente!");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "2": //1GB
                            if (credito >= 400) {
                                let acess3 = prompt("Vais subscrever ao Socializa 1GB a 400Kz..Vais receber 1GB para tiktok/FB/WA/TW/YT/Insta/Snapchat por 3 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Voltar");
                                if (acess3 === "1" || acess3 === "2") {
                                    credito -= 300; //valor retirado
                                    saldoSocializa += 1024; //valor da recarga
                                    alert(`Subscresvete ao socializa 1GB. Novo saldo ${credito}, Socializa ${saldoSocializa}MB por 3 dias.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Saldo insuficiente!");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "*":
                            menu = true;
                            break;
                        
                        default:
                            alert("Opção não válida!.");
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;
                    } //fim do switch 3 dias
                    break; //para outro caso

                case "3":
                    //variavel da 3 opção do pacote socializa
                    let semanaL = prompt("1:Socializa 1.5GB, 500kz\n 2:Socializa 2GB, 750kz\n *:Menu principal ");

                    //switch do pacote semanal para acessar a cada detalhe dentro do pacote
                    switch (semanaL) {
                        case "1": //500MB
                            if (credito >= 500) {
                                let acess4 = prompt("Vais subscrever ao Socializa 1.5GB a 500Kz..Vais receber 1.5GB para tiktok/FB/WA/TW/YT/Insta/Snapchat por 7 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Voltar");
                                if (acess4 === "1" || acess4 === "2") {
                                    credito -= 500; //valor retirado
                                    saldoSocializa += 1.5 * 1024; // valor da recarga
                                    alert(`Subscreveste ao socializa 1.5GB. Novo Saldo ${credito}, Socializa ${saldoSocializa}MB, por 7 dias`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Saldo insuficiente!");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "2": //2GB
                            if (credito >= 750) {
                                let acess5 = prompt("Vais subscrever ao Socializa 2GB a 750Kz..Vais receber 2GB para tiktok/FB/WA/TW/YT/Insta/Snapchat por 3 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Voltar");
                                if (acess5 === "1" || acess5 === "2") {
                                    credito -= 750; //valor retirado
                                    saldoSocializa += 2 * 1024; //valor da recarga
                                    alert(`Subscreveste ao socializa 2GB. Novo saldo ${credito}, Socializa ${saldoSocializa}MB por 7 dias`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Saldo insuficiente!");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "*":
                            menu = true;
                            break;
                        
                        default:
                            alert("Opção não válida!.");
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;
                    } //fim do switch semanal
                    break; //para outro caso

                case "4":

                    //variavel para pegar a opção 4 do pacote socializa
                    let mensaL = prompt("1:Socializa 4GB, 1500kz\n *:Menu principal");

                    //switch para pegar as opções dentro do pacote mensal
                    switch (mensaL) {
                        case "1": //4GB
                            if (credito >= 1500) {
                                let acess6 = prompt("Vais subscrever ao Socializa 4GB a 1500Kz..Vais receber 4GB para tiktok/FB/WA/TW/YT/Insta/Snapchat por 3 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Voltar");
                                if (acess6 === "1" || acess6 === "2") {
                                    credito -= 1500; //valor da retirado
                                    saldoSocializa += 4 * 1024; // valor da recarga
                                    alert(`Subscreveste ao socializa 4G. Novo saldo ${credito}, Socializa ${saldoSocializa}MB por 1 mês.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Saldo insuficiente!");
                            }
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;

                        case "*":
                            menu = true;
                            break;
                        
                        default:
                            alert("Opção não válida!.");
                            // menu = false; // Removido: Não deve encerrar o loop principal
                            break;
                    } //fim do switch mensal
                    break; //para proximo caso

            } //fim do switch do pacote socializa

            break; //para outro caso
        
        case"4":

//variavel da opção 4 do menu recarga
let vozSms=prompt("1:Diário\n 2:3 dias\n 3:Semanal\n 4:Mensal\n 5:SMS\n *:Menu principal.");

//switch para controlar as opções dentro do detalhe vozSms
switch(vozSms){
    case"1":
     //variavel da opção diário de voz e sms
    let diarioVoz=prompt("1:Fala com todos 50 Min (24h), 200kz\n *:Menu principal");
    
    //switch para entrar nos detalhes da opção diario voz
    switch(diarioVoz){
        case"1":// 50min
        if(credito>=200){
            let acesso=prompt("Vais subscrever ao Fala com todos 50 min (24h) a 200kz. Vais receber 25 min (07h-00h)/ 25 min (00h-07h)/50 SMS (24) para todas as redes por 1 dia\n  Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\ *Menu principal");
            if(acesso==="1" || acesso==="2"){
                credito-=200;//valor a ser retirado
                saldoMinutos+=50;// valor da recarga
                alert(`Subscreveste ao Fala com tudo e todos 50 Min. Novo saldo ${credito}, Voz ${saldoVoz} por 1 dia.`);
            }else{
                alert("Ação cancelada!");
            }
            break;
        }else{
            alert("Saldo insuficiente!");
        }
        break;
        
        case"*":
        menu=true;
        break;
        
         default:
        alert("Opção não válida!.");
        // menu = false; // Removido: Não deve encerrar o loop principal
        break;
    }//fim do switch diario
    break;
    case"2":
      //variavel para pegar segunda opção do pacote voz e sms
    let tresDias=prompt("1:Fala com todos 40 (Min), 200kz\n 2:Fala com todos 70 (Min), 300kz\n 3:Fala com todos 130 (min) 500kz\n *:Menu principal");
    
    //switch para controlar cada recarga dentro da opção 3 dias
    switch(tresDias){
        case"1"://40 minutos
        if(credito>=200){
            let acesso12=prompt("Vais subscrever ao Fala com todos 40 min (3d) a 200kz. Vais receber 20 min (07h-00h)/ 20 min (00h-07h)/ 40 SMS para todas as redes por 3 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal");
            if(acesso12==="1" || acesso12==="2"){
                credito-=200;//valor retirado
                saldoMinutos+=40;//valor da recarga
                saldoSMS+=30;//valor da recarga
                alert(`Subscreveste ao fala com todos 40 min. Novo Saldo ${credito}, Minutos ${saldoMinutos}, SMS ${saldoSMS} por 3 dias`);
                
            }else{
                alert("Ação cancelada!");
            }
        }else{
            alert("Saldo insuficiente!");
        }
        break;
        
        case"2"://70min
        if(credito>=300){
            let acesso13=prompt("Vais subscrever ao Fala com todos 70 min (3d) a 300kz. Vais receber 35 min (07h-00h)/ 35 min (00h-07h)/ 70 SMS para todas as redes por 3 dias.\Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal");
            if(acesso13==="1" || acesso13==="2"){
                credito-=300;//valor retirado
                saldoMinutos+=70;//valor da recarga
                saldoSMS+=70;//valor da recarga
                alert(`Subscreveste ao fala com todos 70 min. Novo Saldo ${credito}, Minutos ${saldoMinutos}, SMS ${saldoSMS} por 3 dias`);
                
            }else{
                alert("Ação cancelada!");
            }
        }else{
            alert("Saldo insuficiente!");
        }
        break;
        
        case"3"://130
        if(credito>=500){
            let acesso14=prompt("Vais subscrever ao Fala com todos 130 min (3d) a 500kz. Vais receber 65 min (07h-00h)/ 65 min (00h-07h)/ 130 SMS para todas as redes por 3 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal");
            if(acesso14==="1" || acesso14==="2"){
                credito-=500;//valor retirado
                saldoMinutos+=130;//valor da recarga
                saldoSMS+=130;//valor da recarga
                alert(`Subscreveste ao fala com todos 40 min. Novo Saldo ${credito}, Minutos ${saldoMinutos}, SMS ${saldoSMS} por 3 dias`);
                
            }else{
                alert("Ação cancelada!");
            }
        }else{
            alert("Saldo insuficiente!");
        }
        break;
        
        case"*":
        menu=true;
        break;
        
        default:
        alert("Opção inválida!");
        break;
    }//fim switch 3 dias
    break;//para outro caso
    
case"3":
     
    //variavel para pegar terceira opção do pacote voz e sms
    let semaNal=prompt("1:Fala com todos 90 (Min), 500kz\n 2:Fala com todos 140 (Min), 700kz\n 3:Fala com todos 200 (min) 1000kz\n *:Menu principal");
    
    //switch para controlar cada recarga dentro da opção semanal
    switch(semaNal){
        case"1"://90 minutos
        if(credito>=500){
            let acesso20=prompt("Vais subscrever ao Fala com todos 90 min (7d) a 300kz. Vais receber 35 min (07h-00h)/ 35 min (00h-07h)/ 70 SMS para todas as redes por 7 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal");
            if(acesso20==="1" || acesso20==="2"){
                credito-=500;//valor retirado
                saldoMinutos+=90;//valor da recarga
                saldoSMS+=90;//valor da recarga
                alert(`Subscreveste ao fala com todos 90 min. Novo Saldo ${credito}, Minutos ${saldoMinutos}, SMS ${saldoSMS} por 7 dias`);
                
            }else{
                alert("Ação cancelada!");
            }
        }else{
            alert("Saldo insuficiente!");
        }
        break;
        
        case"2"://140min
        if(credito>=700){
            let acesso21=prompt("Vais subscrever ao Fala com todos 140 min (7d) a 700kz. Vais receber 70 min (07h-00h)/ 70 min (00h-07h)/ 140 SMS para todas as redes por 7 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal");
            if(acesso21==="1" || acesso21==="2"){
                credito-=700;//valor retirado
                saldoMinutos+=140;//valor da recarga
                saldoSMS+=140;//valor da recarga
                alert(`Subscreveste ao fala com todos 140 min. Novo Saldo ${credito}, Minutos ${saldoMinutos}, SMS ${saldoSMS} por 7 dias`);
                
            }else{
                alert("Ação cancelada!");
            }
        }else{
            alert("Saldo insuficiente!");
        }
        break;
        
        case"3"://200min
        if(credito>=1000){
            let acesso40=prompt("Vais subscrever ao Fala com todos 200 min (7d) a 1000kz. Vais receber 100 min (07h-00h)/ 100 min (00h-07h)/ 200 SMS para todas as redes por 7 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal");
            if(acesso40==="1" || acesso40==="2"){
                credito-=1000;//valor retirado
                saldoMinutos+=200;//valor da recarga
                saldoSMS+=200;//valor da recarga
                alert(`Subscreveste ao fala com todos 200 min. Novo Saldo ${credito}, Minutos ${saldoMinutos}, SMS ${saldoSMS} por 7 dias`);
                
            }else{
                alert("Ação cancelada!");
            }
        }else{
            alert("Saldo insuficiente!");
        }
        break;
        
        case"*":
        menu=true;
        break;
        
        default:
        alert("Opção inválida!");
        break;
    }//fim switch semanal
    break;//para outro caso
    
    case"4":
     
    //variavel para pegar quarta opção do pacote voz e sms
    let menSal=prompt("1:Fala com todos 400 (Min), 2000kz\n 2:Fala com todos 720 (Min), 3600kz\n  *:Menu principal");
    
    //switch para controlar cada recarga dentro da opção mensal
    switch(menSal){
        case"1"://400 minutos
        if(credito>=2000){
            let acesso40=prompt("Vais subscrever ao Fala com todos 400 min (30d) a 2000kz. Vais receber 200 min (07h-00h)/ 200 min (00h-07h)/ 200 SMS para todas as redes por 30 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal");
            if(acesso40==="1" || acesso40==="2"){
                credito-=2000;//valor retirado
                saldoMinutos+=400;//valor da recarga
                saldoSMS+=400;//valor da recarga
                alert(`Subscreveste ao fala com todos 400 min. Novo Saldo ${credito}, Minutos ${saldoMinutos}, SMS ${saldoSMS} por 30 dias`);
                
            }else{
                alert("Ação cancelada!");
            }
        }else{
            alert("Saldo insuficiente!");
        }
        break;
        
        case"2"://720min
        if(credito>=3600){
            let acesso42=prompt("Vais subscrever ao Fala com todos 720 min (30d) a 3600kz. Vais receber 360 min (07h-00h)/ 360 min (00h-07h)/ 720 SMS para todas as redes por 30 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal");
            if(acesso42==="1" || acesso42==="2"){
                credito-=3600;//valor retirado
                saldoMinutos+=720;//valor da recarga
                saldoSMS+=720;//valor da recarga
                alert(`Subscreveste ao fala com todos 720 min. Novo Saldo ${credito}, Minutos ${saldoMinutos}, SMS ${saldoSMS} por 30 dias`);
                
            }else{
                alert("Ação cancelada!");
            }
        }else{
            alert("Saldo insuficiente!");
        }
        break;
        
        case"*":
        menu=true;
        break;
        
        default:
        alert("Opção inválida!");
        break;
    }//fim switch semanal
    break;//para outro caso
    
    case"5":
     
    //variavel para pegar quinta opção do pacote voz e sms
    let mensagem=prompt("1:AfriSMS 200 sms (7d),1000kz\n 2:AfriSMS 1000 sms (30d), 5000kz\*:Menu principal");
    
    //switch para controlar cada recarga dentro da opção sms
    switch(mensagem){
        case"1"://200 sms
        if(credito>=1000){
            let acesso50=prompt("Vais subscrever ao AfriSMS 200 SMS (30d) a 1000kz. Vais receber 200 SMS para todas as redes por 7 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal");
            if(acesso50==="1" || acesso50==="2"){
                credito-=1000;//valor retirado
                saldoSMS+=200;//valor da recarga
                alert(`Subscreveste ao AfriSMS por 200 SMS. Novo Saldo ${credito},  SMS ${saldoSMS} por 7 dias`);
                
            }else{
                alert("Ação cancelada!");
            }
        }else{
            alert("Saldo insuficiente!");
        }
        break;
        
        case"2"://1000sms
        if(credito>=5000){
            let acesso52=prompt("Vais subscrever ao AfriSMS  1000 SMS  (30d) a 5000kz. Vais receber 1000 SMS para todas as redes por 30 dias.\n Marca 1 para renovacao automatica\n Marca 2 para uma unica vez\n *:Menu principal");
            if(acesso52==="1" || acesso52==="2"){
                credito-=5000;//valor retirado
                saldoSMS+=1000;//valor da recarga
                alert(`Subscreveste ao AfriSMS 1000 SMS. Novo Saldo ${credito},  SMS ${saldoSMS} por 30 dias`);
                
            }else{
                alert("Ação cancelada!");
            }
        }else{
            alert("Saldo insuficiente!");
        }
        break;
        
        case"*":
        menu=true;
        break;
        
        default:
        alert("Opção inválida!");
        break;
    }//fim switch semanal
    break;//para outro caso


}//fim do switch voz e sms
        break;//para outro caso
        
                case "5": //tudo e todos
            //variavel da quinta opção do menu recarga
            let tudoTodos = prompt("1:Diário\n 2:3 dias\n 3:semanal\n 4:Mensal\n 5:Afrimi\n *:Menu principal");

            //switch para acessar as opções do pacote tudo e todos do menu recarga
            switch (tudoTodos) {
                case "1":

                    //variavel para acessar aos detalhes da primeira opção do pacote tudo e todos - Diário
                    let tudoDiario = prompt("1: Tudo+Todos 50MB+5min+5SMS, 150kz\n 2: Tudo+Todos 100MB+10min+10SMS, 250kz\n 3: Tudo+Todos 200MB+20min+20SMS, 400kz\n *:Voltar");

                    //switch para lidar com as opções do pacote tudo e todos diário
                    switch (tudoDiario) {
                        case "1": // Tudo+Todos 50MB+5min+5SMS, 150kz
                            if (credito >= 150) {
                                //mensagem de confirmação para o pacote
                                let confirmarTudo1 = prompt("Vais subscrever ao Tudo+Todos 50MB+5min+5SMS por 150kz.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                                if (confirmarTudo1 === "1" || confirmarTudo1 === "2") {
                                    credito -= 150; //dedução do crédito
                                    saldoDadosMB += 50; //adiciona MB
                                    saldoMinutos += 5; //adiciona minutos
                                    saldoSMS += 5; //adiciona SMS
                                    alert(`Subscreveste ao Tudo+Todos 50MB+5min+5SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, Minutos: ${saldoMinutos} min, SMS: ${saldoSMS}.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            break;

                        case "2": // Tudo+Todos 100MB+10min+10SMS, 250kz
                            if (credito >= 250) {
                                //mensagem de confirmação para o pacote
                                let confirmarTudo2 = prompt("Vais subscrever ao Tudo+Todos 100MB+10min+10SMS por 250kz.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                                if (confirmarTudo2 === "1" || confirmarTudo2 === "2") {
                                    credito -= 250; //dedução do crédito
                                    saldoDadosMB += 100; //adiciona MB
                                    saldoMinutos += 10; //adiciona minutos
                                    saldoSMS += 10; //adiciona SMS
                                    alert(`Subscreveste ao Tudo+Todos 100MB+10min+10SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, Minutos: ${saldoMinutos} min, SMS: ${saldoSMS}.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            break;

                        case "3": // Tudo+Todos 200MB+20min+20SMS, 400kz
                            if (credito >= 400) {
                                //mensagem de confirmação para o pacote
                                let confirmarTudo3 = prompt("Vais subscrever ao Tudo+Todos 200MB+20min+20SMS por 400kz.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                                if (confirmarTudo3 === "1" || confirmarTudo3 === "2") {
                                    credito -= 400; //dedução do crédito
                                    saldoDadosMB += 200; //adiciona MB
                                    saldoMinutos += 20; //adiciona minutos
                                    saldoSMS += 20; //adiciona SMS
                                    alert(`Subscreveste ao Tudo+Todos 200MB+20min+20SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, Minutos: ${saldoMinutos} min, SMS: ${saldoSMS}.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            break;

                        case "*":
                            //volta ao menu principal do 'tudoTodos'
                            //a variavel menu permanece true para continuar no loop principal
                            break;

                        default:
                            alert("Opção não válida no menu Diário Tudo e Todos.");
                            break;
                    } //fim do switch tudoDiario
                    break;

                case "2": // 3 dias
                    //variavel para acessar aos detalhes da segunda opção do pacote tudo e todos - 3 dias
                    let tudo3Dias = prompt("1: Tudo+Todos 250MB+25min+25SMS, 500kz\n 2: Tudo+Todos 500MB+50min+50SMS, 800kz\n *:Voltar");

                    //switch para lidar com as opções do pacote tudo e todos de 3 dias
                    switch (tudo3Dias) {
                        case "1": // Tudo+Todos 250MB+25min+25SMS, 500kz
                            if (credito >= 500) {
                                //mensagem de confirmação para o pacote
                                let confirmarTudo4 = prompt("Vais subscrever ao Tudo+Todos 250MB+25min+25SMS por 500kz.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                                if (confirmarTudo4 === "1" || confirmarTudo4 === "2") {
                                    credito -= 500; //dedução do crédito
                                    saldoDadosMB += 250; //adiciona MB
                                    saldoMinutos += 25; //adiciona minutos
                                    saldoSMS += 25; //adiciona SMS
                                    alert(`Subscreveste ao Tudo+Todos 250MB+25min+25SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, Minutos: ${saldoMinutos} min, SMS: ${saldoSMS}.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            break;

                        case "2": // Tudo+Todos 500MB+50min+50SMS, 800kz
                            if (credito >= 800) {
                                //mensagem de confirmação para o pacote
                                let confirmarTudo5 = prompt("Vais subscrever ao Tudo+Todos 500MB+50min+50SMS por 800kz.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                                if (confirmarTudo5 === "1" || confirmarTudo5 === "2") {
                                    credito -= 800; //dedução do crédito
                                    saldoDadosMB += 500; //adiciona MB
                                    saldoMinutos += 50; //adiciona minutos
                                    saldoSMS += 50; //adiciona SMS
                                    alert(`Subscreveste ao Tudo+Todos 500MB+50min+50SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, Minutos: ${saldoMinutos} min, SMS: ${saldoSMS}.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            break;

                        case "*":
                            //volta ao menu principal do 'tudoTodos'
                            break;

                        default:
                            alert("Opção não válida no menu Tudo e Todos de 3 dias.");
                            break;
                    } //fim do switch tudo3Dias
                    break;

                case "3": // Semanal
                    //variavel para acessar aos detalhes da terceira opção do pacote tudo e todos - Semanal
                    let tudoSemanal = prompt("1: Tudo+Todos 1GB+100min+100SMS, 1500kz\n 2: Tudo+Todos 2GB+200min+200SMS, 2500kz\n *:Voltar");

                    //switch para lidar com as opções do pacote tudo e todos semanal
                    switch (tudoSemanal) {
                        case "1": // Tudo+Todos 1GB+100min+100SMS, 1500kz
                            if (credito >= 1500) {
                                //mensagem de confirmação para o pacote
                                let confirmarTudo6 = prompt("Vais subscrever ao Tudo+Todos 1GB+100min+100SMS por 1500kz.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                                if (confirmarTudo6 === "1" || confirmarTudo6 === "2") {
                                    credito -= 1500; //dedução do crédito
                                    saldoDadosMB += 1024; //adiciona 1GB de MB
                                    saldoMinutos += 100; //adiciona minutos
                                    saldoSMS += 100; //adiciona SMS
                                    alert(`Subscreveste ao Tudo+Todos 1GB+100min+100SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, Minutos: ${saldoMinutos} min, SMS: ${saldoSMS}.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            break;

                        case "2": // Tudo+Todos 2GB+200min+200SMS, 2500kz
                            if (credito >= 2500) {
                                //mensagem de confirmação para o pacote
                                let confirmarTudo7 = prompt("Vais subscrever ao Tudo+Todos 2GB+200min+200SMS por 2500kz.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                                if (confirmarTudo7 === "1" || confirmarTudo7 === "2") {
                                    credito -= 2500; //dedução do crédito
                                    saldoDadosMB += 2 * 1024; //adiciona 2GB de MB
                                    saldoMinutos += 200; //adiciona minutos
                                    saldoSMS += 200; //adiciona SMS
                                    alert(`Subscreveste ao Tudo+Todos 2GB+200min+200SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, Minutos: ${saldoMinutos} min, SMS: ${saldoSMS}.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            break;

                        case "*":
                            //volta ao menu principal do 'tudoTodos'
                            break;

                        default:
                            alert("Opção não válida!");
                            break;
                    } //fim do switch tudoSemanal
                    break;

                case "4": // Mensal
                    //variavel para acessar aos detalhes da quarta opção do pacote tudo e todos - Mensal
                    let tudoMensal = prompt("1: Tudo+Todos 5GB+500min+500SMS, 5000kz\n 2: Tudo+Todos 10GB+1000min+1000SMS, 8000kz\n *:Voltar");

                    //switch para lidar com as opções do pacote tudo e todos mensal
                    switch (tudoMensal) {
                        case "1": // Tudo+Todos 5GB+500min+500SMS, 5000kz
                            if (credito >= 5000) {
                                //mensagem de confirmação para o pacote
                                let confirmarTudo8 = prompt("Vais subscrever ao Tudo+Todos 5GB+500min+500SMS por 5000kz.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                                if (confirmarTudo8 === "1" || confirmarTudo8 === "2") {
                                    credito -= 5000; //dedução do crédito
                                    saldoDadosMB += 5 * 1024; //adiciona 5GB de MB
                                    saldoMinutos += 500; //adiciona minutos
                                    saldoSMS += 500; //adiciona SMS
                                    alert(`Subscreveste ao Tudo+Todos 5GB+500min+500SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, Minutos: ${saldoMinutos} min, SMS: ${saldoSMS}.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            break;

                        case "2": // Tudo+Todos 10GB+1000min+1000SMS, 8000kz
                            if (credito >= 8000) {
                                //mensagem de confirmação para o pacote
                                let confirmarTudo9 = prompt("Vais subscrever ao Tudo+Todos 10GB+1000min+1000SMS por 8000kz.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                                if (confirmarTudo9 === "1" || confirmarTudo9 === "2") {
                                    credito -= 8000; //dedução do crédito
                                    saldoDadosMB += 10 * 1024; //adiciona 10GB de MB
                                    saldoMinutos += 1000; //adiciona minutos
                                    saldoSMS += 1000; //adiciona SMS
                                    alert(`Subscreveste ao Tudo+Todos 10GB+1000min+1000SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, Minutos: ${saldoMinutos} min, SMS: ${saldoSMS}.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            break;

                        case "*":
                            //volta ao menu principal do 'tudoTodos'
                            break;

                        default:
                            alert("Opção não válida!");
                            break;
                    } //fim do switch tudoMensal
                    break;

                case "5": // Afrimi
                    //variavel para acessar aos detalhes da quinta opção do pacote tudo e todos - Afrimi
                    let tudoAfrimi = prompt("1: Tudo+Todos Afrimi 2GB+200min+200SMS, 3000kz (30 dias)\n 2: Tudo+Todos Afrimi 7GB+700min+700SMS, 7000kz (30 dias)\n *:Voltar");

                    //switch para lidar com as opções do pacote tudo e todos Afrimi
                    switch (tudoAfrimi) {
                        case "1": // Tudo+Todos Afrimi 2GB+200min+200SMS, 3000kz
                            if (credito >= 3000) {
                                //mensagem de confirmação para o pacote
                                let confirmarTudoAfrimi1 = prompt("Vais subscrever ao Tudo+Todos Afrimi 2GB+200min+200SMS por 3000kz.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                                if (confirmarTudoAfrimi1 === "1" || confirmarTudoAfrimi1 === "2") {
                                    credito -= 3000; //dedução do crédito
                                    saldoDadosMB += 2 * 1024; //adiciona 2GB de MB
                                    saldoMinutos += 200; //adiciona minutos
                                    saldoSMS += 200; //adiciona SMS
                                    alert(`Subscreveste ao Tudo+Todos Afrimi 2GB+200min+200SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, Minutos: ${saldoMinutos} min, SMS: ${saldoSMS}.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            break;

                        case "2": // Tudo+Todos Afrimi 7GB+700min+700SMS, 7000kz
                            if (credito >= 7000) {
                                //mensagem de confirmação para o pacote
                                let confirmarTudoAfrimi2 = prompt("Vais subscrever ao Tudo+Todos Afrimi 7GB+700min+700SMS por 7000kz.\n Marca 1 para renovacao automatica.\n Marca 2 para uma unica vez.");
                                if (confirmarTudoAfrimi2 === "1" || confirmarTudoAfrimi2 === "2") {
                                    credito -= 7000; //dedução do crédito
                                    saldoDadosMB += 7 * 1024; //adiciona 7GB de MB
                                    saldoMinutos += 700; //adiciona minutos
                                    saldoSMS += 700; //adiciona SMS
                                    alert(`Subscreveste ao Tudo+Todos Afrimi 7GB+700min+700SMS. Novo Saldo: ${credito} Kz, Dados: ${saldoDadosMB} MB, Minutos: ${saldoMinutos} min, SMS: ${saldoSMS}.`);
                                } else {
                                    alert("Ação cancelada!");
                                }
                            } else {
                                alert("Crédito insuficiente.");
                            }
                            break;

                        case "*":
                            //volta ao menu principal do 'tudoTodos'
                            break;

                        default:
                            alert("Opção não válida no menu Tudo e Todos Afrimi.");
                            break;
                    } //fim do switch tudoAfrimi
                    break;

                case "*":
                    //aqui você retorna ao menu principal (onde está o switch de 'recarga')
                    //a variavel menu permanece true para continuar no loop principal
                    break;

                default:
                    alert("Opção não válida no menu Tudo e Todos.");
                    break;
            } //fim do switch tudoTodos
            break; //Quebra para o próximo caso do switch principal (o principal, com 'recarga')
        
        case "6": //presentes
    //variavel para pegar a opção 6 do menu recarga
    let presentes = prompt("Insira numero");
    presentes = parseInt(presentes)
        let presentesEntrou = prompt("1:Transferir saldo\n 2:Dados\n 3:Voz & SMS\n 5:Tudo e todos\n 6:603\n 7:13\n *Voltar");
        //switch para entrar em cada opção do pacote presentes
        switch (presentesEntrou) {
            case "1":
                let digiteSaldo = prompt("Digite o valor do crédito (ex: 200kz, 2000kz)");
                digiteSaldo = parseInt(digiteSaldo)
                if (!isNaN(digiteSaldo) && digiteSaldo < 0) {
                    alert("Valor transferido!");
                } else {
                    alert("Saldo insuficiente!");
                }
                break;
            case "2": //Dados
                //variavel para acessar aos detalhes da segunda opção do pacote presentes - Dados
                let presentesDados = prompt("1: 50MB, 150kz\n 2: 100MB, 250kz\n 3: 200MB, 400kz\n *:Voltar");
                //switch para lidar com as opções do pacote presentes Dados
                switch (presentesDados) {
                    case "1": // 50MB, 150kz
                        if (credito >= 150) {
                            //mensagem de confirmação para o pacote
                            let confirmarDados1 = prompt("Vais enviar 50MB por 150kz.\n Marca 1 para enviar.");
                            if (confirmarDados1 === "1") {
                                credito -= 150; //dedução do crédito
                                //aqui vai a lógica de enviar os dados para o numero 'presentes'
                                alert(`Dados enviados para ${presentes}. Novo Saldo: ${credito} Kz`);
                            } else {
                                alert("Ação cancelada!");
                            }
                        } else {
                            alert("Crédito insuficiente.");
                        }
                        break;
                    case "2": // 100MB, 250kz
                        if (credito >= 250) {
                            //mensagem de confirmação para o pacote
                            let confirmarDados2 = prompt("Vais enviar 100MB por 250kz.\n Marca 1 para enviar.");
                            if (confirmarDados2 === "1") {
                                credito -= 250; //dedução do crédito
                                //aqui vai a lógica de enviar os dados para o numero 'presentes'
                                alert(`Dados enviados para ${presentes}. Novo Saldo: ${credito} Kz`);
                            } else {
                                alert("Ação cancelada!");
                            }
                        } else {
                            alert("Crédito insuficiente.");
                        }
                        break;
                    case "3": // 200MB, 400kz
                        if (credito >= 400) {
                            //mensagem de confirmação para o pacote
                            let confirmarDados3 = prompt("Vais enviar 200MB por 400kz.\n Marca 1 para enviar.");
                            if (confirmarDados3 === "1") {
                                credito -= 400; //dedução do crédito
                                //aqui vai a lógica de enviar os dados para o numero 'presentes'
                                alert(`Dados enviados para ${presentes}. Novo Saldo: ${credito} Kz`);
                            } else {
                                alert("Ação cancelada!");
                            }
                        } else {
                            alert("Crédito insuficiente.");
                        }
                        break;
                    case "*":
                        //volta ao menu principal do 'presentes'
                        break;
                    default:
                        alert("Opção não válida no menu Dados de Presentes.");
                        break;
                } //fim do switch presentesDados
                break;
            case "3": //Voz & SMS
                //variavel para acessar aos detalhes da terceira opção do pacote presentes - Voz & SMS
                let presentesVozSMS = prompt("1:Voz 5min, 50kz\n 2:SMS 10, 50kz\n *:Voltar");
                //switch para lidar com as opções do pacote presentes Voz & SMS
                switch (presentesVozSMS) {
                    case "1": //Voz 5min, 50kz
                        if (credito >= 50) {
                            //mensagem de confirmação para o pacote
                            let confirmarVoz1 = prompt("Vais enviar 5min por 50kz.\n Marca 1 para enviar.");
                            if (confirmarVoz1 === "1") {
                                credito -= 50; //dedução do crédito
                                //aqui vai a lógica de enviar os minutos para o numero 'presentes'
                                alert(`Minutos enviados para ${presentes}. Novo Saldo: ${credito} Kz`);
                            } else {
                                alert("Ação cancelada!");
                            }
                        } else {
                            alert("Crédito insuficiente.");
                        }
                        break;
                    case "2": //SMS 10, 50kz
                        if (credito >= 50) {
                            //mensagem de confirmação para o pacote
                            let confirmarSMS1 = prompt("Vais enviar 10SMS por 50kz.\n Marca 1 para enviar.");
                            if (confirmarSMS1 === "1") {
                                credito -= 50; //dedução do crédito
                                //aqui vai a lógica de enviar os SMS para o numero 'presentes'
                                alert(`SMS enviados para ${presentes}. Novo Saldo: ${credito} Kz`);
                            } else {
                                alert("Ação cancelada!");
                            }
                        } else {
                            alert("Crédito insuficiente.");
                        }
                        break;
                    case "*":
                        //volta ao menu principal do 'presentes'
                        break;
                    default:
                        alert("Opção não válida no menu Voz & SMS de Presentes.");
                        break;
                } //fim do switch presentesVozSMS
                break;
            case "5": //Tudo e todos
                //variavel para acessar aos detalhes da quinta opção do pacote presentes - Tudo e todos
                let presentesTudoTodos = prompt("1:Diário\n 2:3 dias\n 3:semanal\n 4:Mensal\n 5:Afrimi\n *:Voltar");
                //switch para lidar com as opções do pacote presentes Tudo e todos
                switch (presentesTudoTodos) {
                    //aqui vai a lógica de Tudo e todos (igual ao case "5" do menu recarga)
                }
                break;
            case "6": //603
                alert("Opção 603 não definida.");
                break;
            case "7": //13
                alert("Opção 13 não definida.");
                break;
            case "*":
                //volta ao menu principal
                break;
            default:
                alert("Opção não válida no menu Presentes.");
                break;
        } //fim do switch presentesEntrou
        break;
    
         case"7"://afrimoney

//variavel para pegar a opção 7 do menu de recarga
let afrimoney=prompt("Seja Bem-Vindo a AfriMoney\n 1:Junta-se a Afrimoney\n 2:Mais informações\n *:Menu principal");

//switch para controlar a opção escolhida
switch(afrimoney){
    case"1":
    alert("Bem-vindo à Afrimoney! Você acaba de se juntar à revolução do dinheiro móvel em Angola. Transfira dinheiro, pague contas e faça recargas de forma rápida e segura. Obrigado por confiar na Afrimoney!");
    break;
    case"2":
    alert("Afrimoney é uma solução de dinheiro móvel rápida e segura, desenvolvida pela Africell, que permite transferir e levantar dinheiro, fazer pagamentos físicos e virtuais de produtos e serviços, e verificar saldo, tudo através do teu telemóvel.");
    break;
    case"*":
    menu=true;
    break;
}//fim do switch afrimoney
break;
        case "8":
            alert("Obrigado por usar a Africell!");
            menu = false; // Define menu como false para encerrar o loop principal
            break;

        default:
            menu = false; // Encerrar em caso de opção principal inválida
            break;
    }
}