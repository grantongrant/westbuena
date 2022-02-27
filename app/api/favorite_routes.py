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
    new_fav = Favorite(user_id = data["userId"], product_id = data["productId"])
    db.session.add(new_fav)
    db.session.commit()

    return new_fav.to_dict()


# DELETE


@favorite_routes.route("/", methods=["DELETE"])
def remove_from_favs():

    data = request.json
    favorite = Favorite.query.filter(Favorite.user_id == data["userId"], Favorite.product_id == data["productId"]).first()
    print (favorite)
    db.session.delete(favorite)
    db.session.commit()

    return favorite.to_dict()