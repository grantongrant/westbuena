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

    db.session.add(kalos_botanical)
    db.session.add(mitzie_botanical)
    db.session.add(phaedra_botanical)
    db.session.add(rosewater_botanical)
    db.session.add(tahnyc_botanical)
    db.session.add(verdant_botanical)

    db.session.commit()

def undo_products():
    db.session.execute("TRUNCATE products RESTART IDENTITY CASCADE;")
    db.session.commit()