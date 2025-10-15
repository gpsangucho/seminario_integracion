"""
Sistema de pago por hora y horas trabajadas.
las primeras 40horas son normales 
las extras se pagan al 150%
Calcula y muestra el total semanal
"""
costohora = 10
horasLaboradas = int(input("Ingresa las horas trabajadas: "))

if (horasLaboradas <=40):
    total = costohora*horasLaboradas
    print("total semanal: ",total)
else:
    horasExtras = horasLaboradas - 40
    total = costohora*40 + costohora*horasExtras*2.5
    print("Total semanal: ", total)
