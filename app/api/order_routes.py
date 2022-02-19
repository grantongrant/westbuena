from flask import Blueprint, redirect, request
from app.forms.order_form import OrderForm
from app.models import Product, CartItem, OrderDetail, db

order_routes = Blueprint("orders", __name__)


# CREATE


@order_routes.route('/', methods=["POST"])
def create_order():
    form = OrderForm()
    if form.validate_on_submit():
        new_order = OrderDetail()
        form.populate_ob(new_order)
        db.session.add(new_order)
        db.session.commit()
        return redirect ("/orders")
    return "Bad Data"


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

    order = OrderDetail.query.filter(OrderDetail.id == id).first()
    order.quantity = data["quantity"]
    db.session.commit()

    return order.to_dict()


# DELETE


@order_routes.route('/details/<int:id>', methods=['DELETE'])
def delete_order_by_order_id(id):

    order = OrderDetail.query.filter(OrderDetail.id == id).first()

    db.session.delete(order)
    db.session.commit()

    return {"message": "success"}

    