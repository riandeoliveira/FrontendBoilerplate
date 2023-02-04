import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { Greetings } from "components/Greetings";

describe("Greetings component", () => {
  it("should render the Greetings component", () => {
    render(<Greetings />);

    expect(Greetings).toBeTruthy();
  });
});
