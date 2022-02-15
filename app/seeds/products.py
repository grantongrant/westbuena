from app.models import db, Product


def seed_products():
    
    glass_metal_terrarium = Product(
        name="Glass + Metal Faceted Terrarium",
        category_id = 2,
        attributes='Glass and metal; Hinged door; Size: 6.25"w x 5.25"d x 4.5"h',
        original_price=35.00,
        discount=42,
        final_price=14.70,
        image_url1="https://res.cloudinary.com/ddxtopm0l/image/upload/v1644967313/westbuena/glass_metal_terrarium_image1_f2luyz.png",
        image_url2="https://res.cloudinary.com/ddxtopm0l/image/upload/v1644967313/westbuena/glass_metal_terrarium_image2_wghmyi.png"
    )

    db.session.add(glass_metal_terrarium)

    db.session.commit()

def undo_products():
    db.session.execute("TRUNCATE products RESTART IDENTITY CASCADE;")
    db.session.commit()