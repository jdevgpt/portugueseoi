(function () {
  "use strict";

  const NIVELES = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const DATOS = window.APUNTES || {};
  const CLAVE = "apuntesPT.v1";

  const $ = (s) => document.querySelector(s);
  const norm = (t) => (t || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  /* ── Estado persistente ── */
  let estado = { nivel: "A1", sel: [], portada: true, indice: true, salto: false };
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE) || "null");
    if (g) estado = Object.assign(estado, g);
  } catch (e) { /* sin almacenamiento */ }
  if (!DATOS[estado.nivel]) estado.nivel = NIVELES.find((n) => DATOS[n]) || "A1";
  const sel = new Set(estado.sel);

  function guardar() {
    estado.sel = [...sel];
    try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (e) { /* ignorar */ }
  }

  /* Índice rápido de temas */
  const TEMAS = {};
  NIVELES.forEach((n) => {
    if (!DATOS[n]) return;
    DATOS[n].bloques.forEach((b) => b.temas.forEach((t) => {
      TEMAS[t.id] = { nivel: n, bloque: b, tema: t, texto: norm(t.titulo + " " + t.html.replace(/<[^>]+>/g, " ")) };
    }));
  });
  // limpiar ids que ya no existan
  [...sel].forEach((id) => { if (!TEMAS[id]) sel.delete(id); });

  const cuentaNivel = (n) => [...sel].filter((id) => TEMAS[id].nivel === n).length;

  /* ── Pintar niveles ── */
  function pintarNiveles() {
    const nav = $("#niveles");
    nav.innerHTML = "";
    NIVELES.forEach((n) => {
      const b = document.createElement("button");
      b.className = "nivel" + (n === estado.nivel ? " activo" : "");
      b.disabled = !DATOS[n];
      b.title = DATOS[n] ? DATOS[n].nombre : "Próximamente";
      const c = cuentaNivel(n);
      b.innerHTML = n + (c ? `<span class="cuenta">${c}</span>` : "");
      b.addEventListener("click", () => { estado.nivel = n; $("#buscar").value = ""; guardar(); pintarTodo(); });
      nav.appendChild(b);
    });
    const d = DATOS[estado.nivel];
    $("#descNivel").innerHTML = d ? `<b>${d.nivel} · ${d.nombre}.</b> ${d.descripcion}` : "";
  }

  /* ── Pintar bloques y temas ── */
  function pintarBloques() {
    const cont = $("#bloques");
    cont.innerHTML = "";
    const d = DATOS[estado.nivel];
    if (!d) return;
    const q = norm($("#buscar").value.trim());
    let hay = false;

    d.bloques.forEach((b) => {
      const temas = b.temas.filter((t) => !q || TEMAS[t.id].texto.includes(q));
      if (!temas.length) return;
      hay = true;
      const sec = document.createElement("section");
      sec.className = "bloque";

      const cab = document.createElement("div");
      cab.className = "bloque-cab";
      const chkB = document.createElement("input");
      chkB.type = "checkbox";
      chkB.setAttribute("aria-label", "Seleccionar todo el bloque " + b.titulo);
      const nSel = temas.filter((t) => sel.has(t.id)).length;
      chkB.checked = nSel === temas.length;
      chkB.indeterminate = nSel > 0 && nSel < temas.length;
      chkB.addEventListener("change", () => {
        temas.forEach((t) => chkB.checked ? sel.add(t.id) : sel.delete(t.id));
        guardar(); pintarTodo();
      });
      cab.appendChild(chkB);
      cab.insertAdjacentHTML("beforeend", `<h2>${b.titulo}</h2><span class="n">${nSel}/${temas.length}</span>`);
      sec.appendChild(cab);

      temas.forEach((t) => {
        const fila = document.createElement("div");
        fila.className = "tema";
        const id = "chk-" + t.id;
        fila.innerHTML = `<input type="checkbox" id="${id}" ${sel.has(t.id) ? "checked" : ""}><label for="${id}">${t.titulo}</label><button class="ver" type="button">Ver</button>`;
        fila.querySelector("input").addEventListener("change", (e) => {
          e.target.checked ? sel.add(t.id) : sel.delete(t.id);
          guardar(); pintarTodo();
        });
        fila.querySelector(".ver").addEventListener("click", () => abrirLector(t));
        sec.appendChild(fila);
      });
      cont.appendChild(sec);
    });

    if (!hay) cont.innerHTML = `<div class="bloque vacio">No hay temas que coincidan con la búsqueda.</div>`;
  }

  function pintarTotal() {
    $("#totalSel").textContent = sel.size;
    $("#btnPdf").disabled = sel.size === 0;
    $("#btnPdf").style.opacity = sel.size ? 1 : 0.5;
  }

  function pintarTodo() { pintarNiveles(); pintarBloques(); pintarTotal(); }

  /* ── Lector ── */
  function envolverTablas(el) {
    el.querySelectorAll("table").forEach((tb) => {
      if (tb.parentElement.classList.contains("tabla-scroll")) return;
      const w = document.createElement("div");
      w.className = "tabla-scroll";
      tb.parentNode.insertBefore(w, tb);
      w.appendChild(tb);
    });
  }
  function abrirLector(t) {
    $("#lectorTitulo").textContent = t.titulo;
    const c = $("#lectorCuerpo");
    c.innerHTML = t.html;
    envolverTablas(c);
    c.scrollTop = 0;
    abrir("#modalLector");
  }
  function abrir(s) { $(s).classList.add("abierto"); }
  function cerrar(m) { m.classList.remove("abierto"); }
  document.querySelectorAll(".modal").forEach((m) => {
    m.addEventListener("click", (e) => { if (e.target === m || e.target.hasAttribute("data-cerrar")) cerrar(m); });
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.querySelectorAll(".modal.abierto").forEach(cerrar); });

  /* ── Herramientas ── */
  $("#buscar").addEventListener("input", pintarBloques);
  $("#btnTodo").addEventListener("click", () => {
    const q = norm($("#buscar").value.trim());
    DATOS[estado.nivel].bloques.forEach((b) => b.temas.forEach((t) => { if (!q || TEMAS[t.id].texto.includes(q)) sel.add(t.id); }));
    guardar(); pintarTodo();
  });
  $("#btnNada").addEventListener("click", () => {
    [...sel].forEach((id) => { if (TEMAS[id].nivel === estado.nivel) sel.delete(id); });
    guardar(); pintarTodo();
  });
  $("#btnLimpiar").addEventListener("click", () => {
    if (!sel.size) return;
    sel.clear(); guardar(); pintarTodo();
  });

  /* ── PDF ── */
  const nivelesSel = () => NIVELES.filter((n) => cuentaNivel(n) > 0);

  $("#btnPdf").addEventListener("click", () => {
    if (!sel.size) return;
    $("#optPortada").checked = estado.portada;
    $("#optIndice").checked = estado.indice;
    $("#optSalto").checked = estado.salto;
    $("#resumenPdf").innerHTML = `Vas a generar <b>${sel.size}</b> tema${sel.size > 1 ? "s" : ""} de ${nivelesSel().join(", ")}.`;
    abrir("#modalPdf");
  });

  function construirImpresion() {
    const imp = $("#impresion");
    const nivs = nivelesSel();
    const fecha = new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
    let html = "";

    if (estado.portada) {
      html += `<section class="portada">
        <img src="icons/icon-512.png" alt="" style="width:38mm;height:38mm;border-radius:6mm">
        <div class="bandas"></div>
        <h1>Apuntes de Portugués</h1>
        <h2>Nivel ${nivs.join(" · ")} · Escuela Oficial de Idiomas</h2>
        <p>${sel.size} temas · Portugués europeo<br>${fecha}</p>
      </section>`;
    }

    const orden = [];
    nivs.forEach((n) => DATOS[n].bloques.forEach((b) => {
      const ts = b.temas.filter((t) => sel.has(t.id));
      if (ts.length) orden.push({ n, b, ts });
    }));

    if (estado.indice) {
      html += `<section class="indice"><h2>Índice</h2>`;
      let num = 0;
      orden.forEach(({ n, b, ts }) => {
        html += `<h3>${n} · ${b.titulo}</h3><ol start="${num + 1}">` + ts.map((t) => `<li>${t.titulo}</li>`).join("") + `</ol>`;
        num += ts.length;
      });
      html += `</section>`;
    }

    let primero = true, num = 0;
    orden.forEach(({ n, b, ts }) => ts.forEach((t) => {
      num++;
      const salto = estado.salto && !primero;
      html += `<article class="tema-imp${salto ? " salto" : ""}">
        <div class="cab-imp"><h2>${estado.indice ? num + ". " : ""}${t.titulo}</h2><span>${n} · ${b.titulo}</span></div>
        <div class="apunte">${t.html}</div>
      </article>`;
      primero = false;
    }));
    imp.innerHTML = html;
    return nivs;
  }

  $("#btnGenerar").addEventListener("click", () => {
    estado.portada = $("#optPortada").checked;
    estado.indice = $("#optIndice").checked;
    estado.salto = $("#optSalto").checked;
    guardar();
    const nivs = construirImpresion();
    cerrar($("#modalPdf"));
    const tituloAnt = document.title;
    document.title = "Apuntes Portugues " + nivs.join("-");
    const restaurar = () => { document.title = tituloAnt; window.removeEventListener("afterprint", restaurar); };
    window.addEventListener("afterprint", restaurar);
    // pequeña espera para que carguen imágenes de la portada
    setTimeout(() => window.print(), 250);
  });

  pintarTodo();

  /* ── PWA: offline + aviso de nueva versión ── */
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    let recargando = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (recargando) return;
      recargando = true;
      location.reload();
    });
    navigator.serviceWorker.register("sw.js").then((reg) => {
      const avisar = (w) => {
        $("#aviso").classList.add("visible");
        $("#btnActualizar").onclick = () => w.postMessage("actualizar");
      };
      if (reg.waiting && navigator.serviceWorker.controller) avisar(reg.waiting);
      reg.addEventListener("updatefound", () => {
        const nw = reg.installing;
        nw.addEventListener("statechange", () => {
          if (nw.state === "installed" && navigator.serviceWorker.controller) avisar(nw);
        });
      });
      // comprobar actualizaciones al volver a la app y cada hora
      document.addEventListener("visibilitychange", () => { if (!document.hidden) reg.update(); });
      setInterval(() => reg.update(), 60 * 60 * 1000);
    }).catch(() => { /* sin SW */ });
  }
})();
