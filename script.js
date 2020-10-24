(function() {
  function gId(s) {
    return document.getElementById(s);
  }
  var character = {
    faction: ["Alliance", "Horde"],
    race: {
      "Alliance": ["Dwarf", "Gnome", "Human", "Night Elf", "Dranei", "Worgen", "Pandaren"],
      "Horde": ["Orc", "Troll", "Tauren", "Undead", "Blood Elf", "Goblin", "Pandaren"]
    },
    class: {
      "Dranei": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Shaman", "Warrior", "Monk"],
      "Dwarf": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Monk"],
      "Gnome": ["Death Knight", "Mage", "Priest", "Rogue", "Warlock", "Warrior", "Monk"],
      "Human": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Warlock", "Warrior", "Monk"],
      "Night Elf": ["Death Knight", "Druid", "Hunter", "Mage", "Priest", "Rogue", "Warrior", "Monk"],
      "Worgen": ["Death Knight", "Druid", "Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior"],
      "Blood Elf": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Warlock", "Warrior", "Monk"],
      "Undead": ["Death Knight", "Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior", "Monk"],
      "Goblin": ["Death Knight", "Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
      "Orc": ["Death Knight", "Hunter", "Mage", "Rogue", "Shaman", "Warlock", "Warrior", "Monk"],
      "Tauren": ["Death Knight", "Druid", "Hunter", "Paladin", "Priest", "Shaman", "Warrior", "Monk"],
      "Troll": ["Death Knight", "Druid", "Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Monk"],
      "Pandaren": ["Warrior", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Monk"]
    },
    spec: {
      "Death Knight": ["Blood", "Frost", "Unholy"],
      "Druid": ["Balance", "Feral", "Guardian", "Restoration"],
      "Hunter": ["Beastmaster", "Marksmanship", "Survival"],
      "Mage": ["Arcane", "Fire", "Frost"],
      "Monk": ["Brewmaster", "Mistweaver", "Windwalker"],
      "Paladin": ["Holy", "Protection", "Retribution"],
      "Priest": ["Discipline", "Holy", "Shadow"],
      "Rogue": ["Assassination", "Combat", "Subtlety"],
      "Shaman": ["Elemental", "Enhancement", "Restoration"],
      "Warlock": ["Affliction", "Demonology", "Destruction"],
      "Warrior": ["Arms", "Fury", "Protection"]
    }
  };
  gId("Submit").onclick = function() {
    var c = {
      faction: "",
      race: "",
      sex: "",
      class: "",
      spec: ""
    };
    c.faction = gId("Faction").value === "Random" ? _Select(character.faction) : gId("Faction").value;
    c.race = _Select(character.race, c.faction);
    c.sex = _Select(["Male", "Female"]);
    c.class = _Select(character.class, c.race);
    c.spec = _Select(character.spec, c.class);

    function _Select(obj, param) {
      var t = param ? obj[param] : obj;
      return t[Math.floor(Math.random() * t.length)];
    }
    gId("Output").innerHTML = c.faction + ", " + c.sex + ", " + c.race + ", " + c.spec + " " + c.class;
  }

  // if(c.faction == "Horde") {
  //   "#Output".style.color = "red";
  // }
})();
