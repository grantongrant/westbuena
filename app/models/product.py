from .db import db


class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    attributes = db.Column(db.String, nullable=True)
    original_price = db.Column(db.Numeric(6,2), nullable=False)
    discount = db.Column(db.Boolean, nullable=False, default=False)
    final_price = db.Column(db.Numeric(6,2), nullable=False)
    image_url1 = db.Column(db.String(500), nullable=False)
    image_url2 = db.Column(db.String(500), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)

    category = db.relationship("Category", back_populates="products")
    cart_items = db.relationship("CartItem", back_populates="product")
    orders = db.relationship("OrderDetail", back_populates="product")
    favorites = db.relationship("Favorite", back_populates="product")



    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category_id': self.category_id,
            'category': self.category.name,
            'attributes': self.attributes,
            'original_price': str(self.original_price),
            'discount': self.discount,
            'final_price': str(self.final_price),
            'image_url1': self.image_url1,
            'image_url2': self.image_url2,
            'favorites': [favorite.user_id for favorite in self.favorites]
        }
