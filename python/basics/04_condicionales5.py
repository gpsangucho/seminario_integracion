
"""
Pide salario y desempro (1-5)
si el desempeño es:
> 4 = 15%
> 3 = 10%
> 2 = 5%
> 1 = 2%
"""
salario = float(input("ingrese el salario. "))
performance = int(input("Ingrese el desempeño (1-5): "))

if(performance > 4):
    salario = salario*1.15
elif(performance > 3 and performance <= 4):
    salario = salario*1.1
elif(performance > 2 and performance <=3):
    salario = salario*1.05
elif(performance > 1 and performance <=2):
    salario = salario*1.02

print(f"El salario total es: {salario}")