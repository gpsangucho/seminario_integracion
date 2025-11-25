from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['POST'])
def area_triangulo(request):
    try:
        base = float(request.data.get('base',0))
        altura = float(request.data.get('altura',0))
    except (TypeError, ValueError):
        return Response({"error":"Parámetros inválidos"}),
    area = (base*altura)/2
    return Response({
        "base":base,
        "altura":altura,
        "area":area
    })
    

@api_view(['GET'])
def tabla_multiplicar(request):
    try:
        n = int(request.query_params.get('numero',0))
        
    except (TypeError, ValueError):
        return Response({"error":"Números inválidos"},
                        status = status.HTTP_400_BAD_REQUEST)
        
    tabla = [f"{n}x{i}={n*1}" for i in range(1,11) ]
    return Response({
        "numero":n,
        "tabla":tabla,
    })
    
@api_view(['POST'])
def contar_mayores(request):
    
    #Validación de valores ingresados
    try:
        numeros = request.data.get('numeros',[])
        limite = request.data.get('limite',0)
    except (TypeError,ValueError):
        return Response({"error": "Parámetros inválidos"},
                        status = status.HTTP_400_BAD_REQUEST)
        
    #Validacion de transformacion de numeros
    try:
        lista_numeros = [float(n) for n in numeros]
        limite=float(limite)
    except (TypeError, ValueError):
        return Response({"error":" Valores numéricos inválidos"},
                        status = status.HTTP_40_BAD_REQUEST)
        
    #Cálculo
    contador = 0
    for n in lista_numeros:
        if n > limite:
            contador +=1
    
    return Response({
        "numeros":lista_numeros,
        "limite": limite,
        "mayores": contador        
    })
    
@api_view(['POST'])
def sumar_consecutivos(request):
    #Ingreso de datos válidos
    try:
        limite = request.data.get('limite',0)
    except (TypeError,ValueError):
        return Response({"error":"Parámetros inválidos"},
                        status = status.HTTP_400_BAD_REQUEST)
    
    #Cálculo
    resultado = 0
    i=1
    while i <= limite:
        resultado +=i
        i+=1
        
    return Response({
        "limite" : limite,
        "resultado":resultado
    })


@api_view(['POST'])
def promedio(request):
    try:
        numeros = request.data.get('numeros',[])    
    except (TypeError,ValueError):
        return Response({"error":"Parámetros inválidos"},
                        status=status.HTTP_400_BAD_REQUEST)
    
    try:
        lista_numeros = [float(n) for n in numeros]
    except (TypeError,ValueError):
        return Response({"error":"Números inválidos"},
                        status = status.HTTP_400_BAD_REQUEST)
    
    suma = 0
    
    for n in lista_numeros:
        suma +=n
    
    print(lista_numeros)
    resultado = suma/len(lista_numeros)
    
    return Response({
        "numeros":lista_numeros,
        "promedio":resultado,
    })
    
    
        