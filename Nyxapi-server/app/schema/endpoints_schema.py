from pydantic import BaseModel, EmailStr, Json

class Endpoints(BaseModel):
    Endpoint: str
    Projectid: int
    Apitype: Json
    Payload: Json