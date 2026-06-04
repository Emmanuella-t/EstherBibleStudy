// Chapter illustrations — your hand-drawn sketches
const scenes = {
  1: `<div class="scene-sketch"><img src="images/ch1.png" alt="Esther 1 — King commands Vashti; she refuses" width="700" height="auto"></div>`,
  2: `<div class="scene-sketch"><img src="images/ch2.png" alt="Esther 2 — Esther's coronation and Mordecai spying on the plot" width="700" height="auto"></div>`,
  3: `<div class="scene-sketch"><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" aria-label="Mordecai refuses to bow">
    <rect width="700" height="280" fill="#F5EDE4"/>
    <text x="350" y="28" font-family="Georgia,serif" font-size="14" fill="#5c4030" text-anchor="middle" font-style="italic">Esther 3 — Haman's plot</text>
    <g transform="translate(120,90)"><path d="M0 80 Q-15 40 0 25 Q15 40 0 80" fill="none" stroke="#3D2B1F" stroke-width="2"/><circle cx="0" cy="20" r="12" fill="none" stroke="#3D2B1F" stroke-width="2"/></g>
    <g transform="translate(200,100)"><path d="M0 70 Q-12 35 0 22 Q12 35 0 70" fill="none" stroke="#3D2B1F" stroke-width="2"/><circle cx="0" cy="15" r="10" fill="none" stroke="#3D2B1F" stroke-width="2"/></g>
    <g transform="translate(280,95)">
      <circle cx="0" cy="22" r="16" fill="none" stroke="#3D2B1F" stroke-width="2.5"/>
      <path d="M-14 38 L14 38 M-10 55 L10 55" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-8 38 L-8 95 M8 38 L8 95" stroke="#3D2B1F" stroke-width="2"/>
      <text x="0" y="115" font-size="10" fill="#5c4030" text-anchor="middle">Mordecai</text>
      <text x="0" y="128" font-size="9" fill="#8B4513" text-anchor="middle">will not bow</text>
    </g>
    <g transform="translate(520,70)">
      <circle cx="0" cy="30" r="20" fill="none" stroke="#3D2B1F" stroke-width="2.5"/>
      <path d="M-18 50 L18 50 L12 130 L-12 130 Z" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-25 45 L-40 25 M25 45 L42 20" stroke="#3D2B1F" stroke-width="2"/>
      <text x="0" y="155" font-size="11" fill="#5c4030" text-anchor="middle">Haman</text>
      <rect x="-50" y="165" width="100" height="40" rx="4" fill="none" stroke="#3D2B1F" stroke-width="1.5"/>
      <text x="0" y="185" font-size="9" fill="#5c4030" text-anchor="middle">destroy all</text>
      <text x="0" y="198" font-size="9" fill="#5c4030" text-anchor="middle">the Jews</text>
    </g>
  </svg></div>`,
  4: `<div class="scene-sketch"><img src="images/ch4.png" alt="Esther 4 — Esther touches the king's golden sceptre" width="700" height="auto"></div>`,
  5: `<div class="scene-sketch"><img src="images/ch5.png" alt="Esther 5 — Sleepless king and reward for Mordecai" width="700" height="auto"></div>`,
  6: `<div class="scene-sketch"><img src="images/ch6.png" alt="Esther 6 — King's sleepless night; Haman leads Mordecai in honor" width="700" height="auto"></div>`,
  7: `<div class="scene-sketch"><img src="images/ch7.png" alt="Esther 7 — It is Haman" width="700" height="auto"></div>`,
  8: `<div class="scene-sketch"><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" aria-label="New decree of hope">
    <rect width="700" height="280" fill="#F5EDE4"/>
    <text x="350" y="28" font-family="Georgia,serif" font-size="14" fill="#5c4030" text-anchor="middle" font-style="italic">Esther 8 — A new decree</text>
    <rect x="180" y="70" width="90" height="120" fill="none" stroke="#3D2B1F" stroke-width="2"/>
    <text x="225" y="130" font-size="9" fill="#5c4030" text-anchor="middle">old decree</text>
    <text x="225" y="145" font-size="8" fill="#5c4030" text-anchor="middle">(death)</text>
    <rect x="400" y="65" width="100" height="130" fill="none" stroke="#3D2B1F" stroke-width="2.5"/>
    <text x="450" y="125" font-size="10" fill="#3D2B1F" text-anchor="middle" font-weight="bold">NEW</text>
    <text x="450" y="140" font-size="9" fill="#5c4030" text-anchor="middle">decree</text>
    <text x="450" y="155" font-size="8" fill="#5c4030" text-anchor="middle">(life)</text>
    <path d="M290 130 L380 130" stroke="#3D2B1F" stroke-width="2" marker-end="url(#arr)"/>
    <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#3D2B1F"/></marker></defs>
    <text x="350" y="230" font-family="sans-serif" font-size="11" fill="#5c4030" text-anchor="middle">Light, gladness, joy, and honour</text>
  </svg></div>`,
  9: `<div class="scene-sketch"><img src="images/ch9.png" alt="Esther 9 — Purim celebration" width="700" height="auto"></div>`,
  10: `<div class="scene-sketch"><img src="images/ch10.png" alt="Esther 10 — Second to the king, seeking their welfare" width="700" height="auto"></div>`
};
