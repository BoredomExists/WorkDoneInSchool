import {
    amulets, body, classes, gloves, handguns,
    head, leg, longguns, melee, mutators,
    relicfragments, relics, rings, skills, weaponmods,
    traits, OrganizeData, PrintArray
} from "./Remnant2DataOrganizer.js";

$(document).ready(async () => {
    await OrganizeData();

    $("#randomize").on("click", function () {
        getClassSkills();
        getArmor();
        getFirearmInfo();
        getMelee();
        getRelicInfo();
        getAccessories();
        getTraitInfo();
    });

    function getClassSkills() {
        for (let i = 0; i < 2; ++i) {
            const selectedClass = getRandomItem(classes);
            const classSkills = skills
                .filter(skill => skill.Archetype === selectedClass)
                .map(skill => skill.Name);

            const selectedSkill = getRandomItem(classSkills);

            setText(`#classoption${i}`, `Class: ${selectedClass}`);
            setText(`#skilloption${i}`, `Skill: ${selectedSkill}`);
        }
    }

    function getRelicInfo() {
        const backup = [...relicfragments];
        const relicInfo = [
            getRandomItem(relics),
            removeRandomFromArray(relicfragments),
            removeRandomFromArray(relicfragments),
            removeRandomFromArray(relicfragments)
        ];
        refillArray(backup, relicfragments);

        setText("#relicoptions", `Relic: ${relicInfo[0]}\nFragments: ${relicInfo.slice(1).join("|")}`);
    }

    function getAccessories() {
        const backup = [...rings];
        const accessoryOptions = [
            getRandomItem(amulets),
            removeRandomFromArray(rings),
            removeRandomFromArray(rings),
            removeRandomFromArray(rings),
            removeRandomFromArray(rings)
        ];
        refillArray(backup, rings);

        setText("#accessoryoptions", `Amulet: ${accessoryOptions[0]}\nRings: ${accessoryOptions.slice(1).join("|")}`);
    }

    function getMelee() {
        const backup = [...mutators];
        const selectedMelee = getRandomItem(melee);
        const meleeMutators = mutators
            .filter(m => m.Type === "Melee")
            .map(m => m.Name);

        const selectedMutator = getRandomItem(meleeMutators);
        refillArray(backup, mutators);

        setText("#meleeoption", `Melee: ${selectedMelee}\nMutator: ${selectedMutator}`);
    }

    function getFirearmInfo() {
        const weaponModsBackup = [...weaponmods];
        const mutatorsBackup = [...mutators];

        const firearmMutators = mutators
            .filter(m => m.Type === "Ranged")
            .map(m => m.Name);

        const longarm = getRandomItem(longguns);
        const handgun = getRandomItem(handguns);

        const longarmInfo = [
            longarm,
            removeRandomFromArray(weaponmods),
            removeRandomFromArray(firearmMutators)
        ];

        const handgunInfo = [
            handgun,
            removeRandomFromArray(weaponmods),
            removeRandomFromArray(firearmMutators)
        ];

        refillArray(weaponModsBackup, weaponmods);
        refillArray(mutatorsBackup, mutators);

        setText("#longgunoption", `LongGun: ${longarmInfo[0]} |\nWeapon Mod: ${longarmInfo[1]} |\nMutator: ${longarmInfo[2]}`);
        setText("#handgunoption", `HandGun: ${handgunInfo[0]} |\nWeapon Mod: ${handgunInfo[1]} |\nMutator: ${handgunInfo[2]}`);
    }

    function getTraitInfo() {
        const [class1, class2] = [
            $("#classoption0").text().split(":")[1].trim(),
            $("#classoption1").text().split(":")[1].trim()
        ];

        const traitOptions = traits
            .filter(trait => !(trait.Archetype === class1 || trait.Archetype === class2))
            .map(trait => trait.Name);

        let selectedTraits = [];
        let selectedPoints = [];
        let totalPoints = 85;

        while (totalPoints > 0) {
            const maxDecrease = totalPoints <= 5 ? 5 : 10;
            const actualDecrease = Math.min(totalPoints, getRandomInt(1, maxDecrease));
            selectedPoints.push(actualDecrease);
            totalPoints -= actualDecrease;

            if (totalPoints > 0 && traitOptions.length > 0) {
                selectedTraits.push(removeRandomFromArray(traitOptions));
            }
        }

        const traitDisplay = selectedTraits
            .map((trait, index) => `${trait}: ${selectedPoints[index]}`)
            .join("\n");

        setText("#traitoptions", `Traits:\n${traitDisplay}`);
    }

    function getArmor() {
        const armorPieces = [
            { array: head, label: "Head" },
            { array: body, label: "Body" },
            { array: leg, label: "Leggings" },
            { array: gloves, label: "Gloves" }
        ];

        armorPieces.forEach((piece, i) => {
            setText(`#armoroption${i}`, `${piece.label}: ${getRandomItem(piece.array)}`);
        });
    }

    // === Utility Functions ===

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function removeRandomFromArray(array) {
        return array.splice(Math.floor(Math.random() * array.length), 1)[0];
    }

    function refillArray(source, target) {
        target.length = 0;
        target.push(...source);
    }

    function setText(selector, text) {
        $(selector).text(text);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
