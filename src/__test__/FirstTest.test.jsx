import { render, screen } from "@testing-library/react";
import FirstTest from "../components/FirstTest";
import "@testing-library/jest-dom";

describe("FirstTest Component", () => {
    it("renders the heading with 'First test'", () => {
        // Render the component
        render(<FirstTest />);

        // Assert that the heading is in the document
        const headingElement = screen.getByText(/first test/i);
        expect(headingElement).toBeInTheDocument();
    });
});
