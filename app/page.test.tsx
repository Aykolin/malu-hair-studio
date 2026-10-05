import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Malu Hair Studio home", () => {
  it("shows the primary local-business message", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 1, name: /seu cabelo,.*sua presença/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Rua Prudente de Moraes, 845/i)).toBeInTheDocument();
  });

  it("offers contact links for WhatsApp and Instagram", () => {
    render(<Home />);

    const whatsappLinks = screen.getAllByRole("link", { name: /whatsapp|agendar/i });
    expect(whatsappLinks.length).toBeGreaterThanOrEqual(3);
    expect(screen.getByRole("link", { name: /^maluhairstudiobtu$/i })).toHaveAttribute(
      "href",
      "https://www.instagram.com/maluhairstudiobtu/",
    );
  });

  it("keeps image slots ready for the future portfolio", () => {
    render(<Home />);
    expect(screen.getAllByRole("img", { name: /Espaço reservado para foto \d/i })).toHaveLength(6);
  });
});
