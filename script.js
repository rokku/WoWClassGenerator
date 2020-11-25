$(document).ready(function() {

  (function() {
      function gId(s) {
        return document.getElementById(s);
      }
      var character = {
        faction: ["Alliance", "Horde"],
        race: {
          "Alliance": ["Dwarf", "Gnome", "Human", "Night Elf", "Dranei", "Worgen", "Pandaren", "Void Elf", "Lightforged Draenei", "Dark Iron Dwarf", "Kul Tiran", "Mechagnome", "Demon Hunter"],
          "Horde": ["Orc", "Troll", "Tauren", "Undead", "Blood Elf", "Goblin", "Pandaren", "Nightborne", "Highmountain Tauren", "Mag'har Orc", "Zandalari Troll", "Vulpera", "Demon Hunter"]
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
          "Pandaren": ["Warrior", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Monk"],
          "Void Elf": ["Death Knight", "Rogue", "Hunter", "Mage", "Priest", "Warlock", "Monk"],
          "Lightforged Draenei": ["Death Knight", "Hunter", "Mage", "Priest", "Paladin", "Warrior"],
          "Dark Iron Dwarf": ["Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Death Knight"],
          "Kul Tiran": ["Druid", "Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warrior", "Death Knight", "Monk"],
          "Mechagnome": ["Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior", "Death Knight", "Monk"],
          "Nightborne": ["Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior", "Death Knight", "Monk"],
          "Highmountain Tauren": ["Druid", "Hunter", "Shaman", "Warrior", "Death Knight", "Monk"],
          "Mag'har Orc": ["Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warrior", "Death Knight", "Monk"],
          "Zandalari Troll": ["Druid", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warrior", "Death Knight", "Monk"],
          "Vulpera": ["Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Death Knight", "Monk"]
        },
        spec: {
          "Death Knight": ["Blood", "Frost", "Unholy"],
          "Druid": ["Balance", "Feral", "Guardian", "Restoration"],
          "Hunter": ["Beastmaster", "Marksmanship", "Survival"],
          "Mage": ["Arcane", "Fire", "Frost"],
          "Monk": ["Brewmaster", "Mistweaver", "Windwalker"],
          "Paladin": ["Holy", "Protection", "Retribution"],
          "Priest": ["Discipline", "Holy", "Shadow"],
          "Rogue": ["Assassination", "Outlaw", "Subtlety"],
          "Shaman": ["Elemental", "Enhancement", "Restoration"],
          "Warlock": ["Affliction", "Demonology", "Destruction"],
          "Warrior": ["Arms", "Fury", "Protection"]
        }
      };

      // JSON VERSION IF I NEED IT
      // var json = JSON.stringify(character);
      gId("submit").onclick = function() {

        var outputBox = document.getElementById("Output");
        var outHorde = document.getElementsByClassName("outputHorde");
        var outAll = document.getElementsByClassName("outputAlliance");

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


        $("#Output").html(c.faction + " <br> " + c.sex + " <br> " + c.race + " <br> " + c.spec + " " + c.class);

        if ($(".output:contains('Horde')").removeClass("outputAlliance").addClass("outputHorde")) {
          // console.log("For The Horde");
        }
        if ($(".output:contains('Alliance')").removeClass("outputHorde").addClass("outputAlliance"));
          // console.log("For The Alliance");
      };
    }
  )();
  
  // DROP DOWN COLOR CHANGE DEPENDING ON FACTION
  $(document).ready(function() {
    $("#Faction").change(function() {
      if ($(this).val() == 'Alliance') {
        $("#Faction").css("color", "#014D95");
      } else if ($(this).val() == "Horde") {
        $("#Faction").css("color", "#8C1616");
      } else if ($(this).val() == "Random") {
        $("#Faction").css("color", "white");
      }
    })
  });
});

$(document).ready(function() {
  $(".socialIconLink .socialIcon").mouseenter(function() {
    // $(this).hide("fast");
    $(this).attr("fill");
  })
  $(".socialIconLink .socialIcon").mouseleave(function() {
    $(this).show("fast");
    $(".hoverIcon").hide("fast");
  })
})
