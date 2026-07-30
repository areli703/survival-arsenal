// Custom SVG product icons — replaces emojis with professional tactical illustrations
// Each icon sized 200x200, olive drab on lighter army background, sharp lines

const OliveBox = ({ children, label }) => (
  <svg
    viewBox="0 0 200 200"
    className="w-32 h-32"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={label}
  >
    <defs>
      <linearGradient id={`g-${label}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8a8a5b" />
        <stop offset="100%" stopColor="#5a5a3a" />
      </linearGradient>
    </defs>
    {children}
  </svg>
)

export function ProductIcon({ category, productId }) {
  // IFAK / first aid pouches — olive drab pouch with red cross
  if (category === 'first-aid') {
    if (productId === 'ifak-trauma-250') {
      return (
        <OliveBox label="IFAK">
          <rect x="55" y="60" width="90" height="100" rx="6" fill="#5a5a3a" stroke="#3a3a20" strokeWidth="2" />
          <rect x="65" y="70" width="70" height="30" rx="3" fill="#6a6a4a" />
          <rect x="92" y="76" width="16" height="18" fill="#d32f2f" />
          <rect x="86" y="82" width="28" height="6" fill="#d32f2f" />
          <rect x="65" y="110" width="70" height="6" fill="#4a4a2a" />
          <rect x="65" y="122" width="70" height="6" fill="#4a4a2a" />
          <rect x="65" y="134" width="70" height="6" fill="#4a4a2a" />
          <rect x="65" y="146" width="70" height="6" fill="#4a4a2a" />
          <rect x="95" y="55" width="10" height="8" fill="#3a3a20" />
        </OliveBox>
      )
    }
    if (productId === 'first-aid-premium') {
      return (
        <OliveBox label="First Aid Premium">
          <rect x="55" y="55" width="90" height="110" rx="8" fill="#b71c1c" stroke="#7a0000" strokeWidth="2" />
          <rect x="55" y="55" width="90" height="20" rx="8" fill="#7a0000" />
          <rect x="92" y="90" width="16" height="40" fill="#fff" />
          <rect x="80" y="102" width="40" height="16" fill="#fff" />
          <text x="100" y="148" textAnchor="middle" fill="#fff" fontSize="9" fontFamily="monospace" fontWeight="bold">FIRST AID</text>
        </OliveBox>
      )
    }
    if (productId === 'first-aid-multipurpose') {
      return (
        <OliveBox label="First Aid Multipurpose">
          <rect x="58" y="65" width="84" height="90" rx="6" fill="#c62828" stroke="#7a0000" strokeWidth="2" />
          <rect x="92" y="85" width="16" height="35" fill="#fff" />
          <rect x="80" y="96" width="40" height="14" fill="#fff" />
          <rect x="58" y="130" width="84" height="6" fill="#7a0000" />
          <rect x="58" y="142" width="84" height="6" fill="#7a0000" />
        </OliveBox>
      )
    }
    if (productId === 'first-aid-50pc') {
      return (
        <OliveBox label="50pc First Aid">
          <rect x="60" y="80" width="80" height="55" rx="4" fill="#d32f2f" stroke="#7a0000" strokeWidth="2" />
          <rect x="93" y="92" width="14" height="22" fill="#fff" />
          <rect x="83" y="99" width="34" height="8" fill="#fff" />
          <rect x="100" y="135" width="2" height="15" fill="#3a3a20" />
          <circle cx="101" cy="78" r="6" fill="#3a3a20" />
        </OliveBox>
      )
    }
  }

  // Flashlights — black tactical
  if (category === 'lighting') {
    if (productId === 'flashlight-rechargeable') {
      return (
        <OliveBox label="Flashlight Rechargeable">
          <rect x="80" y="55" width="40" height="100" rx="4" fill="#222" stroke="#000" strokeWidth="2" />
          <rect x="80" y="55" width="40" height="20" fill="#111" />
          <circle cx="100" cy="58" r="8" fill="#fff" stroke="#888" strokeWidth="1" />
          <circle cx="100" cy="58" r="4" fill="#ffd700" opacity="0.7" />
          <rect x="85" y="85" width="30" height="3" fill="#444" />
          <rect x="85" y="95" width="30" height="3" fill="#444" />
          <rect x="85" y="105" width="30" height="3" fill="#444" />
          <rect x="85" y="115" width="30" height="3" fill="#444" />
          <rect x="95" y="155" width="10" height="6" fill="#444" />
        </OliveBox>
      )
    }
    if (productId === 'flashlight-aluminum-box') {
      return (
        <OliveBox label="Flashlight Aluminum">
          <rect x="40" y="80" width="120" height="50" rx="3" fill="#333" stroke="#000" strokeWidth="2" />
          <rect x="40" y="80" width="120" height="10" fill="#1a1a1a" />
          <rect x="76" y="50" width="44" height="35" rx="2" fill="#999" stroke="#555" strokeWidth="2" />
          <circle cx="98" cy="58" r="10" fill="#fff" stroke="#666" strokeWidth="1" />
          <circle cx="98" cy="58" r="5" fill="#ffd700" opacity="0.7" />
          <rect x="80" y="68" width="36" height="3" fill="#666" />
          <rect x="80" y="73" width="36" height="3" fill="#666" />
          <rect x="80" y="78" width="36" height="3" fill="#666" />
        </OliveBox>
      )
    }
  }

  // Fire / water
  if (category === 'fire-water') {
    if (productId === 'fire-starter-12pc') {
      return (
        <OliveBox label="Fire Starter">
          <circle cx="100" cy="105" r="55" fill="#2a2a1a" stroke="#1a1a10" strokeWidth="2" />
          <g transform="translate(100,105)">
            <rect x="-30" y="-15" width="14" height="14" fill="#e8d8a0" rx="2" />
            <rect x="-12" y="-15" width="14" height="14" fill="#e8d8a0" rx="2" />
            <rect x="6" y="-15" width="14" height="14" fill="#e8d8a0" rx="2" />
            <rect x="24" y="-15" width="14" height="14" fill="#e8d8a0" rx="2" />
            <rect x="-30" y="3" width="14" height="14" fill="#e8d8a0" rx="2" />
            <rect x="-12" y="3" width="14" height="14" fill="#e8d8a0" rx="2" />
            <rect x="6" y="3" width="14" height="14" fill="#e8d8a0" rx="2" />
            <rect x="24" y="3" width="14" height="14" fill="#e8d8a0" rx="2" />
          </g>
          <path d="M70 145 Q85 110 100 130 Q115 110 130 145" fill="#ff6b00" opacity="0.9" stroke="#cc4400" strokeWidth="1.5" />
          <path d="M85 160 Q100 135 115 160" fill="#ff9500" opacity="0.7" />
        </OliveBox>
      )
    }
    if (productId === 'water-filter-straw') {
      return (
        <OliveBox label="Water Filter">
          <rect x="80" y="40" width="40" height="120" rx="20" fill="#0277bd" stroke="#01579b" strokeWidth="2" />
          <rect x="80" y="40" width="40" height="40" rx="20" fill="#0288d1" />
          <rect x="93" y="28" width="14" height="16" rx="2" fill="#01579b" />
          <circle cx="100" cy="34" r="4" fill="#4fc3f7" />
          <rect x="85" y="85" width="30" height="3" fill="#01579b" opacity="0.5" />
          <rect x="85" y="95" width="30" height="3" fill="#01579b" opacity="0.5" />
          <rect x="85" y="105" width="30" height="3" fill="#01579b" opacity="0.5" />
          <rect x="85" y="115" width="30" height="3" fill="#01579b" opacity="0.5" />
          <rect x="92" y="158" width="16" height="8" fill="#01579b" />
          <rect x="95" y="166" width="10" height="6" fill="#0288d1" />
          <circle cx="100" cy="170" r="3" fill="#4fc3f7" opacity="0.6" />
        </OliveBox>
      )
    }
  }

  // Kits — backpacks + radios
  if (category === 'kits') {
    if (productId === 'disaster-backpack') {
      return (
        <OliveBox label="Disaster Backpack">
          <rect x="55" y="55" width="90" height="110" rx="8" fill="#3a3a20" stroke="#1a1a10" strokeWidth="2" />
          <rect x="55" y="55" width="90" height="20" fill="#2a2a10" />
          <rect x="68" y="80" width="64" height="35" rx="3" fill="#4a4a30" stroke="#2a2a10" strokeWidth="1" />
          <rect x="68" y="125" width="64" height="35" rx="3" fill="#4a4a30" stroke="#2a2a10" strokeWidth="1" />
          <rect x="93" y="160" width="14" height="10" fill="#111" />
          <rect x="90" y="50" width="20" height="10" fill="#2a2a10" />
        </OliveBox>
      )
    }
    if (productId === 'emergency-radio') {
      return (
        <OliveBox label="Emergency Radio">
          <rect x="60" y="60" width="80" height="100" rx="6" fill="#ff6b00" stroke="#cc4400" strokeWidth="2" />
          <rect x="60" y="60" width="80" height="25" fill="#cc4400" />
          <rect x="68" y="95" width="20" height="12" fill="#222" />
          <rect x="68" y="113" width="20" height="12" fill="#222" />
          <rect x="115" y="48" width="3" height="20" fill="#333" />
          <circle cx="100" cy="140" r="15" fill="#333" stroke="#000" strokeWidth="2" />
          <rect x="68" y="155" width="64" height="6" fill="#222" />
        </OliveBox>
      )
    }
  }

  // Fallback — generic product silhouette
  return (
    <OliveBox label="Product">
      <rect x="50" y="50" width="100" height="100" rx="6" fill="#5a5a3a" stroke="#3a3a20" strokeWidth="2" />
      <text x="100" y="115" textAnchor="middle" fill="#fff" fontSize="36" fontFamily="sans-serif" fontWeight="bold">★</text>
    </OliveBox>
  )
}
