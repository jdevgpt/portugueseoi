/* Banco de ejercicios por tema (portugués europeo).
   Cada línea: frase con ___ | solución.  Los temas de vocabulario y de verbos
   se completan además con ejercicios generados automáticamente. */
(function () {
  const B = {
    "a1-alfabeto": ["Escreve o acento ou o til que falta.", `
p_o (pan)|pão
m_e (madre)|mãe
caf_ (café)|café
av_ (abuelo)|avô
av_ (abuela)|avó
voc_ (usted)|você
portugu_s|português
li__es (lecciones)|lições`],
    "a1-artigos": ["Completa com o artigo ou a contração (ao, à, do, da, no, na, pelo…).", `
Vou ___ cinema hoje à noite.|ao
Moro ___ Rua de Santa Catarina.|na
Sou ___ Porto, mas vivo em Lisboa.|do
Chego ___ nove horas.|às
Passeámos ___ praia toda a tarde.|pela
O livro está ___ mesa.|na
Vou ___ farmácia comprar aspirinas.|à
Ela vive ___ Brasil há dez anos.|no
Os filhos ___ Ana são muito simpáticos.|da
Ele está ___ escritório.|no`],
    "a1-genero-numero": ["Escreve o plural.", `
o hotel → os ___|hotéis
o animal → os ___|animais
a lição → as ___|lições
o pão → os ___|pães
a mão → as ___|mãos
o homem → os ___|homens
a mulher → as ___|mulheres
o espanhol → os ___|espanhóis
fácil → ___|fáceis
o lápis → os ___|lápis`],
    "a1-pronomes-sujeito": ["Escolhe a forma de tratamento adequada (tu / o senhor / a senhora / vocês).", `
(a um amigo) ___ queres um café?|tu
(a um senhor idoso) ___ precisa de ajuda?|o senhor
(à professora) ___ pode repetir, por favor?|a senhora
(a dois amigos) ___ vêm à festa?|vocês
(ao teu irmão) ___ estás cansado?|tu
(à médica) ___ trabalha aos sábados?|a senhora`],
    "a1-presente-regulares": ["Conjuga o verbo no presente.", `
Eu ___ (morar) em Badajoz.|moro
Tu ___ (falar) muito bem português.|falas
Ela ___ (trabalhar) num banco.|trabalha
Nós ___ (comer) sempre às oito.|comemos
Eles ___ (viver) perto da praia.|vivem
Vocês ___ (abrir) a loja às nove?|abrem
Eu ___ (gostar) muito de peixe.|gosto
O João ___ (beber) café sem açúcar.|bebe
Nós ___ (partir) amanhã de manhã.|partimos
Tu ___ (escrever) muitos e-mails?|escreves`],
    "a1-ser-estar-ficar": ["Completa com ser, estar ou ficar no presente.", `
Eu ___ espanhola, de Mérida.|sou
Hoje ___ muito calor.|está
Onde ___ a estação de comboios?|fica
O meu pai ___ médico.|é
Nós ___ cansados depois do trabalho.|estamos
O museu ___ perto do rio.|fica
São três horas: ___ tarde!|é
Esse casaco ___-te muito bem.|fica
Eles ___ em Lisboa esta semana.|estão
A mesa ___ de madeira.|é`],
    "a1-ter-haver": ["Completa com ter ou haver.", `
Eu ___ dois irmãos.|tenho
___ um supermercado aqui perto?|Há
Ela ___ trinta anos.|tem
Moro aqui ___ cinco anos.|há
Nós ___ de trabalhar amanhã.|temos
Eles ___ muita fome.|têm
Não ___ problema.|há
Tu ___ frio?|tens`],
    "a1-irregulares-presente": ["Conjuga o verbo irregular no presente.", `
Eu ___ (fazer) o jantar.|faço
Tu ___ (ir) ao ginásio hoje?|vais
Eu não ___ (poder) sair esta noite.|posso
Ela ___ (vir) de comboio.|vem
Eu ___ (saber) nadar.|sei
Eles ___ (ver) televisão à noite.|veem
Eu ___ (pôr) a mesa.|ponho
Nós ___ (sair) às seis.|saímos
Eu ___ (ouvir) música no carro.|ouço
Eu ___ (dizer) sempre a verdade.|digo
Eu ___ (dormir) oito horas.|durmo
Vocês ___ (trazer) o vinho?|trazem`],
    "a1-estar-a": ["Transforma com estar a + infinitivo.", `
Eu leio um livro. → Eu ___ um livro.|estou a ler
Ela trabalha. → Ela ___.|está a trabalhar
Nós jantamos. → Nós ___.|estamos a jantar
Chove. → ___.|Está a chover
Tu estudas? → Tu ___?|estás a estudar
Eles veem um filme. → Eles ___ um filme.|estão a ver`],
    "a1-ir-infinitivo": ["Completa com ir + infinitivo.", `
Amanhã eu ___ (visitar) a minha avó.|vou visitar
O que tu ___ (fazer) no sábado?|vais fazer
Nós ___ (passar) as férias no Algarve.|vamos passar
Ela ___ (comprar) um carro novo.|vai comprar
Eles ___ (jantar) fora hoje.|vão jantar
Eu não ___ (sair) esta noite.|vou sair`],
    "a1-possessivos": ["Completa com o possessivo (com artigo quando for preciso).", `
(eu) ___ casa é pequena.|A minha
(tu) ___ pais são simpáticos.|Os teus
(nós) ___ carro é velho.|O nosso
O carro ___ (dele) é azul.|dele
(vocês) ___ filhos estão na escola?|Os vossos
(eu) ___ irmãs vivem no Porto.|As minhas
A mala ___ (dela) é preta.|dela
— De quem é este livro? — É ___ (eu).|meu`],
    "a1-demonstrativos": ["Completa com o demonstrativo ou a contração.", `
Gosto muito ___ (de + esta) camisola.|desta
O que é ___ (esto)?|isto
___ (em + aquele) dia chovia muito.|Naquele
Não penso ___ (em + isso).|nisso
___ (esse) livro que tens na mão é bom?|Esse
Vou ___ (a + aquela) loja.|àquela`],
    "a1-interrogativos": ["Completa com o interrogativo adequado.", `
___ te chamas?|Como
___ moras? — Em Évora.|Onde
___ anos tens?|Quantos
___ é aquele senhor? — É o meu tio.|Quem
___ é o teu número de telemóvel?|Qual
___ chegas? — Amanhã.|Quando
___ é que não vens? — Porque estou doente.|Porque
___ custa este casaco?|Quanto`],
    "a1-preposicoes": ["Completa com a preposição (ou a contração) adequada.", `
Trabalho ___ segunda ___ sexta.|de / a
A aula é ___ nove ___ onze.|das / às
Faço anos ___ maio.|em
___ sábados vou ao mercado.|Aos
Chego ___ dez minutos.|daqui a
A farmácia fica ao lado ___ banco.|do
Vou ___ casa, estou cansado.|para
___ verão vamos à praia.|No`],
    "a1-negacao": ["Responde na negativa.", `
Tens alguma coisa? — Não, não tenho ___.|nada
Conheces alguém aqui? — Não, não conheço ___.|ninguém
Vais sempre ao cinema? — Não, não vou ___.|nunca
Já jantaste? — ___, vou jantar agora.|Ainda não
Eu não gosto de futebol. — Eu ___.|também não
Ainda moras em Madrid? — Não, ___ moro lá.|já não`],
    "a1-numeros": ["Escreve os números por extenso.", `
16|dezasseis
19|dezanove
22 casas|vinte e duas casas
47|quarenta e sete
100|cem
135|cento e trinta e cinco
200 pessoas|duzentas pessoas
1999|mil novecentos e noventa e nove
3.º andar|terceiro andar
2026|dois mil e vinte e seis`],
    "a1-funcoes-sociais": ["Completa o diálogo.", `
— Bom dia! O que deseja? — ___ uma bica, se faz favor. (cortesía)|Queria
— Mais alguma coisa? — Não, é tudo. ___ é?|Quanto
(ao telefone) — ___? — Olá, é a Sofia.|Estou
— Queres ir ao cinema? — Desculpa, não ___, tenho de trabalhar.|posso
— Gosto de praia. — Eu ___.|também
— Não gosto de futebol. — Eu ___.|também não`],
    "a2-pps-regulares": ["Conjuga no pretérito perfeito simples.", `
Ontem eu ___ (jantar) num restaurante italiano.|jantei
Tu ___ (falar) com a professora?|falaste
Ela ___ (comer) muito bem.|comeu
Nós ___ (chegar) tarde a casa.|chegámos
Eles ___ (abrir) a loja às dez.|abriram
Eu ___ (começar) a trabalhar às oito.|comecei
Eu ___ (ficar) em casa no domingo.|fiquei
Vocês ___ (beber) vinho do Porto?|beberam
Eu ___ (pagar) a conta.|paguei
Hoje eu ___ (acordar) muito cedo.|acordei`],
    "a2-pps-irregulares": ["Conjuga no pretérito perfeito simples (irregulares).", `
No sábado eu ___ (ir) ao Porto.|fui
O que tu ___ (fazer) ontem?|fizeste
Ela ___ (estar) doente na semana passada.|esteve
Nós ___ (ter) um problema com o carro.|tivemos
Eles ___ (vir) de comboio.|vieram
Eu não ___ (poder) ir à festa.|pude
Ele ___ (pôr) as chaves na mesa.|pôs
Tu ___ (ver) o jogo?|viste
Ela ___ (dizer) que não vinha.|disse
Eu ___ (trazer) um presente para ti.|trouxe
O concerto ___ (ser) fantástico.|foi
Ele ___ (dar) uma festa em casa.|deu`],
    "a2-imperfeito": ["Conjuga no pretérito imperfeito.", `
Quando era criança, eu ___ (brincar) na rua.|brincava
Antigamente nós ___ (viver) numa aldeia.|vivíamos
A casa ___ (ser) grande e ___ (ter) jardim.|era / tinha
Eles ___ (vir) sempre ao domingo.|vinham
Tu ___ (pôr) muito açúcar no café.|punhas
Eu ___ (estar) a ler quando tocou o telefone.|estava
(cortesia) ___ (querer) um galão, se faz favor.|Queria
Dantes, ela ___ (sair) muito à noite.|saía`],
    "a2-perfeito-vs-imperfeito": ["Perfeito simples ou imperfeito?", `
___ (ser) uma noite fria e ___ (chover).|Era / chovia
De repente, alguém ___ (bater) à porta.|bateu
Eu ___ (ver) televisão quando a luz ___ (ir) abaixo.|via / foi
Todos os verões nós ___ (ir) para o Algarve.|íamos
Em 2019 eu ___ (mudar-se) para Lisboa.|mudei-me
Enquanto ele ___ (cozinhar), eu ___ (pôr) a mesa.|cozinhava / punha
Ontem ___ (conhecer) um rapaz muito simpático.|conheci
Quando ___ (ter) dez anos, ___ (partir) uma perna.|tinha / parti`],
    "a2-perfeito-composto": ["Perfeito simples ou perfeito composto?", `
Ultimamente ___ (trabalhar) muito.|tenho trabalhado
Hoje ___ (comer) sardinhas.|comi
___ (chover) todos os dias esta semana.|Tem chovido
Já ___ (estar) no Porto? (tu)|estiveste
Não te ___ (ver) no ginásio nos últimos meses.|tenho visto
Esta manhã ___ (acordar) às seis. (eu)|acordei`],
    "a2-pronomes-complemento": ["Substitui as palavras sublinhadas por um pronome.", `
Vi <u>o João</u> ontem. → Vi-___ ontem.|o
Compraste <u>as flores</u>? → Compraste-___?|as
Vou comprar <u>o bilhete</u>. → Vou comprá-___.|lo
Fiz <u>o bolo</u>. → Fi-___.|lo
Eles abrem <u>a porta</u>. → Eles abrem-___.|na
Dei o livro <u>à Ana</u>. → Dei-___ o livro.|lhe
Dei <u>o livro à Ana</u>. → Dei-___.|lho
Escrevo <u>aos meus pais</u>. → Escrevo-___.|lhes`],
    "a2-colocacao-pronomes": ["Reescreve a frase com o pronome no sítio certo.", `
(me) Eu chamo Laura.|Eu chamo-me Laura.
(me) Não lembro.|Não me lembro.
(te) Acho que conheço.|Acho que te conheço.
(se) Como chama?|Como se chama?
(me) Ele deu um presente.|Ele deu-me um presente.
(te) Já disse.|Já te disse.
(nos) Levantamos cedo.|Levantamo-nos cedo.
(o) Nunca vi.|Nunca o vi.
(me) Alguém ligou.|Alguém me ligou.
(te) Vou ver amanhã.|Vou ver-te amanhã.`],
    "a2-imperativo": ["Conjuga no imperativo.", `
(tu) ___ (falar) mais devagar!|Fala
(você) ___ (fazer) favor de entrar.|Faça
(vocês) ___ (ter) cuidado!|Tenham
(tu, neg.) Não ___ (comer) isso!|comas
(o senhor) ___ (seguir) sempre em frente.|Siga
(tu) ___ (vir) cá!|Vem
(você, neg.) Não se ___ (preocupar).|preocupe
(tu) ___ (sentar-se), por favor.|Senta-te
(você) ___ (ir) pela segunda rua.|Vá
(tu) ___ (pôr) o casaco.|Põe`],
    "a2-reflexivos": ["Conjuga o verbo pronominal (atenção ao pronome).", `
Eu ___ (levantar-se) às sete.|levanto-me
Nós ___ (deitar-se) tarde.|deitamo-nos
Tu ___ (lembrar-se) da Ana?|lembras-te
Ela não ___ (sentir-se) bem.|se sente
Eu ___ (esquecer-se) das chaves. (perfeito)|esqueci-me
Eles ___ (sentar-se) na esplanada.|sentam-se`],
    "a2-comparativos": ["Completa com o comparativo ou superlativo.", `
Lisboa é ___ (+ grande) do que o Porto.|maior
Este restaurante é ___ (+ bom) da cidade.|o melhor
Ela é ___ alta ___ o irmão. (=)|tão / como
Tenho ___ livros ___ tu. (=)|tantos / como
Este exame foi ___ (muito fácil).|facílimo
O tempo hoje está ___ do que ontem. (+ mau)|pior
Este carro é ___ caro ___ aquele. (−)|menos / do que
O filme foi ___ (muito bom).|ótimo`],
    "a2-futuro-condicional": ["Conjuga no futuro ou no condicional.", `
Amanhã ___ (chover) no Norte. (futuro)|choverá
Eu ___ (fazer) isso amanhã. (futuro)|farei
___ (gostar) de reservar uma mesa. (condicional, eu)|Gostaria
Onde ___ (estar) o João? (futuro de probabilidade)|estará
Eles ___ (dizer) a verdade. (futuro)|dirão
___ (ser) possível mudar de quarto? (condicional)|Seria
Nós ___ (trazer) o vinho. (futuro)|traremos`],
    "a2-por-para": ["Completa com por (pelo, pela…) ou para.", `
Obrigado ___ ajuda.|pela
Este presente é ___ ti.|para
Passámos ___ Coimbra.|por
Estudo ___ aprender.|para
Comprei-o ___ vinte euros.|por
O trabalho é ___ sexta-feira.|para
Vou ao ginásio duas vezes ___ semana.|por
___ mim, é muito caro.|Para`],
    "a2-indefinidos": ["Completa com o indefinido adequado.", `
Está ___ bem? (todo, neutro)|tudo
Trabalhei ___ o dia. (todo el día)|todo
Vou ao café ___ os dias.|todos
Não conheço ___ aqui.|ninguém
Tens ___ pergunta? (alguna)|alguma
Não tenho ___ problema.|nenhum
___ a gente gosta de férias. (todo el mundo)|Toda
Podes ligar a ___ hora.|qualquer`],
    "a2-perifrases": ["Completa com a perífrase adequada.", `
___ chegar. (acabo de llegar)|Acabei de
Ele ___ fumar o ano passado. (dejó de)|deixou de
___ jantar às oito. (suelo, eu)|Costumo
Ela ___ estudar em setembro. (empezó a)|começou a
___ ver o filme. (volví a, eu)|Voltei a
Ainda ___ chover. (sigue lloviendo)|continua a
O comboio ___ partir. (está a punto de)|está para
___ aprender guitarra. (ando, eu)|Ando a`],
    "a2-conectores": ["Escolhe o conector adequado (mas, por isso, porque, além disso, quando, no entanto).", `
Gosto de Lisboa, ___ é muito cara.|mas
Estava cansado, ___ fui para a cama cedo.|por isso
Não fui à aula ___ estava doente.|porque
É uma casa grande; ___, tem jardim.|além disso
___ cheguei a casa, jantei.|Quando
Estudou muito; ___, chumbou no exame.|no entanto`],
    "a2-narrar": ["Completa a história com o tempo adequado.", `
No ano passado eu ___ (ir) a Lisboa com uns amigos.|fui
O apartamento ___ (ser) pequeno mas giro.|era
No primeiro dia ___ (andar, nós) de elétrico.|andámos
À noite ___ (estar) tanta gente que não ___ (conseguir, nós) entrar.|estava / conseguimos
— Já foste aos Açores? — Não, ___ fui.|nunca`],
    "a2-email": ["Escreve a fórmula adequada.", `
Saudação formal: ___ Senhores,|Exmos.
Despedida formal: Com os melhores ___|cumprimentos
Despedida informal: Um ___ / Beijinhos|abraço
Início formal: Venho por este ___ solicitar…|meio
Agradecimento formal: Agradeço desde ___ a vossa atenção.|já`],
    "a2-gestoes": ["Completa o diálogo.", `
— ___ reservar uma mesa para quatro pessoas. (cortesía)|Queria
— Fica em ___ de quem?|nome
Pode trazer a ___, por favor? (la carta)|ementa
A ___, se faz favor. (la cuenta)|conta
Queria fazer uma ___: o quarto não estava limpo.|reclamação
Pode dar-me o livro de ___?|reclamações`]
  };

  const E = {};
  Object.keys(B).forEach((id) => {
    const [inst, txt] = B[id];
    E[id] = { inst, items: txt.trim().split("\n").map((l) => { const i = l.lastIndexOf("|"); return { p: l.slice(0, i).trim(), s: l.slice(i + 1).trim() }; }) };
  });
  window.EJERCICIOS = E;
})();
