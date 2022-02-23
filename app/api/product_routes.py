from flask import Blueprint
from app.models import Product, Category


product_routes = Blueprint("products", __name__)

# GET ALL PRODUCTS


@product_routes.route("/")
def get_all_products():
    products = Product.query.all()
    return {"products": [product.to_dict() for product in products]}


# GET SINGLE PRODUCT BY PRODUCT ID


@product_routes.route('/<int:id>')
def get_product_by_id(id):
    product = Product.query.get(id)
    return product.to_dict()


# GET A DICTIONARY OF ALL CATEGORIES BY NAME


@product_routes.route('/categories')
def get_categories():
    categories = Category.query.all()
    return {"categories": [category.to_dict() for category in categories]}


# GET PRODUCTS FROM A SINGLE CATEGORY BY CATEGORY NAME


@product_routes.route('/<string:category>')
def get_products_by_category(category):
    cat = Category.query.filter(Category.name == category).first()
    products = Product.query.filter(Product.category_id == cat.id)
    return {"products": [product.to_dict() for product in products]}


# GET SALES PRODUCTS


@product_routes.route('/sale')
def get_sales_products():
    products = Product.query.filter(Product.discount == True).limit(16)
    return {"products": [product.to_dict() for product in products]}
