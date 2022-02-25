from tkinter import TRUE
from unicodedata import category
from app.models import db, Product


def seed_products():
    
    kalos_botanical = Product(
        name="Mist Congeniality | Rose Water Hydra-Mist",
        category_id = 2,
        attributes='Vegan, Cruelty-Free, Plumping, Moisturizing, Nourishing, Mist Congeniality Rose Water Hydra-Mist, Aloe, Chamomile, Organic',
        original_price=22.00,
        discount=False,
        final_price=22.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/kalos_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/kalos_botanical_2.jpg"
    )

    mitzie_botanical = Product(
        name="Mitzie | Lavender + Mint All-Purpose Cleaner (Set of 2)",
        category_id = 2,
        attributes="Mitzie Lavender Mist All-Purpose Cleaner Set, Organic, Spray, Amber, Bottle, Botanical",
        original_price=28.00,
        discount=False,
        final_price=28.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/mitzie_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/mitzie_botanical_2.jpg"
    )

    phaedra_botanical = Product(
        name="Phaedra | Erato's Multipurpose Essence",
        category_id = 2,
        attributes="Phaedra Erato Multipurpose Essence, Yellow Label, 50 ml, Pump Bottle, European, Organic, Botanical",
        original_price=78.00,
        discount=True,
        final_price=66.30,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/phaedra_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/phaedra_botanical_2.jpg"
    )

    rosewater_botanical = Product(
        name="Pearlessence | Aloe Rosewater Soothing Face Mist",
        category_id = 2,
        attributes="Botanical, Pearlessence, Aloe, Rosewater, Soothing, Face, Mist, 59 ml, Spray Bottle, Nourishing",
        original_price=14.00,
        discount=False,
        final_price=14.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/rosewater_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/rosewater_botanical_2.jpg"
    )

    tahnyc_botanical = Product(
        name="Tahnyc | Vitamic C + AHA & Peptides Serum",
        category_id = 2,
        attributes="Tahnyc, Vitamin C, AHA Peptides Serum, Spray Bottle, Acne, Botanical, Molecular, Cruelty-Free",
        original_price=64.00,
        discount=False,
        final_price=64.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/tahnyc_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/tahnyc_botanical_2.jpg"
    )

    verdant_botanical = Product(
        name="Verdant Lab | Lavender Hand Sanitizer (Set of 2)",
        category_id = 2,
        attributes="Verdant Lab Lavender Hand Sanitizer Set, Spray, Organic, Vegan, Spray Bottle, Limited, Set, Botanical",
        original_price=32.00,
        discount=True,
        final_price=28.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/verdant_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/verdant_botanical_2.jpeg"
    )

    bergamot_candle = Product(
        name="Bergamot + Bourbon Scented Candle",
        category_id = 6,
        attributes="Bergamot Bourbon Scented candle, Small Jar, Amber, Rose, Candle, Small, Soy",
        original_price=19.95,
        discount=False,
        final_price=19.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/bergamot_candle_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/bergamot_candle_2.jpg"
    )

    ceramic_candle = Product(
        name="St Evan | Hand-Painted Ceramic Vanilla Crackle",
        category_id = 6,
        attributes="St Evan, Candle, Hand-Painted Ceramic Vanilla Crackle Candle, Poured, Wide wick, Artisan",
        original_price=39.95,
        discount=True,
        final_price=32.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/ceramic_candle_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/ceramic_candle_2.jpg"
    )

    fenwick_candle = Product(
        name="Fenwick | Organic Coconut Wax Candle (Black Spruce)",
        category_id = 6,
        attributes="Fenwick Organic Coconut Wax Candle, Black Spruce, Glass Jar, Small, Travel",
        original_price=16.95,
        discount=False,
        final_price=16.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/fenwick_candle_2.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/fenwick_candle_1.jpg"
    )

    hay_candle = Product(
        name="Kb69 | Small Batch Premium Wax Dry Hay No. 1",
        category_id = 6,
        attributes="Kb69 Small Batch Premium Wax Dry Hay No. 1, Scented Candle, Quality Original, Wine Bottle, Hand-Poured",
        original_price=22.95,
        discount=False,
        final_price=22.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/hay_candle_2.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/hay_candle_1.jpg"
    )

    morra_candle = Product(
        name="Morra | Aromatic Garden + Exclusive Musk (Set of 2)",
        category_id = 6,
        attributes="Morra Aromatic Garden Exclusive Musk Set Candle, Blue Jar, Wooden Lid, Set, Vegan, Cruelty-Free, Beeswax",
        original_price=28.00,
        discount=True,
        final_price=24.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/morra_candle_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/morra_candle_2.jpg"
    )

    russian_candle = Product(
        name="DRY | Russian Aromatherapy",
        category_id = 6,
        attributes="Russian Aromatherapy, Nourishing Candle, Beeswax, Amber Jar, Hand-Poured, Cruelty-Free",
        original_price=9.00,
        discount=False,
        final_price=9.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/russian_candle_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/russian_candle_2.jpg"
    )

    banana_faux = Product(
        name="Banana Leaf in Concrete Planter",
        category_id = 4,
        attributes="Banana Leaf, Concrete Planter Faux Plant, Large, Plants",
        original_price=59.00,
        discount=False,
        final_price=59.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/banana_faux_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/banana_faux_2.jpg"
    )

    cotton_faux = Product(
        name="Natural Hills Collection | Cotton Stems",
        category_id = 4,
        attributes="Natural Hills Collection Cotton Stems Faux Plant, Plants",
        original_price=34.95,
        discount=True,
        final_price=32.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/cotton_faux_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/cotton_faux_2.jpg"
    )

    fig_faux = Product(
        name="FiddleLeaf Fig + New England Large Weave Basket",
        category_id = 4,
        attributes="FiddleLeaf Fig, New England Large Weave Basket Faux Plant, Plants",
        original_price=189.95,
        discount=False,
        final_price=189.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/fig_faux_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/fig_faux_2.jpg"
    )

    paradise_faux = Product(
        name="Paradise Plant | Sculptural 48 Inches",
        category_id = 4,
        attributes="Paradise Plant Sculptural 48 Inches, Plants",
        original_price=202.00,
        discount=True,
        final_price=164.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/paradise_faux_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/paradise_faux_2.jpg"
    )

    oakparadise_faux = Product(
        name="Paradise Plant | Tabletop Oak Base",
        category_id = 4,
        attributes="Paradise Plant Tabletop Oak Base, Plants",
        original_price=68.00,
        discount=False,
        final_price=68.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/paradise_faux_3.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/paradise_faux_4.jpg"
    )

    philodendron_faux = Product(
        name="Glorious Philodendron Upright Stalks (Set of 2)",
        category_id = 4,
        attributes="Glorious Philodendron Uprigth Stalks Set Faux, Plants",
        original_price=24.00,
        discount=False,
        final_price=24.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/philodendron_faux_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/philodendron_faux_2.jpg"
    )

    copper_planter = Product(
        name="Stainless Steel + Copper Tabletop Planter",
        category_id = 1,
        attributes="Stainless Steel + Copper Tabletop Planter",
        original_price=24.12,
        discount=False,
        final_price=24.12,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/copper_planter_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/copper_planter_2.jpg"
    )

    cork_planter = Product(
        name="Maya Terra | Cork and Concrete Pot",
        category_id = 1,
        attributes="Maya Terra | Cork and Concrete Pot, Planter, Hand-made",
        original_price=59.00,
        discount=True,
        final_price=52.75,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/cork_planter_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/cork_planter_2.jpg"
    )

    geometric_planter = Product(
        name="Glasgow Glass | Geometric Rolled Glass and Ceramic Planters (Set of 3)",
        category_id = 1,
        attributes="Glasgow Glass | Geometric Rolled Glass and Ceramic Planters (Set of 3)",
        original_price=36.00,
        discount=False,
        final_price=36.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/geometric_planter_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/geometric_planter_2.jpg"
    )

    hexagon_planter = Product(
        name="YEN | Medium White Pressed Concrete Planter",
        category_id = 1,
        attributes="YEN | Medium White Pressed Concrete Planter",
        original_price=28.00,
        discount=False,
        final_price=28.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/hexagon_planter_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/hexagon_planter_2.jpg"
    )

    terracotta_planter = Product(
        name="Rustic Terracotta Indoor Planter",
        category_id = 1,
        attributes="Rustic Terracotta Indoor Planter",
        original_price=72.00,
        discount=True,
        final_price=68.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/terracotta_planter_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/terracotta_planter_2.jpg"
    )

    white_planter = Product(
        name="Grace + Graham | Rounded Base Melamine Planter in White",
        category_id = 1,
        attributes="Grace + Graham | Rounded Base Melamine Planter in White",
        original_price=22.00,
        discount=False,
        final_price=22.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/white_planter_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/white_planter_1.jpg"
    )

    gloves_tools = Product(
        name="PLUS 6 | Reinforced Denim and Canvas Gloves",
        category_id = 7,
        attributes="PLUS 6 | Reinforced Denim and Canvas Gloves",
        original_price=14.95,
        discount=False,
        final_price=14.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/gloves_tools_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/gloves_tools_2.jpg"
    )

    pailset_tools = Product(
        name="Sophie Conran Vintage Fork and Trowel",
        category_id = 7,
        attributes="Sophie Conran Garden Fork and Trowel",
        original_price=22.95,
        discount=False,
        final_price=22.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/pailset_tools_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/pailset_tools_2.jpg"
    )

    scoop_tools = Product(
        name="Melamine & Rubber Garden Scoop | TEAL",
        category_id = 7,
        attributes="Melamine and Rubber Garden Scoop | TEAL",
        original_price=14.25,
        discount=True,
        final_price=12.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/scoop_tools_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/scoop_tools_2.jpg"
    )

    set_tools = Product(
        name="County + Couth | Ultimate Tool Set",
        category_id = 7,
        attributes="County + Couth | Ultimate Tool Set",
        original_price=24.75,
        discount=False,
        final_price=24.75,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/set_tools_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/set_tools_2.jpg"
    )

    spray_tools = Product(
        name="24 oz. Tinted Glass Spray Bottle (Set of 2)",
        category_id = 7,
        attributes="24 oz. Tinted Glass Spray Bottle (Set of 2)",
        original_price=18.00,
        discount=False,
        final_price=18.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/spray_tools_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/spray_tools_2.jpg"
    )

    wheelbarrow_tools = Product(
        name="Garden Me | Garden Wheelbarrow and Basket",
        category_id = 7,
        attributes="Garden Me | Garden Wheelbarrow and Basket",
        original_price=49.99,
        discount=False,
        final_price=49.99,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/wheelbarrow_tools_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/wheelbarrow_tools_2.jpg"
    )

    cactus_plants = Product(
        name="Ashley | Cactus in Glazed Pot",
        category_id = 3,
        attributes="Garden Me | Garden Wheelbarrow and Basket, Plants",
        original_price=59.99,
        discount=False,
        final_price=59.99,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/cactus_plants_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/cactus_plants_2.jpg"
    )

    fern_plants = Product(
        name="Potted Wood Fern | Korean Labs",
        category_id = 3,
        attributes="Potted Wood Fern | Korean Labs, Plants",
        original_price=27.00,
        discount=False,
        final_price=27.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/fern_plants_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/fern_plants_2.jpg"
    )

    rubber_plants = Product(
        name="Indoor Rubber Plant | Concrete & Pine Planter",
        category_id = 3,
        attributes="Indoor Rubber Plant | Concrete & Pine Planter, Plants",
        original_price=32.50,
        discount=False,
        final_price=32.50,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/rubber_plants_2.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/rubber_plants_1.jpg"
    )

    set_plants = Product(
        name="Tropical Plant Set",
        category_id = 3,
        attributes="Tropical Plant Set, Plants",
        original_price=72.50,
        discount=True,
        final_price=62.50,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/set_plants_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/set_plants_2.jpg"
    )

    succulent_plants = Product(
        name="Armitage | Succulent Set in Textured Bone Planter",
        category_id = 3,
        attributes="Armitage | Succulent Set in Textured Bone Planter, Plants",
        original_price=42.50,
        discount=False,
        final_price=42.50,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/succulent_plants_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/succulent_plants_2.jpg"
    )

    zz_plants = Product(
        name="A to Z | ZZ Plant",
        category_id = 3,
        attributes="A to Z | ZZ Plant, Plants",
        original_price=12.50,
        discount=False,
        final_price=12.50,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/zz_plants_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/zz_plants_2.jpg"
    )

    allium_seeds = Product(
        name="Gladiator Allium Bulbs, Set of 6",
        category_id = 8,
        attributes="Gladiator Allium Bulbs, Set of 6",
        original_price=18.99,
        discount=False,
        final_price=18.99,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/allium_seeds_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/allium_seeds_2.jpg"
    )

    aster_seeds = Product(
        name="New England Aster",
        category_id = 8,
        attributes="New England Aster",
        original_price=6.95,
        discount=False,
        final_price=6.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/aster_seeds_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/aster_seeds_2.jpg"
    )

    columbine_seeds = Product(
        name="Eastern Red Columbine (Set of 2)",
        category_id = 8,
        attributes="Eastern Red Columbine",
        original_price=6.95,
        discount=False,
        final_price=6.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/columbine_seeds_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/columbine_seeds_2.jpg"
    )

    coneflower_seeds = Product(
        name="1 LB Echinacea Coneflower + Canvas Bag",
        category_id = 8,
        attributes="1 LB Echinacea Coneflower",
        original_price=21.80,
        discount=False,
        final_price=21.80,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/coneflower_seeds_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/coneflower_seeds_2.jpg"
    )

    goldenrod_seeds = Product(
        name="1 LB Goldenrod Pollination Set",
        category_id = 8,
        attributes="1 LB Goldenrod Pollination Set",
        original_price=18.80,
        discount=True,
        final_price=15.80,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/goldenrod_seeds_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/goldenrod_seeds_2.jpg"
    )

    milkweed_seeds = Product(
        name="LIMITED | Purple Milkweed 4oz.",
        category_id = 8,
        attributes="LIMITED | Purple Milkweed 4oz.",
        original_price=32.80,
        discount=False,
        final_price=32.80,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/milkweed_seeds_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/Milkweed2.jpg"
    )

    apple_sbb = Product(
        name="Apple Blossom + Indigo Stamped Planter",
        category_id = 5,
        attributes="Apple Blossom + Indigo Stamped Planter",
        original_price=32.80,
        discount=False,
        final_price=32.80,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/apple_sbb_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/apple_sbb_2.jpg"
    )

    bay_sbb = Product(
        name="Bay Branch Set & Yin Yang Vase",
        category_id = 5,
        attributes="Bay Branch Set & Yin Yang Vase",
        original_price=22.25,
        discount=False,
        final_price=22.25,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/bay_sbb_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/bay_sbb_2.jpg"
    )

    dry_sbb = Product(
        name="Dried WildFlower Bunch",
        category_id = 5,
        attributes="Dried WildFlower Bunch",
        original_price=12.25,
        discount=False,
        final_price=12.25,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/dry_sbb_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/dry_sbb_2.jpg"
    )

    ikebana_sbb = Product(
        name="Ikebana + Rose | Red Sponge Vase",
        category_id = 5,
        attributes="Ikebana + Rose | Red Sponge Vase",
        original_price=35.25,
        discount=True,
        final_price=27.75,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/ikebana_sbb_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/ikebana_sbb_2.jpg"
    )

    pink_sbb = Product(
        name="Pastel Orchid | Pastel Vase Trio",
        category_id = 5,
        attributes="Pastel Orchid | Pastel Vase Trio",
        original_price=22.25,
        discount=False,
        final_price=22.25,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/pink_sbb_2.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/pink_sbb_1.jpg"
    )

    smoke_sbb = Product(
        name="Ellis Pastoral Original | Smoke Wedding Bouquet in Brass",
        category_id = 5,
        attributes="Ellis Pastoral Original | Smoke Wedding Bouquet in Brass",
        original_price=42.25,
        discount=False,
        final_price=42.25,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/smoke_sbb_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/smoke_sbb_2.jpg"
    )

    db.session.add(kalos_botanical)
    db.session.add(mitzie_botanical)
    db.session.add(phaedra_botanical)
    db.session.add(rosewater_botanical)
    db.session.add(tahnyc_botanical)
    db.session.add(verdant_botanical)

    db.session.add(bergamot_candle)
    db.session.add(ceramic_candle)
    db.session.add(fenwick_candle)
    db.session.add(hay_candle)
    db.session.add(morra_candle)
    db.session.add(russian_candle)

    db.session.add(banana_faux)
    db.session.add(cotton_faux)
    db.session.add(fig_faux)
    db.session.add(paradise_faux)
    db.session.add(oakparadise_faux)
    db.session.add(philodendron_faux)

    db.session.add(copper_planter)
    db.session.add(cork_planter)
    db.session.add(geometric_planter)
    db.session.add(hexagon_planter)
    db.session.add(terracotta_planter)
    db.session.add(white_planter)

    db.session.add(gloves_tools)
    db.session.add(pailset_tools)
    db.session.add(scoop_tools)
    db.session.add(set_tools)
    db.session.add(spray_tools)
    db.session.add(wheelbarrow_tools)

    db.session.add(cactus_plants)
    db.session.add(fern_plants)
    db.session.add(rubber_plants)
    db.session.add(set_plants)
    db.session.add(succulent_plants)
    db.session.add(zz_plants)

    db.session.add(allium_seeds)
    db.session.add(aster_seeds)
    db.session.add(columbine_seeds)
    db.session.add(coneflower_seeds)
    db.session.add(goldenrod_seeds)
    db.session.add(milkweed_seeds)

    db.session.add(apple_sbb)
    db.session.add(bay_sbb)
    db.session.add(dry_sbb)
    db.session.add(ikebana_sbb)
    db.session.add(pink_sbb)
    db.session.add(smoke_sbb)

    db.session.commit()


def undo_products():
    db.session.execute("TRUNCATE products RESTART IDENTITY CASCADE;")
    db.session.commit()