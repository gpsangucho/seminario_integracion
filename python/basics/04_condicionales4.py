"""
Pide salario y clasifica el cargo 
<1000 junior


"""

salario = int(input("ingrese el salario: "))
cargo = "ninguno"

if (salario < 1000):
    cargo = "junior"
elif(salario >=1000 and salario <=2000):
    cargo = "semi_senior"
elif(salario > 2000):
    cargo = "senior"
    
print(f"Su cargo es {cargo}")

"""
PS Y:\seminario_integracion> python Y:\SEMINARIO_INTEGRACION\python\basics\04_condicionales4.py
ingrese el salario: 5226
Su cargo es senior
PS Y:\seminario_integracion> python Y:\SEMINARIO_INTEGRACION\python\basics\04_condicionales4.py
ingrese el salario: 252
Su cargo es junior
PS Y:\seminario_integracion> 
"""