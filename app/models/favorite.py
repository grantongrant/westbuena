from .db import db


class Favorite(db.Model):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)

    user = db.relationship("User", back_populates="favorites")
    product = db.relationship("Product", back_populates="favorites")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'product': {
                'id': self.product.id,
                'name': self.product.name,
                'original_price': str(self.product.original_price),
                'discount': self.product.discount,
                'final_price': str(self.product.final_price),
                'image_url1': self.product.image_url1,
                'image_url2': self.product.image_url2,
            }
        }