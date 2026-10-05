"use client";

import { useState } from "react";

export function MapEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="map-frame">
      {!isLoaded && (
        <div className="map-skeleton" role="status" aria-label="Carregando mapa">
          <span />
          <span />
          <span />
        </div>
      )}
      <iframe
        className={isLoaded ? "is-loaded" : ""}
        src="https://www.google.com/maps?q=Rua%20Prudente%20de%20Moraes%2C%20845%2C%20Botucatu%20SP&output=embed"
        title="Mapa do Malu Hair Studio em Botucatu"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
