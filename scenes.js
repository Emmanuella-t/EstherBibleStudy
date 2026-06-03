// Chapter illustrations — hand-drawn sketch style (Ch.1 uses your artwork)
const scenes = {
  1: `<div class="scene-sketch"><img src="images/ch1.png" alt="Esther 1 — King commands Vashti; she refuses" width="700" height="auto"></div>`,

  2: `<div class="scene-sketch"><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" aria-label="Esther crowned queen">
    <rect width="700" height="280" fill="#F5EDE4"/>
    <text x="350" y="28" font-family="Georgia,serif" font-size="14" fill="#5c4030" text-anchor="middle" font-style="italic">Esther 2 — A new queen</text>
    <rect x="280" y="200" width="140" height="12" fill="none" stroke="#3D2B1F" stroke-width="2"/>
    <path d="M310 200 L320 120 L340 145 L350 95 L360 145 L380 120 L390 200 Z" fill="none" stroke="#3D2B1F" stroke-width="2.5"/>
    <circle cx="350" cy="175" r="18" fill="none" stroke="#3D2B1F" stroke-width="2"/>
    <path d="M335 168 Q350 155 365 168" fill="none" stroke="#3D2B1F" stroke-width="1.5"/>
    <text x="350" y="250" font-family="sans-serif" font-size="11" fill="#5c4030" text-anchor="middle">Crowned</text>
    <g transform="translate(520,80)">
      <circle cx="0" cy="50" r="14" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-12 65 Q0 45 12 65 L8 120 Q0 115 -8 120 Z" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-20 75 Q-35 60 -25 50" fill="none" stroke="#3D2B1F" stroke-width="1.5"/>
      <text x="0" y="145" font-size="10" fill="#5c4030" text-anchor="middle">Mordecai hears</text>
      <ellipse cx="25" cy="35" rx="28" ry="12" fill="none" stroke="#3D2B1F" stroke-width="1.5"/>
      <text x="25" y="39" font-size="8" fill="#5c4030" text-anchor="middle">a plot...</text>
    </g>
  </svg></div>`,

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

  4: `<div class="scene-sketch"><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" aria-label="For such a time as this">
    <rect width="700" height="280" fill="#F5EDE4"/>
    <text x="350" y="28" font-family="Georgia,serif" font-size="14" fill="#5c4030" text-anchor="middle" font-style="italic">Esther 4 — For such a time as this</text>
    <g transform="translate(130,100)">
      <circle cx="0" cy="30" r="16" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M0 46 L0 120 M-20 70 L-35 55 M20 70 L35 55" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-8 25 Q0 35 8 25" fill="none" stroke="#3D2B1F" stroke-width="1.5"/>
      <text x="0" y="140" font-size="10" fill="#5c4030" text-anchor="middle">Mordecai</text>
    </g>
    <rect x="220" y="85" width="260" height="70" rx="8" fill="#fff" stroke="#3D2B1F" stroke-width="2"/>
    <text x="350" y="115" font-family="Georgia,serif" font-size="16" fill="#3D2B1F" text-anchor="middle" font-weight="bold">"For such a time</text>
    <text x="350" y="138" font-family="Georgia,serif" font-size="16" fill="#3D2B1F" text-anchor="middle" font-weight="bold">as this?"</text>
    <g transform="translate(560,95)">
      <circle cx="0" cy="28" r="16" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-12 44 L12 44 L8 115 L-8 115 Z" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-5 20 L0 8 L5 20" fill="none" stroke="#3D2B1F" stroke-width="1.5"/>
      <text x="0" y="135" font-size="10" fill="#5c4030" text-anchor="middle">Esther</text>
    </g>
    <text x="350" y="230" font-family="sans-serif" font-size="11" fill="#5c4030" text-anchor="middle">If I perish, I perish.</text>
  </svg></div>`,

  5: `<div class="scene-sketch"><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" aria-label="Esther approaches the king">
    <rect width="700" height="280" fill="#F5EDE4"/>
    <text x="350" y="28" font-family="Georgia,serif" font-size="14" fill="#5c4030" text-anchor="middle" font-style="italic">Esther 5 — Bold approach</text>
    <rect x="420" y="130" width="80" height="100" fill="none" stroke="#3D2B1F" stroke-width="2"/>
    <path d="M460 130 L470 80 L490 130 Z" fill="none" stroke="#3D2B1F" stroke-width="2"/>
    <g transform="translate(280,110)">
      <circle cx="0" cy="25" r="14" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-10 39 L10 39 L6 110 L-6 110 Z" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <line x1="0" y1="39" x2="80" y2="60" stroke="#3D2B1F" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="0" y="130" font-size="10" fill="#5c4030" text-anchor="middle">Esther</text>
    </g>
    <line x1="580" y1="200" x2="580" y2="80" stroke="#3D2B1F" stroke-width="3"/>
    <line x1="565" y1="85" x2="595" y2="85" stroke="#3D2B1F" stroke-width="3"/>
    <text x="580" y="220" font-size="9" fill="#5c4030" text-anchor="middle">gallows</text>
    <text x="580" y="232" font-size="8" fill="#5c4030" text-anchor="middle">(Haman builds)</text>
  </svg></div>`,

  6: `<div class="scene-sketch"><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" aria-label="Sleepless night reversal">
    <rect width="700" height="280" fill="#F5EDE4"/>
    <text x="350" y="28" font-family="Georgia,serif" font-size="14" fill="#5c4030" text-anchor="middle" font-style="italic">Esther 6 — A sleepless night</text>
    <rect x="80" y="100" width="120" height="80" rx="4" fill="none" stroke="#3D2B1F" stroke-width="2"/>
    <text x="140" y="145" font-size="11" fill="#5c4030" text-anchor="middle">records</text>
    <g transform="translate(140,70)"><circle cx="0" cy="0" r="18" fill="none" stroke="#3D2B1F" stroke-width="2"/><text x="0" y="5" font-size="14" text-anchor="middle">Zzz</text></g>
    <text x="140" y="200" font-size="10" fill="#5c4030" text-anchor="middle">King cannot sleep</text>
    <g transform="translate(480,90)">
      <circle cx="0" cy="25" r="14" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-10 39 L10 39 L6 100 L-6 100 Z" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M15 50 L50 45 L55 75 L20 80 Z" fill="none" stroke="#3D2B1F" stroke-width="1.5"/>
      <text x="25" y="115" font-size="9" fill="#5c4030" text-anchor="middle">Haman leads</text>
      <text x="25" y="127" font-size="9" fill="#5c4030" text-anchor="middle">Mordecai</text>
    </g>
    <text x="350" y="250" font-family="sans-serif" font-size="11" fill="#5c4030" text-anchor="middle">The unrewarded deed remembered</text>
  </svg></div>`,

  7: `<div class="scene-sketch"><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" aria-label="Haman exposed">
    <rect width="700" height="280" fill="#F5EDE4"/>
    <text x="350" y="28" font-family="Georgia,serif" font-size="14" fill="#5c4030" text-anchor="middle" font-style="italic">Esther 7 — Haman exposed</text>
    <g transform="translate(200,100)">
      <circle cx="0" cy="25" r="14" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-10 39 L10 39 L6 105 L-6 105 Z" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <line x1="10" y1="50" x2="80" y2="35" stroke="#3D2B1F" stroke-width="2"/>
      <text x="0" y="125" font-size="10" fill="#5c4030" text-anchor="middle">Esther</text>
    </g>
    <rect x="300" y="90" width="120" height="50" rx="6" fill="#fff" stroke="#3D2B1F" stroke-width="2"/>
    <text x="360" y="122" font-size="12" fill="#3D2B1F" text-anchor="middle" font-weight="bold">"This wicked Haman!"</text>
    <g transform="translate(520,85)">
      <circle cx="0" cy="28" r="18" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-15 46 L15 46 L10 120 L-10 120 Z" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-20 40 L-35 60 M20 40 L38 55" stroke="#3D2B1F" stroke-width="2"/>
      <text x="0" y="140" font-size="10" fill="#5c4030" text-anchor="middle">Haman</text>
    </g>
    <line x1="560" y1="180" x2="560" y2="100" stroke="#3D2B1F" stroke-width="2" stroke-dasharray="5 4"/>
    <text x="560" y="195" font-size="8" fill="#5c4030" text-anchor="middle">his gallows</text>
  </svg></div>`,

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

  9: `<div class="scene-sketch"><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" aria-label="Deliverance and Purim">
    <rect width="700" height="280" fill="#F5EDE4"/>
    <text x="350" y="28" font-family="Georgia,serif" font-size="14" fill="#5c4030" text-anchor="middle" font-style="italic">Esther 9 — Deliverance &amp; Purim</text>
    <g transform="translate(200,100)"><circle cx="0" cy="20" r="12" fill="none" stroke="#3D2B1F" stroke-width="2"/><path d="M-8 32 L8 32 L5 85 L-5 85 Z" fill="none" stroke="#3D2B1F" stroke-width="1.5"/></g>
    <g transform="translate(280,95)"><circle cx="0" cy="22" r="14" fill="none" stroke="#3D2B1F" stroke-width="2"/><path d="M-10 36 L10 36 L7 95 L-7 95 Z" fill="none" stroke="#3D2B1F" stroke-width="2"/><line x1="-15" y1="50" x2="-28" y2="38" stroke="#3D2B1F" stroke-width="2"/><line x1="15" y1="50" x2="28" y2="38" stroke="#3D2B1F" stroke-width="2"/></g>
    <g transform="translate(360,100)"><circle cx="0" cy="18" r="12" fill="none" stroke="#3D2B1F" stroke-width="2"/><path d="M-8 30 L8 30 L5 80 L-5 80 Z" fill="none" stroke="#3D2B1F" stroke-width="1.5"/></g>
    <g transform="translate(440,90)"><circle cx="0" cy="24" r="14" fill="none" stroke="#3D2B1F" stroke-width="2"/><path d="M-10 38 L10 38 L6 100 L-6 100 Z" fill="none" stroke="#3D2B1F" stroke-width="2"/></g>
    <rect x="520" y="75" width="80" height="50" rx="4" fill="none" stroke="#3D2B1F" stroke-width="1.5"/>
    <text x="560" y="95" font-size="10" fill="#5c4030" text-anchor="middle">Purim</text>
    <text x="560" y="110" font-size="8" fill="#5c4030" text-anchor="middle">feast</text>
    <text x="350" y="220" font-family="sans-serif" font-size="11" fill="#5c4030" text-anchor="middle">Turned to the contrary — a day of joy</text>
  </svg></div>`,

  10: `<div class="scene-sketch"><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" aria-label="Mordecai's legacy">
    <rect width="700" height="280" fill="#F5EDE4"/>
    <text x="350" y="28" font-family="Georgia,serif" font-size="14" fill="#5c4030" text-anchor="middle" font-style="italic">Esther 10 — Mordecai's legacy</text>
    <rect x="270" y="175" width="160" height="20" fill="none" stroke="#3D2B1F" stroke-width="2"/>
    <rect x="290" y="120" width="120" height="65" rx="6" fill="none" stroke="#3D2B1F" stroke-width="2"/>
    <g transform="translate(350,95)">
      <circle cx="0" cy="30" r="20" fill="none" stroke="#3D2B1F" stroke-width="2.5"/>
      <path d="M-5 12 L0 0 L5 12" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <path d="M-14 50 L14 50 L10 95 L-10 95 Z" fill="none" stroke="#3D2B1F" stroke-width="2"/>
      <line x1="14" y1="55" x2="45" y2="40" stroke="#3D2B1F" stroke-width="2"/>
    </g>
    <g transform="translate(150,130)"><path d="M0 60 Q-20 30 0 15 Q20 30 0 60" fill="none" stroke="#3D2B1F" stroke-width="2"/><circle cx="0" cy="10" r="10" fill="none" stroke="#3D2B1F" stroke-width="2"/></g>
    <g transform="translate(530,130)"><path d="M0 60 Q-20 30 0 15 Q20 30 0 60" fill="none" stroke="#3D2B1F" stroke-width="2"/><circle cx="0" cy="10" r="10" fill="none" stroke="#3D2B1F" stroke-width="2"/></g>
    <text x="350" y="230" font-family="Georgia,serif" font-size="12" fill="#5c4030" text-anchor="middle">Second to the king — seeking the welfare of his people</text>
  </svg></div>`
};
