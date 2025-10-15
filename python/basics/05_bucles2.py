"""
Pide el numero de empleados y luego el sueldo de cada uno
suma y muestra la nomina total
"""
num = int(input("ingrese el numero de empleados"))
total = 0.0

for i in range(num) :
    sueldo = float(input("ingrese el sueldo del empleado: "))
    total +=sueldo
 
print(f"La nomina total es: {total}")   