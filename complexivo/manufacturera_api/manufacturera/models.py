from django.db import models

# Create your models here.

from django.db import models

class Machine(models.Model):
    name = models.CharField(max_length=120, unique=True)

    def __str__(self):
        return self.name

class ProductionOrder(models.Model):
    marchine = models.ForeignKey(Machine, on_delete=models.PROTECT, related_name="production_orders")
    product_name = models.CharField(max_length=120)
    quantity = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )
    status = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return f"{self.marchine.nombre} {self.product_name}"