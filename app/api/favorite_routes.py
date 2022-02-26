from flask import Blueprint, request
from app.models import db
from app.models import Favorite


favorite_routes = Blueprint("favorites", __name__)


# READ (By passing in user id)


@favorite_routes.route("/<int:id>")
def get_favorites(id):
    favorites = Favorite.query.filter(Favorite.user_id == id).all()
    return {"favorites": [favorite.to_dict() for favorite in favorites]}


# CREATE


@favorite_routes.route("/", methods=["POST"])
def add_to_favs():

    data = request.json
    print("DATA LOOKS LIKE THIS", data)
    new_fav = Favorite(user_id = data["userId"], product_id = data["productId"])
    db.session.add(new_fav)
    db.session.commit()

    return new_fav.to_dict()