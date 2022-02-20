from turtle import up
from flask import Blueprint, redirect, request
from app.forms.order_form import OrderForm
from app.models import Product, CartItem, OrderDetail, db
from datetime import datetime


order_routes = Blueprint("orders", __name__)


# CREATE


@order_routes.route('/', methods=["POST"])
def create_order():

    form = OrderForm()
    new_order = OrderDetail()
    form.populate_obj(new_order)
    db.session.add(new_order)
    db.session.commit()

    return new_order.to_dict()


# READ


@order_routes.route('/<int:id>')
def get_all_orders_by_user_id(id):
    orders = OrderDetail.query.filter(OrderDetail.user_id == id).all()
    return {"orders": [order.to_dict() for order in orders]}


@order_routes.route('/details/<int:id>')
def get_order_detail_by_order_id(id):
    order = OrderDetail.query.filter(OrderDetail.id == id).first()
    return order.to_dict()


# UPDATE


@order_routes.route('/details/<int:id>', methods=["PATCH"])
def update_order_by_order_id(id):

    data = request.json
    
    # Find the order, and then find the product attached to that order:
    order = OrderDetail.query.filter(OrderDetail.id == data["orderId"], OrderDetail.product_id == data["productId"]).first()

    # Find the product and then update the record based on the new data:
    product = Product.query.filter(Product.id == data["productId"]).first()
    price = float(product.final_price) * data["quantity"]
    sales_tax = float(price) *.10
    total = float(price) + sales_tax
    updated_at = datetime.now()

    order.quantity = data["quantity"]
    order.price = str(price)
    order.sales_tax = str(sales_tax)
    order.total = str(round(total,2))
    order.updated_at = updated_at
    db.session.commit()

    return order.to_dict()


# DELETE


@order_routes.route('/details/<int:id>', methods=['DELETE'])
def delete_order_by_order_id(id):

    order = OrderDetail.query.filter(OrderDetail.id == id).first()

    db.session.delete(order)
    db.session.commit()

    return {"message": "success"}

    