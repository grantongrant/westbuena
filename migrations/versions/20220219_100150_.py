"""empty message

Revision ID: 715564e09188
Revises: c934ef3696c5
Create Date: 2022-02-19 10:01:50.025236

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '715564e09188'
down_revision = 'c934ef3696c5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('order_details', sa.Column('returned', sa.Boolean(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('order_details', 'returned')
    # ### end Alembic commands ###
