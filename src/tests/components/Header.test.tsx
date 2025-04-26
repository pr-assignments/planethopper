import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header";

describe("Greeting", () => {
  it("renders the correct text", () => {
    render(<Header />);
    expect(screen.getByText("Planet Hopper")).toBeInTheDocument();
  });
});
