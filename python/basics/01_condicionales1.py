"""
Escribe un programa que pida edad, años de experiencia y si tiene titulo universitadior.
Un candidato es elegido si tiene >=21 años y experiencia d >=2 años o titulo
Muestra elegible o no elegible
"""

edad = int(input("Edad del candidato: "))
exp = float(input("Anios de experiencia: "))
tiene_titulo = input("Tiene título universitario: ").strip().lower()=="s"

if (edad >= 21 and (exp >=2 or tiene_titulo=="s")):
    print("Elegible")
else:
    print("no elegible")
    
    """ https://github.com/franciscohiguera1975/seminario_integracion.git """
    
    """
    PS Y:\SEMINARIO_INTEGRACION> python Y:\SEMINARIO_INTEGRACION\python\basics\01_condicionales1.py  
    Edad del candidato: 25
    Anios de experiencia: 5
    Tiene título universitario: no
    Elegible
    """