"""
Vacaciones por antiguiedad
Pide años de antiguedad y muestra dias de vacaciones segun
< 1 = 0
< 3 = 3
< 5 = 10 
>=5  = 15

"""

antiguedad = int(input("Ingrese los años de antiguedad: "))
dayVac = 0

if(antiguedad < 1):
   dayVac = 0
elif (antiguedad>= 1 and antiguedad <3 ):
    dayVac = 3
elif (antiguedad>=3 and antiguedad <5 ):
    dayVac = 10
elif (antiguedad>=5):
    dayVac = 15

print("Dìas de vacaciones: ",dayVac)

"""
PS Y:\seminario_integracion> python Y:\SEMINARIO_INTEGRACION\python\basics\03_condicionales3.py
Ingrese los años de antiguedad: 20
Dìas de vacaciones:  15
"""