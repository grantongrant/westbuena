from app.models import db, User
import os

seed_password = os.environ.get("SEED_PASSWORD")

# Adds a demo user, you can add other users here if you want
def seed_users():
    montrose = User(
        full_name= 'Montrose Irving', email='montrose@aa.io', password=seed_password)
    belle = User(
        full_name='Belle Plaine', email='belle@aa.io', password=seed_password)
    sheridan = User(
        full_name='Sheridan Sheffield', email='sheridan@aa.io', password=seed_password)

    db.session.add(montrose)
    db.session.add(belle)
    db.session.add(sheridan)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
