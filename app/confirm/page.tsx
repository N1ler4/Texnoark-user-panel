"use client";
import React from "react";
import Container from "@/components/container/page";
import { Form, Input, Radio, Select, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Swiper from "@/components/swiper/page";
import "./style.css";

const { Option } = Select;

const handleSubmit = (values: any) => {
  console.log("Form Values:", values);
};

export default function Page() {
  return (
    <>
      <Container>
        <div className="flex gap-3 mt-5">
          <div className="px-[18px] py-[8px] rounded-md text-[#240E0066] bg-[#F5F5F5] grid justify-center items-center">
            Bosh sahifa
          </div>
          <div className="px-[18px] py-[8px] rounded-md text-[#240E0066] bg-[#F5F5F5] grid justify-center items-center">
            Smartfonlar
          </div>
          <div className="px-[18px] py-[8px] rounded-md text-[#240E00CC] bg-[#FFFFFF] grid justify-center items-center">
            Xaridni rasmiylashtirish
          </div>
        </div>
      </Container>
      <Container>
        <div className="w-full flex mt-[30px] justify-between items-start">
          <div className="w-[900px] bg-white rounded-lg">
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              style={{
                width: "100%",
                margin: "auto",
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "space-between",
                }}
              >
                <Form.Item
                  label="Telefon raqam"
                  name="phoneNumber"
                  className="w-[400px]"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore="+998"
                    placeholder="Phone Number"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label="Ism/Familiya"
                  name="name"
                  className="w-[400px]"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input placeholder="Name" size="large" />
                </Form.Item>
              </div>

              <Form.Item
                name="deliveryOption"
                rules={[
                  {
                    required: true,
                    message: "Please select a delivery option!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="storePickup">Do'kondan olib ketish</Radio>
                  <Radio value="homeDelivery">
                    Xaridingizni uyingizga yetkazib berish
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "space-between",
                }}
              >
                <Form.Item
                  label="Viloyat"
                  name="region"
                  className="w-[400px]"
                  rules={[
                    { required: true, message: "Please select your region!" },
                  ]}
                >
                  <Select placeholder="Surxondaryo viloyati" size="large">
                    <Option value="surxondaryo">Surxondaryo viloyati</Option>
                    <Option value="tashkent">Toshkent viloyati</Option>
                    {/* Add more options as needed */}
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Tuman"
                  name="district"
                  className="w-[400px]"
                  rules={[
                    { required: true, message: "Please select your district!" },
                  ]}
                >
                  <Select placeholder="Denov tumani" size="large">
                    <Option value="denov">Denov tumani</Option>
                    <Option value="chirchiq">Chirchiq tumani</Option>
                    {/* Add more options as needed */}
                  </Select>
                </Form.Item>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Form.Item
                  label="Aniq manzil / Mahalla/Ko'changiz"
                  name="address"
                  className="w-[560px]"
                  rules={[
                    { required: true, message: "Please enter your address!" },
                  ]}
                >
                  <Input
                    placeholder="Tinchlik mahallasi Yashilik 1-ko'chasi 12-uy"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label="Yetkazib berish vaqti"
                  className="w-[241px]"
                  name="deliveryTime"
                  rules={[
                    { required: true, message: "Please enter delivery time!" },
                  ]}
                >
                  <Input placeholder="01/24" size="large" />
                </Form.Item>
              </div>

              <Form.Item
                name="paymentMethod"
                label="To'lov usuli"
                rules={[
                  {
                    required: true,
                    message: "Please select a payment method!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="cash">Naqd yetkazgandan so'ng to'lash</Radio>
                  <Radio value="card">Karta orqali (Humo/Uzcard/Visa)</Radio>
                  <Radio value="installment">
                    Muddatli to'lov (4/6/12/24 oyga)
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name="installmentPlan"
                label="Muddatli to'lov rejalari"
              >
                <Radio.Group className="flex items-center">
                  <Radio value="4">4 oy</Radio>
                  <Radio value="6">6 oy</Radio>
                  <Radio value="12">12 oy</Radio>
                  <Radio value="24">24 oy</Radio>
                </Radio.Group>
                <div style={{ marginTop: "8px", fontWeight: "bold" }}>
                  6 oy / oyiga 6 879 789 so'mdan
                </div>
              </Form.Item>

              <div style={{ display: "flex", gap: "16px" }}>
                <Form.Item
                  label="Pasport bilan selfy"
                  valuePropName="fileList"
                  getValueFromEvent={(e) => e.fileList}
                >
                  <Upload action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  label="Pasportning old tomoni"
                  valuePropName="fileList"
                  getValueFromEvent={(e) => e.fileList}
                >
                  <Upload action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                </Form.Item>
              </div>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ background: "#d55200", border: "#d55200" }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="w-[440px] bg-white h-[278px] rounded-lg p-[40px] flex flex-col justify-between">
            <h1 className="text-[#331400] font-bold text-[24px]">
              Sizni haridlaringiz
            </h1>
            <p className="text-[#240E00CC]">
              Mahsulotlar;{" "}
              <span className="text-[#331400] text-[18px] font-bold">6 ta</span>
            </p>
            <p className="text-[#240E00CC]">
              Jami summa;{" "}
              <span className="text-[#331400] text-[28px] font-bold">
                56 778 678 so‘m
              </span>
            </p>
            <Button
              type="primary"
              style={{ background: "#F0F0F0", border: "#F0F0F0" }}
              className="w-full h-[40px]"
            >
              Xaridni rasmiylashtirish
            </Button>
          </div>
        </div>
      </Container>
      <div className="mt-[60px]">
        <Container>
          <h1 className="font-bold text-[32px] mb-[24px]">
            Aksiyadagi mahsulotlar
          </h1>
          <Swiper />
        </Container>
      </div>
    </>
  );
}
