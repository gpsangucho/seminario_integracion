print("ESTRCUTURA DE CONTROL: FOR (REPETITIVO)")
"""
Pide cuantos dìas registraras
Para cada dìa ingresa T (tarde) o (ok) P (permiso)
Cuenta uy muestra tardanzas totales
"""
dias = int(input("¿Cuántos dìas vas a cargar: "))
tardes = 0

for i in range(dias):
    marca = input(f"Dias {i+1} (T=tarde, O=ok, P=permiso)").strip().upper()
    if marca == "T":
        tardes+=1
        
print(f"tardanzas totales: {tardes}")


"""
PS Y:\seminario_integracion> python Y:\SEMINARIO_INTEGRACION\python\basics\04_bucles1.py
ESTRCUTURA DE CONTROL: FOR (REPETITIVO)
¿Cuantos dìas vas a cargar5
Dias 1 (T=tarde, O=ok, P=permiso)p
Dias 2 (T=tarde, O=ok, P=permiso)t
Dias 3 (T=tarde, O=ok, P=permiso)t
Dias 4 (T=tarde, O=ok, P=permiso)o
Dias 5 (T=tarde, O=ok, P=permiso)t
tardanzas totales: 3
"""