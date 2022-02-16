from app.models import db, Category


def seed_categories():
    
    planters = Category(
        name="Planters")
    
    botanicals = Category(
        name="Botanicals")

    live_plants = Category(
        name="Live Plants")

    faux_plants = Category(
        name="Faux Plants")

    stems_branches_bouquets = Category(
        name="Stems, Branches & Bouquets")

    candles = Category(
        name="Candles")

    garden_tools = Category(
        name="Garden Tools")

    garden_decor = Category(
        name="Garden Decor")

    seeds = Category(
        name="Seeds")

    db.session.add(planters)
    db.session.add(botanicals)
    db.session.add(live_plants)
    db.session.add(faux_plants)
    db.session.add(stems_branches_bouquets)
    db.session.add(candles)
    db.session.add(garden_tools)
    db.session.add(garden_decor)
    db.session.add(seeds)

    db.session.commit()

def undo_categories():
    db.session.execute("TRUNCATE categories RESTART IDENTITY CASCADE;")
    db.session.commit()