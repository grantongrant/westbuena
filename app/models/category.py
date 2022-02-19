from .db import db


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    title = db.Column(db.String(100), nullable=False)

    products = db.relationship("Product", back_populates="category")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'title': self.title
        }
