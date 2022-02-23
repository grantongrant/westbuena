from unicodedata import category
from app.models import db, Product


def seed_products():
    
    kalos_botanical = Product(
        name="Mist Congeniality | Rose Water Hyrda-Mist",
        category_id = 2,
        attributes='Vegan; Cruelty-Free; Plumping; Moisturizing; Nourishing',
        original_price=22.00,
        discount=False,
        final_price=22.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/kalos_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/kalos_botanical_2.jpg"
    )

    mitzie_botanical = Product(
        name="Mitzie | Lavender + Mint All-Purpose Cleaner (Set of 2)",
        category_id = 2,
        attributes="",
        original_price=28.00,
        discount=False,
        final_price=28.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/mitzie_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/mitzie_botanical_2.jpg"
    )

    phaedra_botanical = Product(
        name="Phaedra | Erato's Multipurpose Essence",
        category_id = 2,
        attributes="",
        original_price=78.00,
        discount=True,
        final_price=66.30,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/phaedra_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/phaedra_botanical_2.jpg"
    )

    rosewater_botanical = Product(
        name="Pearlessence | Aloe Rosewater Soothing Fact Mist",
        category_id = 2,
        attributes="",
        original_price=14.00,
        discount=False,
        final_price=14.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/rosewater_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/rosewater_botanical_2.jpg"
    )

    tahnyc_botanical = Product(
        name="Tahnyc | Vitamic C + AHA & Peptides Serum",
        category_id = 2,
        attributes="",
        original_price=64.00,
        discount=False,
        final_price=64.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/tahnyc_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/tahnyc_botanical_2.jpg"
    )

    verdant_botanical = Product(
        name="Verdant Lab | Lavender Hand Sanitizer (Set of 2)",
        category_id = 2,
        attributes="",
        original_price=32.00,
        discount=True,
        final_price=28.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/verdant_botanical_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/verdant_botanical_2.jpeg"
    )

    bergamot_candle = Product(
        name="Bergamot + Bourbon Scented Candle",
        category_id = 6,
        attributes="",
        original_price=19.95,
        discount=False,
        final_price=19.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/bergamot_candle_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/bergamot_candle_2.jpg"
    )

    ceramic_candle = Product(
        name="St Evan | Hand-Painted Ceramic Vanilla Crackle",
        category_id = 6,
        attributes="",
        original_price=39.95,
        discount=True,
        final_price=32.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/ceramic_candle_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/ceramic_candle_2.jpg"
    )

    fenwick_candle = Product(
        name="Fenwick | Organic Coconut Wax Candle (Black Spruce)",
        category_id = 6,
        attributes="",
        original_price=16.95,
        discount=False,
        final_price=16.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/fenwick_candle_2.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/fenwick_candle_1.jpg"
    )

    hay_candle = Product(
        name="Kb69 | Small Batch Premium Wax Dry Hay No. 1",
        category_id = 6,
        attributes="",
        original_price=22.95,
        discount=False,
        final_price=22.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/hay_candle_2.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/hay_candle_1.jpg"
    )

    morra_candle = Product(
        name="Morra | Aromatic Garden + Exclusive Musk (Set of 2)",
        category_id = 6,
        attributes="",
        original_price=28.00,
        discount=True,
        final_price=24.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/morra_candle_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/morra_candle_2.jpg"
    )

    russian_candle = Product(
        name="DRY | Russian Aromatherapy",
        category_id = 6,
        attributes="",
        original_price=9.00,
        discount=False,
        final_price=9.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/russian_candle_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/russian_candle_2.jpg"
    )

    banana_faux = Product(
        name="Banana Leaf in Concrete Planter",
        category_id = 4,
        attributes="",
        original_price=59.00,
        discount=False,
        final_price=59.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/banana_faux_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/banana_faux_2.jpg"
    )

    cotton_faux = Product(
        name="Natural Hills Collection | Cotton Stems",
        category_id = 4,
        attributes="",
        original_price=34.95,
        discount=True,
        final_price=32.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/cotton_faux_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/cotton_faux_2.jpg"
    )

    fig_faux = Product(
        name="FiddleLeaf Fig + New England Large Weave Basket",
        category_id = 4,
        attributes="",
        original_price=189.95,
        discount=False,
        final_price=189.95,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/fig_faux_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/fig_faux_2.jpg"
    )

    paradise_faux = Product(
        name="Paradise Plant | Sculptural 48 Inches",
        category_id = 4,
        attributes="",
        original_price=202.00,
        discount=True,
        final_price=164.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/paradise_faux_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/paradise_faux_2.jpg"
    )

    oakparadise_faux = Product(
        name="Paradise Plant | Tabletop Oak Base",
        category_id = 4,
        attributes="",
        original_price=68.00,
        discount=False,
        final_price=68.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/paradise_faux_3.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/paradise_faux_4.jpg"
    )

    philodendron_faux = Product(
        name="Glorious Philodendron Upright Stalks (Set of 2)",
        category_id = 4,
        attributes="",
        original_price=24.00,
        discount=False,
        final_price=24.00,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/philodendron_faux_1.jpg",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/philodendron_faux_2.jpg"
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

    db.session.commit()

def undo_products():
    db.session.execute("TRUNCATE products RESTART IDENTITY CASCADE;")
    db.session.commit()