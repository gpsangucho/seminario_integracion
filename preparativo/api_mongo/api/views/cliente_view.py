from rest_framework.decorators import api_view
from rest_framework.response import Response
from bson import ObjectId
from ..mongo import clientes_collection
from ..serializers.cliente_serializer import ClienteSerializer
from ..utils import serialize_doc


@api_view(["GET"])
def listar_clientes(request):
    clientes = list(clientes_collection.find())
    return Response([serialize_doc(c) for c in clientes])


@api_view(["POST"])
def crear_cliente(request):
    serializer = ClienteSerializer(data=request.data)
    if serializer.is_valid():
        result = clientes_collection.insert_one(serializer.validated_data)
        nuevo = clientes_collection.find_one({"_id": result.inserted_id})
        return Response(serialize_doc(nuevo))
    return Response(serializer.errors, status=400)


@api_view(["PUT"])
def actualizar_cliente(request, id):
    serializer = ClienteSerializer(data=request.data)
    if serializer.is_valid():
        clientes_collection.update_one(
            {"_id": ObjectId(id)},
            {"$set": serializer.validated_data}
        )
        actualizado = clientes_collection.find_one({"_id": ObjectId(id)})
        return Response(serialize_doc(actualizado))
    return Response(serializer.errors, status=400)


@api_view(["DELETE"])
def eliminar_cliente(request, id):
    clientes_collection.delete_one({"_id": ObjectId(id)})
    return Response({"mensaje": "Cliente eliminado"})