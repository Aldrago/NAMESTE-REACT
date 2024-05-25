import { render, screen } from "@testing-library/react";
import Contact from "../../app/components/Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases",() => {
  test("Should match snapshort", () => {
    const { container } = render(<Contact />);

    expect(container).toMatchSnapshot();
  });
});
