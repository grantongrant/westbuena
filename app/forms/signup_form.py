from sre_constants import IN
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo, InputRequired
from app.models import User
import re

email_regex = re.compile(r"[^@]+@[^@]+\.[^@]+")


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def valid_email(form, field):
    # Checking if email is valid
    email = field.data

    if not email_regex.match(email):
        raise ValidationError('Please provide a valid email address.')


class SignUpForm(FlaskForm):
    fullName = StringField('fullName', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), EqualTo("confirmEmail", message='Please provide matching emails.'), user_exists, valid_email,])
    confirmEmail = StringField('confirmEmail', [DataRequired()])
    password = StringField('password', validators=[DataRequired(), EqualTo("confirmPassword", message='Please provide matching passwords.')])
    confirmPassword = StringField('confirmPassword', [DataRequired()])
