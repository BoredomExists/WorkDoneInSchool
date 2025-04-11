export let amulets = [];
export let body = [];
export let classes = [];
export let gloves = [];
export let handguns = [];
export let head = [];
export let leg = [];
export let longguns = [];
export let melee = [];
export let mutators = [];
export let relicfragments = [];
export let relics = [];
export let rings = [];
export let skills = [];
export let weaponmods = [];
export let traits = [];

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function OrganizeData() {
    amulets = await fetchData("Remnant2Files/Remnant2Amulets.json");
    body = await fetchData("Remnant2Files/Remnant2BodyArmor.json");
    classes = await fetchData("Remnant2Files/Remnant2Classes.json");
    gloves = await fetchData("Remnant2Files/Remnant2GloveArmor.json");
    handguns = await fetchData("Remnant2Files/Remnant2HandGuns.json");
    head = await fetchData("Remnant2Files/Remnant2HeadArmor.json");
    leg = await fetchData("Remnant2Files/Remnant2LegArmor.json");
    longguns = await fetchData("Remnant2Files/Remnant2LongGuns.json");
    melee = await fetchData("Remnant2Files/Remnant2Melee.json");
    mutators = await fetchData("Remnant2Files/Remnant2Mutators.json");
    relicfragments = await fetchData("Remnant2Files/Remnant2RelicFragments.json");
    relics = await fetchData("Remnant2Files/Remnant2Relics.json");
    rings = await fetchData("Remnant2Files/Remnant2Rings.json");
    skills = await fetchData("Remnant2Files/Remnant2Skills.json");
    weaponmods = await fetchData("Remnant2Files/Remnant2WeaponMods.json");
    traits = await fetchData("Remnant2Files/Remnant2Traits.json");
}

export function PrintArray(array) {
    array.forEach(element => console.log(element));
}
