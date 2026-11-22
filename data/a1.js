/* Apuntes de Portugués europeo – Nivel A1 (EOI) */
window.APUNTES = window.APUNTES || {};
window.APUNTES.A1 = {
  nivel: "A1",
  nombre: "Básico A1",
  descripcion: "Primer contacto con la lengua: presentarse, hablar de uno mismo y desenvolverse en situaciones cotidianas sencillas.",
  bloques: [
    /* ───────────────────────── FONÉTICA ───────────────────────── */
    {
      id: "fonetica", titulo: "Fonética y ortografía",
      temas: [
        {
          id: "a1-alfabeto", titulo: "Alfabeto, acentos y sonidos clave",
          html: `
<p>El alfabeto portugués tiene <b>26 letras</b> (la k, la w y la y solo aparecen en palabras extranjeras y siglas). No existe la <i>ñ</i> ni la <i>ll</i>: se escriben <b>nh</b> y <b>lh</b>.</p>
<h4>Signos gráficos</h4>
<table>
<tr><th>Signo</th><th>Nombre</th><th>Uso</th><th>Ejemplos</th></tr>
<tr><td>´</td><td>agudo</td><td>vocal tónica abierta</td><td>café, avó, médico</td></tr>
<tr><td>^</td><td>circunflexo</td><td>vocal tónica cerrada</td><td>avô, você, português</td></tr>
<tr><td>~</td><td>til</td><td>vocal nasal</td><td>mãe, pão, irmã, põe</td></tr>
<tr><td>&#96;</td><td>grave</td><td>contracción a + a</td><td>à, às, àquele</td></tr>
<tr><td>ç</td><td>cedilha</td><td>sonido /s/ ante a, o, u</td><td>praça, açúcar, almoço</td></tr>
</table>
<h4>Sonidos que más cuestan a un hispanohablante</h4>
<ul>
<li><b>Vocales átonas reducidas</b>: en portugués europeo la <i>e</i> átona casi desaparece y la <i>o</i> átona suena /u/: <i>telefone</i> [tl'fɔn], <i>obrigado</i> [ubri'gadu].</li>
<li><b>Vocales nasales</b>: <i>ão</i> (pão, não), <i>ãe</i> (mãe), <i>õe</i> (lições), <i>-am</i> final suena como <i>ão</i> (falam).</li>
<li><b>lh</b> ≈ «ll» tradicional (filho, trabalho) · <b>nh</b> = «ñ» (vinho, amanhã).</li>
<li><b>s</b> entre vocales = /z/ (casa, mesa); <b>s</b> final o ante consonante sorda = «sh» (português, estar).</li>
<li><b>j</b> y <b>g</b> (ante e, i) = sonido sonoro de la «j» francesa (janela, gente). Nunca como la jota española.</li>
<li><b>ch</b> = «sh» (chave, chuva). <b>x</b> puede sonar «sh» (xícara, peixe), /ks/ (táxi), /z/ (exame) o /s/ (próximo).</li>
<li><b>v</b> y <b>b</b> son sonidos distintos: la v es labiodental (vinho ≠ binho).</li>
<li><b>r</b> inicial o <b>rr</b> = sonido gutural (rua, carro); <b>r</b> entre vocales = vibrante simple (caro).</li>
</ul>
<div class="ojo"><b>Ojo:</b> la sílaba tónica sigue reglas parecidas al español, pero la tilde no siempre coincide: <i>português</i>, <i>inglês</i>, <i>você</i>, <i>Brasil</i>.</div>
`
        }
      ]
    },

    /* ───────────────────────── GRAMÁTICA ───────────────────────── */
    {
      id: "gramatica", titulo: "Gramática",
      temas: [
        {
          id: "a1-artigos", titulo: "Artículos y contracciones",
          html: `
<table>
<tr><th></th><th>Masc. sing.</th><th>Fem. sing.</th><th>Masc. pl.</th><th>Fem. pl.</th></tr>
<tr><td><b>Definido</b></td><td>o</td><td>a</td><td>os</td><td>as</td></tr>
<tr><td><b>Indefinido</b></td><td>um</td><td>uma</td><td>uns</td><td>umas</td></tr>
</table>
<p>En portugués europeo el artículo se usa también <b>delante de nombres de persona</b> y <b>de posesivos</b>: <i>O João está em casa. A minha irmã chama-se Ana.</i></p>
<h4>Contracciones obligatorias</h4>
<table>
<tr><th>Preposición</th><th>+ o</th><th>+ a</th><th>+ os</th><th>+ as</th><th>+ um / uma</th></tr>
<tr><td><b>a</b></td><td>ao</td><td>à</td><td>aos</td><td>às</td><td>a um / a uma</td></tr>
<tr><td><b>de</b></td><td>do</td><td>da</td><td>dos</td><td>das</td><td>dum / duma*</td></tr>
<tr><td><b>em</b></td><td>no</td><td>na</td><td>nos</td><td>nas</td><td>num / numa</td></tr>
<tr><td><b>por</b></td><td>pelo</td><td>pela</td><td>pelos</td><td>pelas</td><td>por um / uma</td></tr>
</table>
<p class="peq">* <i>dum/duma</i> es opcional: también se escribe <i>de um / de uma</i>.</p>
<div class="ej">Vou <b>ao</b> cinema. · Moro <b>na</b> Rua Augusta. · Sou <b>do</b> Porto. · Passeio <b>pela</b> praia. · Chego <b>às</b> nove.</div>
<div class="ojo"><b>Ojo con los países:</b> muchos llevan artículo (<i>o Brasil, a Alemanha, os Estados Unidos, o Japão</i>: <i>Vivo <b>no</b> Brasil</i>). Otros no lo llevan: <i>Portugal, Angola, Moçambique, Cabo Verde</i>. En Portugal también suelen ir sin artículo <i>Espanha, França, Inglaterra, Itália</i>: <i>Sou <b>de</b> Espanha · Vou <b>a</b> França</i> (en Brasil: <i>da Espanha</i>).</div>
`
        },
        {
          id: "a1-genero-numero", titulo: "Género y número",
          html: `
<h4>Género</h4>
<ul>
<li>Masculinos en <b>-o</b> (o livro), femeninos en <b>-a</b> (a casa).</li>
<li>Femeninos en <b>-ção, -são, -dade, -gem</b>: a lição, a televisão, a cidade, a viagem.</li>
<li>Masculinos en <b>-ma</b> de origen griego: o problema, o sistema, o programa, o clima.</li>
</ul>
<div class="ojo"><b>Cambian de género respecto al español:</b> <i>o leite, o sangue, o nariz, o mel, o sal, o costume, o legume</i> (masc.) · <i>a árvore, a dor, a ponte, a origem, a cor</i> (fem.).</div>
<h4>Femenino de adjetivos y profesiones</h4>
<table>
<tr><th>Terminación</th><th>Masculino → Femenino</th></tr>
<tr><td>-o → -a</td><td>alto → alta</td></tr>
<tr><td>-or → -ora</td><td>professor → professora</td></tr>
<tr><td>-ês → -esa</td><td>português → portuguesa</td></tr>
<tr><td>-ão → -ã / -ona</td><td>alemão → alemã · solteirão → solteirona</td></tr>
<tr><td>-e, -l, -z (invariables)</td><td>inteligente, fácil, feliz</td></tr>
</table>
<h4>Plural</h4>
<table>
<tr><th>Terminación</th><th>Regla</th><th>Ejemplos</th></tr>
<tr><td>vocal</td><td>+ s</td><td>casa → casas</td></tr>
<tr><td>-r, -z, -s (tónica)</td><td>+ es</td><td>mulher → mulheres · país → países</td></tr>
<tr><td>-m</td><td>-m → -ns</td><td>homem → homens · bom → bons</td></tr>
<tr><td>-al, -ol, -ul</td><td>-l → -is</td><td>animal → animais · espanhol → espanhóis</td></tr>
<tr><td>-el (tónica)</td><td>-el → -éis</td><td>papel → papéis · hotel → hotéis</td></tr>
<tr><td>-il (tónica)</td><td>-il → -is</td><td>barril → barris</td></tr>
<tr><td>-il (átona)</td><td>-il → -eis</td><td>fácil → fáceis</td></tr>
<tr><td>-ão</td><td>-ões / -ães / -ãos</td><td>lição → lições · pão → pães · mão → mãos</td></tr>
<tr><td>-s (átona)</td><td>invariable</td><td>o lápis → os lápis</td></tr>
</table>
<p class="peq">El plural en <b>-ões</b> es el más frecuente; <i>-ães</i> y <i>-ãos</i> hay que aprenderlos (cão → cães, alemão → alemães, irmão → irmãos, cidadão → cidadãos).</p>
`
        },
        {
          id: "a1-pronomes-sujeito", titulo: "Pronombres personales y formas de tratamiento",
          html: `
<table>
<tr><th>Persona</th><th>Pronombre</th><th>Uso</th></tr>
<tr><td>1.ª sing.</td><td>eu</td><td>yo</td></tr>
<tr><td>2.ª sing.</td><td>tu</td><td>informal (familia, amigos, niños, jóvenes)</td></tr>
<tr><td>3.ª sing.</td><td>ele / ela</td><td>él / ella</td></tr>
<tr><td>3.ª sing. (tratamiento)</td><td>você · o senhor / a senhora</td><td>usted (verbo en 3.ª persona)</td></tr>
<tr><td>1.ª pl.</td><td>nós · <i>a gente</i></td><td><i>a gente</i> (coloquial) lleva verbo en 3.ª sing.</td></tr>
<tr><td>3.ª pl.</td><td>eles / elas · vocês · os senhores</td><td>ellos/as · vosotros/ustedes</td></tr>
</table>
<div class="ojo"><b>Portugal ≠ Brasil:</b> en Portugal <i>tu</i> es la forma normal entre iguales. <i>Você</i> puede sonar distante o incluso brusco; en situaciones formales se prefiere <b>o senhor / a senhora</b>, el nombre o el cargo: <i>O senhor doutor precisa de mais alguma coisa?</i> · <i>A Ana quer um café?</i></div>
<p><b>Vós</b> (vosotros) es arcaico: solo aparece en textos religiosos y en algunas zonas del norte. Para «vosotros» se usa <b>vocês</b> con el verbo en 3.ª plural, aunque el posesivo y el pronombre siguen siendo <i>vosso / vos</i>: <i>Vocês já fizeram os vossos trabalhos?</i></p>
<p>El sujeto suele omitirse, como en español, pero se mantiene más a menudo con <i>você</i>, <i>ele/ela</i> para evitar ambigüedad.</p>
`
        },
        {
          id: "a1-presente-regulares", titulo: "Presente de indicativo: verbos regulares",
          html: `
<table>
<tr><th></th><th>falar (-ar)</th><th>comer (-er)</th><th>partir (-ir)</th></tr>
<tr><td>eu</td><td>fal<b>o</b></td><td>com<b>o</b></td><td>part<b>o</b></td></tr>
<tr><td>tu</td><td>fal<b>as</b></td><td>com<b>es</b></td><td>part<b>es</b></td></tr>
<tr><td>ele / você</td><td>fal<b>a</b></td><td>com<b>e</b></td><td>part<b>e</b></td></tr>
<tr><td>nós</td><td>fal<b>amos</b></td><td>com<b>emos</b></td><td>part<b>imos</b></td></tr>
<tr><td>eles / vocês</td><td>fal<b>am</b></td><td>com<b>em</b></td><td>part<b>em</b></td></tr>
</table>
<h4>Usos</h4>
<ul>
<li>Acciones habituales: <i>Trabalho de segunda a sexta.</i></li>
<li>Verdades generales: <i>A água ferve a 100 graus.</i></li>
<li>Futuro próximo planeado: <i>Amanhã janto com os meus pais.</i></li>
</ul>
<div class="ojo"><b>Ojo:</b> para una acción que está ocurriendo <u>ahora mismo</u> no se usa el presente simple sino <b>estar a + infinitivo</b> (ver tema correspondiente).</div>
<h4>Verbos regulares frecuentes</h4>
<p><b>-ar:</b> morar (vivir en), trabalhar, estudar, gostar (de), chamar-se, jantar, almoçar, acordar (despertar), levantar-se, chegar, ficar, comprar, pagar, apanhar (coger: o autocarro), tomar, usar, viajar.<br>
<b>-er:</b> beber, escrever, aprender, viver, correr, vender, compreender, responder, conhecer (conheço).<br>
<b>-ir:</b> abrir, decidir, discutir, assistir (a), dividir, partir, permitir, existir.</p>
<p class="peq"><b>Gostar</b> rige preposición <b>de</b> y funciona como <i>to like</i>, no como «gustar»: <i>Eu gosto de café</i> (me gusta el café) · <i>Gostas de mim?</i></p>
`
        },
        {
          id: "a1-ser-estar-ficar", titulo: "Ser, estar y ficar",
          html: `
<table>
<tr><th></th><th>ser</th><th>estar</th><th>ficar</th></tr>
<tr><td>eu</td><td>sou</td><td>estou</td><td>fico</td></tr>
<tr><td>tu</td><td>és</td><td>estás</td><td>ficas</td></tr>
<tr><td>ele / você</td><td>é</td><td>está</td><td>fica</td></tr>
<tr><td>nós</td><td>somos</td><td>estamos</td><td>ficamos</td></tr>
<tr><td>eles / vocês</td><td>são</td><td>estão</td><td>ficam</td></tr>
</table>
<h4>SER: características permanentes</h4>
<p>Identidad, origen, nacionalidad, profesión, material, hora, fecha, carácter: <i>Sou espanhola. É médico. São três horas. A mesa é de madeira.</i></p>
<h4>ESTAR: estados transitorios</h4>
<p>Estado de ánimo, salud, situación temporal, tiempo atmosférico: <i>Estou cansado. Está calor. O Pedro está em Lisboa esta semana.</i></p>
<h4>FICAR: verbo muy portugués</h4>
<ul>
<li><b>Localización fija</b> (edificios, ciudades): <i>Onde fica a estação? O museu fica perto do rio.</i></li>
<li><b>Quedarse / permanecer</b>: <i>Fico em casa hoje.</i></li>
<li><b>Ponerse / volverse</b> (cambio de estado): <i>Fiquei contente. Ele ficou doente.</i></li>
<li><b>Quedar bien/mal</b>: <i>Esse casaco fica-te bem.</i></li>
</ul>
<div class="ojo"><b>Ojo:</b> la localización de cosas que no se mueven se expresa con <b>ficar</b> o <b>ser</b>, no con <i>estar</i>: <i>A farmácia é/fica ao lado do banco.</i></div>
`
        },
        {
          id: "a1-ter-haver", titulo: "Ter y haver",
          html: `
<table>
<tr><th></th><th>ter</th><th>haver</th></tr>
<tr><td>eu</td><td>tenho</td><td>hei</td></tr>
<tr><td>tu</td><td>tens</td><td>hás</td></tr>
<tr><td>ele / você</td><td>tem</td><td><b>há</b></td></tr>
<tr><td>nós</td><td>temos</td><td>havemos</td></tr>
<tr><td>eles / vocês</td><td>têm</td><td>hão</td></tr>
</table>
<p class="peq">Fíjate en el acento: <i>ele <b>tem</b></i> / <i>eles <b>têm</b></i> (se pronuncian casi igual).</p>
<h4>Usos de TER</h4>
<ul>
<li>Posesión: <i>Tenho dois irmãos.</i></li>
<li>Edad: <i>Tenho trinta anos.</i></li>
<li>Sensaciones: <i>ter fome, ter sede, ter frio, ter calor, ter sono, ter medo, ter pressa, ter razão</i>.</li>
<li>Obligación: <b>ter de / ter que + infinitivo</b>: <i>Tenho de trabalhar amanhã.</i> (en Portugal se prefiere <i>ter de</i>).</li>
</ul>
<h4>Usos de HAVER</h4>
<ul>
<li>Existencia (= «hay»), siempre en 3.ª singular: <i>Há um supermercado aqui perto? Não há problema.</i></li>
<li>Tiempo transcurrido (= «hace»): <i>Moro aqui há cinco anos.</i></li>
</ul>
<div class="ojo"><b>Ojo:</b> en el habla coloquial (sobre todo en Brasil) se usa <i>tem</i> por <i>há</i>. En el portugués europeo estándar de la EOI usa <b>há</b>.</div>
`
        },
        {
          id: "a1-irregulares-presente", titulo: "Presente: verbos irregulares frecuentes",
          html: `
<table class="compacta">
<tr><th>Infinitivo</th><th>eu</th><th>tu</th><th>ele/você</th><th>nós</th><th>eles/vocês</th></tr>
<tr><td><b>ir</b></td><td>vou</td><td>vais</td><td>vai</td><td>vamos</td><td>vão</td></tr>
<tr><td><b>vir</b></td><td>venho</td><td>vens</td><td>vem</td><td>vimos</td><td>vêm</td></tr>
<tr><td><b>fazer</b></td><td>faço</td><td>fazes</td><td>faz</td><td>fazemos</td><td>fazem</td></tr>
<tr><td><b>dizer</b></td><td>digo</td><td>dizes</td><td>diz</td><td>dizemos</td><td>dizem</td></tr>
<tr><td><b>trazer</b></td><td>trago</td><td>trazes</td><td>traz</td><td>trazemos</td><td>trazem</td></tr>
<tr><td><b>poder</b></td><td>posso</td><td>podes</td><td>pode</td><td>podemos</td><td>podem</td></tr>
<tr><td><b>querer</b></td><td>quero</td><td>queres</td><td>quer</td><td>queremos</td><td>querem</td></tr>
<tr><td><b>saber</b></td><td>sei</td><td>sabes</td><td>sabe</td><td>sabemos</td><td>sabem</td></tr>
<tr><td><b>dar</b></td><td>dou</td><td>dás</td><td>dá</td><td>damos</td><td>dão</td></tr>
<tr><td><b>ver</b></td><td>vejo</td><td>vês</td><td>vê</td><td>vemos</td><td>veem</td></tr>
<tr><td><b>ler</b></td><td>leio</td><td>lês</td><td>lê</td><td>lemos</td><td>leem</td></tr>
<tr><td><b>pôr</b></td><td>ponho</td><td>pões</td><td>põe</td><td>pomos</td><td>põem</td></tr>
<tr><td><b>sair</b></td><td>saio</td><td>sais</td><td>sai</td><td>saímos</td><td>saem</td></tr>
<tr><td><b>ouvir</b></td><td>ouço</td><td>ouves</td><td>ouve</td><td>ouvimos</td><td>ouvem</td></tr>
<tr><td><b>pedir</b></td><td>peço</td><td>pedes</td><td>pede</td><td>pedimos</td><td>pedem</td></tr>
<tr><td><b>dormir</b></td><td>durmo</td><td>dormes</td><td>dorme</td><td>dormimos</td><td>dormem</td></tr>
<tr><td><b>preferir</b></td><td>prefiro</td><td>preferes</td><td>prefere</td><td>preferimos</td><td>preferem</td></tr>
<tr><td><b>perder</b></td><td>perco</td><td>perdes</td><td>perde</td><td>perdemos</td><td>perdem</td></tr>
</table>
<h4>Trucos</h4>
<ul>
<li>Muchos irregulares solo cambian en la persona <b>eu</b>: faço, digo, trago, posso, peço, ouço, durmo, perco.</li>
<li><b>Vir</b> y <b>ver</b> se confunden: <i>nós vimos</i> = venimos (vir) y también vimos (pasado de ver).</li>
<li><b>Saber</b> = saber hacer algo / conocer un dato; <b>conhecer</b> = conocer personas o lugares: <i>Sei nadar. Conheces Coimbra?</i></li>
</ul>
`
        },
        {
          id: "a1-estar-a", titulo: "Estar a + infinitivo (acción en curso)",
          html: `
<p>En portugués europeo, la acción que está ocurriendo se expresa con <b>estar a + infinitivo</b>. Equivale al español «estar + gerundio».</p>
<div class="ej">— O que <b>estás a fazer</b>? — <b>Estou a estudar</b> português.<br>Neste momento <b>estamos a jantar</b>; ligo-te depois.<br>Ela <b>está a trabalhar</b> num projeto novo este mês.</div>
<div class="ojo"><b>Portugal ≠ Brasil:</b> en Brasil (y en el sur de Portugal, Alentejo y Algarve) se oye <i>estar + gerúndio</i> (<i>estou estudando</i>). En la EOI se enseña y se exige la forma europea <b>estou a estudar</b>.</div>
<p>Con la misma estructura <b>a + infinitivo</b> se forman otras perífrasis: <i>continuar a, começar a, voltar a, andar a</i>: <i>Ando a ler um livro muito bom.</i></p>
`
        },
        {
          id: "a1-ir-infinitivo", titulo: "Futuro próximo: ir + infinitivo",
          html: `
<p>Para hablar de planes e intenciones se usa <b>ir (presente) + infinitivo</b>, sin preposición:</p>
<div class="ej">Amanhã <b>vou visitar</b> a minha avó.<br>O que <b>vais fazer</b> no fim de semana?<br>Este ano <b>vamos passar</b> as férias no Algarve.</div>
<div class="ojo"><b>Ojo:</b> no se pone <i>a</i>: ❌ <s>vou a comer</s> → ✅ <b>vou comer</b>.</div>
<h4>Marcadores de futuro</h4>
<p>logo (luego, más tarde), à tarde, à noite, amanhã, depois de amanhã, no próximo sábado, na próxima semana, para o ano (el año que viene), daqui a dois dias.</p>
`
        },
        {
          id: "a1-possessivos", titulo: "Posesivos",
          html: `
<table>
<tr><th>Poseedor</th><th>Masc. sing.</th><th>Fem. sing.</th><th>Masc. pl.</th><th>Fem. pl.</th></tr>
<tr><td>eu</td><td>o meu</td><td>a minha</td><td>os meus</td><td>as minhas</td></tr>
<tr><td>tu</td><td>o teu</td><td>a tua</td><td>os teus</td><td>as tuas</td></tr>
<tr><td>você / ele / ela</td><td>o seu</td><td>a sua</td><td>os seus</td><td>as suas</td></tr>
<tr><td>nós</td><td>o nosso</td><td>a nossa</td><td>os nossos</td><td>as nossas</td></tr>
<tr><td>vocês</td><td>o vosso</td><td>a vossa</td><td>os vossos</td><td>as vossas</td></tr>
</table>
<ul>
<li>Concuerdan con lo poseído, como en español, y en Portugal <b>llevan artículo</b>: <i>a minha casa, os nossos amigos</i>.</li>
<li>Para evitar la ambigüedad de <i>seu/sua</i>, para la 3.ª persona se usa <b>dele, dela, deles, delas</b> (detrás del nombre): <i>o carro <b>dele</b></i> (su coche, de él) · <i>a casa <b>delas</b></i>.</li>
<li><i>O seu / a sua</i> queda para el tratamiento de usted: <i>Este é o seu quarto, senhor Silva.</i></li>
</ul>
<div class="ej">— De quem é este livro? — É <b>meu</b>. (sin artículo detrás de <i>ser</i>)</div>
`
        },
        {
          id: "a1-demonstrativos", titulo: "Demostrativos y adverbios de lugar",
          html: `
<table>
<tr><th>Cercanía</th><th>Variables</th><th>Invariable (neutro)</th><th>Adverbio</th></tr>
<tr><td>cerca de mí</td><td>este, esta, estes, estas</td><td>isto</td><td>aqui / cá</td></tr>
<tr><td>cerca de ti</td><td>esse, essa, esses, essas</td><td>isso</td><td>aí</td></tr>
<tr><td>lejos de ambos</td><td>aquele, aquela, aqueles, aquelas</td><td>aquilo</td><td>ali / lá</td></tr>
</table>
<p><b>Isto, isso, aquilo</b> = esto, eso, aquello (cosas no identificadas o ideas): <i>O que é isto? Isso não é verdade.</i></p>
<h4>Contracciones</h4>
<table>
<tr><th></th><th>este</th><th>esse</th><th>aquele</th><th>isto / isso / aquilo</th></tr>
<tr><td><b>de</b></td><td>deste</td><td>desse</td><td>daquele</td><td>disto / disso / daquilo</td></tr>
<tr><td><b>em</b></td><td>neste</td><td>nesse</td><td>naquele</td><td>nisto / nisso / naquilo</td></tr>
<tr><td><b>a</b></td><td>–</td><td>–</td><td>àquele</td><td>àquilo</td></tr>
</table>
<div class="ej">Gosto <b>desta</b> camisola. · <b>Naquele</b> dia chovia muito. · Não penso <b>nisso</b>.</div>
<p class="peq"><b>Cá / lá</b> son muy frecuentes en Portugal: <i>Vem cá!</i> (¡ven aquí!) · <i>Já lá vou</i> (ya voy).</p>
`
        },
        {
          id: "a1-interrogativos", titulo: "Interrogativos",
          html: `
<table>
<tr><th>Portugués</th><th>Español</th><th>Ejemplo</th></tr>
<tr><td>(O) que?</td><td>¿qué?</td><td>O que fazes? · Que horas são?</td></tr>
<tr><td>Quem?</td><td>¿quién?</td><td>Quem é aquele senhor?</td></tr>
<tr><td>Qual? / Quais?</td><td>¿cuál? / ¿cuáles?</td><td>Qual é o teu número?</td></tr>
<tr><td>Onde? / Aonde?</td><td>¿dónde? / ¿adónde?</td><td>Onde moras? · Aonde vais?</td></tr>
<tr><td>De onde?</td><td>¿de dónde?</td><td>De onde és?</td></tr>
<tr><td>Quando?</td><td>¿cuándo?</td><td>Quando chegas?</td></tr>
<tr><td>Como?</td><td>¿cómo?</td><td>Como te chamas?</td></tr>
<tr><td>Porquê? / Porque é que…?</td><td>¿por qué?</td><td>Porque é que não vens? · Não vens? Porquê?</td></tr>
<tr><td>Quanto/a/os/as?</td><td>¿cuánto/a/os/as?</td><td>Quanto custa? · Quantos anos tens?</td></tr>
</table>
<h4>La estructura «é que»</h4>
<p>En el portugués hablado es muy común reforzar la pregunta con <b>é que</b>, sin cambiar el orden de las palabras: <i>Onde <b>é que</b> tu moras? · O que <b>é que</b> queres beber? · Quando <b>é que</b> começa a aula?</i></p>
<p>Las preguntas de sí/no se forman solo con la entonación. Para responder se repite el verbo en vez de decir solo «sim»: <i>— Falas inglês? — <b>Falo.</b> / Não, não falo.</i></p>
`
        },
        {
          id: "a1-preposicoes", titulo: "Preposiciones de lugar y tiempo",
          html: `
<h4>Lugar</h4>
<table>
<tr><th>Portugués</th><th>Español</th></tr>
<tr><td>em (no, na…)</td><td>en (situación): <i>Estou no escritório.</i></td></tr>
<tr><td>a (ao, à…) / para</td><td>a (dirección): <i>Vou ao café. Vou para casa.</i></td></tr>
<tr><td>de (do, da…)</td><td>de (origen): <i>Venho da praia.</i></td></tr>
<tr><td>em cima de / debaixo de</td><td>encima de / debajo de</td></tr>
<tr><td>dentro de / fora de</td><td>dentro de / fuera de</td></tr>
<tr><td>ao lado de / entre</td><td>al lado de / entre</td></tr>
<tr><td>em frente de (a) / atrás de</td><td>enfrente de / detrás de</td></tr>
<tr><td>perto de / longe de</td><td>cerca de / lejos de</td></tr>
<tr><td>à direita / à esquerda</td><td>a la derecha / a la izquierda</td></tr>
</table>
<div class="ojo"><b>Ojo:</b> con verbos de movimiento <i>ir a</i> suele indicar estancia corta y <i>ir para</i> estancia larga o el destino final: <i>Vou ao supermercado</i> · <i>Vou para casa</i> · <i>Vão para o Brasil viver.</i></div>
<h4>Tiempo</h4>
<ul>
<li><b>a</b> + horas y días de la semana (costumbre): <i>às oito, aos sábados</i></li>
<li><b>em</b> + meses, años, estaciones, fechas: <i>em março, em 2020, no verão, no dia 5</i></li>
<li><b>de</b> … <b>a</b> / <b>das</b> … <b>às</b>: <i>de segunda a sexta, das nove às cinco</i></li>
<li><b>de manhã, à tarde, à noite</b> · <b>ao</b> fim de semana · <b>ao</b> meio-dia</li>
<li><b>há</b> (hace) · <b>daqui a</b> (dentro de): <i>Chego daqui a dez minutos.</i></li>
</ul>
`
        },
        {
          id: "a1-negacao", titulo: "Negación y adverbios de frecuencia",
          html: `
<p>La negación se forma con <b>não</b> delante del verbo. Como en español, la doble negación es correcta:</p>
<div class="ej">Não tenho <b>nada</b>. · Não conheço <b>ninguém</b>. · Não vou <b>nunca</b> / <b>Nunca</b> vou.</div>
<p>Para negar con énfasis o responder: <i>Não, não quero.</i> · <i>Também não</i> (tampoco) · <i>Ainda não</i> (todavía no) · <i>Já não</i> (ya no).</p>
<h4>Adverbios de frecuencia</h4>
<p>sempre › quase sempre › normalmente / geralmente › muitas vezes › às vezes › raramente › quase nunca › nunca</p>
<p>Expresiones: <i>todos os dias, uma vez por semana, duas vezes por mês, de vez em quando</i>.</p>
<div class="ojo"><b>Falsos amigos:</b> <b>ainda</b> = todavía · <b>todavia</b> = sin embargo · <b>já</b> = ya · <b>logo</b> = luego, después (y también «enseguida» en algunas frases: <i>Até logo!</i>).</div>
`
        },
        {
          id: "a1-numeros", titulo: "Números cardinales y ordinales",
          html: `
<table class="compacta">
<tr><td>0 zero</td><td>10 dez</td><td>20 vinte</td><td>100 cem</td></tr>
<tr><td>1 um / uma</td><td>11 onze</td><td>21 vinte e um</td><td>101 cento e um</td></tr>
<tr><td>2 dois / duas</td><td>12 doze</td><td>30 trinta</td><td>200 duzentos/as</td></tr>
<tr><td>3 três</td><td>13 treze</td><td>40 quarenta</td><td>300 trezentos/as</td></tr>
<tr><td>4 quatro</td><td>14 catorze</td><td>50 cinquenta</td><td>400 quatrocentos/as</td></tr>
<tr><td>5 cinco</td><td>15 quinze</td><td>60 sessenta</td><td>500 quinhentos/as</td></tr>
<tr><td>6 seis</td><td>16 dezasseis</td><td>70 setenta</td><td>600 seiscentos/as</td></tr>
<tr><td>7 sete</td><td>17 dezassete</td><td>80 oitenta</td><td>700 setecentos/as</td></tr>
<tr><td>8 oito</td><td>18 dezoito</td><td>90 noventa</td><td>800 oitocentos/as</td></tr>
<tr><td>9 nove</td><td>19 dezanove</td><td>1000 mil</td><td>900 novecentos/as</td></tr>
</table>
<ul>
<li><b>Um/uma</b>, <b>dois/duas</b> y las centenas desde 200 concuerdan en género: <i>duas casas, trezentas pessoas</i>.</li>
<li>La conjunción <b>e</b> va entre todas las cifras: <i>345 = trezentos <b>e</b> quarenta <b>e</b> cinco</i>; <i>2025 = dois mil <b>e</b> vinte <b>e</b> cinco</i>.</li>
<li>Portugal: <i>dezasseis, dezassete, dezanove</i> · Brasil: <i>dezesseis, dezessete, dezenove</i>.</li>
<li>En el teléfono a veces se dice <b>meia</b> (media docena) por <i>seis</i>, sobre todo en Brasil.</li>
</ul>
<h4>Ordinales</h4>
<p>1.º primeiro · 2.º segundo · 3.º terceiro · 4.º quarto · 5.º quinto · 6.º sexto · 7.º sétimo · 8.º oitavo · 9.º nono · 10.º décimo</p>
<p class="peq">Pisos: <i>o rés-do-chão</i> (planta baja), <i>o primeiro andar</i>, <i>o 2.º esquerdo / direito</i> (2.º izquierda / derecha).</p>
`
        }
      ]
    },

    /* ───────────────────────── LÉXICO ───────────────────────── */
    {
      id: "lexico", titulo: "Léxico y vocabulario",
      temas: [
        {
          id: "a1-saudacoes", titulo: "Saludos, despedidas y presentaciones",
          html: `
<table>
<tr><th>Saludar</th><th>Despedirse</th></tr>
<tr><td>Olá! · Bom dia (hasta comer) · Boa tarde · Boa noite</td><td>Adeus · Até logo · Até amanhã · Até já (hasta ahora) · Tchau / Xau</td></tr>
<tr><td>Tudo bem? · Como estás? · Como está?</td><td>Bom fim de semana! · Boa viagem!</td></tr>
</table>
<h4>Presentarse</h4>
<div class="ej">— Olá, eu sou a Marta. Como te chamas?<br>— <b>Chamo-me</b> Rui. Muito prazer.<br>— <b>Igualmente.</b> De onde és?<br>— Sou de Braga, mas moro em Lisboa. E tu?<br>— Sou espanhola, de Badajoz.</div>
<p>Presentar a otra persona: <i>Este é o meu colega Paulo. / Apresento-lhe a Dra. Lopes.</i></p>
<h4>Fórmulas de cortesía</h4>
<p><b>Por favor / Se faz favor</b> (muy usado en Portugal) · <b>Obrigado</b> (si habla un hombre) / <b>Obrigada</b> (si habla una mujer) · <b>De nada / Não tem de quê</b> · <b>Desculpe / Com licença</b> · <b>Peço desculpa</b>.</p>
<div class="ojo"><b>Ojo:</b> <i>obrigado/a</i> concuerda con quien da las gracias, no con quien las recibe.</div>
<h4>Nacionalidades</h4>
<p>espanhol/espanhola · português/portuguesa · brasileiro/a · francês/francesa · inglês/inglesa · alemão/alemã · italiano/a · angolano/a · cabo-verdiano/a · chinês/chinesa · norte-americano/a</p>
`
        },
        {
          id: "a1-familia", titulo: "La familia y la descripción de personas",
          html: `
<table>
<tr><td>o pai / a mãe · os pais</td><td>padre / madre · padres</td></tr>
<tr><td>o filho / a filha</td><td>hijo / hija</td></tr>
<tr><td>o irmão / a irmã</td><td>hermano / hermana</td></tr>
<tr><td>o avô / a avó · os avós</td><td>abuelo / abuela · abuelos</td></tr>
<tr><td>o neto / a neta</td><td>nieto / nieta</td></tr>
<tr><td>o tio / a tia · o primo / a prima</td><td>tío / tía · primo / prima</td></tr>
<tr><td>o sobrinho / a sobrinha</td><td>sobrino / sobrina</td></tr>
<tr><td>o marido / a mulher (a esposa)</td><td>marido / mujer</td></tr>
<tr><td>o namorado / a namorada</td><td>novio / novia</td></tr>
<tr><td>o sogro / a sogra · o genro / a nora</td><td>suegro/a · yerno / nuera</td></tr>
<tr><td>o cunhado / a cunhada</td><td>cuñado / cuñada</td></tr>
</table>
<p class="peq">Estado civil: solteiro/a, casado/a, divorciado/a, viúvo/a.</p>
<h4>Descripción física</h4>
<p>alto/baixo · magro/gordo · novo/velho (joven/viejo) · bonito/feio · ter cabelo louro, castanho, preto, ruivo, curto, comprido, liso, encaracolado · ter olhos azuis, verdes, castanhos · usar óculos · ter barba/bigode</p>
<h4>Carácter</h4>
<p>simpático, antipático, alegre, tímido, trabalhador, preguiçoso, inteligente, divertido, chato (pesado, aburrido), calmo, nervoso, generoso, teimoso (terco)</p>
<div class="ojo"><b>Ojo:</b> <i>novo</i> = joven y nuevo · <i>a mulher</i> = la mujer y la esposa · <i>o rapaz / a rapariga</i> = el chico / la chica (en Portugal es neutro).</div>
`
        },
        {
          id: "a1-tempo", titulo: "Días, meses, estaciones y la hora",
          html: `
<h4>Días de la semana</h4>
<p>segunda-feira · terça-feira · quarta-feira · quinta-feira · sexta-feira · sábado · domingo<br>
<span class="peq">Se abrevian <i>segunda, terça…</i> y se escriben con minúscula. Fin de semana = <b>fim de semana</b>.</span></p>
<h4>Meses (con minúscula)</h4>
<p>janeiro · fevereiro · março · abril · maio · junho · julho · agosto · setembro · outubro · novembro · dezembro</p>
<h4>Estaciones</h4>
<p>a primavera · o verão · o outono · o inverno</p>
<h4>La fecha</h4>
<div class="ej">Que dia é hoje? — Hoje é dia 22 de novembro. · Faço anos a 3 de maio. (Mi cumpleaños es el 3 de mayo.)</div>
<h4>La hora</h4>
<table>
<tr><td>Que horas são?</td><td>¿Qué hora es?</td></tr>
<tr><td>É uma hora. / É meio-dia. / É meia-noite.</td><td>Es la una / mediodía / medianoche.</td></tr>
<tr><td>São duas horas.</td><td>Son las dos.</td></tr>
<tr><td>São três e dez.</td><td>Son las tres y diez.</td></tr>
<tr><td>São quatro e um quarto.</td><td>Son las cuatro y cuarto.</td></tr>
<tr><td>São cinco e meia.</td><td>Son las cinco y media.</td></tr>
<tr><td>São seis menos vinte. / São vinte para as seis.</td><td>Son las seis menos veinte.</td></tr>
<tr><td>A que horas…? — Às oito. / À uma.</td><td>¿A qué hora…? — A las ocho / a la una.</td></tr>
</table>
<p class="peq">En contextos oficiales (horarios, televisión) se usa el reloj de 24 h: <i>às 18h30 (dezoito e trinta)</i>.</p>
`
        },
        {
          id: "a1-comida", titulo: "Comida, bebida y comidas del día",
          html: `
<h4>Comidas del día</h4>
<p><b>o pequeno-almoço</b> (desayuno) · <b>o almoço</b> (comida) · <b>o lanche</b> (merienda) · <b>o jantar</b> (cena)<br>Verbos: tomar o pequeno-almoço, almoçar, lanchar, jantar.</p>
<h4>En el café / la pastelería</h4>
<table>
<tr><td>uma bica / um café / um expresso</td><td>un café solo</td></tr>
<tr><td>um galão</td><td>café con mucha leche, en vaso</td></tr>
<tr><td>uma meia de leite</td><td>café con leche, en taza</td></tr>
<tr><td>um sumo de laranja natural</td><td>un zumo de naranja natural</td></tr>
<tr><td>uma água com / sem gás</td><td>agua con / sin gas</td></tr>
<tr><td>uma imperial / um fino</td><td>una caña (Lisboa / Oporto)</td></tr>
<tr><td>um pastel de nata · um croissant · uma torrada</td><td>pastel de nata · cruasán · tostada</td></tr>
<tr><td>uma tosta mista · uma sandes / sande</td><td>sándwich mixto · bocadillo</td></tr>
</table>
<h4>Alimentos</h4>
<p><b>Carne:</b> o frango, a carne de porco, a carne de vaca, o bife, o presunto (jamón curado), o fiambre (jamón cocido), o chouriço.<br>
<b>Pescado y marisco:</b> o peixe, o bacalhau, as sardinhas, o polvo (pulpo), as amêijoas, o camarão.<br>
<b>Verduras y frutas:</b> os legumes, a alface, o tomate, a cebola, o alho, a batata, o feijão, a maçã, a laranja, a banana, o morango, as uvas.<br>
<b>Otros:</b> o pão, a manteiga, o queijo, o ovo, o arroz, a massa (pasta), o azeite, o sal, o açúcar, a sobremesa (postre).</p>
<div class="ojo"><b>Falsos amigos:</b> <b>o polvo</b> = el pulpo · <b>o presunto</b> = el jamón · <b>a salsa</b> = el perejil (salsa = <i>molho</i>) · <b>o talho</b> = la carnicería.</div>
`
        },
        {
          id: "a1-casa", titulo: "La casa",
          html: `
<h4>Tipos de vivienda</h4>
<p>a casa · o apartamento / o andar · a moradia (casa independiente) · o T2 (piso de dos dormitorios) · o rés-do-chão · a cave (sótano) · o sótão (desván) · a garagem · o jardim · a varanda (balcón)</p>
<h4>Partes de la casa</h4>
<p>a sala (de estar) · a cozinha · o quarto (dormitorio) · a casa de banho (cuarto de baño) · o corredor · a entrada · a escada · o elevador</p>
<h4>Muebles y objetos</h4>
<table>
<tr><td>a mesa · a cadeira · o sofá · a poltrona</td><td>mesa · silla · sofá · sillón</td></tr>
<tr><td>a cama · o armário · a cómoda · a estante</td><td>cama · armario · cómoda · estantería</td></tr>
<tr><td>o frigorífico · o fogão · o forno · o micro-ondas</td><td>nevera · cocina · horno · microondas</td></tr>
<tr><td>a máquina de lavar (roupa / loiça)</td><td>lavadora / lavavajillas</td></tr>
<tr><td>o lavatório · a sanita · o duche · a banheira</td><td>lavabo · váter · ducha · bañera</td></tr>
<tr><td>a janela · a porta · a parede · o chão · o teto</td><td>ventana · puerta · pared · suelo · techo</td></tr>
<tr><td>o candeeiro · o tapete · o espelho</td><td>lámpara · alfombra · espejo</td></tr>
</table>
<div class="ojo"><b>Ojo:</b> <i>a cadeira</i> = la silla (no la cadera = <i>a anca</i>) · <i>o escritório</i> = el despacho/la oficina · <i>a secretária</i> = el escritorio (mueble) y la secretaria.</div>
`
        },
        {
          id: "a1-cidade", titulo: "La ciudad, direcciones y transportes",
          html: `
<h4>Lugares</h4>
<p>a rua · a avenida · a praça · o largo (plazoleta) · o bairro · o centro · a câmara municipal (ayuntamiento) · os correios · o banco · a farmácia · o hospital · o centro de saúde · a escola · a igreja · o museu · o mercado · o supermercado · a loja · a estação · a paragem do autocarro</p>
<h4>Transportes (Portugal)</h4>
<table>
<tr><td>o autocarro</td><td>autobús</td></tr>
<tr><td>o comboio</td><td>tren</td></tr>
<tr><td>o metro · o elétrico</td><td>metro · tranvía</td></tr>
<tr><td>o carro · a mota · a bicicleta · o táxi</td><td>coche · moto · bici · taxi</td></tr>
<tr><td>o avião · o barco / o cacilheiro</td><td>avión · barco (ferry del Tajo)</td></tr>
<tr><td>apanhar / tomar o autocarro</td><td>coger el autobús</td></tr>
<tr><td>ir a pé / ir de carro / ir de comboio</td><td>ir andando / en coche / en tren</td></tr>
<tr><td>o bilhete · o passe</td><td>billete · abono</td></tr>
</table>
<h4>Pedir y dar direcciones</h4>
<div class="ej">— Desculpe, onde fica a estação de comboios?<br>— Siga sempre em frente, vire na segunda rua à direita e depois atravesse a praça. A estação fica ao fundo, do lado esquerdo.<br>— É longe? — Não, são cinco minutos a pé.</div>
<p>Expresiones: <i>seguir em frente, virar à esquerda/direita, atravessar, ao fundo da rua, na esquina, no cruzamento, nos semáforos</i>.</p>
`
        },
        {
          id: "a1-rotina", titulo: "Profesiones y rutina diaria",
          html: `
<h4>Profesiones</h4>
<p>o/a professor/a · o/a médico/a · o/a enfermeiro/a · o/a engenheiro/a · o/a advogado/a · o/a eletricista · o/a canalizador/a (fontanero) · o/a cozinheiro/a · o empregado / a empregada de mesa (camarero/a) · o/a funcionário/a público/a · o/a estudante · o/a reformado/a (jubilado/a) · o/a desempregado/a</p>
<div class="ej">— O que fazes? / Qual é a tua profissão? — Sou enfermeira. Trabalho num hospital.</div>
<h4>Rutina (verbos reflexivos)</h4>
<p>acordar · levantar-se · tomar duche · lavar-se · vestir-se · pentear-se · tomar o pequeno-almoço · sair de casa · apanhar o autocarro · começar a trabalhar · almoçar · acabar · voltar para casa · fazer as compras · jantar · ver televisão · deitar-se · adormecer</p>
<div class="ej">Acordo às sete, <b>levanto-me</b>, tomo duche e <b>visto-me</b>. Saio de casa às oito e um quarto. À noite janto com a família e <b>deito-me</b> por volta da meia-noite.</div>
<div class="ojo"><b>Ojo:</b> en frases afirmativas el pronombre va <b>detrás</b> del verbo con guion (<i>levanto-me</i>); con negación va delante (<i>não me levanto cedo</i>). Ver el tema de colocación de pronombres en A2.</div>
`
        },
        {
          id: "a1-roupa", titulo: "Ropa, colores y compras básicas",
          html: `
<h4>Ropa</h4>
<p>as calças (pantalón) · a camisa · a t-shirt · a camisola (jersey) · o casaco (chaqueta/abrigo) · o blusão · a saia · o vestido · o fato (traje) · a gravata · os sapatos · as sapatilhas (zapatillas de deporte) · as botas · as meias (calcetines) · o chapéu · o cachecol (bufanda) · as luvas · o cinto</p>
<h4>Colores</h4>
<p>branco · preto · cinzento · vermelho · azul · verde · amarelo · cor-de-rosa · cor de laranja · castanho (marrón) · roxo (morado) · bege<br>
<span class="peq">Claro / escuro: <i>azul-claro, verde-escuro</i>.</span></p>
<h4>En la tienda</h4>
<div class="ej">— Boa tarde, posso ajudar?<br>— Queria ver aquela camisola azul. Tem o tamanho M?<br>— Tenho, sim. Quer experimentar? O provador é ali.<br>— Fica-me bem. Quanto custa? — São trinta e cinco euros.<br>— Posso pagar com cartão? — Pode, claro.</div>
<div class="ojo"><b>Falsos amigos:</b> <b>a camisola</b> = el jersey · <b>o fato</b> = el traje · <b>as meias</b> = los calcetines (y también medias) · <b>experimentar</b> = probarse.</div>
`
        },
        {
          id: "a1-corpo", titulo: "El cuerpo y la salud básica",
          html: `
<h4>Partes del cuerpo</h4>
<p>a cabeça · o cabelo · a cara · os olhos · o nariz · a boca · os dentes · a orelha · o pescoço · o ombro · o braço · a mão · o dedo · as costas (espalda) · o peito · a barriga · a perna · o joelho · o pé</p>
<h4>Estar enfermo</h4>
<table>
<tr><td>Dói-me a cabeça. / Doem-me os pés.</td><td>Me duele la cabeza / me duelen los pies.</td></tr>
<tr><td>Tenho dores de cabeça / de garganta / de barriga.</td><td>Tengo dolor de cabeza / garganta / tripa.</td></tr>
<tr><td>Tenho febre / tosse / gripe.</td><td>Tengo fiebre / tos / gripe.</td></tr>
<tr><td>Estou constipado/a.</td><td>Estoy resfriado/a.</td></tr>
<tr><td>Sinto-me mal. / Estou doente.</td><td>Me encuentro mal / estoy enfermo.</td></tr>
</table>
<div class="ojo"><b>Falsos amigos:</b> <b>estar constipado</b> = estar resfriado · <b>a receita</b> = la receta (médica y de cocina) · <b>o comprimido</b> = la pastilla.</div>
`
        },
        {
          id: "a1-clima", titulo: "El tiempo atmosférico",
          html: `
<table>
<tr><td>Como está o tempo?</td><td>¿Qué tiempo hace?</td></tr>
<tr><td>Está sol / calor / frio / vento.</td><td>Hace sol / calor / frío / viento.</td></tr>
<tr><td>Está bom tempo / mau tempo.</td><td>Hace buen / mal tiempo.</td></tr>
<tr><td>Está nublado / encoberto.</td><td>Está nublado.</td></tr>
<tr><td>Chove. / Está a chover.</td><td>Llueve / está lloviendo.</td></tr>
<tr><td>Neva. / Está a nevar.</td><td>Nieva / está nevando.</td></tr>
<tr><td>Há nevoeiro. / Há trovoada.</td><td>Hay niebla / hay tormenta.</td></tr>
<tr><td>Estão 25 graus.</td><td>Hace 25 grados.</td></tr>
</table>
<p>Sustantivos: o sol, a chuva, a neve, o vento, as nuvens, o céu, a temperatura, a previsão do tempo, o guarda-chuva.</p>
<div class="ojo"><b>Ojo:</b> en Portugal se usa <b>estar</b> (no «hacer»): <i>Hoje <b>está</b> muito calor.</i></div>
`
        }
      ]
    },

    /* ───────────────────────── FUNCIONES ───────────────────────── */
    {
      id: "funcoes", titulo: "Funciones comunicativas",
      temas: [
        {
          id: "a1-funcoes-sociais", titulo: "Situaciones cotidianas: modelos de diálogo",
          html: `
<h4>En el café</h4>
<div class="ej">— Bom dia! O que deseja?<br>— Bom dia. <b>Queria</b> uma meia de leite e um pastel de nata, <b>se faz favor</b>.<br>— Mais alguma coisa? — Não, é tudo. <b>Quanto é?</b><br>— São dois euros e quarenta.</div>
<p class="peq">En Portugal se pide con el imperfecto de cortesía <b>queria</b> (quería), más educado que <i>quero</i>.</p>
<h4>Por teléfono</h4>
<div class="ej">— Estou? / Sim? (¿Diga?)<br>— Olá, é a Sofia. <b>Posso falar com</b> o Miguel?<br>— Ele não está. <b>Quer deixar recado?</b><br>— Não, obrigada. <b>Eu ligo mais tarde.</b></div>
<h4>Invitar, aceptar y rechazar</h4>
<div class="ej">— <b>Queres</b> ir ao cinema no sábado?<br>— <b>Boa ideia!</b> A que horas? / <b>Desculpa, não posso</b>, tenho de trabalhar.<br>— <b>Combinado</b>: encontramo-nos às oito à porta do cinema.</div>
<h4>Expresar gustos</h4>
<p><i>Gosto muito de… · Adoro… · Não gosto nada de… · Prefiro… · Detesto…</i><br><i>— Gosto de praia. — <b>Eu também.</b> / <b>Eu não.</b> — Não gosto de futebol. — <b>Eu também não.</b> / <b>Eu sim.</b></i></p>
<h4>Rellenar un formulario</h4>
<p>nome · apelido (apellido) · morada (dirección) · código postal · localidade · data de nascimento · naturalidade (lugar de nacimiento) · nacionalidade · estado civil · telemóvel · e-mail / correio eletrónico · assinatura (firma)</p>
<div class="ojo"><b>Ojo:</b> <b>a morada</b> = la dirección postal · <b>o apelido</b> = el apellido (en Portugal) · <b>a assinatura</b> = la firma.</div>
`
        }
      ]
    }
  ]
};
