/**
 * dom-tree.js - Modelado y visualización del árbol DOM jerárquico
 */

// Estructura jerárquica exacta de todas las páginas del sitio
const siteDomTrees = {
  index: {
    tag: "html",
    children: [
      {
        tag: "head",
        children: [
          { tag: "meta (charset)" },
          { tag: "meta (viewport)" },
          { tag: "title" },
          { tag: "link (styles.css)" }
        ]
      },
      {
        tag: "body",
        children: [
          {
            tag: "header",
            children: [
              { tag: "h1" },
              {
                tag: "nav",
                children: [
                  { tag: "a (Inicio)" },
                  { tag: "a (Rana)" },
                  { tag: "a (Dientes de Conejo)" },
                  { tag: "a (Cena)" },
                  { tag: "a (Día Nevado)" },
                  { tag: "a (Muñeco de Nieve)" },
                  { tag: "a (Árbol DOM)" }
                ]
              }
            ]
          },
          {
            tag: "main",
            children: [
              { tag: "section.meta-info", children: [{ tag: "div.meta-grid" }] },
              { tag: "section.card", children: [{ tag: "h2" }, { tag: "p" }] },
              { 
                tag: "section.card", 
                children: [
                  { tag: "h2" }, 
                  { tag: "p" }, 
                  { tag: "pre" }, 
                  { tag: "div.demo-box", children: [{ tag: "h3" }, { tag: "canvas#demoCanvasNativo" }] }
                ] 
              },
              { tag: "section.card", children: [{ tag: "h2" }, { tag: "p" }, { tag: "ul" }] }
            ]
          },
          { tag: "footer", children: [{ tag: "p" }] },
          { tag: "script (main.js)" },
          { tag: "script (demo-canvas)" }
        ]
      }
    ]
  },

  rana: {
    tag: "html",
    children: [
      {
        tag: "head",
        children: [
          { tag: "meta (charset)" },
          { tag: "meta (viewport)" },
          { tag: "title" },
          { tag: "link (styles.css)" },
          { tag: "script (p5.js)" }
        ]
      },
      {
        tag: "body",
        children: [
          {
            tag: "header",
            children: [{ tag: "h1" }, { tag: "nav" }]
          },
          {
            tag: "main",
            children: [
              {
                tag: "section.card",
                children: [
                  { tag: "h2" },
                  { tag: "div#sketch-container", children: [{ tag: "canvas (p5: 400x400)" }] },
                  { tag: "div.controls-bar", children: [{ tag: "button (Redibujar)" }, { tag: "button (Descargar PNG)" }] }
                ]
              },
              {
                tag: "section.card",
                children: [{ tag: "h2" }, { tag: "pre", children: [{ tag: "code" }] }]
              }
            ]
          },
          { tag: "footer", children: [{ tag: "p" }] },
          { tag: "script (sketch-rana)" }
        ]
      }
    ]
  },

  dientes: {
    tag: "html",
    children: [
      {
        tag: "head",
        children: [
          { tag: "meta" },
          { tag: "meta" },
          { tag: "title" },
          { tag: "link (styles.css)" },
          { tag: "script (p5.js)" }
        ]
      },
      {
        tag: "body",
        children: [
          { tag: "header", children: [{ tag: "h1" }, { tag: "nav" }] },
          {
            tag: "main",
            children: [
              {
                tag: "section.card",
                children: [
                  { tag: "h2" },
                  { tag: "div#sketch-container", children: [{ tag: "canvas (p5: 400x400)" }] },
                  { tag: "div.controls-bar", children: [{ tag: "button (Redibujar)" }, { tag: "button (Descargar PNG)" }] }
                ]
              },
              {
                tag: "section.card",
                children: [{ tag: "h2" }, { tag: "pre", children: [{ tag: "code" }] }]
              }
            ]
          },
          { tag: "footer", children: [{ tag: "p" }] },
          { tag: "script (sketch-dientes)" }
        ]
      }
    ]
  },

  cena: {
    tag: "html",
    children: [
      {
        tag: "head",
        children: [
          { tag: "meta" },
          { tag: "meta" },
          { tag: "title" },
          { tag: "link (styles.css)" },
          { tag: "script (p5.js)" }
        ]
      },
      {
        tag: "body",
        children: [
          { tag: "header", children: [{ tag: "h1" }, { tag: "nav" }] },
          {
            tag: "main",
            children: [
              {
                tag: "section.card",
                children: [
                  { tag: "h2" },
                  { tag: "div#sketch-container", children: [{ tag: "canvas (p5: 400x400)" }] },
                  { tag: "div.controls-bar", children: [{ tag: "button (Redibujar)" }, { tag: "button (Descargar PNG)" }] }
                ]
              },
              {
                tag: "section.card",
                children: [{ tag: "h2" }, { tag: "pre", children: [{ tag: "code" }] }]
              }
            ]
          },
          { tag: "footer", children: [{ tag: "p" }] },
          { tag: "script (sketch-cena)" }
        ]
      }
    ]
  },

  diaNevado: {
    tag: "html",
    children: [
      {
        tag: "head",
        children: [
          { tag: "meta" },
          { tag: "meta" },
          { tag: "title" },
          { tag: "link (styles.css)" },
          { tag: "script (p5.js)" }
        ]
      },
      {
        tag: "body",
        children: [
          { tag: "header", children: [{ tag: "h1" }, { tag: "nav" }] },
          {
            tag: "main",
            children: [
              {
                tag: "section.card",
                children: [
                  { tag: "h2" },
                  { tag: "div#sketch-container", children: [{ tag: "canvas (p5: 400x400)" }] },
                  { tag: "div.controls-bar", children: [{ tag: "button (Redibujar)" }, { tag: "button (Descargar PNG)" }] }
                ]
              },
              {
                tag: "section.card",
                children: [{ tag: "h2" }, { tag: "pre", children: [{ tag: "code" }] }]
              }
            ]
          },
          { tag: "footer", children: [{ tag: "p" }] },
          { tag: "script (sketch-dia-nevado)" }
        ]
      }
    ]
  },

  munecoNieve: {
    tag: "html",
    children: [
      {
        tag: "head",
        children: [
          { tag: "meta" },
          { tag: "meta" },
          { tag: "title" },
          { tag: "link (styles.css)" },
          { tag: "script (p5.js)" }
        ]
      },
      {
        tag: "body",
        children: [
          { tag: "header", children: [{ tag: "h1" }, { tag: "nav" }] },
          {
            tag: "main",
            children: [
              {
                tag: "section.card",
                children: [
                  { tag: "h2" },
                  { tag: "div#sketch-container", children: [{ tag: "canvas (p5: 400x400)" }] },
                  { tag: "div.controls-bar", children: [{ tag: "button (Redibujar)" }, { tag: "button (Descargar PNG)" }] }
                ]
              },
              {
                tag: "section.card",
                children: [{ tag: "h2" }, { tag: "pre", children: [{ tag: "code" }] }]
              }
            ]
          },
          { tag: "footer", children: [{ tag: "p" }] },
          { tag: "script (sketch-muneco)" }
        ]
      }
    ]
  },

  inspector: {
    tag: "html",
    children: [
      {
        tag: "head",
        children: [
          { tag: "meta (charset)" },
          { tag: "meta (viewport)" },
          { tag: "title" },
          { tag: "link (styles.css)" }
        ]
      },
      {
        tag: "body",
        children: [
          {
            tag: "header",
            children: [{ tag: "h1" }, { tag: "nav" }]
          },
          {
            tag: "main",
            children: [
              {
                tag: "section.card",
                children: [{ tag: "h2" }, { tag: "p" }, { tag: "label" }, { tag: "select#pageSelector" }]
              },
              {
                tag: "section.card",
                children: [{ tag: "div.tree-wrapper", children: [{ tag: "div#treeContainer" }] }]
              }
            ]
          },
          { tag: "footer", children: [{ tag: "p" }] },
          { tag: "script (main.js)" },
          { tag: "script (dom-tree.js)" }
        ]
      }
    ]
  }
};

/**
 * Función recursiva para construir elementos del organigrama
 */
function buildTreeElement(node) {
  const li = document.createElement('li');
  li.innerHTML = `<span class="node-card">&lt;<span class="node-tag">${node.tag}</span>&gt;</span>`;

  if (node.children && node.children.length > 0) {
    const ul = document.createElement('ul');
    node.children.forEach(child => {
      ul.appendChild(buildTreeElement(child));
    });
    li.appendChild(ul);
  }

  return li;
}

/**
 * Renderiza el árbol según el selector
 */
function renderDOMTree() {
  const selector = document.getElementById('pageSelector');
  const container = document.getElementById('treeContainer');

  if (!selector || !container) return;

  const selectedKey = selector.value;
  const treeData = siteDomTrees[selectedKey];

  container.innerHTML = '';

  if (treeData) {
    const rootUl = document.createElement('ul');
    rootUl.appendChild(buildTreeElement(treeData));
    container.appendChild(rootUl);
  } else {
    container.innerHTML = '<p>No se encontraron datos de la jerarquía para esta página.</p>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('pageSelector');
  if (selector) {
    selector.addEventListener('change', renderDOMTree);
    renderDOMTree();
  }
});