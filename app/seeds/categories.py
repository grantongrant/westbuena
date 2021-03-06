from app.models import db, Category


def seed_categories():
    
    planters = Category(
        name="planters",
        title="Planters")
    
    botanicals = Category(
        name="botanicals",
        title="Botanicals")

    live_plants = Category(
        name="live-plants",
        title="Live Plants")

    faux_plants = Category(
        name="faux-plants",
        title="Faux Plants")

    stems_branches_bouquets = Category(
        name="stems-branches-bouquets",
        title="Stems, Branches & Bouquets")

    candles = Category(
        name="candles",
        title="Candles")

    garden_tools = Category(
        name="garden-tools",
        title="Garden Tools")

    seeds = Category(
        name="seeds",
        title="Seeds")

    db.session.add(planters)
    db.session.add(botanicals)
    db.session.add(live_plants)
    db.session.add(faux_plants)
    db.session.add(stems_branches_bouquets)
    db.session.add(candles)
    db.session.add(garden_tools)
    db.session.add(seeds)

    db.session.commit()

def undo_categories():
    db.session.execute("TRUNCATE categories RESTART IDENTITY CASCADE;")
    db.session.commit()