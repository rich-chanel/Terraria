a = [
    ["Copper Pickaxe", 35, -1, 15, 13, "Light", 0],
    ["Cactus Pickaxe", 35, 0, 15, 13, "Light", 0],
    ["Tin Pickaxe", 35, 0, 14, 12, "Light", 0],
    ["Iron Pickaxe", 40, 0, 13, 11, "Light", 0],
    ["Lead Pickaxe", 43, 0, 12, 10, "Light", 0],
    ["Silver Pickaxe", 45, 0, 11, 9, "Light", 0],
    ["Tungsten Pickaxe", 50, 0, 19, 16, "Light", 1],
    ["Bone Pickaxe", 55, 0, 11, 9, "Light", 1],
    ["Gold Pickaxe", 55, 0, 17, 14, "Light", 2],
    ["Candy Cane Pickaxe", 55, 0, 16, 14, "Quick", 2],
    ["Reaver Shark", 59, 0, 13, 11, "Light", 2],
    ["Platinum Pickaxe", 59, 0, 15, 13, "Light", 2],
    ["Nightmare Pickaxe", 65, 0, 15, 13, "Light", 3],
    ["Deathbringer Pickaxe", 70, 0, 14, 12, "Light", 3],
    ["Molten Pickaxe", 100, 0, 18, 15, "Light", 4],
    ["Cobalt Pickaxe", 110, 0, 13, 11, "Light", 5],
    ["Cobalt Drill", 110, -1, 7, 7, "None", 5],
    ["Palladium Pickaxe", 130, 0, 12, 10, "Light", 5],
    ["Palladium Drill", 130, -1, 7, 7, "None", 5],
    ["Mythril Pickaxe", 150, 0, 10, 9, "Murderous", 6],
    ["Mythril Drill", 150, -1, 6, 6, "None", 6],
    ["Orichalcum Pickaxe", 165, 0, 9, 8, "Quick", 6],
    ["Orichalcum Drill", 165, -1, 5, 5, "None", 6],
    ["Adamantite Pickaxe", 180, 0, 8, 7, "Quick", 6],
    ["Adamantite Drill", 180, -1, 4, 4, "None", 6],
    ["Titanium Pickaxe", 190, 0, 7, 6, "Quick", 6],
    ["Titanium Drill", 190, -1, 4, 4, "None", 6],
    ["Pickaxe Axe", 200, 0, 7, 6, "Quick", 7],
    ["Drax", 200, -1, 4, 4, "None", 7],
    ["Chlorophyte Pickaxe", 200, 1, 7, 6, "Quick", 7],
    ["Chlorophyte Drill", 200, 0, 4, 4, "None", 7],
    ["Spectre Pickaxe", 200, 3, 10, 9, "Murderous", 7],
    ["Shroomite Digging Claw", 200, -1, 4, 3, "Light", 7],
    ["Picksaw", 210, 1, 6, 5, "Quick", 8],
    ["Luminite Pickaxes", 225, 4, 6, 5, "Quick", 8],
    ["Laser Drill", 230, 10, 6, 6, "None", 8],
    ["Luminite Drills", 225, 2, 2, 2, "None", 8]
]

class Pickaxe {
    name;
    power;
    range;
    speed;
    bestSpeed;
    prefix;
    mineable;
    type; // 곡괭이 / 드릴
}

const minable = [
    "Everything below Meteorite",
    "Meteorite",
    "Meteorite, Demonite, Crimtane",
    "Hellstone, Obsidian, Ebonstone/Crimstone, Dungeon Brick",
    "Cobalt, Palladium",
    "Mythril, Orichalcum",
    "Adamantite, Titanium",
    "Chlorophyte",
    "Lihzahrd Brick",
]