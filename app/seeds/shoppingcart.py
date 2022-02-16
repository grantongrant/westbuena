from app.models import db
from app.models.shoppingcart import CartItem


def seed_cart_items():
    item1 = CartItem(user_id = 1, product_id = 1, quantity = 1)
    item2 = CartItem(user_id = 2, product_id = 2, quantity = 2)
    item3 = CartItem(user_id = 3, product_id = 3, quantity = 1)
    item4 = CartItem(user_id = 1, product_id = 4, quantity = 2)
    item5 = CartItem(user_id = 2, product_id = 5, quantity = 1)
    item6 = CartItem(user_id = 3, product_id = 6, quantity = 2)
    
    db.session.add(item1)
    db.session.add(item2)
    db.session.add(item3)
    db.session.add(item4)
    db.session.add(item5)
    db.session.add(item6)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_cart_items():
    db.session.execute("TRUNCATE cart_items RESTART IDENTITY CASCADE;")
    db.session.commit()
