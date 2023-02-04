describe("Author's GitHub Profile", () => {
  it("should open the author's github profile", () => {
    cy.visit("https://github.com/<%= props.githubUsername %>");
  });
});

export {};
