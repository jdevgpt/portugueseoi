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
Pode dar-me o livro de ___?|reclamações`],
    "a1-quantificadores": ["Completa com muito, pouco, bastante ou demasiado (com a concordância certa).", `
Há ___ (muchas) pessoas na praia.|muitas
Ela fala ___ (mucho) bem português.|muito
Tenho ___ (poco) tempo hoje.|pouco
Comeste ___ (demasiados) doces.|demasiados
Vivo ___ (bastante) longe do centro.|bastante
Ele tem ___ (muchos) amigos.|muitos`],
    "a2-adverbios": ["Forma o advérbio em -mente ou escolhe o advérbio adequado.", `
rápido → ___|rapidamente
fácil → ___|facilmente
feliz → ___|felizmente
Fala mais ___, por favor. (despacio)|devagar
Chegámos muito ___. (temprano)|cedo
___ toda a gente tem telemóvel. (hoy en día)|Hoje em dia`],
    "b1-conj-presente": ["Conjuga no presente do conjuntivo.", `
Espero que tu ___ (estar) bem.|estejas
Quero que vocês ___ (fazer) silêncio.|façam
É possível que ela ___ (vir) amanhã.|venha
Talvez nós ___ (ir) ao cinema.|vamos
Não acho que ele ___ (saber) a resposta.|saiba
É preciso que eu ___ (chegar) cedo.|chegue
Duvido que eles ___ (ter) razão.|tenham
Peço-lhe que ___ (dar) o recado ao João.|dê
Oxalá ___ (fazer) bom tempo!|faça
Convém que tu ___ (começar) já.|comeces`],
    "b1-conj-usos": ["Indicativo ou conjuntivo? Conjuga o verbo.", `
Acho que ele ___ (ter) razão.|tem
Não acho que ele ___ (ter) razão.|tenha
Embora ___ (estar) cansada, vou sair.|esteja
Sei que tu ___ (ser) capaz.|és
Procuro um apartamento que ___ (ter) varanda.|tenha
Moro num apartamento que ___ (ter) varanda.|tem
Caso ___ (precisar, tu) de ajuda, liga-me.|precises
Falo devagar para que me ___ (perceber, vocês).|percebam
É verdade que ___ (chover) muito aqui.|chove
É pena que não ___ (poder, tu) vir.|possas`],
    "b1-conj-imperfeito": ["Conjuga no imperfeito do conjuntivo.", `
Se eu ___ (ter) tempo, ia contigo.|tivesse
Se nós ___ (ser) ricos, viajávamos mais.|fôssemos
Ela pediu-me que ___ (esperar).|esperasse
Fala como se ___ (saber) tudo.|soubesse
Quem me dera que tu ___ (estar) aqui!|estivesses
Se vocês ___ (vir) mais cedo, jantávamos juntos.|viessem
Queria que ele ___ (dizer) a verdade.|dissesse
Se eu ___ (poder), mudava de casa.|pudesse`],
    "b1-conj-futuro": ["Conjuga no futuro do conjuntivo.", `
Quando tu ___ (chegar), liga-me.|chegares
Se ___ (fazer) sol, vamos à praia.|fizer
Assim que eu ___ (saber), digo-te.|souber
Faz o que ___ (querer, tu).|quiseres
Quem ___ (ter) dúvidas pode perguntar.|tiver
Se vocês ___ (ir) ao Porto, visitem a Ribeira.|forem
Enquanto ele ___ (estar) doente, fica em casa.|estiver
Quando nós ___ (ver) o filme, comentamos.|virmos
Se ___ (poder, tu), traz o carregador.|puderes
Logo que eles ___ (vir), começamos.|vierem`],
    "b1-infinitivo-pessoal": ["Completa com o infinitivo pessoal.", `
É melhor tu ___ (sair) já.|saíres
Comprei bilhetes para nós ___ (ir) ao teatro.|irmos
Antes de vocês ___ (chegar), arrumei a casa.|chegarem
Obrigado por ___ (vir, vocês).|virem
É importante ___ (estudar, tu) todos os dias.|estudares
Depois de ___ (jantar, nós), fomos passear.|jantarmos
Ao ___ (entrar, eles), cumprimentaram toda a gente.|entrarem
Trouxe o livro para tu ___ (ler).|leres`],
    "b1-mais-que-perfeito": ["Completa com o mais-que-perfeito composto.", `
Quando cheguei, o filme já ___ (começar).|tinha começado
Ela disse que ___ (perder) as chaves.|tinha perdido
Nós nunca ___ (ver) a neve.|tínhamos visto
Eles já ___ (sair) quando liguei.|tinham saído
Eu ___ (fazer) o jantar antes de ele chegar.|tinha feito
Tu já ___ (estar) em Lisboa antes?|tinhas estado`],
    "b1-condicionais": ["Completa a frase condicional.", `
Se ___ (chover) amanhã, ficamos em casa.|chover
Se eu ___ (ser) a ti, aceitava.|fosse
Se ___ (ter) fome, há sopa.|tiveres
Se tivesses estudado, ___ (passar).|tinhas passado
Caso ___ (haver) greve, trabalho de casa.|haja
Vamos à praia, a não ser que ___ (estar) frio.|esteja
Se nós ___ (saber), teríamos vindo.|tivéssemos sabido
Se eu ganhasse a lotaria, ___ (comprar) uma casa.|comprava / compraria`],
    "b1-passiva": ["Passa para a voz passiva.", `
Saramago escreveu este livro. → Este livro ___ por Saramago.|foi escrito
A polícia prendeu o ladrão. → O ladrão ___ pela polícia.|foi preso
Entregaram a encomenda. → A encomenda ___.|foi entregue
Vão inaugurar a ponte em maio. → A ponte ___ em maio.|vai ser inaugurada
Vendem casas. → ___ casas.|Vendem-se
Fecharam a loja. → A loja está ___.|fechada`],
    "b1-discurso-indireto": ["Passa para o discurso indireto.", `
«Estou cansado.» → Ele disse que ___ cansado.|estava
«Comprei um carro.» → Ela disse que ___ um carro.|tinha comprado
«Vou sair.» → Ele disse que ___ sair.|ia
«Onde moras?» → Perguntou-me onde ___.|morava
«Gostas de fado?» → Perguntou-me ___ gostava de fado.|se
«Fecha a porta!» → Pediu-me que ___ a porta.|fechasse
«Amanhã vou a Braga.» → Disse que ___ ia a Braga.|no dia seguinte
«Este livro é meu.» → Disse que ___ livro era dele.|aquele`],
    "b1-relativos": ["Completa com o pronome relativo (com preposição, se necessário).", `
A cidade ___ nasci é pequena.|onde
O colega ___ trabalho é simpático. (trabajar con)|com quem
O filme ___ te falei ganhou um prémio. (hablar de)|de que
A vizinha ___ filho é médico mora no 3.º.|cujo
Não percebi ___ disseste.|o que
É a empresa ___ trabalho há anos. (trabajar para)|para a qual
O autor ___ livros li é angolano.|cujos
___ chegar primeiro escolhe o lugar.|Quem`],
    "b1-futuro-condicional-compostos": ["Completa com o futuro ou o condicional composto.", `
Às oito já ___ (acabar, eu) o trabalho.|terei acabado
O João não veio. ___ (perder) o autocarro?|Terá perdido
Eu ___ (ir), mas não sabia da festa.|teria ido
Segundo a imprensa, o ministro ___ (receber) o dinheiro.|teria recebido`],
    "b1-gerundio-participio": ["Escolhe a forma correta (estar a + inf., gerúndio ou particípio).", `
Neste momento estou ___ (trabajando).|a trabalhar
A situação vai ___ (mejorando) aos poucos.|melhorando
___ o jantar, fomos passear. (terminada)|Acabado
Fiquei muito ___ (sorprendido) com a notícia.|surpreendido
Os convidados foram ___ (llegando).|chegando`],
    "b1-conectores": ["Escolhe o conector: embora, apesar de, visto que, para que, no entanto, a fim de.", `
___ esteja frio, vou à praia.|Embora
___ estar frio, vou à praia.|Apesar de
O hotel é caro; ___, vale a pena.|no entanto
___ não há bilhetes, vamos noutro dia.|Visto que
Explico outra vez ___ percebas.|para que
Saí cedo ___ apanhar o comboio.|a fim de`],
    "b1-pronomes-avancado": ["Coloca o pronome corretamente.", `
(lhe) Eu tinha dito.|Eu tinha-lhe dito.
(lhe) Não tinha dito.|Não lhe tinha dito.
(te) Darei amanhã. (mesóclise)|Dar-te-ei amanhã.
(te) Espero que divirtas.|Espero que te divirtas.
(o) Vimos ontem.|Vimo-lo ontem.
(nos) Sentamos na esplanada.|Sentamo-nos na esplanada.`],
    "b1-formacao-palavras": ["Forma o substantivo.", `
organizar → a ___|organização
pagar → o ___|pagamento
ler → a ___|leitura
feliz → a ___|felicidade
triste → a ___|tristeza
aprender → a ___|aprendizagem
casar → o ___|casamento
decidir → a ___|decisão`],
    "b1-opiniao": ["Completa com a expressão adequada.", `
___ que tens toda a razão. (opinión positiva)|Acho
Não me ___ que seja boa ideia.|parece
Concordo ___ parte, mas…|em
A meu ___, é uma decisão injusta.|ver
Por um lado é barato; por ___, é longe.|outro`],
    "b1-conselhos-hipoteses": ["Completa para dar um conselho ou fazer uma hipótese.", `
Se eu ___ a ti, falava com ele.|fosse
___ descansar mais. (deberías)|Devias
E se ___ (ir, nós) ao Gerês?|fôssemos
Que tal ___ (jantar, nós) fora?|jantarmos
Talvez ele ___ (estar) em casa.|esteja
Ele ___ estar doente. (probabilidad)|deve`],
    "b1-cartas-formais": ["Escreve a fórmula da carta formal.", `
Saudação: ___ Senhores,|Exmos.
Início: Venho por este ___ apresentar uma reclamação.|meio
Na ___ do anúncio, venho candidatar-me…|sequência
Pedido: Solicito que me ___ devolvido o dinheiro. (ser)|seja
Despedida: Com os melhores ___,|cumprimentos`],
    "b1-narrar-relatar": ["Completa o relato com o tempo adequado.", `
Era sexta-feira e eu ___ (estar) exausta.|estava
Quando ___ (chegar) a casa, vi que não tinha as chaves.|cheguei
Percebi que as ___ (deixar) no escritório.|tinha deixado
O meu colega disse que ___ (ir) lá buscá-las.|ia
___ cheguei, começou a chover. (en cuanto)|Mal
Enquanto ___ (esperar), a vizinha convidou-me para um chá.|esperava`]
  };

  const E = {};
  Object.keys(B).forEach((id) => {
    const [inst, txt] = B[id];
    E[id] = { inst, items: txt.trim().split("\n").map((l) => { const i = l.lastIndexOf("|"); return { p: l.slice(0, i).trim(), s: l.slice(i + 1).trim() }; }) };
  });
  window.EJERCICIOS = E;
})();
