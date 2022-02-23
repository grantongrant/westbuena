from flask import Blueprint
from app.models import Product
from sqlalchemy import func


search_routes = Blueprint("search", __name__)


@search_routes.route('/<string:query>')
def get_products_by_search(query):
    print("query", query)
    standardized_query = query.lower()
    products = Product.query.filter(func.lower(Product.title).contains(standardized_query)) 
    return {"products": [product.to_dict() for product in products]}