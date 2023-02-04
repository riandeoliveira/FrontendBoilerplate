describe("Author's GitHub Profile", () => {
  it("should open the author's github profile", () => {
    cy.visit("https://github.com/<GITHUB_USERNAME>");
  });
});

export {};
