test("test toBe", () => {
    const name = "Luthfi";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Luthfi');
});

test("test toEqual", () => {
    let person = {id: "luthfi"};
    Object.assign(person, {name: "Luthfi"});

    expect(person).toEqual({id: "luthfi", name: "Luthfi"});
});