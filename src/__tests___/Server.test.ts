import request from "supertest"
import server from "../server"

describe('Get/Api', () => { 
    it("should send back a json response",async ()=>{
        const res=await request(server).get("/api/product")
        expect(res.status).toBe(200)
        
    })
 })