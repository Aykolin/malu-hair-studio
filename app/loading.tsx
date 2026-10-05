export default function Loading() {
  return (
    <main className="loading-shell" aria-busy="true" aria-label="Carregando Malu Hair Studio">
      <div className="loading-header skeleton" />
      <div className="loading-grid">
        <div className="loading-copy">
          <span className="skeleton skeleton-line skeleton-line--small" />
          <span className="skeleton skeleton-title" />
          <span className="skeleton skeleton-title skeleton-title--short" />
          <span className="skeleton skeleton-line" />
          <span className="skeleton skeleton-button" />
        </div>
        <div className="skeleton loading-image" />
      </div>
      <span className="sr-only">Carregando conteúdo…</span>
    </main>
  );
}
