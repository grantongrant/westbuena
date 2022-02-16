from app.models import db, Product


def seed_products():
    
    glass_metal_terrarium = Product(
        name="Glass + Metal Faceted Terrarium",
        category_id = 2,
        attributes='Glass and metal; Hinged door; Size: 6.25"w x 5.25"d x 4.5"h',
        original_price=35.00,
        discount=42,
        final_price=14.70,
        image_url1="https://westbuena.s3.us-east-2.amazonaws.com/glass_metal_terrarium_image1.png",
        image_url2="https://westbuena.s3.us-east-2.amazonaws.com/glass_metal_terrarium_image2.png"
    )

    db.session.add(glass_metal_terrarium)

    db.session.commit()

def undo_products():
    db.session.execute("TRUNCATE products RESTART IDENTITY CASCADE;")
    db.session.commit()