const Blueprint = require('factorio-blueprint');
const { readFile } = require('fs/promises');

(async () => {
    try {
        const blueprintString = await readFile('./input.txt', "utf-8");

        const myBlueprint = new Blueprint();

        const importedBlueprint = new Blueprint(blueprintString);

//This block add "F" in belts under scheme.

        let xc = -128, yc=-150;

        //letter "S"
        importedBlueprint.createEntity('transport-belt', { x: 2+xc, y: 0+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 1+xc, y: 0+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 0+xc, y: 0+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 0+xc, y: 1+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 0+xc, y: 2+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 1+xc, y: 2+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 2+xc, y: 2+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 2+xc, y: 3+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 2+xc, y: 4+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 1+xc, y: 4+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 0+xc, y: 4+yc }, Blueprint.UP);

        xc+=4;
        //letter "E"
        importedBlueprint.createEntity('transport-belt', { x: 2+xc, y: 0+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 1+xc, y: 0+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 0+xc, y: 0+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 0+xc, y: 1+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 0+xc, y: 2+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 1+xc, y: 2+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 0+xc, y: 3+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 0+xc, y: 4+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 1+xc, y: 4+yc }, Blueprint.UP);
        importedBlueprint.createEntity('transport-belt', { x: 2+xc, y: 4+yc }, Blueprint.UP);



// Export the string to use in-game
        console.log(importedBlueprint.encode());


    } catch (err) {
        console.error(err);
    }
})();