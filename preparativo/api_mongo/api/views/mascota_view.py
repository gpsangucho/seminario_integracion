from rest_framework.decorators import api_view
from rest_framework.response import Response
from bson import ObjectId
from ..mongo import mascotas_collection
from ..serializers.mascota_serializer import MascotaSerializer
from ..utils import serialize_doc


@api_view(["GET"])
def listar_mascotas(request):
    mascotas = list(mascotas_collection.find())
    return Response([serialize_doc(m) for m in mascotas])


@api_view(["POST"])
def crear_mascota(request):
    serializer = MascotaSerializer(data=request.data)
    if serializer.is_valid():
        result = mascotas_collection.insert_one(serializer.validated_data)
        nueva = mascotas_collection.find_one({"_id": result.inserted_id})
        return Response(serialize_doc(nueva))
    return Response(serializer.errors, status=400)


@api_view(["PUT"])
def actualizar_mascota(request, id):
    serializer = MascotaSerializer(data=request.data)
    if serializer.is_valid():
        mascotas_collection.update_one(
            {"_id": ObjectId(id)},
            {"$set": serializer.validated_data}
        )
        actualizada = mascotas_collection.find_one({"_id": ObjectId(id)})
        return Response(serialize_doc(actualizada))
    return Response(serializer.errors, status=400)


@api_view(["DELETE"])
def eliminar_mascota(request, id):
    mascotas_collection.delete_one({"_id": ObjectId(id)})
    return Response({"mensaje": "Mascota eliminada"})