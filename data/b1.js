/* Apuntes de Portugués europeo – Nivel B1 (EOI, Intermedio B1) */
window.APUNTES = window.APUNTES || {};
window.APUNTES.B1 = {
  nivel: "B1",
  nombre: "Intermedio B1",
  descripcion: "Expresar opiniones, deseos e hipótesis, narrar con detalle, contar lo que han dicho otros y desenvolverse en la mayoría de situaciones de un viaje o del trabajo.",
  bloques: [
    /* ───────────────────────── GRAMÁTICA ───────────────────────── */
    {
      id: "gramatica", titulo: "Gramática",
      temas: [
        {
          id: "b1-conj-presente", titulo: "Presente do conjuntivo: formación",
          html: `
<p>El <b>conjuntivo</b> es el subjuntivo del portugués. El presente se forma, como en español, a partir de la persona <b>eu</b> del presente de indicativo: se quita la <i>-o</i> y se añade la vocal «contraria».</p>
<table>
<tr><th></th><th>falar (falo)</th><th>comer (como)</th><th>partir (parto)</th><th>fazer (faço)</th></tr>
<tr><td>que eu</td><td>fal<b>e</b></td><td>com<b>a</b></td><td>part<b>a</b></td><td>faç<b>a</b></td></tr>
<tr><td>que tu</td><td>fal<b>es</b></td><td>com<b>as</b></td><td>part<b>as</b></td><td>faç<b>as</b></td></tr>
<tr><td>que ele / você</td><td>fal<b>e</b></td><td>com<b>a</b></td><td>part<b>a</b></td><td>faç<b>a</b></td></tr>
<tr><td>que nós</td><td>fal<b>emos</b></td><td>com<b>amos</b></td><td>part<b>amos</b></td><td>faç<b>amos</b></td></tr>
<tr><td>que eles / vocês</td><td>fal<b>em</b></td><td>com<b>am</b></td><td>part<b>am</b></td><td>faç<b>am</b></td></tr>
</table>
<p>Así salen solos muchos «irregulares»: <i>ter (tenho) → tenha · vir (venho) → venha · dizer (digo) → diga · pôr (ponho) → ponha · ouvir (ouço) → ouça · pedir (peço) → peça · ver (vejo) → veja · poder (posso) → possa · trazer (trago) → traga · perder (perco) → perca</i>.</p>
<h4>Los 7 verdaderamente irregulares</h4>
<table class="compacta">
<tr><th>ser</th><th>estar</th><th>ir</th><th>dar</th><th>saber</th><th>querer</th><th>haver</th></tr>
<tr><td>seja</td><td>esteja</td><td>vá</td><td>dê</td><td>saiba</td><td>queira</td><td>haja</td></tr>
<tr><td>sejas</td><td>estejas</td><td>vás</td><td>dês</td><td>saibas</td><td>queiras</td><td>—</td></tr>
<tr><td>seja</td><td>esteja</td><td>vá</td><td>dê</td><td>saiba</td><td>queira</td><td>haja</td></tr>
<tr><td>sejamos</td><td>estejamos</td><td>vamos</td><td>demos</td><td>saibamos</td><td>queiramos</td><td>—</td></tr>
<tr><td>sejam</td><td>estejam</td><td>vão</td><td>deem</td><td>saibam</td><td>queiram</td><td>—</td></tr>
</table>
<h4>Cambios ortográficos</h4>
<p>-car → <b>-que</b> (ficar → fique) · -gar → <b>-gue</b> (chegar → chegue) · -çar → <b>-ce</b> (começar → comece) · -ger/-gir → <b>-ja</b> (proteger → proteja, fugir → fuja).</p>
<div class="ojo"><b>Ya lo conoces:</b> las formas de <i>você/vocês</i> del imperativo y todo el imperativo negativo son presente de conjuntivo: <i>Não fales! Faça favor!</i></div>`
        },
        {
          id: "b1-conj-usos", titulo: "Usos del conjuntivo (presente)",
          html: `
<p>En general, el conjuntivo se usa en los mismos casos que el subjuntivo español. Aparece en oraciones subordinadas cuando el verbo principal expresa algo <b>no factual</b>: deseo, duda, sentimiento, necesidad o finalidad.</p>
<h4>1. Deseo, voluntad, petición, consejo</h4>
<p><i>querer que, desejar que, esperar que, pedir que, preferir que, aconselhar que, mandar que, proibir que, deixar que</i></p>
<div class="ej">Quero que <b>venhas</b> à festa. · Espero que <b>corra</b> tudo bem. · Peço-lhe que <b>feche</b> a porta.</div>
<h4>2. Emoción y valoración</h4>
<p><i>gostar que, ficar contente que, ter medo que, lamentar que, é bom/ótimo/pena que</i></p>
<div class="ej">Gosto que me <b>telefones</b>. · É pena que não <b>possas</b> vir. · Tenho medo que <b>chova</b>.</div>
<h4>3. Duda, posibilidad, opinión negativa</h4>
<p><i>duvidar que, talvez, é possível/provável que, não acho/não penso/não creio que</i></p>
<div class="ej">Talvez <b>chegue</b> tarde. · Não acho que <b>seja</b> boa ideia. · É possível que <b>esteja</b> em casa.</div>
<div class="ojo"><b>Opinión afirmativa → indicativo:</b> <i>Acho que <b>é</b> boa ideia.</i> · <b>Opinión negativa → conjuntivo:</b> <i>Não acho que <b>seja</b> boa ideia.</i> Igual que en español.</div>
<h4>4. Expresiones impersonales</h4>
<p><i>é preciso que, é necessário que, é importante que, é natural que, convém que, basta que</i></p>
<div class="ej">É preciso que <b>estudes</b> mais. · Convém que <b>saiamos</b> cedo.</div>
<h4>5. Conjunciones que siempre llevan conjuntivo</h4>
<p><i>para que, a fim de que, embora (aunque), mesmo que, caso (en caso de que), sem que, antes que, até que, desde que (siempre que), a não ser que</i></p>
<div class="ej">Falo devagar para que me <b>compreendas</b>. · Embora <b>esteja</b> cansada, vou sair. · Caso <b>precises</b>, liga-me. · Vou contigo desde que <b>pagues</b> tu.</div>
<h4>6. Oraciones de relativo con antecedente desconocido</h4>
<div class="ej">Procuro uma casa que <b>tenha</b> jardim. (no sé si existe) ⟷ Moro numa casa que <b>tem</b> jardim. (existe)</div>
<h4>7. Deseos con «oxalá» y fórmulas</h4>
<div class="ej">Oxalá <b>faça</b> sol amanhã! · Que <b>sejas</b> muito feliz! · Bom proveito! — Que <b>aproveite</b>!</div>`
        },
        {
          id: "b1-conj-imperfeito", titulo: "Pretérito imperfeito do conjuntivo",
          html: `
<h4>Formación</h4>
<p>Se toma la 3.ª persona plural del <b>pretérito perfeito simples</b>, se quita <i>-ram</i> y se añade <b>-sse, -sses, -sse, -ssemos, -ssem</b>. Así, los irregulares del perfeito son también irregulares aquí.</p>
<table>
<tr><th>Infinitivo</th><th>perfeito (eles)</th><th>Imperfeito do conjuntivo</th></tr>
<tr><td>falar</td><td>fala<s>ram</s></td><td>falasse, falasses, falasse, falássemos, falassem</td></tr>
<tr><td>comer</td><td>come<s>ram</s></td><td>comesse, comesses, comesse, comêssemos, comessem</td></tr>
<tr><td>partir</td><td>parti<s>ram</s></td><td>partisse, partisses, partisse, partíssemos, partissem</td></tr>
<tr><td>ser / ir</td><td>fo<s>ram</s></td><td>fosse, fosses, fosse, fôssemos, fossem</td></tr>
<tr><td>ter</td><td>tive<s>ram</s></td><td>tivesse, tivesses, tivesse, tivéssemos, tivessem</td></tr>
<tr><td>fazer</td><td>fize<s>ram</s></td><td>fizesse… fizéssemos</td></tr>
<tr><td>estar</td><td>estive<s>ram</s></td><td>estivesse… estivéssemos</td></tr>
<tr><td>poder</td><td>pude<s>ram</s></td><td>pudesse… pudéssemos</td></tr>
<tr><td>vir</td><td>vie<s>ram</s></td><td>viesse… viéssemos</td></tr>
<tr><td>dizer</td><td>disse<s>ram</s></td><td>dissesse… disséssemos</td></tr>
</table>
<p class="peq">La persona <i>nós</i> lleva tilde: -ássemos, -êssemos, -íssemos (regulares) y -éssemos, -ôssemos (irregulares).</p>
<h4>Usos</h4>
<ul>
<li><b>Condicionales irreales</b> con <i>se</i> (el uso más importante): <i>Se eu <b>tivesse</b> tempo, <b>ia</b>/<b>iria</b> contigo.</i></li>
<li><b>Mismos casos que el presente de conjuntivo, pero en pasado</b> (concordancia de tiempos): <i>Quero que venhas → Queria que <b>viesses</b>.</i> · <i>Pediu-me que <b>esperasse</b>.</i></li>
<li><b>Como se</b> (como si): <i>Fala como se <b>soubesse</b> tudo.</i></li>
<li><b>Deseos difíciles</b>: <i>Quem me dera que <b>fosse</b> sexta-feira!</i> · <i>Oxalá <b>pudesse</b> ir!</i></li>
</ul>
<div class="ojo"><b>En español hay dos formas</b> (hablara/hablase). En portugués <b>solo existe -sse</b>: la forma en <i>-ra</i> (<i>falara</i>) es el mais-que-perfeito simples, un tiempo distinto y literario.</div>`
        },
        {
          id: "b1-conj-futuro", titulo: "Futuro do conjuntivo (¡muy portugués!)",
          html: `
<p>Es un tiempo que <b>no existe en el español actual</b> y que en portugués se usa constantemente. Expresa una acción futura y posible en oraciones introducidas por <b>se, quando, enquanto, logo que, assim que, sempre que, depois que, como, onde, quem, o que</b>.</p>
<h4>Formación</h4>
<p>Igual que el imperfeito do conjuntivo: 3.ª plural del perfeito simples sin <i>-ram</i> + <b>-r, -res, -r, -rmos, -rem</b>.</p>
<table>
<tr><th></th><th>falar</th><th>ser / ir</th><th>ter</th><th>fazer</th><th>ver</th><th>vir</th></tr>
<tr><td>eu</td><td>falar</td><td>for</td><td>tiver</td><td>fizer</td><td>vir</td><td>vier</td></tr>
<tr><td>tu</td><td>falares</td><td>fores</td><td>tiveres</td><td>fizeres</td><td>vires</td><td>vieres</td></tr>
<tr><td>ele</td><td>falar</td><td>for</td><td>tiver</td><td>fizer</td><td>vir</td><td>vier</td></tr>
<tr><td>nós</td><td>falarmos</td><td>formos</td><td>tivermos</td><td>fizermos</td><td>virmos</td><td>viermos</td></tr>
<tr><td>eles</td><td>falarem</td><td>forem</td><td>tiverem</td><td>fizerem</td><td>virem</td><td>vierem</td></tr>
</table>
<p class="peq">En los verbos regulares coincide en <i>eu</i> y <i>ele</i> con el infinitivo; ¡pero en los irregulares no! <i>quando eu <b>tiver</b></i>, nunca <s>quando eu ter</s>.</p>
<h4>Equivalencias con el español</h4>
<table>
<tr><th>Español</th><th>Portugués</th></tr>
<tr><td>Cuando <b>llegues</b>, llámame.</td><td>Quando <b>chegares</b>, liga-me.</td></tr>
<tr><td>Si <b>tienes</b> tiempo, ven.</td><td>Se <b>tiveres</b> tempo, vem.</td></tr>
<tr><td>Haz lo que <b>quieras</b>.</td><td>Faz o que <b>quiseres</b>.</td></tr>
<tr><td>Quien <b>llegue</b> tarde, no entra.</td><td>Quem <b>chegar</b> tarde não entra.</td></tr>
<tr><td>En cuanto <b>sepa</b> algo, te digo.</td><td>Assim que <b>souber</b> alguma coisa, digo-te.</td></tr>
<tr><td>Mientras <b>esté</b> aquí, no te preocupes.</td><td>Enquanto <b>estiver</b> aqui, não te preocupes.</td></tr>
</table>
<div class="ojo"><b>Error típico de hispanohablantes:</b> usar el presente de conjuntivo: ❌ <s>Quando chegues</s> → ✅ <b>Quando chegares</b>. ❌ <s>Se tens tempo</s> (posible, pero informal) → ✅ <b>Se tiveres tempo</b>.</div>`
        },
        {
          id: "b1-infinitivo-pessoal", titulo: "Infinitivo pessoal (flexionado)",
          html: `
<p>El portugués tiene un infinitivo que <b>se conjuga</b> para indicar quién hace la acción. Es otra característica única de la lengua.</p>
<table>
<tr><th></th><th>falar</th><th>fazer</th><th>ser</th><th>pôr</th></tr>
<tr><td>(para) eu</td><td>falar</td><td>fazer</td><td>ser</td><td>pôr</td></tr>
<tr><td>(para) tu</td><td>falar<b>es</b></td><td>fazer<b>es</b></td><td>ser<b>es</b></td><td>por<b>es</b></td></tr>
<tr><td>(para) ele</td><td>falar</td><td>fazer</td><td>ser</td><td>pôr</td></tr>
<tr><td>(para) nós</td><td>falar<b>mos</b></td><td>fazer<b>mos</b></td><td>ser<b>mos</b></td><td>por<b>mos</b></td></tr>
<tr><td>(para) eles</td><td>falar<b>em</b></td><td>fazer<b>em</b></td><td>ser<b>em</b></td><td>por<b>em</b></td></tr>
</table>
<p>Es <b>regular en todos los verbos</b>: infinitivo + -es, -mos, -em.</p>
<h4>Cuándo se usa</h4>
<ul>
<li><b>Tras preposiciones</b> cuando el sujeto es distinto del de la oración principal o hay que aclararlo: <i>Trouxe o livro <b>para leres</b>.</i> (para que lo leas) · <i>Antes de <b>saíres</b>, fecha a janela.</i> · <i>Depois de <b>jantarmos</b>, fomos passear.</i></li>
<li><b>Con expresiones impersonales</b>: <i>É melhor <b>irmos</b> embora.</i> · <i>É importante <b>estudares</b>.</i></li>
<li><b>Como alternativa al conjuntivo</b>, más natural en el habla: <i>É preciso que estudes → É preciso <b>estudares</b>.</i> · <i>Para que saibas → Para <b>saberes</b>.</i></li>
<li><b>Ao + infinitivo</b> (al + inf.): <i>Ao <b>chegarem</b>, ligaram-me.</i></li>
</ul>
<div class="ej">Obrigado por <b>terem</b> vindo. (Gracias por haber venido — a varios) · Saímos sem <b>fazermos</b> barulho. · Não é fácil <b>sermos</b> pontuais.</div>
<div class="ojo"><b>No se flexiona</b> cuando forma parte de una perífrasis o depende de verbos como <i>querer, poder, dever, ir</i>: <i>Queremos <b>sair</b></i> (no <s>queremos sairmos</s>).</div>`
        },
        {
          id: "b1-mais-que-perfeito", titulo: "Pretérito mais-que-perfeito",
          html: `
<p>Expresa una acción pasada <b>anterior a otra acción pasada</b>, como el pluscuamperfecto español («había hecho»).</p>
<h4>Mais-que-perfeito composto (el que se usa al hablar)</h4>
<p><b>ter</b> en imperfeito (<i>tinha, tinhas, tinha, tínhamos, tinham</i>) + <b>particípio</b>. También con <i>haver</i> (<i>havia feito</i>), más formal.</p>
<div class="ej">Quando cheguei à estação, o comboio já <b>tinha partido</b>. · Nunca <b>tinha comido</b> polvo antes de vir a Portugal. · Ela disse que <b>tinha perdido</b> as chaves.</div>
<h4>Mais-que-perfeito simples (literario)</h4>
<p>Se forma como el imperfeito do conjuntivo pero con <b>-ra</b>: <i>falara, comera, fizera, tivera, fora</i>. Aparece en literatura y en la prensa: <i>O escritor, que nascera em 1922, morreu em 2010.</i> Basta con <b>reconocerlo</b>.</p>
<p>Sobrevive en expresiones fijas: <i>Quem me dera!</i> (¡Ojalá!) · <i>Pudera!</i> (¡Normal! ¡No me extraña!) · <i>Tomara que…</i> (Ojalá…).</p>
<div class="ojo"><b>Ojo:</b> <i>falara</i> no es «hablara» (subjuntivo español): es «había hablado». El subjuntivo es <i>falasse</i>.</div>`
        },
        {
          id: "b1-condicionais", titulo: "Oraciones condicionales",
          html: `
<table>
<tr><th>Tipo</th><th>Condición (se…)</th><th>Resultado</th><th>Ejemplo</th></tr>
<tr><td><b>Real / general</b></td><td>presente indicativo</td><td>presente</td><td>Se chove, fico em casa.</td></tr>
<tr><td><b>Posible (futuro)</b></td><td><b>futuro do conjuntivo</b></td><td>presente / futuro / imperativo</td><td>Se <b>chover</b> amanhã, fico em casa.</td></tr>
<tr><td><b>Improbable / irreal presente</b></td><td><b>imperfeito do conjuntivo</b></td><td>condicional o imperfeito</td><td>Se <b>tivesse</b> dinheiro, <b>comprava</b>/<b>compraria</b> um barco.</td></tr>
<tr><td><b>Irreal pasado</b></td><td><b>mais-que-perf. do conjuntivo</b> (tivesse + part.)</td><td>condicional composto / mais-que-perf.</td><td>Se <b>tivesse sabido</b>, <b>teria vindo</b> / <b>tinha vindo</b>.</td></tr>
</table>
<h4>Otras formas de expresar condición</h4>
<ul>
<li><b>Caso</b> + presente de conjuntivo: <i>Caso <b>chova</b>, o jogo é adiado.</i></li>
<li><b>Desde que / contanto que</b> (siempre que) + conjuntivo: <i>Podes sair desde que <b>voltes</b> cedo.</i></li>
<li><b>A não ser que</b> (a menos que) + conjuntivo: <i>Vou a pé, a não ser que <b>chova</b>.</i></li>
<li><b>Sem</b> + infinitivo: <i>Sem estudar, não passas.</i></li>
</ul>
<div class="ojo"><b>En la lengua hablada</b> el imperfecto de indicativo sustituye casi siempre al condicional: <i>Se eu fosse a ti, <b>falava</b> com ela.</i> (Yo que tú hablaría con ella.) — <b>Se eu fosse a ti / No teu lugar</b> es la forma típica de aconsejar.</div>`
        },
        {
          id: "b1-passiva", titulo: "Voz pasiva",
          html: `
<h4>1. Pasiva con SER (pasiva de acción)</h4>
<p><b>ser</b> (en cualquier tiempo) + <b>participio</b> (concuerda con el sujeto) + <i>por</i> (agente).</p>
<div class="ej">O Mosteiro dos Jerónimos <b>foi construído</b> no século XVI. · As cartas <b>são enviadas</b> todos os dias. · O livro <b>foi escrito por</b> Saramago. · A ponte <b>vai ser inaugurada</b> em maio.</div>
<h4>2. Pasiva con ESTAR (resultado)</h4>
<div class="ej">A porta <b>está fechada</b>. · O jantar <b>está feito</b>. · As lojas <b>estão abertas</b>.</div>
<h4>3. Pasiva con SE (se apassivante)</h4>
<p>Muy frecuente en anuncios e instrucciones. El verbo concuerda con el sujeto:</p>
<div class="ej"><b>Vende-se</b> casa. · <b>Vendem-se</b> casas. · <b>Aluga-se</b> quarto. · <b>Fala-se</b> inglês. · <b>Precisa-se</b> de empregado (impersonal: sin concordancia).</div>
<h4>Participios dobles</h4>
<p>Algunos verbos tienen dos participios: el <b>regular</b> con <i>ter</i>, el <b>irregular</b> con <i>ser/estar</i>:</p>
<table class="compacta">
<tr><th>Verbo</th><th>ter + …</th><th>ser/estar + …</th></tr>
<tr><td>aceitar</td><td>tinha aceitado</td><td>foi aceite</td></tr>
<tr><td>acender</td><td>tinha acendido</td><td>está aceso</td></tr>
<tr><td>entregar</td><td>tinha entregado</td><td>foi entregue</td></tr>
<tr><td>imprimir</td><td>tinha imprimido</td><td>foi impresso</td></tr>
<tr><td>matar</td><td>tinha matado</td><td>foi morto</td></tr>
<tr><td>prender</td><td>tinha prendido</td><td>foi preso</td></tr>
<tr><td>pagar · ganhar · gastar</td><td>tinha pago/ganho/gasto (hoy se usa el corto también con ter)</td><td>foi pago/ganho/gasto</td></tr>
</table>`
        },
        {
          id: "b1-discurso-indireto", titulo: "Estilo indirecto (discurso indireto)",
          html: `
<p>Para contar lo que ha dicho otra persona. Cuando el verbo introductor está en pasado (<i>disse, perguntou, pediu</i>), cambian los tiempos, los pronombres y las referencias de tiempo y lugar.</p>
<h4>Cambio de tiempos</h4>
<table>
<tr><th>Directo</th><th>Indirecto (ele disse que…)</th></tr>
<tr><td>presente: «Estou cansado.»</td><td>imperfeito: … estava cansado.</td></tr>
<tr><td>perfeito: «Comprei um carro.»</td><td>mais-que-perfeito: … tinha comprado um carro.</td></tr>
<tr><td>futuro / ir + inf.: «Vou sair.»</td><td>condicional / ia + inf.: … ia sair / sairia.</td></tr>
<tr><td>imperativo: «Fecha a porta!»</td><td>imperf. conjuntivo: Pediu-me que fechasse a porta. / Pediu-me para fechar…</td></tr>
<tr><td>pres. conjuntivo: «Espero que venhas.»</td><td>imperf. conjuntivo: … esperava que eu fosse.</td></tr>
</table>
<h4>Cambio de referencias</h4>
<table class="compacta">
<tr><th>Directo</th><th>Indirecto</th></tr>
<tr><td>hoje · ontem · amanhã</td><td>naquele dia · no dia anterior · no dia seguinte</td></tr>
<tr><td>agora · esta semana</td><td>naquele momento · naquela semana</td></tr>
<tr><td>aqui · este</td><td>ali / lá · aquele</td></tr>
<tr><td>eu · meu</td><td>ele/ela · dele/dela</td></tr>
<tr><td>vir · trazer</td><td>ir · levar</td></tr>
</table>
<h4>Preguntas</h4>
<p>Preguntas sí/no → <b>se</b>: <i>«Gostas de fado?» → Perguntou-me <b>se</b> gostava de fado.</i><br>
Preguntas con interrogativo → se mantiene: <i>«Onde moras?» → Perguntou-me <b>onde</b> morava.</i></p>
<div class="ej">«Amanhã vou a Braga com a minha irmã», disse o Rui. → O Rui disse que <b>no dia seguinte ia</b> a Braga com <b>a irmã</b>.</div>
<p class="peq">Verbos introductores útiles: dizer, contar, explicar, perguntar, responder, pedir, mandar, aconselhar, sugerir, prometer, queixar-se de, admitir, afirmar.</p>`
        },
        {
          id: "b1-relativos", titulo: "Pronombres relativos",
          html: `
<table>
<tr><th>Relativo</th><th>Uso</th><th>Ejemplo</th></tr>
<tr><td><b>que</b></td><td>el más común (personas y cosas)</td><td>O livro <b>que</b> li era ótimo. · A rapariga <b>que</b> trabalha comigo é de Faro.</td></tr>
<tr><td><b>quem</b></td><td>personas, tras preposición o sin antecedente</td><td>A pessoa <b>com quem</b> falei. · <b>Quem</b> sabe, sabe.</td></tr>
<tr><td><b>o qual / a qual / os quais / as quais</b></td><td>tras preposiciones largas, registro formal</td><td>A empresa <b>para a qual</b> trabalho. · O motivo <b>pelo qual</b> saí.</td></tr>
<tr><td><b>onde</b></td><td>lugar (= em que)</td><td>A cidade <b>onde</b> nasci.</td></tr>
<tr><td><b>cujo/a/os/as</b></td><td>posesión (= cuyo), concuerda con lo poseído</td><td>O autor <b>cujos</b> livros li. · A vizinha <b>cuja</b> filha é médica.</td></tr>
<tr><td><b>o que</b></td><td>neutro (= lo que)</td><td><b>O que</b> me disseste é verdade. · Chegou tarde, <b>o que</b> me irritou.</td></tr>
<tr><td><b>quanto</b></td><td>tudo quanto (= todo lo que)</td><td>Fiz tudo <b>quanto</b> pude.</td></tr>
</table>
<h4>Preposición delante del relativo</h4>
<p>Como en español formal, la preposición del verbo va <b>delante</b> del relativo: <i>O filme <b>de que</b> te falei</i> (falar de) · <i>A casa <b>em que</b> vivo</i> (viver em) · <i>O amigo <b>com quem</b> saí</i> (sair com).</p>
<div class="ojo"><b>Error típico:</b> ❌ <s>O filme que te falei</s> → ✅ <b>O filme de que te falei</b> (en el habla se oye, pero en el examen escribe la preposición).</div>`
        },
        {
          id: "b1-gerundio-participio", titulo: "Gerundio y participio en Portugal",
          html: `
<p>En el portugués europeo el gerundio (<i>falando, comendo, partindo</i>) se usa <b>mucho menos</b> que en español o en Brasil, pero tiene usos correctos:</p>
<h4>Usos correctos del gerundio en PE</h4>
<ul>
<li><b>Simultaneidad / modo</b>: <i>Saiu <b>chorando</b>.</i> (también <i>a chorar</i>) · <i>Aprende-se <b>praticando</b>.</i></li>
<li><b>Condición o causa</b> al principio de frase (registro escrito): <i><b>Sendo</b> assim, aceito.</i> · <i><b>Chegando</b> a casa, liga-me.</i></li>
<li><b>Ir + gerundio</b> = progresión: <i>A situação <b>vai melhorando</b>.</i> · <i>Os convidados <b>foram chegando</b>.</i></li>
<li>En el sur de Portugal (Alentejo, Algarve) se oye <i>estar + gerúndio</i>.</li>
</ul>
<div class="ojo">Para acciones en curso, sigue usando <b>estar a + infinitivo</b>: <i>Estou a trabalhar</i>.</div>
<h4>Construcciones con participio</h4>
<ul>
<li><b>Participio absoluto</b>: <i><b>Acabado</b> o jantar, fomos dar uma volta.</i> (Terminada la cena…)</li>
<li><b>Ficar + participio</b> = resultado: <i>Fiquei <b>surpreendido</b>. A loja ficou <b>fechada</b>.</i></li>
<li><b>Deixar + participio</b>: <i>Deixa a porta <b>fechada</b>.</i></li>
</ul>`
        },
        {
          id: "b1-futuro-condicional-compostos", titulo: "Futuro y condicional compuestos",
          html: `
<table>
<tr><th>Tiempo</th><th>Formación</th><th>Uso</th><th>Ejemplo</th></tr>
<tr><td><b>Futuro composto</b></td><td>terei, terás… + participio</td><td>acción terminada antes de un momento futuro; suposición sobre el pasado</td><td>Às oito já <b>terei acabado</b>. · <b>Terá perdido</b> o comboio? (¿Habrá perdido el tren?)</td></tr>
<tr><td><b>Condicional composto</b></td><td>teria, terias… + participio</td><td>resultado irreal en el pasado; información no confirmada (prensa)</td><td>Eu <b>teria ido</b>, mas não sabia. · O ministro <b>teria recebido</b> o dinheiro.</td></tr>
</table>
<div class="ojo"><b>Prensa:</b> el condicional se usa para noticias no confirmadas («según fuentes…»): <i>O incêndio <b>teria começado</b> numa fábrica.</i></div>
<p class="peq">En la lengua hablada se prefiere el mais-que-perfeito: <i>Eu <b>tinha ido</b>, mas não sabia.</i></p>`
        },
        {
          id: "b1-conectores", titulo: "Conectores y organizadores del discurso (B1)",
          html: `
<table>
<tr><th>Función</th><th>Conectores</th><th>Modo</th></tr>
<tr><td>Concesión</td><td><b>embora, mesmo que, ainda que</b></td><td>+ conjuntivo</td></tr>
<tr><td></td><td><b>apesar de</b> + infinitivo / sustantivo</td><td>+ infinitivo pessoal</td></tr>
<tr><td></td><td><b>no entanto, contudo, todavia, porém, ainda assim</b></td><td>(adverbios)</td></tr>
<tr><td>Causa</td><td>porque, visto que, já que, uma vez que, dado que, como (al principio)</td><td>+ indicativo</td></tr>
<tr><td>Consecuencia</td><td>por isso, portanto, assim, por conseguinte, de modo que, de maneira que</td><td>+ indicativo</td></tr>
<tr><td>Finalidad</td><td><b>para que, a fim de que</b> · para / a fim de + infinitivo</td><td>+ conjuntivo</td></tr>
<tr><td>Condición</td><td>se, caso, desde que, contanto que, a não ser que</td><td>+ conjuntivo</td></tr>
<tr><td>Tiempo</td><td><b>quando, assim que, logo que</b> (futuro) · antes que · até que · enquanto</td><td>fut. conjuntivo / conjuntivo</td></tr>
<tr><td>Adición</td><td>além disso, para além de, não só… mas também, inclusive</td><td></td></tr>
<tr><td>Opinión</td><td>na minha opinião, a meu ver, do meu ponto de vista, parece-me que</td><td></td></tr>
<tr><td>Conclusión</td><td>em suma, em conclusão, resumindo, enfim, em resumo</td><td></td></tr>
<tr><td>Ejemplificación / aclaración</td><td>por exemplo, nomeadamente, isto é, ou seja, quer dizer</td><td></td></tr>
</table>
<div class="ej"><b>Embora</b> o hotel <b>seja</b> caro, vale a pena. · <b>Apesar de</b> ser caro, vale a pena. · O hotel é caro; <b>no entanto</b>, vale a pena. · <b>Visto que</b> estava a chover, adiámos o passeio.</div>
<div class="ojo"><b>Embora ≠ «embora»:</b> <i>embora</i> = aunque (+ conjuntivo), pero <i>ir embora</i> = irse.</div>`
        },
        {
          id: "b1-pronomes-avancado", titulo: "Pronombres: casos avanzados",
          html: `
<h4>Pronombres con tiempos compuestos y perífrasis</h4>
<p>Con <i>ter + participio</i> el pronombre se une al auxiliar: <i>Tinha-<b>lhe</b> dito.</i> · <i>Não <b>lhe</b> tinha dito.</i> Nunca al participio: ❌ <s>tinha dito-lhe</s>.</p>
<p>Con perífrasis de infinitivo, detrás del infinitivo o del auxiliar: <i>Vou dizer-<b>te</b></i> = <i>Vou-<b>te</b> dizer</i>.</p>
<h4>Mesóclise</h4>
<p>Con futuro y condicional en frases afirmativas, el pronombre se coloca dentro del verbo: <i>dar-<b>te</b>-ei, dir-<b>lhe</b>-ia, far-<b>se</b>-á</i>. Registro formal y escrito. Con atractor, va delante: <i>Não <b>te</b> darei.</i></p>
<h4>Pronombre con conjuntivo</h4>
<p>Como el conjuntivo va en subordinadas con <i>que, se, quando…</i>, el pronombre va delante: <i>Espero que <b>te</b> divirtas. Quando <b>me</b> ligares…</i></p>
<h4>Pronombre «se» impersonal y «nos/vos» con -mos</h4>
<p>Las formas en <i>-mos</i> pierden la <i>-s</i> ante <i>nos</i>: <i>sentamo-nos, vimo-nos</i>; y ante <i>lo</i>: <i>vimo-lo</i> (lo vimos).</p>
<h4>Ele / o en el habla</h4>
<div class="ojo">En Brasil se dice <i>vi ele</i>; en Portugal es incorrecto: ✅ <b>Vi-o</b>.</div>`
        },
        {
          id: "b1-formacao-palavras", titulo: "Formación de palabras",
          html: `
<h4>Sustantivos a partir de verbos</h4>
<table class="compacta">
<tr><th>Sufijo</th><th>Ejemplos</th></tr>
<tr><td>-ção / -são</td><td>organizar → organização · decidir → decisão · reservar → reserva</td></tr>
<tr><td>-mento</td><td>pagar → pagamento · casar → casamento · conhecer → conhecimento</td></tr>
<tr><td>-agem</td><td>lavar → lavagem · aprender → aprendizagem · passar → passagem</td></tr>
<tr><td>-ura</td><td>abrir → abertura · ler → leitura · assinar → assinatura</td></tr>
<tr><td>-or / -dor</td><td>trabalhar → trabalhador · vender → vendedor · jogar → jogador</td></tr>
</table>
<h4>Sustantivos a partir de adjetivos</h4>
<p><i>-dade</i>: feliz → felicidade, real → realidade · <i>-eza</i>: belo → beleza, triste → tristeza · <i>-ura</i>: alto → altura · <i>-ice</i>: velho → velhice, maluco → maluquice.</p>
<h4>Prefijos frecuentes</h4>
<p><i>des-</i> (desfazer, desligar, desconhecido) · <i>in-/im-/i-</i> (incapaz, impossível, ilegal) · <i>re-</i> (refazer, rever) · <i>pré-, pós-</i> (pré-reserva, pós-graduação) · <i>anti-, ex-, super-, auto-</i> (ex-marido, autoestrada).</p>
<h4>Diminutivos y aumentativos</h4>
<p><b>-inho/-zinho</b> (cariño, tamaño): casinha, cafezinho, mãezinha, pãozinho · <b>-ão/-ona</b> (grande o intensidad): casarão, homenzarrão, mulherona · <b>-ito</b> (regional/afectivo): pequenito.</p>
<p class="peq">Algunos diminutivos se han lexicalizado: <i>o lencinho</i> (pañuelo pequeño), <i>a sardinha</i>, <i>o carrinho</i> (carrito de la compra).</p>`
        }
      ]
    },

    /* ───────────────────────── LÉXICO ───────────────────────── */
    {
      id: "lexico", titulo: "Léxico y vocabulario",
      temas: [
        {
          id: "b1-habitacao", titulo: "Vivienda y vida urbana",
          html: `
<table>
<tr><td>arrendar / o arrendamento</td><td>alquilar / el alquiler (contrato)</td></tr>
<tr><td>a renda · a caução · o fiador</td><td>la mensualidad · la fianza · el avalista</td></tr>
<tr><td>o senhorio · o inquilino</td><td>el casero · el inquilino</td></tr>
<tr><td>o condomínio · a administração do prédio</td><td>la comunidad · la administración</td></tr>
<tr><td>as despesas (água, luz, gás)</td><td>los gastos (suministros)</td></tr>
<tr><td>mobilado / sem mobília</td><td>amueblado / sin amueblar</td></tr>
<tr><td>a imobiliária · o crédito à habitação</td><td>la inmobiliaria · la hipoteca</td></tr>
<tr><td>a assoalhada</td><td>habitación (en anuncios: «T2 com 3 assoalhadas»)</td></tr>
<tr><td>o bairro · os arredores · a periferia</td><td>el barrio · las afueras · la periferia</td></tr>
<tr><td>o trânsito · o engarrafamento · a hora de ponta</td><td>el tráfico · el atasco · la hora punta</td></tr>
<tr><td>a obra · as obras · remodelar</td><td>la obra · las obras · reformar</td></tr>
<tr><td>o canalizador · o eletricista · o pedreiro</td><td>el fontanero · el electricista · el albañil</td></tr>
</table>
<h4>Problemas en casa</h4>
<p><i>Há uma fuga de água. O esquentador avariou. A torneira está a pingar. A luz foi abaixo. Há humidade nas paredes. Os vizinhos fazem muito barulho.</i></p>
<div class="ej">Procuro um T1 mobilado perto do metro, com renda até 700 euros. · O senhorio pediu dois meses de caução.</div>`
        },
        {
          id: "b1-trabalho-economia", titulo: "Trabajo, economía y consumo",
          html: `
<table>
<tr><td>o mercado de trabalho · o desemprego</td><td>el mercado laboral · el paro</td></tr>
<tr><td>a candidatura · a carta de motivação</td><td>la solicitud · la carta de presentación</td></tr>
<tr><td>o estágio · o estagiário</td><td>las prácticas · el becario</td></tr>
<tr><td>o contrato a termo / sem termo</td><td>contrato temporal / indefinido</td></tr>
<tr><td>trabalhar a recibos verdes</td><td>trabajar como autónomo</td></tr>
<tr><td>o salário mínimo · o ordenado líquido / bruto</td><td>el salario mínimo · el sueldo neto / bruto</td></tr>
<tr><td>o subsídio de férias / de Natal / de desemprego</td><td>paga extra de verano / de Navidad · prestación por desempleo</td></tr>
<tr><td>os descontos · as Finanças · o IRS</td><td>las retenciones · Hacienda · el IRPF</td></tr>
<tr><td>a greve · o sindicato · o despedimento</td><td>la huelga · el sindicato · el despido</td></tr>
<tr><td>o teletrabalho · o horário flexível</td><td>el teletrabajo · el horario flexible</td></tr>
<tr><td>poupar · gastar · o orçamento · a dívida</td><td>ahorrar · gastar · el presupuesto · la deuda</td></tr>
<tr><td>o custo de vida · a inflação · os preços sobem</td><td>el coste de vida · la inflación · suben los precios</td></tr>
</table>
<h4>En la entrevista</h4>
<div class="ej">Tenho experiência na área de vendas. · Considero-me uma pessoa organizada e com facilidade em trabalhar em equipa. · Quais seriam as condições do contrato? · Quando poderia começar?</div>`
        },
        {
          id: "b1-ambiente", titulo: "Medio ambiente y naturaleza",
          html: `
<table>
<tr><td>o ambiente / o meio ambiente</td><td>el medio ambiente</td></tr>
<tr><td>as alterações climáticas · o aquecimento global</td><td>el cambio climático · el calentamiento global</td></tr>
<tr><td>a poluição · poluir · poluente</td><td>la contaminación · contaminar · contaminante</td></tr>
<tr><td>a reciclagem · reciclar · o ecoponto</td><td>el reciclaje · reciclar · el contenedor de reciclaje</td></tr>
<tr><td>o lixo · os resíduos · o desperdício</td><td>la basura · los residuos · el desperdicio</td></tr>
<tr><td>a seca · os incêndios florestais · as cheias</td><td>la sequía · los incendios forestales · las inundaciones</td></tr>
<tr><td>as energias renováveis · os painéis solares · a energia eólica</td><td>las energías renovables · las placas solares · la energía eólica</td></tr>
<tr><td>poupar água / energia · desperdiçar</td><td>ahorrar agua / energía · malgastar</td></tr>
<tr><td>a espécie em vias de extinção</td><td>la especie en peligro de extinción</td></tr>
<tr><td>a serra · o rio · a ribeira · a albufeira · a falésia</td><td>la sierra · el río · el arroyo · el embalse · el acantilado</td></tr>
</table>
<p class="peq"><b>Ecoponto:</b> en Portugal, <i>amarelo</i> (plástico y metal), <i>azul</i> (papel), <i>verde</i> (vidrio).</p>
<div class="ej">É fundamental que todos <b>reduzamos</b> o consumo de plástico. · Se não <b>pouparmos</b> água, a seca vai piorar.</div>`
        },
        {
          id: "b1-media", titulo: "Medios de comunicación y redes",
          html: `
<table>
<tr><td>a imprensa · o jornal · a revista · o semanário</td><td>la prensa · el periódico · la revista · el semanario</td></tr>
<tr><td>a notícia · a manchete · a reportagem · a entrevista</td><td>la noticia · el titular · el reportaje · la entrevista</td></tr>
<tr><td>o jornalista · o apresentador · o locutor</td><td>el periodista · el presentador · el locutor</td></tr>
<tr><td>o telejornal · o programa · a série · a novela</td><td>el telediario · el programa · la serie · la telenovela</td></tr>
<tr><td>o canal · a estação de rádio · em direto</td><td>el canal · la emisora · en directo</td></tr>
<tr><td>as redes sociais · a publicação · o seguidor</td><td>las redes sociales · la publicación · el seguidor</td></tr>
<tr><td>as notícias falsas · a desinformação</td><td>los bulos · la desinformación</td></tr>
<tr><td>a publicidade · o anúncio</td><td>la publicidad · el anuncio</td></tr>
<tr><td>subscrever · a assinatura</td><td>suscribirse · la suscripción</td></tr>
</table>
<h4>Contar noticias</h4>
<div class="ej">Segundo o jornal, o incêndio <b>terá começado</b> de madrugada. · Li num artigo que os preços das casas <b>subiram</b> 10 %. · Dizem que vai haver greve dos comboios.</div>`
        },
        {
          id: "b1-saude-estilo", titulo: "Salud, cuerpo y estilo de vida",
          html: `
<table>
<tr><td>a alimentação saudável · a dieta equilibrada</td><td>la alimentación sana · la dieta equilibrada</td></tr>
<tr><td>engordar · emagrecer · estar em forma</td><td>engordar · adelgazar · estar en forma</td></tr>
<tr><td>o sedentarismo · o stress · a ansiedade</td><td>el sedentarismo · el estrés · la ansiedad</td></tr>
<tr><td>a insónia · o cansaço · a fadiga</td><td>el insomnio · el cansancio · la fatiga</td></tr>
<tr><td>o seguro de saúde · o SNS · a urgência</td><td>el seguro médico · la sanidad pública · urgencias</td></tr>
<tr><td>a análise (ao sangue) · a radiografia · a vacina</td><td>el análisis (de sangre) · la radiografía · la vacuna</td></tr>
<tr><td>a gripe · a constipação · a infeção · a tensão alta</td><td>la gripe · el resfriado · la infección · la tensión alta</td></tr>
<tr><td>receitar · tratar · curar · recuperar</td><td>recetar · tratar · curar · recuperarse</td></tr>
<tr><td>deixar de fumar · fazer exercício · dormir bem</td><td>dejar de fumar · hacer ejercicio · dormir bien</td></tr>
</table>
<h4>Dar consejos de salud</h4>
<div class="ej">Devias dormir mais. · Se eu fosse a ti, ia ao médico. · É importante que bebas muita água. · Aconselho-te a fazeres exercício.</div>`
        },
        {
          id: "b1-relacoes-sentimentos", titulo: "Relaciones personales y sentimientos",
          html: `
<table>
<tr><td>dar-se bem / mal com alguém</td><td>llevarse bien / mal con alguien</td></tr>
<tr><td>namorar · apaixonar-se por · casar com · divorciar-se</td><td>salir con · enamorarse de · casarse con · divorciarse</td></tr>
<tr><td>zangar-se com · fazer as pazes</td><td>enfadarse con · hacer las paces</td></tr>
<tr><td>confiar em · desconfiar de</td><td>confiar en · desconfiar de</td></tr>
<tr><td>ter saudades de · sentir a falta de</td><td>echar de menos</td></tr>
<tr><td>a amizade · o colega · o conhecido</td><td>la amistad · el compañero · el conocido</td></tr>
<tr><td>alegre · aborrecido · chateado · preocupado</td><td>alegre · aburrido/molesto · enfadado · preocupado</td></tr>
<tr><td>ciumento · orgulhoso · envergonhado · desiludido</td><td>celoso · orgulloso · avergonzado · decepcionado</td></tr>
<tr><td>a desilusão · a tristeza · o desgosto · a alegria</td><td>la decepción · la tristeza · el disgusto · la alegría</td></tr>
</table>
<h4>Expresar sentimientos</h4>
<div class="ej">Fico muito contente que <b>tenhas</b> vindo. · Irrita-me que as pessoas <b>cheguem</b> tarde. · Tenho pena de não te <b>ter</b> visto. · Estou farto de esperar! (Estoy harto)</div>
<div class="ojo"><b>Saudade:</b> palabra emblemática del portugués: la nostalgia de algo o alguien ausente. <i>Tenho saudades tuas.</i> (Te echo de menos.)</div>`
        },
        {
          id: "b1-cultura", titulo: "Cultura y sociedad portuguesas",
          html: `
<table>
<tr><th>Tema</th><th>Vocabulario y datos útiles</th></tr>
<tr><td><b>Fiestas</b></td><td><i>os Santos Populares</i> (junio): Santo António (Lisboa, 13), São João (Porto, 24); <i>as sardinhas assadas, os manjericos, os arraiais</i>. <i>O Carnaval, a Páscoa, o Natal</i> (con <i>bacalhau</i> la noche del 24, <i>a Consoada</i>).</td></tr>
<tr><td><b>Días festivos</b></td><td>25 de Abril (Revolução dos Cravos, 1974) · 10 de Junho (Dia de Portugal, de Camões) · 5 de Outubro (República) · 1 de Dezembro (Restauração da Independência).</td></tr>
<tr><td><b>Música</b></td><td><i>o fado</i> (Património da UNESCO), <i>a guitarra portuguesa, a fadista</i>; Amália Rodrigues, Mariza, Ana Moura.</td></tr>
<tr><td><b>Literatura</b></td><td>Luís de Camões (<i>Os Lusíadas</i>), Fernando Pessoa y sus <i>heterónimos</i>, Eça de Queirós, José Saramago (Nobel 1998), Sophia de Mello Breyner.</td></tr>
<tr><td><b>Arte</b></td><td><i>os azulejos</i>, el estilo <i>manuelino</i> (Jerónimos, Torre de Belém), <i>a calçada portuguesa</i>.</td></tr>
<tr><td><b>Sociedad</b></td><td><i>a emigração</i> (Francia, Suiza, Luxemburgo), <i>a lusofonia</i> y la CPLP (9 países de lengua portuguesa).</td></tr>
</table>
<div class="ej">O 25 de Abril de 1974 pôs fim a quase cinquenta anos de ditadura. · O fado é cantado por um fadista acompanhado de guitarra portuguesa e viola.</div>`
        },
        {
          id: "b1-educacao", titulo: "Educación y formación",
          html: `
<table>
<tr><td>o ensino básico / secundário / superior</td><td>la educación primaria / secundaria / superior</td></tr>
<tr><td>o jardim de infância · a creche</td><td>la escuela infantil · la guardería</td></tr>
<tr><td>a licenciatura · o mestrado · o doutoramento</td><td>el grado · el máster · el doctorado</td></tr>
<tr><td>a matrícula · a inscrição · as propinas</td><td>la matrícula · la inscripción · las tasas</td></tr>
<tr><td>a pauta · a média · o exame nacional</td><td>la lista de notas · la nota media · la selectividad</td></tr>
<tr><td>tirar um curso · tirar a carta (de condução)</td><td>estudiar una carrera · sacarse el carné</td></tr>
<tr><td>passar / chumbar · fazer a cadeira</td><td>aprobar / suspender · aprobar la asignatura</td></tr>
<tr><td>a formação contínua · o curso de reciclagem</td><td>la formación continua · el curso de actualización</td></tr>
<tr><td>a bolsa de estudo · o Erasmus</td><td>la beca · el Erasmus</td></tr>
</table>
<div class="ej">Tirei o curso de Enfermagem em Coimbra. · Estou a pensar em fazer um mestrado no estrangeiro. · Chumbei a uma cadeira e tenho de a repetir.</div>
<div class="ojo"><b>Tirar</b> es un verbo comodín: <i>tirar um curso</i> (estudiar), <i>tirar a carta</i> (sacarse el carné), <i>tirar fotografias</i>, <i>tirar férias</i> (cogerse vacaciones).</div>`
        },
        {
          id: "b1-expressoes", titulo: "Expresiones idiomáticas (B1)",
          html: `
<table>
<tr><th>Expresión</th><th>Significado</th></tr>
<tr><td>Estar com a pulga atrás da orelha</td><td>Tener la mosca detrás de la oreja</td></tr>
<tr><td>Ter a faca e o queijo na mão</td><td>Tener la sartén por el mango</td></tr>
<tr><td>Fazer ouvidos de mercador</td><td>Hacer oídos sordos</td></tr>
<tr><td>Pôr as mãos no fogo por alguém</td><td>Poner la mano en el fuego por alguien</td></tr>
<tr><td>Dar com a língua nos dentes</td><td>Irse de la lengua</td></tr>
<tr><td>Cair na esparrela · cair no conto do vigário</td><td>Caer en la trampa</td></tr>
<tr><td>Não ter papas na língua</td><td>No tener pelos en la lengua</td></tr>
<tr><td>Engolir sapos</td><td>Tragar sapos (aguantar cosas desagradables)</td></tr>
<tr><td>Ficar com a batata quente</td><td>Quedarse con el muerto</td></tr>
<tr><td>Ser a gota de água</td><td>Ser la gota que colma el vaso</td></tr>
<tr><td>Mais vale tarde do que nunca</td><td>Más vale tarde que nunca</td></tr>
<tr><td>Quem não arrisca não petisca</td><td>Quien no arriesga no gana</td></tr>
<tr><td>Ter muita lata</td><td>Tener mucha cara</td></tr>
<tr><td>Fazer uma tempestade num copo de água</td><td>Ahogarse en un vaso de agua</td></tr>
<tr><td>Andar com a cabeça nas nuvens</td><td>Estar en las nubes</td></tr>
<tr><td>Ficar de boca aberta</td><td>Quedarse boquiabierto</td></tr>
<tr><td>Chover no molhado</td><td>Llover sobre mojado (decir algo inútil)</td></tr>
<tr><td>Bater com a cabeça nas paredes</td><td>Darse cabezazos contra la pared</td></tr>
</table>`
        }
      ]
    },

    /* ───────────────────────── FUNCIONES ───────────────────────── */
    {
      id: "funcoes", titulo: "Funciones comunicativas",
      temas: [
        {
          id: "b1-opiniao", titulo: "Opinar, argumentar y debatir",
          html: `
<h4>Dar la opinión</h4>
<p><i>Acho que… · Penso que… · Parece-me que… · Na minha opinião… · A meu ver… · Do meu ponto de vista… · Tenho a certeza de que…</i> (+ indicativo)<br>
<i>Não acho que… · Não me parece que… · Duvido que…</i> (+ conjuntivo)</p>
<h4>Estar de acuerdo / en desacuerdo</h4>
<table>
<tr><th>Acuerdo</th><th>Desacuerdo</th></tr>
<tr><td>Concordo (plenamente) contigo. · Tens toda a razão. · Sem dúvida. · Exatamente!</td><td>Não concordo nada. · Não é bem assim. · Discordo. · Não tens razão. · Pelo contrário…</td></tr>
<tr><td>Concordo em parte, mas… · Até certo ponto, sim.</td><td>Percebo o que queres dizer, mas… · Respeito a tua opinião, no entanto…</td></tr>
</table>
<h4>Argumentar</h4>
<p><i>Em primeiro lugar… · Além disso… · Por um lado… por outro… · É verdade que…, mas… · Por exemplo… · Por isso… · Em suma…</i></p>
<div class="ej">— Acho que devíamos proibir os carros no centro. — Concordo em parte. É verdade que há muita poluição, mas não acho que <b>seja</b> justo para quem mora longe. — Por outro lado, se houvesse mais transportes públicos, as pessoas deixariam o carro em casa.</div>`
        },
        {
          id: "b1-conselhos-hipoteses", titulo: "Aconsejar, sugerir y hacer hipótesis",
          html: `
<h4>Aconsejar</h4>
<p><i>Devias + infinitivo · Se eu fosse a ti… · No teu lugar… · Aconselho-te a + inf. · Acho melhor + inf. pessoal · É melhor que + conjuntivo · Porque é que não…?</i></p>
<div class="ej">Devias falar com o teu chefe. · Se eu fosse a ti, aceitava a proposta. · É melhor ires ao médico. · Porque é que não experimentas ioga?</div>
<h4>Sugerir y proponer</h4>
<p><i>E se + imperf. conjuntivo…? · Que tal + inf. pessoal…? · Proponho que + conjuntivo · Podíamos + infinitivo</i></p>
<div class="ej">E se <b>fôssemos</b> ao Gerês no fim de semana? · Que tal <b>irmos</b> jantar fora? · Proponho que <b>façamos</b> uma pausa.</div>
<h4>Hipótesis y probabilidad</h4>
<table>
<tr><th>Grado</th><th>Expresiones</th></tr>
<tr><td>Seguro</td><td>Com certeza… · Tenho a certeza de que… · De certeza que…</td></tr>
<tr><td>Probable</td><td>Deve + infinitivo (Deve estar em casa) · É provável que + conj. · Se calhar… (+ indicativo)</td></tr>
<tr><td>Posible</td><td>Talvez + conj. · Pode ser que + conj. · É possível que + conj.</td></tr>
<tr><td>Poco probable</td><td>Duvido que + conj. · Não me parece que + conj.</td></tr>
<tr><td>Suposición</td><td>Futuro: Serão umas dez horas. · Terá perdido o autocarro.</td></tr>
</table>`
        },
        {
          id: "b1-cartas-formais", titulo: "Escritos formales: reclamación y candidatura",
          html: `
<h4>Estructura</h4>
<ol>
<li><b>Lugar y fecha</b>: <i>Badajoz, 22 de novembro de 2026</i></li>
<li><b>Saludo</b>: <i>Exmo. Senhor / Exma. Senhora / Exmos. Senhores</i></li>
<li><b>Motivo</b>: <i>Venho por este meio… · Escrevo-lhe a propósito de… · Na sequência de…</i></li>
<li><b>Desarrollo</b>: hechos, fechas, datos.</li>
<li><b>Petición</b>: <i>Solicito que… · Agradecia que… · Gostaria que… (+ imperf. conjuntivo)</i></li>
<li><b>Despedida</b>: <i>Sem outro assunto de momento, · Com os melhores cumprimentos, · Atenciosamente,</i></li>
</ol>
<h4>Modelo de reclamación</h4>
<div class="ej">Exmos. Senhores,<br>Venho por este meio apresentar uma reclamação relativa à estadia no vosso hotel entre os dias 3 e 6 de agosto. Apesar de ter reservado um quarto com vista para o mar, foi-me atribuído um quarto interior e bastante barulhento. Além disso, o ar condicionado não funcionava e, embora o tenha comunicado várias vezes à receção, o problema nunca foi resolvido.<br>Assim, solicito que me seja devolvida a diferença de preço.<br>Aguardando uma resposta breve, apresento os meus melhores cumprimentos.</div>
<h4>Modelo de candidatura</h4>
<div class="ej">Exma. Senhora Diretora,<br>Na sequência do anúncio publicado no vosso site, venho candidatar-me ao lugar de assistente administrativa. Sou licenciada em Gestão e tenho três anos de experiência em atendimento ao público. Considero-me uma pessoa organizada, responsável e com facilidade em trabalhar em equipa.<br>Junto envio o meu currículo e fico ao dispor para uma eventual entrevista.<br>Com os melhores cumprimentos,</div>`
        },
        {
          id: "b1-narrar-relatar", titulo: "Narrar, relatar y contar anécdotas",
          html: `
<h4>Tiempos del relato</h4>
<p><b>Imperfeito</b> (contexto, descripción) · <b>perfeito simples</b> (acciones) · <b>mais-que-perfeito</b> (lo ocurrido antes) · <b>estilo indirecto</b> (lo que dijeron).</p>
<div class="ej">Era sexta-feira e eu <b>estava</b> exausta. Quando <b>cheguei</b> a casa, percebi que <b>tinha deixado</b> as chaves no escritório. <b>Liguei</b> ao meu colega e ele <b>disse</b> que <b>ia</b> lá buscá-las. Enquanto <b>esperava</b>, a vizinha <b>convidou</b>-me para tomar um chá. Afinal, <b>foi</b> uma noite muito agradável!</div>
<h4>Marcadores</h4>
<p><i>Certo dia… · Naquela altura… · De repente… · Mal + verbo (en cuanto): Mal cheguei, começou a chover. · Entretanto… · Acontece que… · Para meu espanto… · No fim de contas… · Moral da história…</i></p>
<h4>Reaccionar al relato</h4>
<p><i>A sério?! · Estás a brincar! · Não me digas! · Que sorte / azar! · Coitado! · Imagino! · E depois, o que aconteceu?</i></p>`
        },
        {
          id: "b1-telefone-servicos", titulo: "Gestiones por teléfono y servicios",
          html: `
<h4>Llamar a un servicio</h4>
<div class="ej">— Bom dia, fala a Marta Gómez. Estou a ligar por causa de uma avaria na internet.<br>— Pode indicar-me o seu número de cliente?<br>— Claro. É o 456 789. O serviço está em baixo desde ontem à noite.<br>— Vou abrir um pedido de assistência. Um técnico entrará em contacto consigo nas próximas 48 horas.<br>— Muito obrigada. Pode dar-me o número do pedido, por favor?</div>
<h4>Expresiones útiles</h4>
<p><i>Queria falar com… · Pode passar-me ao departamento de…? · Está a ser atendido? · Aguarde um momento, por favor. · A chamada caiu. · Não se ouve bem. · Pode soletrar? · Fico à espera. · Volto a ligar mais tarde.</i></p>
<h4>Servicios</h4>
<p><i>a operadora · a fatura · o débito direto · cancelar o contrato · o período de fidelização · a loja do cidadão · as Finanças · a Segurança Social · marcar atendimento · tirar a senha</i> (coger número).</p>`
        }
      ]
    }
  ]
};
