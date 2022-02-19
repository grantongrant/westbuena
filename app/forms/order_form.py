from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, BooleanField
from wtforms.validators import DataRequired
from app.models import Product, Category


class OrderForm(FlaskForm):
    user_id = IntegerField('user_id', [DataRequired()])
    produdct_id = IntegerField('product_id', [DataRequired()])
    quantity = IntegerField('quantity', [DataRequired()])
    price = DecimalField('price', [DataRequired()])
    sales_tax = DecimalField('sales_tax', [DataRequired()])
    total = DecimalField('total', [DataRequired()])
    delivered = BooleanField('delivered', [DataRequired()])