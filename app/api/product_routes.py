from flask import Blueprint
from app.models import Product, Category

product_routes = Blueprint("products", __name__)

@product_routes.route("/")
def get_all_products():
    products = Product.query.all()
    return {"products": [product.to_dict() for product in products]}

@product_routes.route('/<int:id>')
def get_product_by_id(id):
    product = Product.query.get(id)
    return product.to_dict()

@product_routes.route('/categories')
def get_product_by_category():
    categories = Category.query.all()
    return {"categories": [category.to_dict() for category in categories]}