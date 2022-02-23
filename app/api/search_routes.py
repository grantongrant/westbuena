from flask import Blueprint
from app.models import Product
from sqlalchemy import func


search_routes = Blueprint("search", __name__)


@search_routes.route('/<string:query>')
def get_products_by_search(query):
    print("query", query)
    standardized_query = query.lower()
    print(standardized_query)
    products = Product.query.filter(func.lower(Product.name).contains(standardized_query))
    print("PRODUCTS:", products) 
    return {"products": [product.to_dict() for product in products]}