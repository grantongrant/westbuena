from flask import Blueprint, jsonify, request
from app.models import db
from app.models.shoppingcart import CartItem 

shopping_cart_routes = Blueprint("shopping_cart", __name__)

@shopping_cart_routes.route("/<int:id>")
def get_shoppingcart(id):
    items = CartItem.query.filter(CartItem.user_id == id).all()
    return {"items": [item.to_dict() for item in items]}

@shopping_cart_routes.route("/new", methods=["POST"])
def add_to_shoppingcart():
    pass

@shopping_cart_routes.route("/<int:id>", methods=["PUT"])
def update_shoppingcart():
    pass

@shopping_cart_routes.route("/delete", methods=["DELETE"])
def delete_shoppingcart():
    pass

