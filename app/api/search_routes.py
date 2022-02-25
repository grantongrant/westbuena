from flask import Blueprint
from app.models import Product
from sqlalchemy import func


search_routes = Blueprint("search", __name__)


@search_routes.route('/<string:query>')
def get_products_by_search(query):
    standardized_query = query.lower()
    products = Product.query.filter(func.lower(Product.attributes).contains(standardized_query)).limit(15)
    return {"products": [product.to_dict() for product in products]}