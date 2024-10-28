import request from "supertest";
import server from "../../server";

describe("Post api/products", () => {
  it("Should displya validation errors", async () => {
    const response = await request(server).post("/api/product").send({});
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
  });

  it("should validate price", async () => {
    const response = await request(server).post("/api/product").send({
      name: "mouse",
      price: 0,
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
  });

  it("should create a new product", async () => {
    const response = await request(server).post("/api/product").send({
      name: "mouse",
      price: 50,
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");

    expect(response.status).not.toBe(404);
    expect(response.body).not.toHaveProperty("errors");
  });
});
describe("Get api/products", () => {
  it("get a json response with prodcuts", async () => {
    const response = await request(server).get("/api/product");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveProperty("data");
    expect(response.status).not.toBe(404);
    expect(response.body).not.toHaveProperty("errors");
  });
});
describe("Get api/products/id", () => {
  it("get a json response with prodcuts", async () => {
    const response = await request(server).get("/api/product/4");
    expect(response.status).toBe(200);
  });
  it("validate errors", async () => {
    const response = await request(server).get("/api/product/2");
    expect(response.status).toBe(404);
  });
});
describe("patch api/products/id", () => {
  it("should display validation error messages when updating a product", async () => {
    const response = await request(server).patch("/api/product/4").send({
      name: "Monitor curvo",
      price: 30,
      availability: true,
    });
    expect(response.status).toBe(200);
  });

  it("Validate errores", async () => {
    const response = await request(server).put("/api/product/4").send({});
    expect(response.status).toBe(400);
  });
  it("Validate bad link", async () => {
    const response = await request(server).put("/api/producst/4").send({});
    expect(response.status).toBe(404);
  });
});
describe("Put api/products/id", () => {
  it("should display validation error messages when updating a product", async () => {
    const response = await request(server).put("/api/product/4").send({
      name: "Monitor curvo",
      price: 300,
      availability: true,
    });
    expect(response.status).toBe(200);
  });

  it("Validate errores", async () => {
    const response = await request(server).put("/api/product/4").send({});
    expect(response.status).toBe(400);
  });
  it("Validate bad link", async () => {
    const response = await request(server).put("/api/producst/4").send({});
    expect(response.status).toBe(404);
  });
});
describe("Delete api/products/id", () => {
  it("should display validation  when deleting a product", async () => {
    const response = await request(server).delete("/api/product/3");
    expect(response.status).toBe(200);
  });

  it("Validate errores", async () => {
    const response = await request(server).put("/api/product/2");
    expect(response.status).toBe(400);
  });
  it("Validate bad link", async () => {
    const response = await request(server).put("/api/producst/4");
    expect(response.status).toBe(404);
  });
});
