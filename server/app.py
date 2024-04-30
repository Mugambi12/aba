from flask import Flask, request, jsonify
from werkzeug.utils import cached_property
from flask_restx import Api, Resource, fields
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

api = Api(app,
          version='1.0',
          title='Biodiversity API',
          description='A simple API for managing biodiversity data',
          doc='/api/docs')


species_model = api.model('Species', {
    'name': fields.String(required=True, description='The name of the species'),
    'habitat': fields.String(required=True, description='The habitat of the species'),
    'conservation_status': fields.String(required=True, description='The conservation status of the species'),
})

habitat_model = api.model('Habitat', {
    'name': fields.String(required=True, description='The name of the habitat'),
    'description': fields.String(required=True, description='The description of the habitat'),
})

user_model = api.model('User', {
    'username': fields.String(required=True, description='The username of the user'),
    'role': fields.String(required=True, description='The role of the user'),
})


species_data = {
    '1': {'name': 'Lion', 'habitat': 'Savannah', 'conservation_status': 'Vulnerable'},
    '2': {'name': 'Elephant', 'habitat': 'Forest', 'conservation_status': 'Endangered'},
}

habitats_data = {
    '1': {'name': 'Savannah', 'description': 'Grassland ecosystem'},
    '2': {'name': 'Forest', 'description': 'Woodland ecosystem'},
}

users_data = {
    '1': {'username': 'john_doe', 'role': 'researcher'},
    '2': {'username': 'jane_smith', 'role': 'conservationist'},
}


@api.route('/species')
class SpeciesResource(Resource):
    @api.doc(description='Get a list of all species')
    @api.marshal_with(species_model, as_list=True)
    def get(self):
        return list(species_data.values())

    @api.doc(description='Create a new species')
    @api.expect(species_model)
    def post(self):
        new_species = request.json
        new_id = str(len(species_data) + 1)
        species_data[new_id] = new_species
        return {'message': 'Species created', 'id': new_id}, 201


@api.route('/species/<species_id>')
class SpeciesByIDResource(Resource):
    @api.doc(description='Get a specific species by ID')
    @api.marshal_with(species_model)
    def get(self, species_id):
        species = species_data.get(species_id)
        if species:
            return species
        else:
            api.abort(404, f"Species with ID {species_id} not found.")

    @api.doc(description='Update a specific species by ID')
    @api.expect(species_model)
    def put(self, species_id):
        if species_id in species_data:
            species_data[species_id].update(request.json)
            return {'message': 'Species updated'}
        else:
            api.abort(404, f"Species with ID {species_id} not found.")

    @api.doc(description='Delete a specific species by ID')
    def delete(self, species_id):
        if species_id in species_data:
            del species_data[species_id]
            return {'message': 'Species deleted'}
        else:
            api.abort(404, f"Species with ID {species_id} not found.")


@api.route('/habitats')
class HabitatResource(Resource):
    @api.doc(description='Get a list of all habitats')
    @api.marshal_with(habitat_model, as_list=True)
    def get(self):
        return list(habitats_data.values())

    @api.doc(description='Create a new habitat')
    @api.expect(habitat_model)
    def post(self):
        new_habitat = request.json
        new_id = str(len(habitats_data) + 1)
        habitats_data[new_id] = new_habitat
        return {'message': 'Habitat created', 'id': new_id}, 201


@api.route('/habitats/<habitat_id>')
class HabitatByIDResource(Resource):
    @api.doc(description='Get a specific habitat by ID')
    @api.marshal_with(habitat_model)
    def get(self, habitat_id):
        habitat = habitats_data.get(habitat_id)
        if habitat:
            return habitat
        else:
            api.abort(404, f"Habitat with ID {habitat_id} not found.")

    @api.doc(description='Update a specific habitat by ID')
    @api.expect(habitat_model)
    def put(self, habitat_id):
        if habitat_id in habitats_data:
            habitats_data[habitat_id].update(request.json)
            return {'message': 'Habitat updated'}
        else:
            api.abort(404, f"Habitat with ID {habitat_id} not found.")

    @api.doc(description='Delete a specific habitat by ID')
    def delete(self, habitat_id):
        if habitat_id in habitats_data:
            del habitats_data[habitat_id]
            return {'message': 'Habitat deleted'}
        else:
            api.abort(404, f"Habitat with ID {habitat_id} not found.")


@api.route('/users')
class UserResource(Resource):
    @api.doc(description='Get a list of all users')
    @api.marshal_with(user_model, as_list=True)
    def get(self):
        return list(users_data.values())

    @api.doc(description='Create a new user')
    @api.expect(user_model)
    def post(self):
        new_user = request.json
        new_id = str(len(users_data) + 1)
        users_data[new_id] = new_user
        return {'message': 'User created', 'id': new_id}, 201


@api.route('/users/<user_id>')
class UserByIDResource(Resource):
    @api.doc(description='Get a specific user by ID')
    @api.marshal_with(user_model)
    def get(self, user_id):
        user = users_data.get(user_id)
        if user:
            return user
        else:
            api.abort(404, f"User with ID {user_id} not found.")

    @api.doc(description='Update a specific user by ID')
    @api.expect(user_model)
    def put(self, user_id):
        if user_id in users_data:
            users_data[user_id].update(request.json)
            return {'message': 'User updated'}
        else:
            api.abort(404, f"User with ID {user_id} not found.")

    @api.doc(description='Delete a specific user by ID')
    def delete(self, user_id):
        if user_id in users_data:
            del users_data[user_id]
            return {'message': 'User deleted'}
        else:
            api.abort(404, f"User with ID {user_id} not found.")


if __name__ == '__main__':
    app.run(debug=True)
