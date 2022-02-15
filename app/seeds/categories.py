from app.models import db, Category


def seed_categories():
    
    planters = Category(
        name="Planters")
    
    terrariums = Category(
        name="Terrariums")

    live_plants = Category(
        name="Live Plants")

    faux_plants = Category(
        name="Faux Plants")

    stems_branches_bouquets = Category(
        name="Stems, Branches & Bouquets")

    wreaths_garlands = Category(
        name="Wreaths & Garlands")

    garden_tools = Category(
        name="Garden Tools")

    garden_decor = Category(
        name="Garden Decor")

    seeds = Category(
        name="Seeds")

    db.session.add(planters)
    db.session.add(terrariums)
    db.session.add(live_plants)
    db.session.add(faux_plants)
    db.session.add(stems_branches_bouquets)
    db.session.add(wreaths_garlands)
    db.session.add(garden_tools)
    db.session.add(garden_decor)
    db.session.add(seeds)

    db.session.commit()

def undo_categories():
    db.session.execute("TRUNCATE categories RESTART IDENTITY CASCADE;")
    db.session.commit()