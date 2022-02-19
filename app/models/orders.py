from .db import db


class OrderDetail(db.Model):
    __tablename__ = 'order_details'

    id = db.Column(db.Integer, primary_key=True)
    order_number = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Numeric(6,2), nullable=False)
    sales_tax = db.Column(db.Numeric(6,2), nullable=False)
    total = db.Column(db.Numeric(6,2), nullable=False)
    delivered = db.Column(db.Boolean, nullable=False, default=False)
    returned = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)

    user = db.relationship("User", back_populates="orders")
    product = db.relationship("Product", back_populates="orders")


    def to_dict(self):
        return {
            'id': self.id,
            'order_numbber': self.order_number,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'price': str(self.price),
            'sales_tax': str(self.sales_tax),
            'total': str(self.total),
            'delivered': self.delivered,
            'returned': self.returned,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'product': {
                'id': self.product.id,
                'name': self.product.name,
                'category': self.product.category.name,
                'image': self.product.image_url1,
            }
        }