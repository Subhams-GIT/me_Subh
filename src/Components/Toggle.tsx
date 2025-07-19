// components/TailwindSwitch.tsx
'use client';

import { useState } from 'react';

export default function TailwindSwitch({theme,toggletheme}:any) {
  const [enabled, setEnabled] = useState(false);


  return (
    <button
      onClick={toggletheme}
      className={`relative inline-flex h-4 w-6 items-center rounded-full transition-colors focus:outline-none  ${
        enabled ? 'bg-blue-600' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-2 w-2 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}
