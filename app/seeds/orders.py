from app.models import db, OrderDetail

def seed_orders():
    
    montrose_order1 = OrderDetail (
        user_id = 1,
        order_number = 968537,
        product_id = 4,
        quantity = 2,
        price = 28.00,
        sales_tax = 2.80,
        total = 30.80,
        delivered = True,
        returned = False
    )

    belle_order1 = OrderDetail (
        user_id = 2,
        order_number = 358963,
        product_id = 2,
        quantity = 1,
        price = 28.00,
        sales_tax = 2.80,
        total = 30.80,
        delivered = True,
        returned = True
    )

    sheridan_order1 = OrderDetail (
        user_id = 3,
        order_number = 970073,
        product_id = 1,
        quantity = 1,
        price = 22.00,
        sales_tax = 2.20,
        total = 24.20,
        delivered = True,
        returned = False
    )

    montrose_order2 = OrderDetail (
        user_id = 1,
        order_number = 900067,
        product_id = 3,
        quantity = 1,
        price = 66.30,
        sales_tax = 6.63,
        total = 72.93,
        delivered = False,
        returned = False,
    )

    belle_order2 = OrderDetail (
        user_id = 2,
        order_number = 188400,
        product_id = 5,
        quantity = 2,
        price = 128.00,
        sales_tax = 12.80,
        total = 140.80,
        delivered = False,
        returned = False,
    )

    sheridan_order2 = OrderDetail (
        user_id = 3,
        order_number = 333994,
        product_id = 6,
        quantity = 2,
        price = 56.00,
        sales_tax = 5.60,
        total = 61.60,
        delivered = False,
        returned = False,
    )
 

    db.session.add(montrose_order1)
    db.session.add(belle_order1)
    db.session.add(sheridan_order1)
    db.session.add(montrose_order2)
    db.session.add(belle_order2)
    db.session.add(sheridan_order2)


    db.session.commit()

def undo_orders():
    db.session.execute("TRUNCATE order_details RESTART IDENTITY CASCADE;")
    db.session.commit()
