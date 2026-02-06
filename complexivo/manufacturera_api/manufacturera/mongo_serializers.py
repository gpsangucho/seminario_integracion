from rest_framework import serializers

class ServiceEventSerializer(serializers.Serializer):
    event_type = serializers.CharField(max_length=120)
    source = serializers.CharField(required=False, allow_blank=True)
    details = serializers.CharField(required=False, allow_blank=True)
    created_at = serializers.DateTimeField()

class OperationLogSerializer(serializers.Serializer):
    order_id = serializers.IntegerField()        # 
    system_event_id = serializers.CharField()       # 
    machine_id = serializers.IntegerField()  
    meta = serializers.CharField(required=False, allow_blank=True)
    level = serializers.CharField(required=False, allow_blank=True)
    message = serializers.CharField(required=False, allow_blank=True)
    create_at =serializers.DateTimeField()
    
    
    
