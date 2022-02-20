from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, BooleanField
from wtforms.validators import DataRequired
from app.models import Product, Category


class OrderForm(FlaskForm):
    order_number = IntegerField('order_number')
    user_id = IntegerField('user_id')
    product_id = IntegerField('product_id')
    quantity = IntegerField('quantity')
    price = StringField('price')
    sales_tax = StringField('sales_tax')
    total = StringField('total')